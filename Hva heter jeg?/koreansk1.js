//Her kommer scriptet
window.onload = oppstart; //Det som skal utføres når siden er ferdig lastet
//Setter variabler
var tilfeldig = 10; //Variabel som bestemmer hvilket dyrenavn som skal vises
var x = 10; //Variabel som bestemmer hvilket element som skal fjernes fra listen "nr"
var i = 0; //Teller antall dyrenavn som har blitt vist
var nr = [1,2,3,4,5,6,7,8,9]; //Liste hvr hvert nummer representerer et dyr
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
  if (tilfeldig == 1) { //Om det var dyr 1 (gris) som skulle trykkes så...
    document.getElementById("en").innerHTML = " "; //skal bildet av gris fjernes
    dyrenavnet(); //Setter igang funksjonen dyrenavnet for å vise et nytt dyrenavn
  }
  else {
    feilklikk(); //Endre antall feilklikk
  }
}
function sjekkto() {
  if (tilfeldig == 2) { //Om det var dyr 2 (sau) som skulle trykkes så...
    document.getElementById("to").innerHTML = " "; //skal bildet av sau fjernes
    dyrenavnet(); //Setter igang funksjonen dyrenavnet for å vise et nytt dyrenavn
  }
  else {
    feilklikk(); //Endre antall feilklikk
  }
}
function sjekktre() {
  if (tilfeldig == 3) { //Om det var dyr 3 (katt) som skulle trykkes så...
    document.getElementById("tre").innerHTML = " "; //skal bildet av katt fjernes
    dyrenavnet(); //Setter igang funksjonen dyrenavnet for å vise et nytt dyrenavn
  }
  else {
    feilklikk(); //Endre antall feilklikk
  }
}
function sjekkfire() {
  if (tilfeldig == 4) { //Om det var dyr 4 (hund) som skulle trykkes så...
    document.getElementById("fire").innerHTML = " "; //skal bildet av hund fjernes
    dyrenavnet(); //Setter igang funksjonen dyrenavnet for å vise et nytt dyrenavn
  }
  else {
    feilklikk(); //Endre antall feilklikk
  }
}
function sjekkfem() {
  if (tilfeldig == 5) { //Om det var dyr 5 (hest) som skulle trykkes så...
    document.getElementById("fem").innerHTML = " "; //skal bildet av hest fjernes
    dyrenavnet(); //Setter igang funksjonen dyrenavnet for å vise et nytt dyrenavn
  }
  else {
    feilklikk(); //Endre antall feilklikk
  }
}
function sjekkseks() {
  if (tilfeldig == 6) { //Om det var dyr 6 (geit) som skulle trykkes så...
    document.getElementById("seks").innerHTML = " "; //skal bildet av geit fjernes
    dyrenavnet(); //Setter igang funksjonen dyrenavnet for å vise et nytt dyrenavn
  }
  else {
    feilklikk(); //Endre antall feilklikk
  }
}
function sjekksju() {
  if (tilfeldig == 7) { //Om det var dyr 7 (kylling) som skulle trykkes så...
    document.getElementById("sju").innerHTML = " "; //skal bildet av kylling fjernes
    dyrenavnet(); //Setter igang funksjonen dyrenavnet for å vise et nytt dyrenavn
  }
  else {
    feilklikk(); //Endre antall feilklikk
  }
}
function sjekkatte() {
  if (tilfeldig == 8) { //Om det var dyr 8 (høne) som skulle trykkes så...
    document.getElementById("atte").innerHTML = " "; //skal bildet av høne fjernes
    dyrenavnet(); //Setter igang funksjonen dyrenavnet for å vise et nytt dyrenavn
  }
  else {
    feilklikk(); //Endre antall feilklikk
  }
}
function sjekkni() {
  if (tilfeldig == 9) { //Om det var dyr 9 (kanin) som skulle trykkes så...
    document.getElementById("ni").innerHTML = " "; //skal bildet av kanin fjernes
    dyrenavnet(); //Setter igang funksjonen dyrenavnet for å vise et nytt dyrenavn
  }
  else {
    feilklikk(); //Endre antall feilklikk
  }
}

