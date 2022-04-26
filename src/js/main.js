"use strict";

let einnahmen = 0;
let ausgaben = 0;
let bilanz = 0;

let titel;
let typ;
let betrag;
let datum;

const daten_erfassen = function (){

    titel = prompt ("Titel");
    typ = prompt ("Einnahme oder Ausgabe?"); 
    betrag = parseInt (prompt ("Betrag in Euro"));
    datum = prompt ("Datum (jjjj-mm-tt):");

};

daten_erfassen();


const daten_ausgeben = function (a,b,c,d) {

    console.log (`Titel: ${a}
    Typ: ${b}
    Betrag: ${c}
    Datum: ${d}`);
};


daten_ausgeben(titel,typ,betrag, datum);




const EntragMitGesammtbilanzVerrechnen = function () {

}

/*Eingabedaten holen
let titel_1 = prompt ("Titel");
let typ_1 = prompt ("Einnahme oder Ausgabe?"); 
let betrag_1 = parseInt (prompt ("Betrag in Euro"));
let datum_1 = prompt ("Datum (jjjj-mm-tt):");




if (typ_1 === "Einnahme"){
    einnahmen = einnahmen + betrag_1;
    bilanz = bilanz + betrag_1;
}else if (typ_1 === "Ausgabe"){
    ausgaben = ausgaben + betrag_1;
    bilanz = bilanz - betrag_1;
};


let titel_2 = prompt ("Titel");
let typ_2 = prompt ("Einnahme oder Ausgabe?"); 
let betrag_2 = parseInt (prompt ("Betrag in Euro"));
let datum_2 = prompt ("Datum (jjjj-mm-tt):");


console.log (`Titel: ${titel_2}
Typ: ${typ_2}
Betrag: ${betrag_2}
Datum: ${datum_2}`
);

if (typ_2 === "Einnahme"){
    einnahmen = einnahmen + betrag_2;
    bilanz = bilanz + betrag_2;
}else if (typ_2 === "Ausgabe"){
    ausgaben = ausgaben + betrag_2;
    bilanz = bilanz - betrag_2;
};


//Gesamtbilanz

console.log (`Bilanz: ${bilanz} ct.`)
*/