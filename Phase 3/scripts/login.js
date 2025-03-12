var loginInfo = [
    {
        name: "shlok",
        email: "shlok@gmail.com",
        password: "shlok123"
    },
    {
        name: "bhagya",
        email: "bhagya@gmail.com",
        password: "bhag111" 
    }
];

function addInfo(event) {
    var name = document.getElementById('nameInput').value
    var email = document.getElementById('emailInput').value
    var password = document.getElementById('passwordInput').value

    loginInfo.push({name, email, password});
    console.log(loginInfo)
}

function getInfo(event) {
    var email = document.getElementById('emailInput').value;
    var password = document.getElementById('passwordInput').value;

    for (var i = 0; i < loginInfo.length; i++) {
        if (email == loginInfo[i].email && password == loginInfo[i].password) {
            location.replace("./tracker.html");
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