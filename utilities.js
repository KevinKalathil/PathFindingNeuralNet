function animate(){
    backgroundCtx.clearRect(0, 0, background.width, background.height);
    path.forEach(rectangle => {
        rectangle.draw();
        agent.collision(rectangle);
    })
    agent.speedY = Net.forwardProp()*1;
    if(counter%100==0){
        Net.backProp();
    }
    vert.innerHTML = agent.speedY;
    agent.getMarkerLengths();
    agent.draw();
    agent.update();
    target.draw();
    counter++;
    requestAnimationFrame(animate);
}

let counter=0;
animate();