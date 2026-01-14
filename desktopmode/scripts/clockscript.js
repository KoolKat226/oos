class ClockBackground {
  constructor({ ctx, width, height, color, waveCount, amplitudeRadius }) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.ctx.canvas.width = this.width;
    this.ctx.canvas.height = this.height;
    this.color = color;
    this.ctx.fillStyle = color;
    this.waveCount = waveCount;
    this.amplitudeRadius = amplitudeRadius;
    window.addEventListener("resize", this.onResize.bind(this));
    this.draw();
  }

  onResize() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.width = this.ctx.canvas.clientWidth;
    this.height = this.ctx.canvas.clientHeight;
    this.ctx.canvas.width = this.width;
    this.ctx.canvas.height = this.height;
    this.draw();
  }

  draw() {
    const radius = Math.min(this.width / 2, this.height / 2);

    this.ctx.beginPath();
    for (let i = 0; i <= 360; i++) {
      const angle = ((Math.PI * 2) / 360) * i;

      const amplitude =
        radius -
        Math.sin(angle * this.waveCount + (Math.PI / 180) * 90) *
          radius *
          this.amplitudeRadius -
        radius * this.amplitudeRadius;

      const x = this.width / 2 + Math.cos(angle) * amplitude;
      const y = this.height / 2 + Math.sin(angle) * amplitude;

      i === 0 ? this.ctx.moveTo(x, y) : this.ctx.lineTo(x, y);
    }
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
  }
}

class AnalogClock {
  constructor({ ctx, width, height, drawArrows }) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.drawArrows = drawArrows;
    this.ctx.canvas.width = this.width;
    this.ctx.canvas.height = this.height;
    this.updateInterval = 1000 / 60;
    this.updateTimer = 0;
    this.lastUpdateTime = 0;
    this.animation = null;
    window.addEventListener("resize", this.onResize.bind(this));
  }

  onResize() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.width = this.ctx.canvas.clientWidth;
    this.height = this.ctx.canvas.clientHeight;
    this.ctx.canvas.width = this.width;
    this.ctx.canvas.height = this.height;
    this.animate();
  }

  update() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const angle = Math.PI / 2;

    this.drawArrows({
      ctx: this.ctx,
      hoursAngle: (hours / 12) * Math.PI * 2 - angle,
      minutesAngle: (minutes / 60) * Math.PI * 2 - angle,
      secondsAngle: (seconds / 60) * Math.PI * 2 - angle,
      radius: Math.min(this.width / 2, this.height / 2)
    });
  }

  animate(timeStamp = 0) {
    const deltaTime = timeStamp - this.lastUpdateTime;
    this.lastUpdateTime = timeStamp;

    if (this.updateTimer > this.updateInterval) {
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.update();
      this.updateTimer = 0;
    } else {
      this.updateTimer += deltaTime;
    }

    this.animation = requestAnimationFrame(this.animate.bind(this));
  }

  cancelAnimation() {
    if (this.animation) {
      cancelAnimationFrame(this.animation);
      this.animation = 0;
    }
  }
}

const CLOCK_BG_COLOR = `rgb(255, 243, 255)`;

const CLOCK_BG_OPTIONS = [
  {
    waveCount: 4,
    amplitudeRadius: 0.15,
    drawArrows: ({ ctx, hoursAngle, minutesAngle, secondsAngle, radius }) => {
      ctx.beginPath();
      ctx.moveTo(radius, radius);
      ctx.lineTo(
        radius + Math.cos(hoursAngle) * radius * 0.55,
        radius + Math.sin(hoursAngle) * radius * 0.55
      );
      ctx.lineWidth = 20;
      ctx.lineCap = "round";
      ctx.strokeStyle = "rgb(54, 73, 84)";
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(radius, radius);
      ctx.lineTo(
        radius + Math.cos(minutesAngle) * radius * 0.8,
        radius + Math.sin(minutesAngle) * radius * 0.8
      );
      ctx.lineWidth = 5;
      ctx.lineCap = "round";
      ctx.strokeStyle = "rgb(56, 126, 157)";
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(radius, radius);
      ctx.lineTo(
        radius + Math.cos(secondsAngle) * radius * 0.82,
        radius + Math.sin(secondsAngle) * radius * 0.82
      );
      ctx.lineWidth = 1;
      ctx.lineCap = "square";
      ctx.strokeStyle = "rgb(118, 114, 150)";
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(radius, radius, 5, 0, 2 * Math.PI);
      ctx.fillStyle = "rgb(118, 114, 150)";
      ctx.fill();
    }
  },
  {
    waveCount: 12,
    amplitudeRadius: 0.04,
    drawArrows: ({ ctx, hoursAngle, minutesAngle, secondsAngle, radius }) => {
      ctx.beginPath();
      ctx.moveTo(radius, radius);
      ctx.lineTo(
        radius + Math.cos(minutesAngle) * (radius * 0.65 - 15),
        radius + Math.sin(minutesAngle) * (radius * 0.65 - 15)
      );
      ctx.lineWidth = 20;
      ctx.lineCap = "round";
      ctx.strokeStyle = "rgb(56, 126, 157)";
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(radius, radius);
      ctx.lineTo(
        radius + Math.cos(hoursAngle) * radius * 0.35,
        radius + Math.sin(hoursAngle) * radius * 0.35
      );
      ctx.lineWidth = 20;
      ctx.lineCap = "round";
      ctx.strokeStyle = "rgb(54, 73, 84)";
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(
        radius + Math.cos(secondsAngle) * radius * 0.8,
        radius + Math.sin(secondsAngle) * radius * 0.8,
        12,
        0,
        2 * Math.PI
      );
      ctx.fillStyle = "rgb(118, 114, 150)";
      ctx.fill();
    }
  }
];

window.addEventListener("load", () => {
  document.querySelectorAll(".clock").forEach((e, i) => {
    const canvas = e.querySelector("canvas");
    const ctx = canvas.getContext("2d");
    const { waveCount, amplitudeRadius, drawArrows } = CLOCK_BG_OPTIONS[i];
    const clockBg = new ClockBackground({
      ctx: ctx,
      width: e.clientWidth,
      height: e.clientHeight,
      color: CLOCK_BG_COLOR,
      waveCount: waveCount,
      amplitudeRadius: amplitudeRadius
    });
    const secondCanvas = document.createElement("canvas");
    secondCanvas.width = e.clientWidth;
    secondCanvas.height = e.clientHeight;
    e.appendChild(secondCanvas);
    const secondCtx = secondCanvas.getContext("2d");
    const analogClock = new AnalogClock({
      ctx: secondCtx,
      width: secondCanvas.clientWidth,
      height: secondCanvas.clientHeight,
      drawArrows: drawArrows
    });
    analogClock.animate();
  });
});
