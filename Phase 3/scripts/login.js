let loginInfo = [
    {
        name: "shlok",
        email: "shlok@gmail.com",
        password: "shlok123"
    },
    {
        name: "bhagya vintanagay",
        email: "bhagyaisGoober@gmail.com",
        password: "bhag111??" 
    }
];

function addInfo(event) {
    let name = document.getElementById('nameInput').value
    let email = document.getElementById('emailInput').value
    let password = document.getElementById('passwordInput').value

    loginInfo.push({name, email, password});
    console.log(loginInfo)
    location.replace("./login.html");
    alert("Signed Up Successfully")
}

function getInfo(event) {
    let email = document.getElementById('emailInput').value;
    let password = document.getElementById('passwordInput').value;

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