function navnet() {
  if (tilfeldig == 1) { //Om det tilfeldige tallet er 1 så...
    document.getElementById("dyrenavn").innerHTML = "\uB3FC"+"\uC9C0"; //skal dyrenavnet gris vises på skjermen
    document.getElementById("dyrenavn").src = ""
    x = nr.indexOf(tilfeldig); //x settes til indeksen til "1" som representerer gris
  }
  else if (tilfeldig == 2) { //Om det tilfeldige tallet er 2 så...
    document.getElementById("dyrenavn").innerHTML = "\uC591"; //skal dyrenavnet sau vises på skjermen
    x = nr.indexOf(tilfeldig); //x settes til indeksen til "2" som representerer sau
  }
  else if (tilfeldig == 3) { //Om det tilfeldige tallet er 3 så...
    document.getElementById("dyrenavn").innerHTML = "\uACE0"+"\uC591"+"\uC774"; //skal dyrenavnet katt vises på skjermen
    x = nr.indexOf(tilfeldig); //x settes til indeksen til "3" som representerer katt
  }
  else if (tilfeldig == 4) { //Om det tilfeldige tallet er 4 så...
    document.getElementById("dyrenavn").innerHTML = "\uAC1C"; //skal dyrenavnet hund vises på skjermen
    x = nr.indexOf(tilfeldig); //x settes til indeksen til "4" som representerer hund
  }
  else if (tilfeldig == 5) { //Om det tilfeldige tallet er 5 så...
    document.getElementById("dyrenavn").innerHTML = "\uB9D0"; //skal dyrenavnet hest vises på skjermen
    x = nr.indexOf(tilfeldig); //x settes til indeksen til "5" som representerer hest
  }
  else if (tilfeldig == 6) { //Om det tilfeldige tallet er 6 så...
    document.getElementById("dyrenavn").innerHTML = "\uC5FC"+"\uC18C"; //skal dyrenavnet geit vises på skjermen
    x = nr.indexOf(tilfeldig); //x settes til indeksen til "6" som representerer geit
  }
  else if (tilfeldig == 7) { //Om det tilfeldige tallet er 7 så...
    document.getElementById("dyrenavn").innerHTML = "\uAC00"+"\uAE08"+"\uB958"; //skal dyrenavnet kylling vises på skjermen
    x = nr.indexOf(tilfeldig); //x settes til indeksen til "7" som representerer kylling
  }
  else if (tilfeldig == 8) { //Om det tilfeldige tallet er 8 så...
    document.getElementById("dyrenavn").innerHTML = "\uC554"+"\uD0C9"; //skal dyrenavnet høne vises på skjermen
    x = nr.indexOf(tilfeldig); //x settes til indeksen til "8" som representerer høne
  }
  else if (tilfeldig == 9) { //Om det tilfeldige tallet er 9 så...
    document.getElementById("dyrenavn").innerHTML = "\uD1A0"+"\uB07C"; //skal dyrenavnet kanin vises på skjermen
    x = nr.indexOf(tilfeldig); //x settes til indeksen til "9" som representerer kanin
  }
}

function dyrenavnet() {
  i += 1; //Plusser på en til variabelen for hvor mange dyrenavn som er vist
  tilfeldig = Math.floor(Math.random() * 9)+1; //Regner ut et tilfeldig tall for å avgjøre dyrenavnet som skal vises
  if (nr.includes(tilfeldig)) { //Om tallet er i listen så...
    navnet(); //skal funksjonen navnet starte
  }
  while (nr.includes(tilfeldig)==false) { //Så lenge tallet ikke finnes i listen så...
    tilfeldig = Math.floor(Math.random() * 9)+1; //skal et nytt tall beregnes
    if (nr.includes(tilfeldig)) { //Om tallet er i listen så...
      navnet(); //Skal funksjonen navnet starte
      { break; } //Hopper ut av loopen
    }
  }
  if (nr.length > 1) { //Om det er mer enn et dyr igjen så...
    nr.splice(x,1); //skal nummeret til dyret fjernes fra listen
  }
  if (i == 10) { //Om det er det 10. dyrenavnet som skal vises så...
    document.getElementById("dyrenavn").innerHTML =
    "Gratulerer, du klarte å få alle dyrenavnene riktig!"; //skal ikke dyrenavnet vises, men denne beskjeden
    document.getElementById("gratulerer").width = "490"; //Gratulasjonsbilde bredde
    document.getElementById("gratulerer").height = "320"; //Gratulasjonsbilde høyde
    document.getElementById("btnAvslutt").innerHTML = "Start på nytt"; //Endrer teksten på avslutt-knappen
    document.getElementById("btnAvslutt").width = "150"; //Endrer bredden på avslutt-knappen
  }
}
