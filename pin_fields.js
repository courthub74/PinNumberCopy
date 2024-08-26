const inputs = document.querySelectorAll(".pin_field input");

// console.log(inputs);

inputs.forEach((input, index) => {
    input.dataset.index = index;
    input.addEventListener("keyup", handlePinNum);
    input.addEventListener("paste", handleOnPaste);
});

// handlePinNum function

function handlePinNum(e) {
    /**
     * <input type="text" 👉 maxlength="1" />
     * 👉 NOTE: On mobile devices `maxlength` property isn't supported,
     * So we to write our own logic to make it work. 🙂
     */
    const input = e.target;
    let value = input.value;
    let isValidInput = value.match(/[0-9a-z]/gi);
    input.value = "";
    input.value = isValidInput ? value[0] : "";

    let fieldIndex = input.dataset.index;
    if (fieldIndex < inputs.length - 1 && isValidInput) {
        input.nextElementSibling.focus();
    }

    if (e.key === "Backspace" && fieldIndex > 0) {
        input.previousElementSibling.focus();
    }

    if (fieldIndex == inputs.length - 1 && isValidInput) {
        submit();
    }
}

// handleOnPaste function

function handleOnPaste(e) {
    const data = e.clipboardData.getData("text");
    const value = data.split("");
    if (value.length === inputs.length) {
        // iterate thru each value
        inputs.forEach((input, index) => (input.value = value[index]));
        submit();
    };
}

// Submit function (Place this in the Submit button event listener)
function submit() {
    console.log("Submitting...");
    // 👇 Entered OTP
    let pin = "";
    inputs.forEach((input) => {
        pin += input.value;
        input.disabled = true;
        input.classList.add("disabled");
    });
    console.log(otp);
    // 👉 Call API below
}
