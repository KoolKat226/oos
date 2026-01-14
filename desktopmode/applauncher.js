<!-- APP LAUNCHING CODE -->

<style>
.iframe-wrapper {
  position: fixed;
  left:15%;
  top: 2%;
  width: 70%; /* Adjust the initial width as desired */
  height: 75%; /* Adjust the initial height as desired */
  border: 0px solid #ccc;
  overflow: hidden;
    transform: scale(.3);
transition: transform 0.3s ease;
}

  .iframe-wrapper.scaling-up {
    transform: scale(1); /* Adjust the scale value to make it bigger */
transition: transform 0.2s ease;
  }

.iframe-wrapper.fullscreen {
  width: 100vw;
  height: 100vh;
  border-radius: 0;
  left: 0;
  top: 0;
transition: .2s;
}

  .iframe-wrapper.exitfullscreen {
transition: .2s;
}

.iframe-wrapper .ui-resizable-handle {
  position: absolute;
  width: 8px;
  height: 8px;
  background-color: #fff;
  border: 1px solid #000;
}

.iframe-wrapper.fullscreen .ui-resizable-handle {
  pointer-events: none;
}

.iframe-wrapper.fullscreen .iframe-drag-bar {
  pointer-events: none;
}


.iframe-wrapper .ui-resizable-e {
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  cursor: e-resize;
  height:100%;
  opacity: 0;
}

.iframe-wrapper .ui-resizable-w {
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  cursor: e-resize;
  height:100%;
  opacity: 0;
}

.iframe-wrapper .ui-resizable-se {
  right: 0;
  bottom: 0;
  cursor: se-resize;
  opacity: 0;
}

.iframe-wrapper .ui-resizable-s {
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  cursor: s-resize;
  width:100%;
  opacity: 0;
}

.iframe-drag-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 30px; /* Adjust the height as desired */
  cursor: move;
  z-index:100;
  transition: background .4s;
  transition: .3s;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background:rgba(217, 217, 217,0);
}

.iframe-drag-bar:hover {
  background:rgba(217, 217, 217,.6);
  backdrop-filter: saturate(180%) blur(14px);
  transition: background .4s;
}

.iframe-option-bar {
  position: absolute;
  top: 7px;
  right: 22px;
  width: 15px;
  height: 15px; /* Adjust the height as desired */
  border-radius: 50%;
  cursor: pointer;
  z-index:101;
  transition: background .4s;
  transition: .3s;
  background:rgba(138, 138, 138,.6);
  backdrop-filter: saturate(180%) blur(14px);
}

.iframe-option-bar:hover {
  background:rgba(255, 202, 128,.6);
transform: scale(1.2);
}

.iframe-option-bar:focus {
  background:rgba(255, 202, 128,.6);
transform: scale(.8);
}

.iframe-icon {
  position: absolute;
  top: 5px;
  left: 22px;
  width: 20px;
  height: 20px; /* Adjust the height as desired */
  border-radius: 50%;
  cursor: pointer;
  z-index:101;
  pointer-events: none;
  transition: background .4s;
  transition: .3s;
}

.appiframe {
  border-radius: 30px;
  backdrop-filter: saturate(180%) blur(14px);
}

.fullscreen-button {
  position: absolute;
  top: 7px;
  right: 47px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 101;
  transition: background .4s;
  transition: .3s;
  background: rgba(138, 138, 138, .6);
  backdrop-filter: saturate(180%) blur(14px);
}

.fullscreen-button:hover {
  background: rgba(165, 207, 202, .6);
transform: scale(1.2);
}

.fullscreen-button:focus {
  background: rgba(165, 207, 202, .6);
transform: scale(.5);
}

.iframe-wrapper.fullscreen .iframe-drag-bar {
  border-radius: 0;
}

.iframe-wrapper.fullscreen .appiframe {
  border-radius: 0;
}

