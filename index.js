
var num = "";
num = document.querySelector("#numButton");


function lenghtFeet() {
  // 1 meter === 3.281 feet therefore
  document.getElementById('m2f').innerHTML = "meters to feet: " + " " + num * 3.281;
}

function lengthMeters() {
  // 1 foot === 0.3048 meters therefore
  document.getElementById('f2m').innerHTML = "feet to meters: " + " " + num * 0.3048;
}

function volumeLiters() {
  // 1 liter === 0.2642 gallons
  document.getElementById("l2g").innerHTML = "liters to Gallons: " + " " + num * 0.2642;
}

function volumeGallons() {
  // 1 gallon === 3.7854 liters
  document.getElementById("g2l").innerHTML = "Gallons to Liters: " + " " + num * 3.7854;
}

function massKg() {
  // 1 kg === 2.2046 pounds
  document.getElementById("kg2p").innerHTML = "Kilograms to pounds: " + " " + num * 2.2046;
}

function massPounds() {
  // 1pound === 0.45359 kgs
  document.getElementById("p2kg").innerHTML = "Pounds to Kilograms: " + " " + num * 0.45359;
}


document.getElementById("numButton").addEventListener("keypress", function(e) {

  if (e.key === "Enter") {

    lengthMeters();
    lenghtFeet();
    volumeLiters();
    volumeGallons();
    massKg();
    massPounds();
  }
});
