const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const floor = document.getElementById('floor');
const player = document.getElementById('player');
const diamond = document.getElementById('diamond');
const wall = document.getElementById('wall');

  const world = [[['wall']['wall']['wall']['wall']['wall']['wall']['wall']['wall']['wall']['wall']['wall']]
  [['floor']['floor']['floor']['floor']['floor']['floor']['floor']['floor']['floor']['floor']['floor']]
  [['floor']['floor']['floor']['floor']['floor']['floor']['floor']['floor']['floor']['floor']['floor']]
  [['floor']['floor']['floor']['floor']['floor']['floor']['floor']['wall']['floor']['floor']['floor']]
  [['floor']['floor']['floor']['floor']['floor']['floor']['floor']['wall']['floor']['floor']['floor']]
  [['floor']['floor']['floor']['floor']['floor']['floor']['floor']['wall']['floor']['floor']['floor']]
  [['floor']['floor']['floor']['floor']['floor']['floor']['floor']['floor']['floor']['floor']['floor']]
  [['floor']['floor']['floor']['floor']['floor']['floor']['floor']['floor']['floor']['floor']['floor']]
  [['floor']['floor']['floor']['floor']['floor']['floor']['floor']['floor']['floor']['floor']['floor']]];
  
for (let n = 0; n < 10; n ++) {

  for (let i = 0; i < 11; i++) {
     ctx.drawImage(world [i][n] , i * 70, n * 70, 70, 70);
}
}
ctx.drawImage(player, 350, 280, 70, 70);

const size = 70;
const position = {x: 5, y: 0};

function onKeyPress(event) {
    // Nyilak kezelése
    switch (event.keyCode) {
      case 37:
        position.x -= 1;
        ctx.drawImage(player, position.x * 70, 280, 70, 70);
        ctx.drawImage(floor, position.x * 70 + 70, 280, 70, 70);
        break;
      case 38:
        position.y += 1;
        
        break;
      case 39:
        position.x += 1
        ctx.drawImage(player, position.x * 70, 280, 70, 70);
        ctx.drawImage(floor, position.x * 70 - 70, 280, 70, 70);
        break;
      case 40:
        position.y -= 1
        
        break;
      case 32:
        alert('space');
        break;
    }
  }

  
          //alert(`x: ${position.x}, y: ${position.y}`);
          //alert('x: ' + position.x + ', y: ' + position.y);

  document.body.addEventListener('keydown', onKeyPress);
