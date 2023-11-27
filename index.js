let btnCalculate = document.getElementById("calculate");
let res = document.getElementById("res");

function hexToRgb(hex) {

    hex = hex.replace('#', '');

    if (hex.length !== 3 && hex.length !== 6) {
        alert("Invalid hex color")
        throw new Error('server reponded with a 403');
    }

    // Expand shorthand hex if it's in the format #RGB
    // For hex values with the length of three
    // Will add up first index till the last index of 3rd
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }

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