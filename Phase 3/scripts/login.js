let loginInfo = JSON.parse(sessionStorage.getItem('loginInfo')) || [
    {
        name: "shlok",
        email: "shlok@gmail.com",
        password: "Shlok123."
    },
    {
        name: "bhagya vintanagay",
        email: "bhagyaisGoober@gmail.com",
        password: "bhag111??" 
    }
];

function addInfo(event) {
    let name = document.getElementById('nameInput').value;
    let email = document.getElementById('emailInput').value;
    let password = document.getElementById('passwordInput').value;

    if (name === "" || email === "" || password === "") {
        alert("One or more inputs are empty!");
        return;
    }

    for (let user of loginInfo) {
        if (user.email === email) {
            alert("This email is already registered.");
            return;
        }
    }

    loginInfo.push({name, email, password});

    loginInfo.forEach((user, index) => {console.log(`User ${index + 1}:`, user);});

    sessionStorage.setItem('loginInfo', JSON.stringify(loginInfo));

    location.replace("./login.html");
    alert("Signed Up Successfully");
}

function getInfo(event) {
    let email = document.getElementById('emailInput').value;
    let password = document.getElementById('passwordInput').value;

    loginInfo = JSON.parse(sessionStorage.getItem('loginInfo')) || [];

    for (let login of loginInfo) {
        if (email == login.email && password == login.password) {
            location.replace("./tracker.html");
            alert("Login Successful");
            return;
        }
    }
    alert("Incorrect email or password! Please try again.");
}

const showPassBox = document.getElementById('showPassBox');
const passwordInput = document.getElementById('passwordInput');

showPassBox.addEventListener('change', function() {
    if (showPassBox.checked) {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
});