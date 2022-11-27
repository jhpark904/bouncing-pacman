let pos = 0;
const pacArray = [
    ['PacMan1.png', 'PacMan2.png'],
    ['PacMan3.png', 'PacMan4.png']
];
let direction = 0;
const pacMen = []; // This array holds all the pacmen

function setToRandom(scale) {
    return {
        x: Math.random() * scale,
        y: Math.random() * scale
    }
}

// Factory to make a PacMan at a random position with random velocity
function makePac() {
    // returns an object with random values scaled {x: 33, y: 21}
    let velocity = setToRandom(10); // {x:?, y:?}
    let position = setToRandom(200);

    // Add image to div id = game
    let game = document.getElementById('game');
    let newimg = document.createElement('img');
    newimg.style.position = 'absolute';
    newimg.src = 'PacMan1.png';
    newimg.width = 100;

    // set position
    newimg.left = position.x;
    newimg.top = position.y;

    // add new Child image to game
    game.appendChild(newimg);

    // return details in an object
    return {
        position,
        velocity,
        newimg
    }
}

function update() {
    //loop over pacmen array and move each one and move image in DOM
    pacMen.forEach((item) => {
        checkCollisions(item)
        item.position.x += item.velocity.x;
        item.position.y += item.velocity.y;

        item.newimg.style.left = item.position.x;
        item.newimg.style.top = item.position.y;
    })
    setTimeout(update, 20);
}

function checkCollisions(item) {
    // detect collision with all walls and make pacman bounce
    if (item.position.x <= 0 || item.position.x + item.newimg.width >= window.innerWidth) {
        item.velocity.x *= -1;
    }
    if (item.position.y <= 0 || item.position.y + item.newimg.height >= window.innerHeight) {
        item.velocity.y *= -1;
    }
}

function makeOne() {
    pacMen.push(makePac()); // add a new PacMan
}