const nameSpaceShuttle = "Determination";
let shuttlespeedmph = 17500;
let distanceToMarsKm = 225000000;
let distanceToMoon = 384400;
let milesPerKilometer = 0.621;

console.log(typeof nameSpaceShuttle);
console.log(typeof shuttlespeedmph);
console.log(typeof distanceToMarsKm);
console.log(typeof distanceToMoon);
console.log(typeof milesPerKilometer);
console.log('-------------------------');

let distanceToMarsMiles = distanceToMarsKm *= milesPerKilometer;
let totalHours = distanceToMarsMiles / shuttlespeedmph;
let totalDays = totalHours / 24;

let result = nameSpaceShuttle + " will take " + totalDays + " days to reach Mars."
document.getElementById("shuttleRoute").innerHTML = result;
