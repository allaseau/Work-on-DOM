let ol = document.querySelector('ol');
let last = ol.lastElementChild;
let first = ol. firstElementChild;

ol.insertBefore(last, first);

const section = document.querySelectorAll('section');
const h2 = document.querySelectorAll('h2');

section[1].appendChild(h2[2]);
section[2].appendChild(h2[1]);

section[1].insertBefore(h2[2], section[1].firstElementChild);
section[2].insertBefore(h2[1], section[2].firstElementChild);

section[2].remove();
