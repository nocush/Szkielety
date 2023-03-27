function wyswietlLiczby(...argumenty){
    console.log(argumenty)
}
wyswietlLiczby(1,2,3,4,5,6,7,8,9,10)




function sumujLiczby(...argumenty){
    let suma = 0;
    for(let i = 0; i < argumenty.length; i++){
        suma += argumenty[i];
    }
    console.log("suma liczb: " + argumenty + " wynosi: " + suma)
}
sumujLiczby(1,2,3,4,5,6,7,8,9,10)

//zadanie 2.2
const listaZadan = [
    {
        id: 1,
        tekst: "Zrobienie zakupów",
        zrealizowano: true
    },
    {
        id: 2,
        tekst: "Przegląd techniczny samochodu",
        zrealizowano: false
    },
    {
        id: 3,
        tekst: "Wizyta u dentysty",
        zrealizowano: false
    }
]

function allTeksts(array){
    array.forEach(element => {
        console.log(element.tekst)
    });
}
allTeksts(listaZadan)

function makeArray(array){
    const array2 = array.map(element => element.tekst)
    console.log(array2)
}
makeArray(listaZadan)

function makeArray2(array){
    const array2 = array.filter(element => element.zrealizowano == true).map(element => element.tekst)
    console.log(array2)
}  
makeArray2(listaZadan)


//zadanie 2.3
const poniedzialek = [ {
    'nazwa': 'Przygotowania do zajęć z AI',
    'czas': 180 },
    {
    'nazwa': 'Realizacja projektu z AI',
    'czas': 120
    } ]
    const wtorek = [ {
    'nazwa': 'Rozbudowa swojego bloga',
    'czas': 240 },
    {
    'nazwa': 'Administrowanie serwisem szkoly',
    'czas': 180 },
    {
    'nazwa': 'Sluchanie koncertu online',
    'czas': 240
    }]

function jakaKwota(array1, array2){
    const kwota = array1.reduce(function(acc, val){
        return acc.concat(val);
    }, array2).map(element => element.czas).map(element => element/60).filter(element => element > 2).map(element=> element*35).reduce((a,b) => a+b)
    console.log(kwota.toFixed(2) + " PLN")
}
jakaKwota(poniedzialek, wtorek)

//zadanie 2.4
const firmy = [
    {nazwa:"Abasco", kategoria:"IT", poczatek:1999, koniec:2010},
    {nazwa:"Redis", kategoria:"IT", poczatek:1993, koniec:1998},
    {nazwa:"Komp", kategoria:"IT", poczatek:2003, koniec:2018},
    {nazwa:"Bosco", kategoria:"Technologie", poczatek:2011, koniec: 2014},
    {nazwa:"CCA", kategoria:"IT", poczatek:1991, koniec:1995},
    {nazwa:"Autosan", kategoria:"Auto", poczatek:2009, koniec: 2018},
    {nazwa:"Broke", kategoria:"Finanse", poczatek:1990, koniec: 1992},
    {nazwa:"Funds", kategoria:"Finanse", poczatek:2000, koniec: 2021}
]
function firmyIT(array){
    const it = array.filter(element => element.kategoria == "IT").map(element => element.nazwa)
    console.log(it)
}
firmyIT(firmy)

function firmy90(array){
    const firmy90 = array.filter(element => element.poczatek >= 1990 && element.koniec <= 1999).map(element => element.nazwa)
    console.log(firmy90)
}
firmy90(firmy)
function firmy10Lat(array){
    const firmy10 = array.filter(element => element.koniec - element.poczatek > 10).map(element => element.nazwa)
    console.log(firmy10)
}
firmy10Lat(firmy)




