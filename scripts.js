/*****************************/
/****** By Turgut Yavuz ******/
/*****************************/

var color = 'green';
var patternSize = 32;
var radius = '0';

const container = document.querySelector('#container');
const colors = document.querySelectorAll('.colors');
const clear = document.querySelector('#clear');
const pSize = document.querySelectorAll('.p-size');

//-Add-Patterns--------------->
function patternize() {
  for (let i = 0; i < patternSize ** 2; i++) {
    let e = document.createElement('div');
    e.setAttribute('id', i);
    e.addEventListener('mouseover', function() {
      e.style.backgroundColor = color;
    });
    e.style.borderRadius = radius;
    e.style.transition = 'all 0.2s ease';
    container.append(e);
  }
}

patternize();

//-Remove-Patterns-------------->
function removePatterns() {
  let len = container.children.length;
  for (let i = 0; i < len; i++) {
    container.firstElementChild.remove();
  }
}

//-Add-event-listeners-to-colors------------->
for (let i = 0; i < colors.length; i++) {
  colors[i].addEventListener('click', function() {
    color = colors[i].id;
  });
}

//-Handle-Pattern-Shape------------->
document.querySelector('#pattern-shape').addEventListener('click', function() {
  this.classList.toggle('circle');
  radius === '50%' ? (radius = '0') : (radius = '50%');
  for (let i = 0; i < container.children.length; i++) {
    container.children[i].style.borderRadius = radius;
  }
});

//-Clear-Drawing-Area------------->
clear.addEventListener('click', clearSketch);

function clearSketch() {
  for (let i = 0; i < container.children.length; i++) {
    container.children[i].style.backgroundColor = 'white';
  }
}

//-Handle-Pattern-Size------------>
for (let i = 0; i < pSize.length; i++) {
  pSize[i].addEventListener('click', function() {
    for (let i = 0; i < pSize.length; i++) {
      pSize[i].classList.remove('p-size-border');
    }
    this.classList.add('p-size-border');
    patternSize = parseInt(this.id);
    removePatterns();
    container.style.gridTemplateColumns = `repeat(${patternSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${patternSize}, auto)`;
    patternize();
  });
}
