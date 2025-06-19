// /oos/updatedata.js
(async () => {
  if (!navigator.onLine) return;

  // Parse stored version (fallback to 0)
  const stored = parseFloat(localStorage.getItem('oos_version') || '0');

  // Bump this number whenever you release a new offline build!
  const NEW_VERSION = 1.2;

  // If we already have this version (or newer), nothing to do
  if (stored >= NEW_VERSION) return;

  // Otherwise, save the new version
  localStorage.setItem('oos_version', NEW_VERSION.toString());

  // Show the popup
  const popup = document.createElement('div');
  popup.innerHTML = `
    <div style="
      position: fixed;
      font-family: 'Nunito Sans', sans-serif;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0,0,0,0.85);
      color: #fff;
      padding: 18px 28px;
      border-radius: 20px;
      font-family: sans-serif;
      text-align: center;
      box-shadow: 0 6px 18px rgba(0,0,0,0.4);
      z-index: 10000;
      max-width: 90%;
    ">
      <div style="font-size: 18px; font-family: 'Nunito Sans', sans-serif;">
        Updates Available
      </div>
      <div style="font-weight: 800; margin-top: 6px; font-size: 14px; font-family: 'Nunito Sans', sans-serif;">
        OOS 7 will restart in <span id="upd-timer">5</span> seconds…
      </div>
    </div>`;
  document.body.appendChild(popup);

  // Countdown + redirect
  let seconds = 5;
  const interval = setInterval(() => {
    seconds--;
    popup.querySelector('#upd-timer').textContent = seconds;
    if (seconds <= 0) {
      clearInterval(interval);
      window.location.href = './save.html';
    }
  }, 1000);
})();
