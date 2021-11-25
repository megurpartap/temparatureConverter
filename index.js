var result = document.getElementById('result');
const convertTemp = () => {
    const tempVal = document.getElementById('tempVal').value;
    // console.log(tempVal);
    const tempOptions = document.getElementById('tempOption');
    tempSelected = tempOptions.options[tempOptions.selectedIndex].value;
    console.log(tempSelected);

    if (tempSelected=='cel') {
        const tempResult = (tempVal*9/5) + 32;
        result.innerHTML = `${tempResult}° Farhenheight`;

    } else {
        const tempResult = (tempVal-32)*5/9;
        result.innerHTML = `${tempResult}° Celsius`;

    }

}