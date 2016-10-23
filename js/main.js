
 document.addEventListener("DOMContentLoaded", function(event) { // Dom Content Loading

 	 console.log('DOM READY');

// --- menu li ---

var nav = document.querySelectorAll('#menu');


for(var i = 0; i < nav.length; i++) {
  nav[i].addEventListener('mouseover', function() {
    var li = this.querySelector('li');

    if(li !== null) {
      li.style.display = 'block';
    }
  })
}

for(var i = 0; i <nav.length; i++) {
  nav[i].addEventListener('mouseout', function () {
    var li = this.querySelector('li');

    if(li !== null) {
      li.style.display = "none";
    }
  })
}

 });
