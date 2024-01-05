

let { data } = require("./data.js");
let { staedteMitGroessererBevoelkerung, staedteMitKleinererBevoelkerung } = require("./function.js");

const gefilterteStaedteGrößerAls100K = staedteMitGroessererBevoelkerung(data);
console.log(gefilterteStaedteGrößerAls100K);

const gefilterteStaedteKleinerAls100k = staedteMitKleinererBevoelkerung(data);
console.log(gefilterteStaedteKleinerAls100k);
