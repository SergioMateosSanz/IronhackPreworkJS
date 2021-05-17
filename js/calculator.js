var digit = "";
var accumulative = 0;
var sum = false;
var remainder = false;
var multiply = false;
var division = false;
var firstOperation = true;

function displayNumber(numero) {
    document.getElementById("display").value = digit + numero;
    digit = document.getElementById("display").value;
}

function addition() {
    if (remainder) {
        accumulative = accumulative - parseInt(digit);
        document.getElementById("display").value = accumulative;
    } else if (multiply) {
        accumulative = accumulative * parseInt(digit);
        document.getElementById("display").value = accumulative;
        } else if (division){
            accumulative = accumulative / parseInt(digit);
            document.getElementById("display").value = accumulative;
        } else{
            accumulative = accumulative + parseInt(digit);
            document.getElementById("display").value = accumulative;
    }
    digit = "";
    sum = true;
    remainder = false;
    multiply = false;
    division = false;
    firstOperation = false;
}

function subtraction() {
    if (!firstOperation) {
        if (sum) {
            accumulative = accumulative + parseInt(digit);
            document.getElementById("display").value = accumulative;
        } else if (multiply) {
            accumulative = accumulative * parseInt(digit);
            document.getElementById("display").value = accumulative;
        } else if (division) {
            accumulative = accumulative / parseInt(digit);
            document.getElementById("display").value = accumulative;
            } else{
                accumulative = accumulative - parseInt(digit);
                document.getElementById("display").value = accumulative;
        }
    } else {
        accumulative = parseInt(document.getElementById("display").value);
    }
    digit = "";
    remainder = true;
    sum = false;
    multiply = false;
    division = false;
    firstOperation = false;
}

function multiplication() {
    if (!firstOperation) {
        if (sum) {
            accumulative = accumulative + parseInt(digit);
            document.getElementById("display").value = accumulative;
        } else if (remainder) {
            accumulative = accumulative - parseInt(digit);
            document.getElementById("display").value = accumulative;
        } else if (division) {
            accumulative = accumulative / parseInt(digit);
            document.getElementById("display").value = accumulative;
            } else {
                accumulative = accumulative * parseInt(digit);
                document.getElementById("display").value = accumulative;
        }
    } else {
        accumulative = parseInt(document.getElementById("display").value);
    }
    digit = "";
    remainder = false;
    sum = false;
    multiply = true;
    division = false;
    firstOperation = false;
}

function divide() {
    if (!firstOperation) {
        if (sum) {
            accumulative = accumulative + parseInt(digit);
            document.getElementById("display").value = accumulative;
        } else if (remainder) {
            accumulative = accumulative - parseInt(digit);
            document.getElementById("display").value = accumulative;
        } else if (multiply) {
            accumulative = accumulative * parseInt(digit);
            document.getElementById("display").value = accumulative;
            } else {
                accumulative = accumulative / parseInt(digit);
                document.getElementById("display").value = accumulative;
        }
    } else {
        accumulative = parseInt(document.getElementById("display").value);
    }
    digit = "";
    remainder = false;
    sum = false;
    multiply = false;
    division = true;
    firstOperation = false;
}

function equals() {
    if (sum) {
        document.getElementById("display").value = accumulative + parseInt(digit);
    } else if (remainder) {
        document.getElementById("display").value = accumulative - parseInt(digit);
    } else if (multiply) {
        document.getElementById("display").value = accumulative * parseInt(digit);
    } else {
        document.getElementById("display").value = accumulative / parseInt(digit);
    }
    accumulative = parseInt(document.getElementById("display").value);
    digit = 0;
}

function restart() {
    digit = 0;
    accumulative = 0;
    firstOperation = true;
    document.getElementById("display").value = 0
}