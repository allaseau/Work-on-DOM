const list = document.getElementsByTagName("ul")[0].childNodes;

for (let i = 0; i < list.length; i++) {
    if (list[i].nodeType === 1) {
        if (list[i].textContent === 'Fast and Furious') {
            list[i].classList.add('important');
            if (i !== 0) {
                list[i].parentNode.insertBefore(list[i], list[0]);
            }
        }
    }
    if (list.length > 1) { 
        for (let i = 0; i < list.length; i++) {
            for (let j = i + 1; j < list.length; j++) {
                if (list[i].isEqualNode(list[j])) {
                    list[j].parentNode.removeChild(list[j]);
                }
            }
        }
    }
}

addEventListener('click', function(event) {
    if (event.target.textContent === 'Fast and Furious') {
        alert('The most important franchise ever, the story of DOM(inic) Toretto\'s family. It\'s not about car, it\'s about family.');
    }    if (event.target.tagName === 'LI') {
        alert(event.target.textContent);
    }
}
);

const newDiv = document.createElement('div');
document.body.insertBefore(newDiv, document.getElementsByTagName('ul')[0]);

const select = document.createElement('select');
newDiv.appendChild(select);

const option1 = document.createElement('option');
option1.textContent = 'Important Franchise';

const option2 = document.createElement('option');
option2.textContent = 'Normal Franchises';

select.appendChild(option1);
select.appendChild(option2);

select.addEventListener('change', function(event) {
    if (event.target.value === 'Important Franchise') {
        for (let i = 0; i < list.length; i++) {
            if (list[i].nodeType === 1) {
                if (list[i].classList.contains('important')) {
                    list[i].style.display = 'block';
                } else {
                    list[i].style.display = 'none';
                }
            }
        }
    } else {
        for (let i = 0; i < list.length; i++) {
            if (list[i].nodeType === 1) {
                if (list[i].classList.contains('important')) {
                    list[i].style.display = 'none';
                } else {
                    list[i].style.display = 'block';
                }
            }
        }
    }
}
);