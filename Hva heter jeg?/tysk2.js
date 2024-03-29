//Her kommer scriptet
window.onload = oppstart; //Det som skal utføres når siden er ferdig lastet
//Setter variabler
var tilfeldig = 10; //Variabel som bestemmer hvilket dyrenavn som skal vises
var x = 10; //Variabel som bestemmer hvilket element som skal fjernes fra listen "nr"
var i = 0; //Teller antall dyrenavn som har blitt vist
var nr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]; //Liste hvr hvert nummer representerer et dyr
var feil = 0; //Variabel for feilklikk

function oppstart() {
  document.getElementById("feiltrykk").innerHTML = "Feilklikk: " + feil; //Viser antall feilklipp
  dyrenavnet(); //Setter igang koden som viser dyrenavn
}

function feilklikk() { //Funksjon som endrer og viser antall feilklikk
  feil += 1; //Legger til 1 på antall feilklikk
  document.getElementById("feiltrykk").innerHTML = "Feilklikk: " + feil; //Viser nytt antall feilklikk
}

function sjekken() {
  if (tilfeldig == 1) { //Om det var dyr 1 (ape) som skulle trykkes så...
    document.getElementById("en").innerHTML = " "; //skal bildet av ape fjernes
    dyrenavnet(); //Setter igang funksjonen dyrenavnet for å vise et nytt dyrenavn
  }
  else {
    feilklikk(); //Endre antall feilklikk
  }
}
function sjekkto() {
  if (tilfeldig == 2) { //Om det var dyr 2 (elefant) som skulle trykkes så...
    document.getElementById("to").innerHTML = " "; //skal bildet av elefant fjernes
    dyrenavnet(); //Setter igang funksjonen dyrenavnet for å vise et nytt dyrenavn
  }
  else {
    feilklikk(); //Endre antall feilklikk
  }
}
function sjekktre() {
  if (tilfeldig == 3) { //Om det var dyr 3 (kenguru) som skulle trykkes så...
    document.getElementById("tre").innerHTML = " "; //skal bildet av kenguru fjernes
    dyrenavnet(); //Setter igang funksjonen dyrenavnet for å vise et nytt dyrenavn
  }
  else {
    feilklikk(); //Endre antall feilklikk
  }
}
function sjekkfire() {
  if (tilfeldig == 4) { //Om det var dyr 4 (neshorn) som skulle trykkes så...
    document.getElementById("fire").innerHTML = " "; //skal bildet av neshorn fjernes
    dyrenavnet(); //Setter igang funksjonen dyrenavnet for å vise et nytt dyrenavn
  }
  else {
    feilklikk(); //Endre antall feilklikk
  }
}
function sjekkfem() {
  if (tilfeldig == 5) { //Om det var dyr 5 (flodhest) som skulle trykkes så...
    document.getElementById("fem").innerHTML = " "; //skal bildet av flodhest fjernes
    dyrenavnet(); //Setter igang funksjonen dyrenavnet for å vise et nytt dyrenavn
  }
  else {
    feilklikk(); //Endre antall feilklikk
  }
}
function sjekkseks() {
  if (tilfeldig == 6) { //Om det var dyr 6 (slange) som skulle trykkes så...
    document.getElementById("seks").innerHTML = " "; //skal bildet av slange fjernes
    dyrenavnet(); //Setter igang funksjonen dyrenavnet for å vise et nytt dyrenavn
  }
  else {
    feilklikk(); //Endre antall feilklikk
  }
}
function sjekksju() {
  if (tilfeldig == 7) { //Om det var dyr 7 (gepard) som skulle trykkes så...
    document.getElementById("sju").innerHTML = " "; //skal bildet av gepard fjernes
    dyrenavnet(); //Setter igang funksjonen dyrenavnet for å vise et nytt dyrenavn
  }
  else {
    feilklikk(); //Endre antall feilklikk
  }
}
function sjekkattene() {
  if (tilfeldig == 8) { //Om det var dyr 8 (tukan) som skulle trykkes så...
    document.getElementById("atte").innerHTML = " "; //skal bildet av tukan fjernes
    dyrenavnet(); //Setter igang funksjonen dyrenavnet for å vise et nytt dyrenavn
  }
  else {
    feilklikk(); //Endre antall feilklikk
  }
}
function sjekkni() {
  if (tilfeldig == 9) { //Om det var dyr 9 (struts) som skulle trykkes så...
    document.getElementById("ni").innerHTML = " "; //skal bildet av struts fjernes
    dyrenavnet(); //Setter igang funksjonen dyrenavnet for å vise et nytt dyrenavn
  }
  else {
    feilklikk(); //Endre antall feilklikk
  }
}
function sjekkti() {
  if (tilfeldig == 10) { //Om det var dyr 10 (pingvin) som skulle trykkes så...
    document.getElementById("ti").innerHTML = " "; //skal bildet av pingvin fjernes
    dyrenavnet(); //Setter igang funksjonen dyrenavnet for å vise et nytt dyrenavn
  }
  else {
    feilklikk(); //Endre antall feilklikk
  }
}
function sjekkelleve() {
  if (tilfeldig == 11) { //Om det var dyr 11 (gribb) som skulle trykkes så...
    document.getElementById("elleve").innerHTML = " "; //skal bildet av gribb fjernes
    dyrenavnet(); //Setter igang funksjonen dyrenavnet for å vise et nytt dyrenavn
  }
  else {
    feilklikk(); //Endre antall feilklikk
  }
}
function sjekktolv() {
  if (tilfeldig == 12) { //Om det var dyr 12 (dromedar) som skulle trykkes så...
    document.getElementById("tolv").innerHTML = " "; //skal bildet av dromedar fjernes
    dyrenavnet(); //Setter igang funksjonen dyrenavnet for å vise et nytt dyrenavn
  }
  else {
    feilklikk(); //Endre antall feilklikk
  }
}
function sjekktreten() {
  if (tilfeldig == 13) { //Om det var dyr 13 (krokodille) som skulle trykkes så...
    document.getElementById("treten").innerHTML = " "; //skal bildet av krokodille fjernes
    dyrenavnet(); //Setter igang funksjonen dyrenavnet for å vise et nytt dyrenavn
  }
  else {
    feilklikk(); //Endre antall feilklikk
  }
}
function sjekkfjorten() {
  if (tilfeldig == 14) { //Om det var dyr 14 (løve) som skulle trykkes så...
    document.getElementById("fjorten").innerHTML = " "; //skal bildet av løve fjernes
    dyrenavnet(); //Setter igang funksjonen dyrenavnet for å vise et nytt dyrenavn
  }
  else {
    feilklikk(); //Endre antall feilklikk
  }
}
function sjekkfemten() {
  if (tilfeldig == 15) { //Om det var dyr 15 (maursluker) som skulle trykkes så...
    document.getElementById("femten").innerHTML = " "; //skal bildet av maursluker fjernes
    dyrenavnet(); //Setter igang funksjonen dyrenavnet for å vise et nytt dyrenavn
  }
  else {
    feilklikk(); //Endre antall feilklikk
  }
}
function sjekkseksten() {
  if (tilfeldig == 16) { //Om det var dyr 16 (panda) som skulle trykkes så...
    document.getElementById("seksten").innerHTML = " "; //skal bildet av panda fjernes
    dyrenavnet(); //Setter igang funksjonen dyrenavnet for å vise et nytt dyrenavn
  }
  else {
    feilklikk(); //Endre antall feilklikk
  }
}
function sjekksotten() {
  if (tilfeldig == 17) { //Om det var dyr 17 (sebra) som skulle trykkes så...
    document.getElementById("sotten").innerHTML = " "; //skal bildet av sebra fjernes
    dyrenavnet(); //Setter igang funksjonen dyrenavnet for å vise et nytt dyrenavn
  }
  else {
    feilklikk(); //Endre antall feilklikk
  }
}

