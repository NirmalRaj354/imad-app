console.log('Loaded!');

//change the text of the main-text div

var element = document.getElementById('main-text');

element.innerHTML = 'New value';

//move the image
var img = document.getElementById('maddy');
img.oncliclk = function() {
  img.style.marginLeft = '500px';
 
};