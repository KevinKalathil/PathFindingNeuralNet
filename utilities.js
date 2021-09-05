function animate(){
    backgroundCtx.clearRect(0, 0, background.width, background.height);
    updateGraph();
    agents.forEach(agent => {
        path.forEach(rectangle => {
            rectangle.draw();
            if(agent.collision(rectangle)){
                Net.backProp(agent);
                // agent.speedY = Net.forwardProp(agent)*2;
                // // vert.innerHTML = agent.speedY;
                // agent.getMarkerLengths();
                // agent.draw();
                // agent.update();
            }
        })    
    })

    agents.forEach(agent => {
        // if(counter%1==0)Net.backProp(agent);
        agent.speedY = Net.forwardProp(agent);
        // vert.innerHTML = agent.speedY;
        agent.getMarkerLengths();
        agent.draw();
        agent.update();
    })
    target.draw();    
    counter++;
    requestAnimationFrame(animate);
}

let counter=0;
animate();