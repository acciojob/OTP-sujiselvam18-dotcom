const codes = document.querySelectorAll(".code");

codes.forEach((code, index) => {

    // Handle typing
    code.addEventListener("input", (e) => {
        const value = e.target.value;

        // Allow only numbers
        if (!/^[0-9]$/.test(value)) {
            e.target.value = "";
            return;
        }

        // Move to next input
        if (value && index < codes.length - 1) {
            codes[index + 1].focus();
        }
    });

    // Handle backspace
    code.addEventListener("keydown", (e) => {
        if (e.key === "Backspace") {

            if (code.value === "" && index > 0) {
                codes[index - 1].focus();
                codes[index - 1].value = "";
            }
        }
    });

});