.iframe-wrapper.fullscreen .iframe-drag-bar {
  border-radius: 0;
}

  .iframe-wrapper.fullscreen {
    width: 100vw;
    height: 100vh;
    border-radius: 0;
    left: 0;
    top: 0;
  }

  .mainwindow {
z-index:9999999999999999;
  }

</style>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://code.jquery.com/ui/1.13.0/jquery-ui.min.js"></script>

<div style="display:none" style="z-index: 9999999;">
  <button style="display:none" onclick="document.getElementById('iframeNameInput').value ='bingchilling';document.getElementById('iframeURLInput').value ='https://wikepedia.org';createIframe();">Create Iframe</button>
  <input style="display:none" type="text" id="iframeNameInput" placeholder="Enter iframe name">
  <input style="display:none" type="text" id="iframeIconInput" placeholder="Enter iframe icon">
  <input style="display:none" type="text" id="iframeURLInput" placeholder="Enter iframe URL">
</div>
<div style="z-index: 9994; position:absolute" id="iframeContainer">
</div>


</div>
<div style="display:none;" class="randomcrapfortheming">
  <button style="" id="button2" class="popup" onclick="myFunction()">Install</button></a>
  <cheese id="app-iframe" frameBorder="0" style="display: none; border-radius:30px;"></cheese>
  <ul id="app-list"></ul>

</div>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="https://code.jquery.com/ui/1.13.0/jquery-ui.min.js"></script>

<script>
var zIndexCounter = 1;

  var iframeName = document.getElementById("iframeNameInput").value;
var navbar = document.getElementById("navbar").value;
function createIframe() {
  closestartFunction();
  var iframeWrapper = document.createElement("div");
  iframeWrapper.classList.add("iframe-wrapper"); // Add the "scaling-up" class
iframeWrapper.style.zIndex = zIndexCounter++;
  iframeContainer.appendChild(iframeWrapper);

    var iframeDragBar = document.createElement("div");
    iframeDragBar.classList.add("iframe-drag-bar");
    iframeWrapper.appendChild(iframeDragBar);

    var iframenamevalue = document.getElementById('iframeNameInput').value;
    var inputValue = iframenamevalue.value;

    var iframeIcon = document.getElementById("iframeIconInput").value;

    if (iframeIcon) {
      var iframeIconElement = document.createElement("img");
      iframeIconElement.classList.add("iframe-icon");
      iframeIconElement.src = iframeIcon;
      iframeWrapper.appendChild(iframeIconElement);
    }

  setTimeout(function() {
    iframeWrapper.classList.add("scaling-up");
  }, 10);

    var iframeOptionBar = document.createElement("div");
    iframeOptionBar.classList.add("iframe-option-bar");
    iframeOptionBar.setAttribute('onclick', "removeIframeWrapper(this);");
    iframeOptionBar.setAttribute('tabindex', "0");
    iframeWrapper.appendChild(iframeOptionBar);

    var fullscreenButton = document.createElement("div");
    fullscreenButton.classList.add("fullscreen-button");
    fullscreenButton.setAttribute('tabindex', "0");
    fullscreenButton.setAttribute('onclick', "toggleFullscreen(this);");
  fullscreenButton.addEventListener('mouseout', () => {
    fullscreenButton.blur(); 
  });


  fullscreenButton.addEventListener('click', () => {
    fullscreenButton.focus();
  });
    iframeWrapper.appendChild(fullscreenButton);

    var div = document.createElement("div");
    document.body.appendChild(div);
    div.innerHTML = `
      <div style="z-index:9999999999999;" onclick="removeIframeWrapper(this);"></div>
    `;
    document.body.appendChild(div);

    var iframeURL = document.getElementById("iframeURLInput").value;

    var iframe = document.createElement("iframe");
    iframe.src = iframeURL; // Replace with the desired URL
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.classList.add("appiframe");
    iframe.frameBorder = "0";
    iframe.setAttribute("allowfullscreen", "");
    iframeWrapper.appendChild(iframe);

    $(iframeWrapper).resizable({
      handles: "e, s, w, se", // Enable resizing on the east, southeast, and south edges
      resize: function(event, ui) {
        var newWidth = ui.size.width;
        var newHeight = ui.size.height;
        iframe.style.width = newWidth + "px";
        iframe.style.height = newHeight + "px";
      }
    });

    makeDraggable(iframeWrapper);
  }

  function makeDraggable(element) {
    var isDragging = false;
    var mouseOffset = { x: 0, y: 0 };

    element.addEventListener("mousedown", function(event) {
      if (event.target.classList.contains("iframe-drag-bar")) {
        // Bring the clicked iframe to the top
        var iframes = document.querySelectorAll(".iframe-wrapper");
        var clickedIframe = event.target.closest(".iframe-wrapper");
        for (var i = 0; i < iframes.length; i++) {
          iframes[i].style.zIndex = 1; // Move all iframes to the background
        }
        clickedIframe.style.zIndex = 2; // Bring the clicked iframe to the top

        isDragging = true;
        mouseOffset.x = event.clientX - element.offsetLeft;
        mouseOffset.y = event.clientY - element.offsetTop;
      }
    });

    document.addEventListener("mousemove", function(event) {
      if (isDragging) {
        element.style.left = event.clientX - mouseOffset.x + "px";
        element.style.top = event.clientY - mouseOffset.y + "px";
      }
    });

    document.addEventListener("mouseup", function() {
      isDragging = false;
    });
  }

  function removeIframeWrapper(element) {
  var iframeWrapper = element.parentNode;
  iframeWrapper.style.transition = "transform 0.3s ease"; // Add a smooth transition for scaling-out
  iframeWrapper.style.transform = "scale(0)"; // Scale-out to 80% of its original size
    document.getElementById("navbar").classList.remove('navbarfullscreen');
    document.getElementById("navbar").classList.add('navbar');

  // Delay the removal of the iframe wrapper by 300 milliseconds (adjust as needed)
  setTimeout(function() {
    iframeWrapper.remove();
  }, 300);
}