function navnet() {
  if (tilfeldig == 1) { //Om det tilfeldige tallet er 1 så...
    document.getElementById("dyrenavn").innerHTML = "Affe"; //skal dyrenavnet ape vises på skjermen
    x = nr.indexOf(tilfeldig); //x settes til indeksen til "1" som representerer ape
  }
  else if (tilfeldig == 2) { //Om det tilfeldige tallet er 2 så...
    document.getElementById("dyrenavn").innerHTML = "Elefant"; //skal dyrenavnet elefant vises på skjermen
    x = nr.indexOf(tilfeldig); //x settes til indeksen til "2" som representerer elefant
  }
  else if (tilfeldig == 3) { //Om det tilfeldige tallet er 3 så...
    document.getElementById("dyrenavn").innerHTML = "Känguru"; //skal dyrenavnet kenguru vises på skjermen
    x = nr.indexOf(tilfeldig); //x settes til indeksen til "3" som representerer kenguru
  }
  else if (tilfeldig == 4) { //Om det tilfeldige tallet er 4 så...
    document.getElementById("dyrenavn").innerHTML = "Nashorn"; //skal dyrenavnet neshorn vises på skjermen
    x = nr.indexOf(tilfeldig); //x settes til indeksen til "4" som representerer neshorn
  }
  else if (tilfeldig == 5) { //Om det tilfeldige tallet er 5 så...
    document.getElementById("dyrenavn").innerHTML = "Flusspferd"; //skal dyrenavnet flodhest vises på skjermen
    x = nr.indexOf(tilfeldig); //x settes til indeksen til "5" som representerer flodhest
  }
  else if (tilfeldig == 6) { //Om det tilfeldige tallet er 6 så...
    document.getElementById("dyrenavn").innerHTML = "Schlange"; //skal dyrenavnet slange vises på skjermen
    x = nr.indexOf(tilfeldig); //x settes til indeksen til "6" som representerer slange
  }
  else if (tilfeldig == 7) { //Om det tilfeldige tallet er 7 så...
    document.getElementById("dyrenavn").innerHTML = "Gepard"; //skal dyrenavnet gepard vises på skjermen
    x = nr.indexOf(tilfeldig); //x settes til indeksen til "7" som representerer gepard
  }
  else if (tilfeldig == 8) { //Om det tilfeldige tallet er 8 så...
    document.getElementById("dyrenavn").innerHTML = "Tukan"; //skal dyrenavnet tukan vises på skjermen
    x = nr.indexOf(tilfeldig); //x settes til indeksen til "8" som representerer tukan
  }
  else if (tilfeldig == 9) { //Om det tilfeldige tallet er 9 så...
    document.getElementById("dyrenavn").innerHTML = "Strauss"; //skal dyrenavnet struts vises på skjermen
    x = nr.indexOf(tilfeldig); //x settes til indeksen til "9" som representerer struts
  }
  else if (tilfeldig == 10) { //Om det tilfeldige tallet er 10 så...
    document.getElementById("dyrenavn").innerHTML = "Pinguin"; //skal dyrenavnet pingvin vises på skjermen
    x = nr.indexOf(tilfeldig); //x settes til indeksen til "10" som representerer pingvin
  }
  else if (tilfeldig == 11) { //Om det tilfeldige tallet er 11 så...
    document.getElementById("dyrenavn").innerHTML = "Geier"; //skal dyrenavnet gribb vises på skjermen
    x = nr.indexOf(tilfeldig); //x settes til indeksen til "11" som representerer gribb
  }
  else if (tilfeldig == 12) { //Om det tilfeldige tallet er 12 så...
    document.getElementById("dyrenavn").innerHTML = "Dromedar"; //skal dyrenavnet dromedar vises på skjermen
    x = nr.indexOf(tilfeldig); //x settes til indeksen til "12" som representerer dromedar
  }
  else if (tilfeldig == 13) { //Om det tilfeldige tallet er 13 så...
    document.getElementById("dyrenavn").innerHTML = "Krokodil"; //skal dyrenavnet krokodille vises på skjermen
    x = nr.indexOf(tilfeldig); //x settes til indeksen til "13" som representerer krokodille
  }
  else if (tilfeldig == 14) { //Om det tilfeldige tallet er 14 så...
    document.getElementById("dyrenavn").innerHTML = "Löwe"; //skal dyrenavnet løve vises på skjermen
    x = nr.indexOf(tilfeldig); //x settes til indeksen til "14" som representerer løve
  }
  else if (tilfeldig == 15) { //Om det tilfeldige tallet er 15 så...
    document.getElementById("dyrenavn").innerHTML = "Ameisenbär"; //skal dyrenavnet maursluker vises på skjermen
    x = nr.indexOf(tilfeldig); //x settes til indeksen til "15" som representerer maursluker
  }
  else if (tilfeldig == 16) { //Om det tilfeldige tallet er 16 så...
    document.getElementById("dyrenavn").innerHTML = "Panda"; //skal dyrenavnet panda vises på skjermen
    x = nr.indexOf(tilfeldig); //x settes til indeksen til "16" som representerer panda
  }
  else if (tilfeldig == 17) { //Om det tilfeldige tallet er 17 så...
    document.getElementById("dyrenavn").innerHTML = "Zebra"; //skal dyrenavnet sebra vises på skjermen
    x = nr.indexOf(tilfeldig); //x settes til indeksen til "17" som representerer sebra
  }
}

