const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const floor = document.getElementById('floor');
const player = document.getElementById('player');
const diamond = document.getElementById('diamond');
const wall = document.getElementById('wall');

const size = 70;
const position = {x: 5, y: 0};

const world = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0],
  [1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

function update() {
  for (let n = 0; n < 10; n ++) {
  for (let i = 0; i < 10; i++) {
    if (world[position.y+n][i] === 0){
        ctx.drawImage(floor, i * 70, n * 70, 70, 70);
    } else {
        ctx.drawImage(wall, i * 70, n * 70, 70, 70);
    }
  }
}
ctx.drawImage(player, position.x * 70, 280, 70, 70);
}

update();

function onKeyPress(event) {
    // Nyilak kezelése
    switch (event.keyCode) {
      case 37:
        position.x -= 1;
        ctx.drawImage(player, position.x * 70, 280, 70, 70);
        ctx.drawImage(floor, position.x * 70 + 70, 280, 70, 70);
        break;
      case 38:
      
                  position.y -= 1;
          update();
        break;
          if (world[0 - position.y - 1][position.x] === 0) {

        }
      case 39:
          position.x += 1
          ctx.drawImage(player, position.x * 70, 280, 70, 70);
          ctx.drawImage(floor, position.x * 70 - 70, 280, 70, 70);
        break;
        
      case 40:
        position.y += 1
        update();
        
        break;
        
      case 32:
          alert('x: ' + position.x + ', y: ' + position.y);
        break;
    }
  }


  document.body.addEventListener('keydown', onKeyPress);
