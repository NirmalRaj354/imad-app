console.log('Loaded!');

//change the text of the main-text div

var element = document.getElementById('main-text');

element.innerHTML = 'New value';

//move the image
var marginLeft = 0;
var img = document.getElementById('madi');
function moveRight (){
    marginLeft = marginLeft+1;
     img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function() {
    var interval = setInterval(moveRight,50);
 };