class Form 
{
    constructor()
        {
            this.input = createInput("Name"); 
           this.button = createButton('Play');
           this.reset = createButton("Reset");
        }

        hide()
        {
          this.input.hide();
          this.button.hide();
          this.greeting.hide();
        }

        display()
        {
            var title = createElement('h2');
            title.html("Car Racing Game");
            title.position(132,0);
             this.input.position(130, 160);
             this.button.position(250, 200);   
            this.button.mousePressed(() =>
             { 
                this.input.hide(); 
               this.button.hide();   
                 player.name = this.input.value();
                 playercount+=1; 
                 player.index = playercount;
                 player.update();
                   player.updateCount(playercount); 
                  this.greeting = createElement('h3'); 
                this.greeting.html("Hello " + player.name) ;
                 this.greeting.position(130, 160)
            });  
            this.reset.position(displayWidth-100,20);
            this.reset.mousePressed(()=>
            {
              player.updateCount(0);
              game.update(0);
              database.ref("players").remove();
            }

            );

        }

    }