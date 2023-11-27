let btnCalculate = document.getElementById("calculate");
let res = document.getElementById("res");

function hexToRgb(hex) {
    // Remove # if present
    hex = hex.replace('#', '');

    // Ensure the hex value is a valid length (3 or 6 characters)
    if (hex.length !== 3 && hex.length !== 6) {
        alert("Invalid hex color")
        throw new Error('server reponded with a 403');
    }

    // Expand shorthand hex if it's in the format #RGB
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }

    // Parse hex to decimal values for R, G, B
    let red = parseInt(hex.substring(0, 2), 16);
    let green = parseInt(hex.substring(2, 4), 16);
    let blue = parseInt(hex.substring(4, 6), 16);
    
    return `RGB(${red}, ${green}, ${blue})`;
}

btnCalculate.addEventListener('click', function() {
    const hexInput = document.getElementById("hexInput").value;
    const rgbColor = hexToRgb(hexInput);
    res.innerHTML = rgbColor;
});



// let hexInput = document.getElementById("hexInput");
// let RgbValueResult = document.getElementById("RgbValueResult");

// hexValue.addEventListener("input", hexToRgb);