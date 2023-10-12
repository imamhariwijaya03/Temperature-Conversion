//script button
document.getElementById("convertButton").addEventListener("click",convertTemperature);
document.getElementById("resetButton").addEventListener("click",resetTemperature);
document.getElementById("reverseButton").addEventListener("click",reverseUnit);

//get initial and convert
function convertTemperature(){
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    let result = 0;
    let formula ="";

    //convert from celcius
if (inputValue === ""){
        result = "Please input the value";
    }
   else if (fromUnit === "celcius" && toUnit === "celcius"){
        result = inputValue;
        formula = "Celcius = Celcius, nothing change";
   }
    else if (fromUnit === "celcius" && toUnit === "fahrenheit"){
        result = (inputValue*9/5)+32;
        formula = "F = ("+inputValue+" x 9/5) +32";
    }
    else if (fromUnit === "celcius" && toUnit === "kelvin"){
        result = (inputValue+273);
        formula = "K = "+inputValue+" + 273";
    }
    else if (fromUnit === "celcius" && toUnit === "reamur"){
        result = (inputValue*0.8);
        formula = "R = "+inputValue+" x 0.8";
    }
    //convert from fahrenheit
    else if (fromUnit === "fahrenheit" && toUnit === "fahrenheit"){
        result = inputValue;
        formula = "Fahrenheit = Fahrenheit, nothing change";
    }
    else if (fromUnit === "fahrenheit" && toUnit === "celcius"){
        result = (inputValue-32)*5/9;
        formula = "C = ("+inputValue+" -32) x 5 / 9";
    }
    else if (fromUnit === "fahrenheit" && toUnit === "kelvin"){
        result = (((inputValue-32)*5/9)+273);
        formula = "K = (("+inputValue+" - 32) x 5 / 9) + 273";
    }
    else if (fromUnit === "fahrenheit" && toUnit === "reamur"){
        result = ((inputValue-32)*4/9);
        formula = "R = ("+inputValue+" -32) x 4 / 9";
    }
    //convert from kelvin
    else if (fromUnit === "kelvin" && toUnit === "kelvin"){
        result = inputValue;
        formula = "Kelvin to Kelvin, nothing change";
    }
    else if (fromUnit === "kelvin" && toUnit === "celcius"){
        result = inputValue-273;
        formula = "C = ("+inputValue+"- 273)";
    }
    else if (fromUnit === "kelvin" && toUnit === "fahrenheit"){
        result = (((inputValue-273)*5/9)+32);
        formula = "F = (("+inputValue+"- 273 ) * 5 / 9) + 32";
    }
    else if (fromUnit === "kelvin" && toUnit === "reamur"){
        result = ((inputValue-273)*4/5);
        formula = "R = ("+inputValue+"- 273 ) * 4 / 5";
    }
    //convert from reamur
    else if (fromUnit === "reamur" && toUnit === "reamur"){
        result = inputValue;
        formula = "Reamur = Reamur, nothing change";
    }
    else if (fromUnit === "reamur" && toUnit === "celcius"){
        result = inputValue*5/4;
        formula = "C = ("+inputValue+"* 5 / 4)";
    }
    else if (fromUnit === "reamur" && toUnit === "fahrenheit"){
        result = ((inputValue*9/4)+32);
        formula = "F = ("+inputValue+" * 5 / 4) + 32";
    }
    else if (fromUnit === "reamur" && toUnit === "kelvin"){
        result = ((inputValue*5/4)+273);
        formula = "K = ("+inputValue+" * 5 / 4 ) + 273)";
    }
//display the result



document.getElementById("formulaDescription").textContent = formula;
document.getElementById("convertresult").textContent = result.toFixed(2);
}
//reset
function resetTemperature(){
   
document.getElementById("convertresult").textContent = "0";
document.getElementById("inputValue").value = "0";
}

