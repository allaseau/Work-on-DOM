let randomHslColorBg = () => {
    let h = Math.floor(Math.random() * 360);
    let s = Math.floor(Math.random() * 100);
    let l = Math.floor(Math.random() * 100);
    return `hsl(${h}, ${s}%, ${l}%)`;
}

let blackOrWhiteTxt = (bgColor) => {
    let hsl = bgColor.split('(')[1].split(')')[0].split(',');
    let h = parseInt(hsl[0]);
    let s = parseInt(hsl[1]);
    let l = parseInt(hsl[2]);
    if (l < 50) {
        return 'white';
    } else {
        return 'black';
    }
}

let article = document.querySelector('article');
let learners = ['Tanguy','Kevin','Mariya','Antoine','Latifa','Melih','Sebastien'];
let shuffle = learners
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)

for (let i = 0; i < learners.length; i++) {
    let newSection = document.createElement('section');
    let newP = document.createElement('p');
    let newText = document.createTextNode('');
    let newText2 = document.createTextNode(shuffle[i]);
    let newColor = randomHslColorBg();
    let textColor = blackOrWhiteTxt(newColor);
    newSection.style.backgroundColor = newColor;
    newP.style.color = textColor;
    newP.appendChild(newText2);
    newSection.style.color = textColor;
    newSection.appendChild(newP);
    newSection.appendChild(newText);
    article.appendChild(newSection);
};
