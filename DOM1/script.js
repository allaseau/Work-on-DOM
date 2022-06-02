document.title = "Modifying the DOM";
console.log(document.title);

random = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};
document.body.style.backgroundColor = random();

for (child of document.body.children) {
   console.log(child);
}
