function convertTemperature() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;
    let outputValue;

    if (isNaN(inputValue)) {
        document.getElementById('output').innerText = "Please enter a valid number.";
        return;
    }

    if (inputUnit === 'celsius') {
        outputValue = (inputValue * 9/5) + 32;
        document.getElementById('output').innerText = `${inputValue}°C is equal to ${outputValue.toFixed(2)}°F.`;
    } else {
        outputValue = (inputValue - 32) * 5/9;
        document.getElementById('output').innerText = `${inputValue}°F is equal to ${outputValue.toFixed(2)}°C.`;
    }
}
