function changePowerDark() {
    // Get all image elements
    var images = document.getElementsByTagName('img');
    
    // Loop through each image element
    for (var i = 0; i < images.length; i++) {
        // Check if the src attribute matches "./images/startbuttons/power.svg"
        if (images[i].getAttribute('src') === './images/startbuttons/power.svg') {
            // Change the src attribute to "./images/startbuttons/powerdark.svg"
            images[i].setAttribute('src', './images/startbuttons/powerdark.svg');
        }
    }
}