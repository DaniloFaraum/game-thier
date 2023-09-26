const player = document.getElementById('player')
const floor = document.getElementById('floor')
const spawner = document.getElementById('spawner')
const game = document.getElementById('game')
const test = document.createElement("div");


console.log(player.getBoundingClientRect());
console.log(spawner.getBoundingClientRect().x);
game.appendChild(test)
test.style.top = _Xpos + "px";

