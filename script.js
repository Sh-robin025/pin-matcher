// here are variables from DOM manipulation
const getPin = document.getElementById("get-pin");
const inputPin = document.getElementById("input-pin");

// here is generate pin btn handler
const generatePin = () => {
    const pin = (Math.random() * 10000 + '').split('.')[0];
    if (pin.length === 4) {
        getPin.value = pin;
    } else {
        generatePin();
        console.log("lower then 4");
    }
}

// here is calculation btn handler (which btn clicked and show in input)
document.getElementById("btn-container")
    .addEventListener('click', function(btn) {
        const button = btn.target.innerText;
        if (isNaN(button)) {
            if (button === 'C' || '<') {
                inputPin.value = '';
            }
        } else {
            inputPin.value = inputPin.value + button;
        }
    })

// here submit btn handler
const submit = () => {
    if (inputPin.value === getPin.value) {
        document.getElementById("match").style.display = "block";
        document.getElementById("not-match").style.display = "none";
    } else {
        document.getElementById("not-match").style.display = "block";
        document.getElementById("match").style.display = "none";
    }
}