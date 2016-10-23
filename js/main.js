
 document.addEventListener("DOMContentLoaded", function(event) { // Dom Content Loading

 	 console.log('DOM READY');

// --- menu li ---

var nav = document.querySelectorAll('#pod_menu');


for(var i = 0; i < nav.length; i++) {
  nav[i].addEventListener('mouseover', function() {
    var ul = this.querySelector('ul');

    if(ul !== null) {
      ul.style.display = 'block';
    }
  })
}

for(var i = 0; i <nav.length; i++) {
  nav[i].addEventListener('mouseout', function () {
    var ul = this.querySelector('ul');

    if(ul !== null) {
      ul.style.display = "none";
    }
  })
}

 });


// --- section_1 hide text ---

var images = document.getElementsByClassName('section_1');

for(var i = 0; i < images.length; i++) {
  images[i].addEventListener('mouseover', function () {
    var text = this.querySelector('.text_hiden'); // --?-- dlaczego nie dziala z querySelectorAll dla wszystkich .text_hiden --!--
    text.style.display = 'none';
  })
}

for(var i = 0; i<images.length; i++) {
  images[i].addEventListener('mouseout', function () {
    var text = this.querySelector('.text_hiden');
    text.style.display= 'block';
  })
}
