function handleFileSelect(evt) {
  var files = evt.target.files; // FileList object

  // Loop through the FileList and render image files as thumbnails.
  for (var i = 0, f; f = files[i]; i++) {

    // Only process image files.
    if (!f.type.match('image.*')) {
      continue;
    }

    var reader = new FileReader();

    // Closure to capture the file information.
    reader.onload = (function(theFile) {
      return function(e) {
        // Render thumbnail.
        var span = document.createElement('span');
        span.innerHTML = ['<img class="wallpaper" src="', e.target.result,
                          '" title="', escape(theFile.name), '"/>'].join('');
          
        document.getElementById('wallpaper').insertBefore(span, null);
        localStorage.setItem('wallpaper', e.target.result);

        // Open the new window after the file has been uploaded
        window.open('../system/wallpaper.html', 'ovalwallpaper');
      };
    })(f);

    // Read in the image file as a data URL.
    reader.readAsDataURL(f);
  }
}

document.getElementById('wallpaperfiles').addEventListener('change', handleFileSelect, false);


if(localStorage.wallpaper) { 

   var div = document.createElement('div');
    div.innerHTML += ['<img class="wallpaper" src="', localStorage.wallpaper,
                      '" title=""/>'].join('');

    document.getElementById('wallpaper').insertBefore(div, null);

}
