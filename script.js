let celsiusInput = document.getElementById("celcius"); 
let fahrenheitInput = document.getElementById("Fahrenheit"); 

function CelToFar() { // Corrected function name
    let output = (parseFloat(celsiusInput.value) * 9/5) + 32;
    fahrenheitInput.value = parseFloat(output.toFixed(2));
}

function FarToCel() { // Corrected function name
    let output = (parseFloat(fahrenheitInput.value) - 32) * 5/9;
    celsiusInput.value = parseFloat(output.toFixed(2));
    console.log(output);
}
