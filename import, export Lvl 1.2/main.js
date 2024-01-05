let {names, numbers} = require("./data.js")

let { erstesElement,
    gibAlleAußerLetztesElement,
    nurDasLetzteElement,
    gibAlleAußerDemErstenArrays,
    entferneElement,
    einzigartigeWerte,
    summeDerNumbers,
    zufallszahlZwischen,
    ersterBuchstabeGroß,
    allesGroß,
    letzterBuchstabeGleich} = require("./function.js")

const eE = erstesElement(names);
console.log(eE);

const gAALE = gibAlleAußerLetztesElement(numbers);
console.log(gAALE);

const nDLE = nurDasLetzteElement(names);
console.log(nDLE);

const gAADEA = gibAlleAußerDemErstenArrays(numbers);
console.log(gAADEA);

const entferneEle = entferneElement(names);
console.log(entferneEle);

const eW = einzigartigeWerte(numbers);
console.log(eW);

const sDN = summeDerNumbers(names);
console.log(sDN);

const uZZ = zufallszahlZwischen(1,10);
console.log(uZZ);

const eBG = ersterBuchstabeGroß("hello");
console.log(eBG);

const aG = allesGroß("hello");
console.log(aG);

const lBG = letzterBuchstabeGleich("hello", "o");
console.log(lBG);