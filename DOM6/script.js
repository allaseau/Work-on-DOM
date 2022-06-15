var firstName = document.getElementById('firstname');
firstName.addEventListener('keyup', function (event) {
    var displayFirstName = document.getElementById('display-firstname');
    displayFirstName.innerHTML = firstName.value;
}
);

var passwordConfirmation = document.getElementById('pwd-confirm');
passwordConfirmation.addEventListener('keyup', function (event) {
    if (password.value !== passwordConfirmation.value) {
        passwordConfirmation.style.backgroundColor = 'red';
    } else {
        passwordConfirmation.style.backgroundColor = 'white';
    }
});

var password = document.getElementById('pwd');
password.addEventListener('keyup', function (event) {
    if (password.value.length < 6) {
        password.style.backgroundColor = 'red';
    } else {
        password.style.backgroundColor = 'white';
    }
});

var age = document.getElementById('age');
age.addEventListener('keyup', function (event) {
    var truth = document.getElementById('a-hard-truth');
    if (age.value >= 18) {
        truth.style.visibility = 'visible';
    } else {
        truth.style.visibility = 'hidden';
    }
});

addEventListener('change', function (event) {
    var select = document.getElementById('toggle-darkmode');
    if (select.value === 'dark') {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
}
);