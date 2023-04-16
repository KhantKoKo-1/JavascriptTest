const link = document.querySelector('a');

console.log(link.getAttribute('href'));
link.setAttribute('herf', 'http//www.khantkoko.com');
link.innerText = 'Khantkoko Website';

const mssg = document.querySelector('p');

console.log(mssg.getAttribute('class'));
mssg.setAttribute('class', 'success');
mssg.setAttribute('style', 'color: red;');