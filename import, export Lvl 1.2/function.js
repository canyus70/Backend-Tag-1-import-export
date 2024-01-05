function erstesElement(array) {
    return array[0];
}

function gibAlleAußerLetztesElement(array) {
    return array.slice(0,-1)
}

function nurDasLetzteElement(array) {
    return array.pop()
}

function gibAlleAußerDemErstenArrays(array) {
    return array.slice(1)
}


function entferneElement(array, element) {
    return array.filter(item => item !== element);
}


function einzigartigeWerte(array) {
    return Array.from(new Set(array));
}

function summeDerNumbers(numbers) {
    return numbers.reduce((accumulator, currValue) => accumulator + currValue)
}

function zufallszahlZwischen(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ersterBuchstabeGroß(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function allesGroß(string) {
    return string.toUpperCase();
}

function letzterBuchstabeGleich(string, letter) {
    return string.charAt(string.length - 1).toLowerCase() === letter.toLowerCase();
}

module.exports = {
    erstesElement,
    gibAlleAußerLetztesElement,
    nurDasLetzteElement,
    gibAlleAußerDemErstenArrays,
    entferneElement,
    einzigartigeWerte,
    summeDerNumbers,
    zufallszahlZwischen,
    ersterBuchstabeGroß,
    allesGroß,
    letzterBuchstabeGleich
}