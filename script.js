
function calculate(){

let frontage = parseFloat(document.getElementById("frontage").value);
let depth = parseFloat(document.getElementById("depth").value);
let aper = parseFloat(document.getElementById("aper").value);
let atank = parseFloat(document.getElementById("atank").value);
let frag = parseFloat(document.getElementById("frag").value);

let perimeter = (frontage + depth) * 2;

let barbedWire = Math.ceil(perimeter * 2 * 1.1 / 100);

let laip = Math.ceil(perimeter / 12.5 * 1.1);

let mines = (aper + atank + frag) * frontage;

let lorry = Math.ceil(mines / 8000);

document.getElementById("perimeter").innerText = perimeter;
document.getElementById("wire").innerText = barbedWire;
document.getElementById("laip").innerText = laip;
document.getElementById("lorry").innerText = lorry;

}
