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

let otp = -1
let name = "hi"
let email = "hi"
let password = "hi"
let loginedIn = 0

function makeOTP(event) {
    name = document.getElementById('nameInput').value;
    email = document.getElementById('emailInput').value;
    password = document.getElementById('passwordInput').value;
    nameRegEx = /[A-Z][a-z]+\s?[A-Z][a-z]+/;
    emailRegEx = /[a-z]+\@[a-z]+\.[a-z]+/;
    paswordRegEx = /(?=.*[A-Z])(?=.*[a-z])(?=.*\W)(?=.*\d)/;

    if (!(nameRegEx.test(name))) {
        alert("Invalid name format. Please type your name like this: First Last");
        return;
    }

    if (!(emailRegEx.test(email))) {
        alert("Invalid email format. Please type your email like this: username@domain.tld");
        return;
    }

    if (!(paswordRegEx.test(password) || password.length >= 8)) {
        alert("Invalid password format. Your password should consist of at least 1 uppercase character, 1 lowercase character, 1 special character and 1 number (minimum 8 characters in total).");
        return;
    }

    for (let user of loginInfo) {
        if (user.email === email) {
            alert("This email is already registered.");
            return;
        }
    }

    otp = Math.floor(100000 + Math.random() * 900000);

    emailjs.send("service_oevleia", "template_4q41tfk", {
        to_name: name,
        to_email: email,
        otp_code: otp
    }, "u-aeJLaI13e6aMy66")
    .then((response) => {
        alert("An OTP has been sent to your email.");
    })
    .catch((error) => {
        console.error("Error sending email", error);
        alert("Failed to send OTP. Please try again.");
    });

    sessionStorage.setItem('loginInfo', JSON.stringify(loginInfo));

    document.getElementById("pJ").style.visibility = "hidden";
    document.getElementById("nJ").style.visibility = "hidden";
    document.getElementById("showJ").style.visibility = "hidden";
    document.getElementById("emailImgJ").style.visibility = "hidden";
    document.getElementById("signupJ").style.height = "35vh";
    document.getElementById("emailInput").placeholder = "Enter Your OTP Code From Email";
    document.getElementById("emailInput").style.position = "relative";
    document.getElementById("emailInput").style.top = "-5vh";
    document.getElementById("emailInput").value = "";
    document.getElementById("submitJ").innerText = "Verify";
    document.getElementById("submitJ").style.position = "relative";
    document.getElementById("submitJ").style.top = "-21vh";
    document.getElementById("loginJ").style.top = "-23vh";
    document.getElementById("submitJ").onclick = addInfo;
}


function addInfo() {
    let userOtp = document.getElementById("emailInput").value;

    if (otp == userOtp) {
        loginInfo.push({name, email, password});
        loginInfo.forEach((user, index) => {console.log(`User ${index + 1}:`, user);});
        sessionStorage.setItem('loginInfo', JSON.stringify(loginInfo));

        location.replace("./login.html");
        alert("Signed up successfully.");

        loginedIn = 1;
        return;
    } else if (otp != userOtp) {
        alert("OTP dose not match what was sent.");
        return;
    }

    alert("Input box is empty.");
}

function getInfo(event) {
    let email = document.getElementById('emailInput').value;
    let password = document.getElementById('passwordInput').value;

    loginInfo = JSON.parse(sessionStorage.getItem('loginInfo')) || [];

    for (let login of loginInfo) {
        if (email == login.email && password == login.password) {
            location.replace("./tracker.html");
            alert("Login successful.");
            return;
        }
    }
    alert("Incorrect email or password! Please try again.");
}

function lockCheck() {
    if (loginedIn == 0) {
        event.preventDefault();
        console.log("YOO");
    } else if (loginedIn == 1) {
        console.log("HII")
    }
}