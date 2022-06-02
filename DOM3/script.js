let random = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};

let article = document.querySelector('article');
let learners = ['Tanguy','Kevin','Mariya','Antoine','Latifa','Melih','Sebastien'];

for(i=0; i<learners.length; i++){
    let newSection = document.createElement('section');
    let newArticle = document.createElement('article');
    let newP = document.createElement('p');
    let newText = document.createTextNode(learners[i]);
    let bgColor=random();
    newSection.style.backgroundColor = bgColor;
    newP.appendChild(newText);
    newArticle.appendChild(newP);
    newSection.appendChild(newArticle);
    article.appendChild(newSection);
};