function toggleFullscreen(element) {
  var iframeWrapper = element.parentNode;
  var iframe = iframeWrapper.querySelector("iframe");
  var dragBar = iframeWrapper.querySelector(".iframe-drag-bar");
  var resizableHandles = iframeWrapper.querySelectorAll(".ui-resizable-handle");

  if (!iframeWrapper.classList.contains("fullscreen")) {
    var prevPosition = {
      left: iframeWrapper.style.left,
      top: iframeWrapper.style.top,
      borderRadius: iframe.style.borderRadius,
      pointerEvents: getComputedStyle(dragBar).pointerEvents,
    };

    var prevSize = {
      width: iframe.style.width,
      height: iframe.style.height
    };

    iframeWrapper.classList.add("fullscreen");
    document.getElementById("navbar").classList.add('navbarfullscreen');
    iframeWrapper.style.left = "0";
    iframeWrapper.style.top = "0";
    iframe.style.borderRadius = "0";
    dragBar.style.borderRadius = "0";
    dragBar.style.pointerEvents = "none";

    for (var i = 0; i < resizableHandles.length; i++) {
      resizableHandles[i].style.pointerEvents = "none";
    }

    var exitFullscreenButton = document.createElement("div");
    exitFullscreenButton.classList.add("exit-fullscreen-button");
    exitFullscreenButton.setAttribute("onclick", "exitFullscreen(this);");
    iframeWrapper.appendChild(exitFullscreenButton);

    // Store the previous position, border radius, and pointer events in data attributes for reference when exiting fullscreen
    iframeWrapper.dataset.prevPosition = JSON.stringify(prevPosition);

    // Store the previous size in data attributes for reference when exiting fullscreen
    iframeWrapper.dataset.prevSize = JSON.stringify(prevSize);

    // Set the iframe wrapper size to fill the screen
    iframeWrapper.style.width = "100vw";
    iframeWrapper.style.height = "100vh";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframeWrapper.classList.add("exitfullscreen");
    setTimeout(function() {
    iframeWrapper.classList.remove("exitfullscreen");
}, 800);
  } else {
    iframeWrapper.classList.remove("fullscreen");
    document.getElementById("navbar").classList.remove('navbarfullscreen');
    document.getElementById("navbar").classList.add('navbar');

    var exitFullscreenButton = iframeWrapper.querySelector(".exit-fullscreen-button");
    exitFullscreenButton.remove();

   // Reset to the default/original state
    iframeWrapper.style.left = "";
    iframeWrapper.style.top = "";
    iframe.style.borderRadius = "";
    dragBar.style.borderRadius = "";
    dragBar.style.pointerEvents = "";

    for (var i = 0; i < resizableHandles.length; i++) {
      resizableHandles[i].style.pointerEvents = "";
    }

    iframeWrapper.style.width = "";
    iframeWrapper.style.height = "";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
  }
}



