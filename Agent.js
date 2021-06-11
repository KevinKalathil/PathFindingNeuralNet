class Agent {

    constructor(){
        this.height = 20;
        this.width = 20;
        this.color = 'red'
        this.INITPOSX = 20;
        this.INITPOSY = (path[0].posy+path[1].posy-10)/2;
        this.posx = this.INITPOSX;
        this.posy = this.INITPOSY;
        this.speedX = 0.5;
        this.speedY = 0;

        //8 markers to represent distance from path
        this.topLeftUP = (pathWidth - this.width);
        this.topLeftLEFT = (pathWidth - this.width);
        this.topRightUP = (pathWidth - this.width);
        this.topRightRIGHT = (pathWidth - this.width);
        this.bottomLeftLEFT = (pathWidth - this.width);
        this.bottomLeftDOWN = (pathWidth - this.width);
        this.bottomRightRIGHT = (pathWidth - this.width);
        this.bottomRightDOWN = (pathWidth - this.width);
        this.topLeftUP = 2*length;
        this.topLeftLEFT = 2*length;
        this.topRightUP = 2*length;
        this.topRightRIGHT = 2*length;
        this.bottomLeftLEFT = 2*length;
        this.bottomLeftDOWN = 2*length;
        this.bottomRightRIGHT = 2*length;
        this.bottomRightDOWN = 2*length;


        // this.posy = 340;
    }

    draw(){
        playerSurfaceCtx.fillStyle = 'red'
        playerSurfaceCtx.fillRect(this.posx,this.posy,this.height,this.width);
    }
    update(){
        this.INITPOSX = 20;
        this.INITPOSY = (path[0].posy+path[1].posy)/2;
        this.posx+=this.speedX;
        this.posy+=this.speedY;
        // if(this.posx%100==0){
        //     playerPos.innerHTML = this.posx.toString();
        //     misc.innerHTML = (this.posx+this.width).toString();
        //     playerPosy.innerHTML = this.posy.toString();
        //     miscy.innerHTML = (this.posy+this.height).toString();
        // } 
        
        if(this.posx>playerSurface.width) this.posx=0;
    }
    collision(obstacle){
        // console.log(this.posx, this.posy);
        // console.log(obstacle.posx, obstacle.posy);


        if(
            //top left corner of agent
            ( (this.posx>=obstacle.posx && this.posx <= (obstacle.posx+obstacle.length))) && (this.posy>=obstacle.posy && this.posy <= (obstacle.posy+obstacle.height))
            || 
            ( ( (this.posx+this.width)>=obstacle.posx && (this.posx+this.width) <= (obstacle.posx+obstacle.length))) && (this.posy>=obstacle.posy && (this.posy+this.height) <= (obstacle.posy+obstacle.height))
            ||
            ( (this.posx>=obstacle.posx && this.posx <= (obstacle.posx+obstacle.length))) && ( (this.posy+this.height)>=obstacle.posy && (this.posy+this.height) <= (obstacle.posy+obstacle.height))
            ||
            ( ((this.posx+this.width)>=obstacle.posx && (this.posx+this.width) <= (obstacle.posx+obstacle.length))) && ( (this.posy+this.height)>=obstacle.posy && (this.posy+this.height) <= (obstacle.posy+obstacle.height))
        ){
                console.log('HIT')
                this.posx = this.INITPOSX
                this.posy = this.INITPOSY
        }
    }

    getMarkerLengths () {
        // this.topLeftUP = length;
        // this.topLeftLEFT = length;
        // this.topRightUP = length;
        // this.topRightRIGHT = length;
        // this.bottomLeftLEFT = length;
        // this.bottomLeftDOWN = length;
        // this.bottomRightRIGHT = length;
        // this.bottomRightDOWN = length;
        this.topLeftUP = 2*length;
        this.topLeftLEFT = 2*length;
        this.topRightUP = 2*length;
        this.topRightRIGHT = 2*length;
        this.bottomLeftLEFT = 2*length;
        this.bottomLeftDOWN = 2*length;
        this.bottomRightRIGHT = 2*length;
        this.bottomRightDOWN = 2*length;

        path.forEach(rectangle =>{
            if((rectangle.posx<=this.posx && this.posx<=rectangle.posx+rectangle.length) && rectangle.posy<=this.posy){
                this.topLeftUP = Math.min(this.topLeftUP, Math.abs(rectangle.posy+rectangle.height - this.posy) );
            }
            if( (rectangle.posy<=this.posy && this.posy<=rectangle.posy+rectangle.height) && this.posx>=rectangle.posx){
                this.topLeftLEFT = Math.min(this.topLeftLEFT, Math.abs(rectangle.posx+rectangle.length - this.posx));
            }
            if((rectangle.posx<=(this.posx+this.width) && (this.posx+this.width)<=rectangle.posx+rectangle.length) && rectangle.posy<=this.posy){
                this.topRightUP = Math.min(this.topRightUP, Math.abs(rectangle.posy+rectangle.height - this.posy));
            }
            if((rectangle.posy<=this.posy && this.posy<=rectangle.posy+rectangle.height) && this.posx<=rectangle.posx){
                this.topRightRIGHT = Math.min(this.topRightRIGHT, Math.abs(rectangle.posx - (this.posx+this.width)));
            }
            if((rectangle.posx<=this.posx && this.posx<=(rectangle.posx+rectangle.length)) && this.posy+this.height<=rectangle.posy){
                this.bottomLeftDOWN = Math.min(this.bottomLeftDOWN, Math.abs(this.posy+this.height - rectangle.posy));
            }
            if((rectangle.posy<=(this.posy+this.height) && (this.posy+this.height)<=rectangle.posy+rectangle.height) && this.posx>=rectangle.posx){
                this.bottomLeftLEFT = Math.min(this.bottomLeftLEFT, Math.abs(rectangle.posx+rectangle.length - this.posx));
            }
            if((rectangle.posx<=(this.posx+this.width) && (this.posx+this.width)<=rectangle.posx+rectangle.length) && this.posy+this.height<=rectangle.posy){
                this.bottomRightDOWN = Math.min(this.bottomRightDOWN, Math.abs(this.posy+this.height - rectangle.posy));
            }
            if((rectangle.posy<=(this.posy+this.height) && (this.posy+this.height)<=rectangle.posy+rectangle.height) && this.posx<=rectangle.posx){
                this.bottomRightRIGHT = Math.min(this.bottomRightRIGHT, Math.abs((this.posx+this.width) - rectangle.posx));
            }
            // this.topLeftLEFT/=70;
            // this.topLeftUP/=70;
            // this.topRightUP/=70;
            // this.topRightRIGHT/=70;
            // this.bottomLeftLEFT/70;
            // this.bottomLeftUP/=70;
            // this.bottomRightUP/=70;
            // this.bottomRightRIGHT/=70;            

            topLeftUPElem.innerHTML = this.topLeftUP;
            topLeftLEFTElem.innerHTML = this.topLeftLEFT;
            topRightUPElem.innerHTML = this.topRightUP;
            topRightRIGHTElem.innerHTML = this.topRightRIGHT;
            bottomLeftLEFTElem.innerHTML = this.bottomLeftLEFT;
            bottomLeftDOWNElem.innerHTML = this.bottomLeftDOWN;
            bottomRightRIGHTElem.innerHTML = this.bottomRightRIGHT;
            bottomRightDOWNElem.innerHTML = this.bottomRightDOWN;


        })


    }


}

const agent = new Agent();