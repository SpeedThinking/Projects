// set up canvas
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random RGB color value
function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

class Shape {
  constructor(x, y, velX, velY) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
  }
}

class Ball extends Shape {
  constructor(x, y, velX, velY, color, size) {
    super(x, y, velX, velY);
    this.color = color;
    this.size = size;
    this.exists=exists;
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }

  update() {
    if ((this.x + this.size) >= width || (this.x - this.size) <= 0) {
      this.velX = -this.velX;
    }

    if ((this.y + this.size) >= height || (this.y - this.size) <= 0) {
      this.velY = -this.velY;
    }

    this.x += this.velX;
    this.y += this.velY;
  }

  collisionDetect() {
    for (const ball of balls) {
      if (!(this === ball)) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + ball.size) {
          ball.color = this.color = randomRGB();
        }
      }
    }
  }
}

const balls = [];

while (balls.length < 45) {
  const size = random(10, 20);
  const ball = new Ball(
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    randomRGB(),
    size
  );

  balls.push(ball);
}

function loop() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
  ctx.fillRect(0, 0, width, height);

  for (const ball of balls) {
    ball.draw();
    ball.update();
    ball.collisionDetect();
  }

  requestAnimationFrame(loop);
}

loop();

class EvilCircle extends Shape {
    constructor(x, y) {
      super(x, y, 20, 20); // Hereda x, y, velX, velY de Shape y establece velX y velY en 20
      this.color = 'white';
      this.size = 10;
      this.exists = true; // Agrega la propiedad 'exists' que se hereda de Shape
 }
    draw() {
        ctx.beginPath();
        ctx.stroteStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.lineWidth = 3;
 }
      checkBounds() {
            if ((this.x + this.size) >= width || (this.x - this.size) <= 0) {
              this.x = -this.y;
            }
        
            if ((this.y + this.size) >= height || (this.y - this.size) <= 0) {
              this.x = -this.y;
     };
        
 }
          setControls() {
            var _this = this;
            window.onkeydown = function (e) {
              if (e.keyCode === 65) {
                _this.x -= _this.velX;
              } else if (e.keyCode === 68) {
                _this.x += _this.velX;
              } else if (e.keyCode === 87) {
                _this.y -= _this.velY;
              } else if (e.keyCode === 83) {
                _this.y += _this.velY;
              }
     };
  }
  collisionDetect() {
    for (const ball of balls) {
        if (!(this === EvilCircle)) {
          const dx = this.x - ball.x;
          const dy = this.y - ball.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
  
          }
        }
      }
  }
  const evilCircle = new EvilCircle(100, 100); // Create a new EvilCircle instance
  evilCircle.setControls(); // Enable controls for the EvilCircle
  
  // Your previous code for creating and updating balls...
  
  function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(0, 0, width, height);
  
    evilCircle.draw(); // Draw the EvilCircle
    evilCircle.checkBounds(); // Check bounds for the EvilCircle
  
    for (const ball of balls) {
      if (ball.exists) { // Only update and detect collision for existing balls
        ball.draw();
        ball.update();
        ball.collisionDetect();
      }
    }
  
    requestAnimationFrame(loop);
  }
  
  loop();
  var pepe =document.querySelector("p")
  let ballCount = 0;
  while (balls.length < 45) {
    // ... (Código existente para crear bolas)
    
    balls.push(Ball);
    ballCount++; // Incrementa el contador cuando agregas una bola
  
    // Actualiza el contenido del elemento HTML 'p' con el número de bolas
    pepe.textContent = `Bolas en pantalla: ${ballCount}`;
  
    requestAnimationFrame(loop);
  }
  loop();
