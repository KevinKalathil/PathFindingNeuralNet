const netVisualization = document.getElementById('netVisualization');
const netVisualizationText = document.getElementById('netVisualizationText');
netVisualization.style.width = 800; 
netVisualization.style.height = 800; 
const increment = netVisualization.style.width/10;
const netVisualizationCtx = netVisualization.getContext('2d');
const netVisualizationTextCtx = netVisualizationText.getContext('2d');
netVisualizationTextCtx.font = "15px Arial";


function updateGraph(){
    netVisualizationTextCtx.clearRect(0, 0, netVisualizationText.width, netVisualizationText.height);

    for(let i=0;i<4;i++){
        netVisualizationCtx.beginPath();
        netVisualizationCtx.arc(72.5, 40.5+200*i, 30, 0, Math.PI * 2, true); // Outer circle
        netVisualizationCtx.stroke();  
        if(Net.input[i]) netVisualizationTextCtx.fillText(Net.input[i].toFixed(2), 60, 40.5+200 *i);
    }
    
    for(let i=0;i<2;i++){
        netVisualizationCtx.beginPath();
        netVisualizationCtx.arc((350), 340+100*i, 30, 0, Math.PI * 2, true); // Outer circle
        netVisualizationCtx.stroke();    
        netVisualizationTextCtx.fillText(Net.FC1.output[i].toFixed(2), 335, 345+100*i);
    }

    netVisualizationCtx.beginPath();
    netVisualizationCtx.arc(600, 400 , 25.5, 0, Math.PI * 2, true); // Outer circle
    netVisualizationCtx.stroke();    
    netVisualizationTextCtx.fillText(Net.FC2.output[0].toFixed(2), 590, 400);
        
}


