const world = [
    [1,1,1,1,1,1,1,1,1,1],
    [2,2,1,2,2,2,2,2,2,1],
    [1,2,2,2,1,2,1,2,2,1],
    [1,2,1,1,1,1,1,2,1,1],
    [1,2,1,1,1,2,2,2,2,1],
    [1,2,2,2,2,2,1,2,1,1],
    [1,2,1,1,1,1,1,2,2,1],
    [1,2,1,2,2,2,2,1,2,1],
    [1,2,2,2,1,1,2,1,2,1],
    [1,1,1,1,1,1,2,2,2,1],
];

//Dict is a key to a value, the left side is the value of whats on the right side
const worldDict = {
    0: 'blank',
    1: 'wall',
    2: 'sushi'
}

//iterate through each row 

function drawWorld() {
    output = "";

    for(let row = 0; row < world.length; row++) {
        output += "<div class = 'row'>";
        for(let x = 0; x < world[row].length; x++){
            output += "<div class = '" + worldDict[world[row][x]] + "'></div>"
        }
        output += "</div>";
    }
    document.getElementById('world').innerHTML = output; 
}
drawWorld();

//keep track of Sushi Ninja's coordinates 

const sushiNinja = {
    x: 0, 
    y: 0
}

function drawSushiNinja() {
    document.getElementById('sushininja').style.left = sushiNinja.x * 50 +"px"
    document.getElementById('sushininja').style.top = sushiNinja.y * 50 +"px"
} 
drawSushiNinja()

document.onkeydown = function(e) {
    if('ArrowLeft' === e.key) {
        if(world[sushiNinja.y][sushiNinja.x - 1] !=1) {
        sushiNinja.x--;
        }
    }
    if('ArrowRight' === e.key) {
        if(world[sushiNinja.y][sushiNinja.x + 1] !=1) {
        sushiNinja.x ++;
        } 
    }
    if('ArrowUp' === e.key) {
        if(world[sushiNinja.y - 1][sushiNinja.x] !=1) {
        sushiNinja.y--;
        }
    }
    if('ArrowDown' === e.key) {
        if(world[sushiNinja.y + 1][sushiNinja.x] !=1) { 
            sushiNinja.y++;
        }
    }
    world[sushiNinja.y][sushiNinja.x] = 0;
    drawSushiNinja()
    drawWorld()
}


    //find a way to keep score of each sushi they eat
    //sushi = 10pts onigiri = 5 pts
    //hacker challenge create a random world
    //create ghosts to chase 