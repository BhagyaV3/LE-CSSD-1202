/*document.addEventListener("DOMContentLoaded", () => {
    const inputBoxes = document.querySelectorAll(".input-box");
    let currentindex = 0;

    inputs[currentindex].focus();

    function focusInput(index) {
        if (index >=0 && index < inputBoxes.length) {
            inputBoxes[index].focus();
            currentindex = index;
        }
    }

    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowDown") {
            if (currentindex < inputBoxes.length - 1) {
                focusInput(currentIndex + 1);
        }
        }   else if (event.key === "ArrowUp") {
                if (currentIndex > 0) {
                    focusInput(currentIndex - 1);
                }

        }
    });
        inputBoxes.forEach((input, index) => {
            input.addEventListener('click', () => {
                focusInput(index); 
             });
         });
    }); */