</script>
<script>
var zIndexCounter = 1;

function createFullscreenIframe() {
closestartFunction();
    document.getElementById("navbar").classList.add('navbarfullscreen');
  var iframeWrapper = document.createElement("div");
  iframeWrapper.classList.add("iframe-wrapper");
  iframeWrapper.classList.add("fullscreen"); // Add the fullscreen class
iframeWrapper.style.zIndex = zIndexCounter++;
  iframeContainer.appendChild(iframeWrapper);

  setTimeout(function() {
    iframeWrapper.classList.add("scaling-up");
  }, 10);

  var iframeDragBar = document.createElement("div");
  iframeDragBar.classList.add("iframe-drag-bar");
  iframeWrapper.appendChild(iframeDragBar);

  var iframeIcon = document.getElementById("iframeIconInput").value;

  if (iframeIcon) {
    var iframeIconElement = document.createElement("img");
    iframeIconElement.classList.add("iframe-icon");
    iframeIconElement.src = iframeIcon;
    iframeWrapper.appendChild(iframeIconElement);
  }

  var iframeOptionBar = document.createElement("div");
  iframeOptionBar.classList.add("iframe-option-bar");
  iframeOptionBar.setAttribute('tabindex', "0");
  iframeOptionBar.setAttribute("onclick", "removeIframeWrapper(this);");
  iframeWrapper.appendChild(iframeOptionBar);

  var fullscreenButton = document.createElement("div");
  fullscreenButton.classList.add("fullscreen-button");
  fullscreenButton.setAttribute('tabindex', "0");
  fullscreenButton.addEventListener('mouseout', () => {
    fullscreenButton.blur(); 
  });


  fullscreenButton.addEventListener('click', () => {
    fullscreenButton.focus();
  });
  fullscreenButton.setAttribute("onclick", "toggleFullscreen(this);");
  iframeWrapper.appendChild(fullscreenButton);

  var div = document.createElement("div");
  document.body.appendChild(div);
  div.innerHTML = `
    <div style="z-index:9999999999999;" onclick="removeIframeWrapper(this);"></div>
  `;
  document.body.appendChild(div);

  var iframeURL = document.getElementById("iframeURLInput").value;

  var iframe = document.createElement("iframe");
  iframe.src = iframeURL;
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.classList.add("appiframe");
  iframe.frameBorder = "0";
  iframe.setAttribute("allowfullscreen", "");
  iframeWrapper.appendChild(iframe);

$(iframeWrapper).resizable({
  handles: "e, s, w, se",
  resize: function(event, ui) {
    var newWidth = ui.size.width;
    var newHeight = ui.size.height;
    iframe.style.width = "100%"; // Set width to 100% to fill the container
    iframe.style.height = "100%"; // Set height to 100% to fill the container
  },
  stop: function(event, ui) {
    var wrapperWidth = $(iframeWrapper).width();
    var wrapperHeight = $(iframeWrapper).height();
    iframe.style.width = wrapperWidth + "px"; // Set width explicitly to match container size
    iframe.style.height = wrapperHeight + "px"; // Set height explicitly to match container size
  }
});


  makeDraggable(iframeWrapper);
}

</script>


<!-- END APP LAUNCHING CODE -->