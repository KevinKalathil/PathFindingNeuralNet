class Obstacle {

    constructor(posx, posy, length, height){
        this.posx = posx;
        this.posy = posy;
        this.length = Math.abs(length);
        this.height = Math.abs(height);
        // if(length<0) this.posx-=length 
        if(height<0) this.posy -= Math.abs(height)

    }

    draw(){
        backgroundCtx.fillStyle = 'black'
        backgroundCtx.fillRect(this.posx, this.posy, this.length, this.height)
    }
        
    
}

function initMap(){
    let arr = Array(1).fill().map(() => Math.round(Math.random()));
    path = []

    backgroundCtx.fillStyle = 'black';
    let starty = backgroundCtx.canvas.height/2;
    let startx = backgroundCtx.canvas.width;
    let sum=0;
    arr.forEach((element) => { sum+=element});
    
    starty *= sum/4;
    starty += backgroundCtx.canvas.height/4;
    
    console.log(startx, starty);
    backgroundCtx.fillRect(20,starty-pathWidth/2,length,stroke);
    path.push(new Obstacle(20,starty-pathWidth/2,length,stroke) );

    backgroundCtx.fillRect(20,starty+pathWidth/2,length,stroke);
    path.push(new Obstacle(20,starty+pathWidth/2,length,stroke));
    // ctx.fillRect(20,starty-pathWidth/2,length,stroke);
    // ctx.fillRect(20,starty+pathWidth/2,length,stroke);
    

    let curX = 20+length;
    let curY = starty-pathWidth/2;
    
    //0 is up 1 is down
    arr.forEach((element) => {
        console.log(element);
        if(element == 1){
            curX-=stroke;
    
            backgroundCtx.fillRect(curX,curY,stroke,-length);
            backgroundCtx.fillRect(curX,curY+pathWidth,pathWidth, stroke);    
            backgroundCtx.fillRect(curX+pathWidth-stroke,curY+pathWidth,stroke, -length);    
            backgroundCtx.fillRect(curX,curY-length,pathWidth, stroke);
            path.push(new Obstacle(curX,curY,stroke,-length) );
            path.push(new Obstacle(curX,curY+pathWidth,pathWidth, stroke) );
            path.push(new Obstacle(curX+pathWidth-stroke,curY+pathWidth,stroke, -length) );
            path.push(new Obstacle(curX,curY-length,pathWidth, stroke) );
            curX+=pathWidth;
            curY-=length;
    
            //horizontal
            backgroundCtx.fillRect(curX,curY,length,stroke);
            backgroundCtx.fillRect(curX,curY+pathWidth,length, stroke);    
            path.push(new Obstacle(curX,curY,length,stroke) );
            path.push(new Obstacle(curX,curY+pathWidth,length, stroke) );
            curX+=length;
            // ctx.fillRect(curX,starty-pathWidth/2,length,stroke);
            // ctx.fillRect(curX,starty+pathWidth/2,length,stroke);    
        
        }
        else{
            backgroundCtx.fillRect(curX,curY,pathWidth,stroke);
            backgroundCtx.fillRect(curX,curY+pathWidth,stroke, length);    
            backgroundCtx.fillRect(curX+pathWidth,curY,stroke, length);    
            backgroundCtx.fillRect(curX,curY+pathWidth+length,pathWidth,stroke);
            path.push(new Obstacle(curX,curY,pathWidth,stroke) );
            path.push(new Obstacle(curX,curY+pathWidth,stroke, length) );
            path.push(new Obstacle(curX+pathWidth,curY,stroke, length) );
            path.push(new Obstacle(curX,curY+pathWidth+length,pathWidth,stroke) );
            curX+=pathWidth;
            curY+=length;
    
            backgroundCtx.fillRect(curX,curY,length,stroke);
            backgroundCtx.fillRect(curX,curY+pathWidth,length, stroke);    
            path.push(new Obstacle(curX,curY,length,stroke) );
            path.push(new Obstacle(curX,curY+pathWidth,length, stroke) );
            curX+=length;
            
        }
    })
        


}

initMap();

