class Target {
    constructor(){
        this.posx = playerSurface.width-50;
        this.posy = (path[path.length-1].posy+path[path.length-2].posy)/2;
        this.height = 20;
        this.width = 20;
    }

    draw(){
        playerSurfaceCtx.fillStyle='green'
        this.posy = (path[path.length-1].posy+path[path.length-2].posy)/2;
        playerSurfaceCtx.fillRect(this.posx,this.posy,this.height,this.width);

    }
}

const target = new Target();