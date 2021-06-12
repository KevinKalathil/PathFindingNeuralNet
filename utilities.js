function animate(){
    backgroundCtx.clearRect(0, 0, background.width, background.height);
    agents.forEach(agent => {
        path.forEach(rectangle => {
            rectangle.draw();
            agent.collision(rectangle);
        })    
    })

    agents.forEach(agent => {
        agent.speedY = Net.forwardProp(agent)*2;
        vert.innerHTML = agent.speedY;
        agent.getMarkerLengths();
        agent.draw();
        agent.update();
    })
    target.draw();    

    requestAnimationFrame(animate);
}

let counter=0;
animate();