function reverseUnit(){
    const fromUnit= document.getElementById("fromUnit");
    const toUnit = document.getElementById("toUnit");
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    let result = 0;
    let formula ="";

    const fromUnitValue = toUnit.value;
    const fromUnitText = toUnit.options[toUnit.selectedIndex].text;
    const toUnitValue = fromUnit.value;
    const toUnitText = fromUnit.options[fromUnit.selectedIndex].text;
        
//convert from celcius
if (fromUnitValue === "celcius" && toUnitValue === "celcius"){
    result = inputValue;
    formula = "Celcius = Celcius, nothing change";
   }
    else if (fromUnitValue === "celcius" && toUnitValue === "fahrenheit"){
        result = (inputValue*9/5)+32;
        formula = "F = ("+inputValue+" * 9 / 5) +32";
    }
    else if (fromUnitValue === "celcius" && toUnitValue === "kelvin"){
        result = (inputValue+273);
        formula = "K = "+inputValue+" + 273";
    }
    else if (fromUnitValue === "celcius" && toUnitValue === "reamur"){
        result = (inputValue*0.8);
        formula = "R = "+inputValue+" * 4 / 5";
    }
    //convert from fahrenheit
    else if (fromUnitValue === "fahrenheit" && toUnitValue === "fahrenheit"){
        result = inputValue;
        formula = "Fahrenheit = Fahrenheit, nothing change";
    }
    else if (fromUnitValue === "fahrenheit" && toUnitValue === "celcius"){
        result = (inputValue-32)*5/9;
        formula = "C = ("+inputValue+" -32) x 5 / 9";
    }
    else if (fromUnitValue === "fahrenheit" && toUnitValue === "kelvin"){
        result = (((inputValue-32)*5/9)+273);
        formula = "K = (("+inputValue+" - 32) x 5 / 9) + 273";
    }
    else if (fromUnitValue === "fahrenheit" && toUnitValue === "reamur"){
        result = ((inputValue-32)*4/9);
        formula = "R = ("+inputValue+" -32) x 4 / 9";
    }
    //convert from kelvin
    else if (fromUnitValue === "kelvin" && toUnitValue === "kelvin"){
        result = inputValue;
        formula = "Kelvin to Kelvin, nothing change";
    }
    else if (fromUnitValue === "kelvin" && toUnitValue === "celcius"){
        result = inputValue-273;
        formula = "C = ("+inputValue+"- 273)";
    }
    else if (fromUnitValue === "kelvin" && toUnitValue === "fahrenheit"){
        result = (((inputValue-273)*5/9)+32);
        formula = "F = (("+inputValue+"- 273 ) * 5 / 9) + 32";
    }
    else if (fromUnitValue === "kelvin" && toUnitValue === "reamur"){
        result = ((inputValue-273)*4/5);
        formula = "R = ("+inputValue+"- 273 ) * 4 / 5";
    }
    //convert from reamur
    else if (fromUnitValue === "reamur" && toUnitValue === "reamur"){
        result = inputValue;
        formula = "Reamur = Reamur, nothing change";
    }
    else if (fromUnitValue === "reamur" && toUnitValue === "celcius"){
        result = inputValue*5/4;
        formula = "C = ("+inputValue+"* 5 / 4)";
    }
    else if (fromUnitValue === "reamur" && toUnitValue === "fahrenheit"){
        result = ((inputValue*9/4)+32);
        formula = "F = ("+inputValue+" * 5 / 4) + 32";
    }
    else if (fromUnitValue === "reamur" && toUnitValue === "kelvin"){
        result = ((inputValue*5/4)+273);
        formula = "K = ("+inputValue+" * 5 / 4) + 273)";
    }
//display the result


document.getElementById("formulaDescription").textContent = formula;
document.getElementById("convertresult").textContent = result.toFixed(2);
//document.getElementById("fromUnit").textContent = fromUnitText;
//document.getElementById("toUnit").textContent = toUnitText;
    //fromUnit.options[fromUnit.selectedIndex].text = fromUnitText.option[fromUnitText.selectedIndex].text;
    //toUnit.options[toUnit.selectedIndex].text = toUnitText.option[toUnitText.selectedIndex].text;
}
