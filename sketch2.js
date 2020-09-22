var database,gamestate,playercount;
var player,game,form;
var allplayers;
var car1,car2,car3,car4,cars;
var car1img,car2img,car3img,car4img,trackimg;

function preload()
{
car1img = loadImage("images/car1.png")
car2img = loadImage("images/car2.png")
car3img = loadImage("images/car3.png")
car4img = loadImage("images/car4.png")
trackimg = loadImage("images/track.jpg")
}


function setup()
{
    createCanvas(displayWidth - 10,displayHeight - 10);
    database = firebase.database();
    gamestate = 0;
    game = new Game()
    game.getstate()
    game.start()
}

function draw()
{
if (playercount === 4)
{
    game.update(1);
}
if(gamestate === 1)
{
   clear()

    game.play()
}

    if (gamestate===2)
    {
        game.end();
    }
}