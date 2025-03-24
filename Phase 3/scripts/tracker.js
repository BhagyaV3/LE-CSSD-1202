const carbonImg = document.getElementById("carbonJ");
const electricityImg = document.getElementById("electricityJ");
const transportationImg = document.getElementById("transportationJ");
const foodImg = document.getElementById("foodJ");
const wasteImg = document.getElementById("wasteJ");
const waterImg = document.getElementById("waterJ");

let userData = JSON.parse(sessionStorage.getItem('loginInfo')) || [
    {
        carbon: 0,
        electricity: 0,
        transportation: 0,
        food: 0,
        waste: 0,
        water: 0
    }
];

carbonImg.onclick = function () {
    let userInput = prompt("Please Enter Your Carbon Emissions for the Day:");

    while (userInput !== null && !/^[0-9]*\.?[0-9]+$/.test(userInput)) {
        alert("You did not enter a valid number.");
        userInput = prompt("Please Enter Your Carbon Emissions for the Day:");
    }

    if (userInput) {
        document.getElementById("carbonValueJ").innerHTML = userInput + " kgCO₂e";
        userData[carbon] = userInput;
        sessionStorage.setItem('userData', JSON.stringify(userData));
        return;
    } else {
      console.log("No input provided.");
    }
};

electricityImg.onclick = function () {
    let userInput = prompt("Please Enter Your Electriciy Usage for the Day:");

    while (userInput !== null && !/^[0-9]*\.?[0-9]+$/.test(userInput)) {
        alert("You did not enter a valid number.");
        userInput = prompt("Please Enter Your Electriciy Usage for the Day:");
    }

    if (userInput) {
      document.getElementById("electricityValueJ").innerHTML = userInput + " kWh";
      userData[electricity] = userInput;
      sessionStorage.setItem('userData', JSON.stringify(userData));
      return;
    } else {
      console.log("No input provided.");
    }
};

transportationImg.onclick = function () {
    let userInput = prompt("Please Enter Your Total Time on Non-Public Transportation for the Day:");

    while (userInput !== null && !/^[0-9]*\.?[0-9]+$/.test(userInput)) {
        alert("You did not enter a valid number.");
        userInput = prompt("Please Enter Your Total Time on Non-Public Transportation for the Day:");
    }

    if (userInput) {
      document.getElementById("transportationValueJ").innerHTML = userInput + " hours";
      userData[transportation] = userInput;
      sessionStorage.setItem('userData', JSON.stringify(userData));
      return;
    } else {
      console.log("No input provided.");
    }
};

foodImg.onclick = function () {
    let userInput = prompt("Please Enter Your Food Wastage for the Day:");

    while (userInput !== null && !/^[0-9]*\.?[0-9]+$/.test(userInput)) {
        alert("You did not enter a valid number.");
        userInput = prompt("Please Enter Your Food Wastage for the Day:");
    }

    if (userInput) {
      document.getElementById("foodValueJ").innerHTML = userInput + " lb";
      userData[food] = userInput;
      sessionStorage.setItem('userData', JSON.stringify(userData));
      return;
    } else {
      console.log("No input provided.");
    }
};

wasteImg.onclick = function () {
    let userInput = prompt("Please Enter Your Non-Recycled Waste for the Day:");

    while (userInput !== null && !/^[0-9]*\.?[0-9]+$/.test(userInput)) {
        alert("You did not enter a valid number.");
        userInput = prompt("Please Enter Your Non-Recycled Waste for the Day:");
    }

    if (userInput) {
      document.getElementById("wasteValueJ").innerHTML = userInput + " lb";
      userData[waste] = userInput;
      sessionStorage.setItem('userData', JSON.stringify(userData));
      return;
    } else {
      console.log("No input provided.");
    }
};

waterImg.onclick = function () {
    let userInput = prompt("Please Enter Your Water Usage for the Day:");

    while (userInput !== null && !/^[0-9]*\.?[0-9]+$/.test(userInput)) {
        alert("You did not enter a valid number.");
        userInput = prompt("Please Enter Your Water Usage for the Day:");
    }

    if (userInput) {
      document.getElementById("waterValueJ").innerHTML = userInput + " liters";
      userData[water] = userInput;
      sessionStorage.setItem('userData', JSON.stringify(userData));
      return;
    } else {
      console.log("No input provided.");
    }
};
  