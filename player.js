class Player 
{
    constructor()
    {
        this.index = null;
        this.distance = 0;
        this.name = null;
    }

    getCount()
    {
        var readplayercount = database.ref('playercount');
        readplayercount.on("value",function(data)
        {
            playercount = data.val();
        })
    }

    updateCount(count)
    {
        database.ref('/').update({
        playercount:count
        })
    }

    update()
    {
        var playerindex = "players/player" + this.index;
        database.ref(playerindex).set({
            name:this.name,
            distance:this.distance
        })
    }

    static getplayerinfo()
    {
        var infoplayer = database.ref('players');
        infoplayer.on("value",(data)=>
        {
            allplayers = data.val()
        })
    }

}