function dyrenavnet() {
  i += 1; //Plusser på en til variabelen for hvor mange dyrenavn som er vist
  tilfeldig = Math.floor(Math.random() * 17)+1; //Regner ut et tilfeldig tall for å avgjøre dyrenavnet som skal vises
  if (nr.includes(tilfeldig)) { //Om tallet er i listen så...
    navnet(); //skal funksjonen navnet starte
  }
  while (nr.includes(tilfeldig)==false) { //Så lenge tallet ikke finnes i listen så...
    tilfeldig = Math.floor(Math.random() * 17)+1; //skal et nytt tall beregnes
    if (nr.includes(tilfeldig)) { //Om tallet er i listen så...
      navnet(); //Skal funksjonen navnet starte
      { break; } //Hopper ut av loopen
    }
  }
  if (nr.length > 1) { //Om det er mer enn et dyr igjen så...
    nr.splice(x,1); //skal nummeret til dyret fjernes fra listen
  }
  if (i == 18) { //Om det er det 10. dyrenavnet som skal vises så...
    document.getElementById("dyrenavn").innerHTML =
    "Gratulerer, du klarte å få alle dyrenavnene riktig!"; //skal ikke dyrenavnet vises, men denne beskjeden
    document.getElementById("gratulerer").width = "490"; //Gratulasjonsbilde bredde
    document.getElementById("gratulerer").height = "320"; //Gratulasjonsbilde høyde
    document.getElementById("btnAvslutt").innerHTML = "Start på nytt"; //Endrer teksten på avslutt-knappen
    document.getElementById("btnAvslutt").width = "150"; //Endrer bredden på avslutt-knappen
  }
}
