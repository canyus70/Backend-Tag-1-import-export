

function staedteMitGroessererBevoelkerung(cities) {
    return cities.filter(city => city.population > 100000);
}

function staedteMitKleinererBevoelkerung(cities) {
    return cities.filter(city => city.population < 100000);
}

module.exports = { staedteMitGroessererBevoelkerung, staedteMitKleinererBevoelkerung };
