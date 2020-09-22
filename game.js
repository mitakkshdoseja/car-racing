class Game
{
    constructor()
    {

    }

     getstate()
    {
        var gameStateRef = database.ref('gamestatus');
         gameStateRef.on("value",function(data)
         { gamestate = data.val(); })
    }

    play()
    {
        form.hide();
        text('gamestart',150,100);
        Player.getplayerinfo();
        var index = 0;
        var x = 175;
        var y;
        if (allplayers != undefined)
        {
            background("#c68767");
            image(trackimg,0,-displayHeight*4,displayWidth,displayHeight*5);
            var position = 170;
            for(var plr in allplayers)
            {
                index=index+1
                /*
            text(allplayers[plr].name+":" + allplayers[plr].distance,120,position)
            position   = position+20
            if(plr === "player" + player.index)
            {
                fill("red")
            }
            else
            {
                fill("black")
            }
            */
           x=x+200;
           y = displayHeight - allplayers[plr].distance
           cars[index-1].x =x 
           cars[index-1].y =y
           if (index===player.index)
           {
               fill("red");
               ellipse(x,y,60,60)
               cars[index-1].shapeColor = "red";
               camera.position.x = displayWidth/2;
               camera.position.y = cars[index-1].y;
           }
         
            }
        }
            if(keyIsDown(UP_ARROW)&& player.index != null)
            {
                player.distance = player.distance + 50;
                player.update();
            }
            if(player.distance>4350)
            {
                gamestate = 2
            }

        drawSprites();
    }

    update(state)
    { 
        database.ref('/').update({ gamestatus: state }); 
    }

    start()
    { 
        if(gamestate === 0)
        { 
            player = new Player();
            
             player.getCount();
              form = new Form();
               form.display(); 
        }
        car1 = createSprite(100,200);
        car1.addImage("car1",car1img);
        car2 = createSprite(300,200);
        car2.addImage("car2",car2img);
        car3 = createSprite(500,200);
        car3.addImage("car3",car3img);
        car4 = createSprite(700,200);
        car4.addImage("car4",car4img);
        cars = [car1,car2,car3,car4];
    }

    end()
    {
        console.log("Game  End")
    }
}
