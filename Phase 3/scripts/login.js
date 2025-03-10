var loginInfo = [
    {
        email: "shlok@gmail.com",
        password: "shlok123"
    },
    {
        email: "bhagya@gmail.com",
        password: "bhag111"
    }
];

function getInfo(event) {
    var email = document.getElementById('emailInput').value;
    var password = document.getElementById('passwordInput').value;

    for (var i = 0; i < loginInfo.length; i++) {
        if (email == loginInfo[i].email && password == loginInfo[i].password) {
            console.log(email + " is logged in!!!");
            location.replace("./tracker.html");
            return;
        }
    }
    console.log("Incorrect email or password");
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