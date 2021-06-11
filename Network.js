class Network {
    constructor(learningRate){
        // this.shape = shape //shape of MLP network
        //8 5 1
        this.learningRate = learningRate;

        this.input = [agent.topLeftUP/100, agent.topRightUP/100, agent.topRightRIGHT/100
            ,agent.bottomLeftLEFT/100, agent.bottomLeftDOWN/100, agent.bottomRightDOWN/100, agent.bottomRightRIGHT/100];
        console.log(this.input);

        this.FC1 = new FC(this.input.length, 5, false);
        this.FC2 = new FC(5, 1, true);
        this.output = 0;
    }

    forwardProp(){
        this.input = [agent.topLeftLEFT/100, agent.topLeftUP/100, agent.topRightUP/100, agent.topRightRIGHT/100
            ,agent.bottomLeftLEFT/100, agent.bottomLeftDOWN/100, agent.bottomRightDOWN/100, agent.bottomRightRIGHT/100];
        
        let inputFC2 = this.FC1.forwardProp(this.input);
        this.FC2.input = inputFC2;
        this.output = this.FC2.forwardProp(inputFC2);
        console.log(this.output);
        return this.output;  
    }
    backProp(){
        let target = this.getTarget();
        targ.innerHTML = target;

        for(let i=0;i<this.FC2.output.length;i++){
            for(let j=0;j<this.FC2.inputSize;j++){
                this.FC2.delta[i][j] = -1*(target-this.FC2.activation[i])*(this.FC2.activation[i])*(1-this.FC2.activation[i]);
            }
        }
        this.input = [agent.topLeftLEFT/100, agent.topLeftUP/100, agent.topRightUP/100, agent.topRightRIGHT/100
            ,agent.bottomLeftLEFT/100, agent.bottomLeftDOWN/100, agent.bottomRightDOWN/100, agent.bottomRightRIGHT/100];
        this.FC2.backPropagation(this.input);
        this.updateWeights();
    }

    getTarget(){
        let netVERTICAL = Math.min(agent.topLeftUP,agent.topRightUP)-Math.min(agent.bottomLeftDOWN,agent.bottomRightDOWN);
        let netHORIZONTAL = -agent.topLeftLEFT+agent.topRightRIGHT-agent.bottomLeftLEFT+agent.bottomRightRIGHT;
        if(netVERTICAL>=5){
            return -1.0;
        }
        else if(netVERTICAL<-5){
            return 1.0;
        }
        else return 0;
        // else{
        //     if(netHORIZONTAL>0){
        //         return -1;
        //     }
        //     else{
        //         return 1;
        //     }
        // }
    }

    updateWeights(){
        for(let i=0;i<this.FC1.inputSize;i++){
            for(let j=0;j<this.FC1.output.length;j++){
                this.FC1.weights[j][i]-=Net.learningRate*this.FC1.delta[j][i]*this.input[i];
            }            
        }
        for(let i=0;i<this.FC2.inputSize;i++){
            for(let j=0;j<this.FC2.output.length;j++){
                this.FC2.weights[j][i]-=Net.learningRate*this.FC2.delta[j][i]*this.FC1.activation[i];
            }            
        }
    }

}

class FC {
    constructor(input, size){
        this.inputSize = input;
        this.outputSize = size;
        this.weights = [];
        this.bias = Math.random()*2-1;
        this.delta = [];
        for(var i=0;i<size;i++) {
            let element = [];
            for(var x=0;x<input;x++) element.push(Math.random()*2-1);

            this.weights.push(element);
        }
        for(var i=0;i<size;i++) {
            let element = [];
            for(var x=0;x<input;x++) element.push(Math.random()*2-1);

            this.delta.push(element);
        }
                // this.delta = this.weights;
        this.output=[];
        for(var x=0;x<size;x++) this.output.push(Math.random()*2-1);
        this.activation = [];
        for(var x=0;x<size;x++) this.activation.push(Math.random()*2-1);
    }

    forwardProp(input){
        let result = [];
        for(let i=0;i<this.weights.length;i++){
            result.push(1);
            for(let j=0;j<this.weights[i].length;j++){
                result[i]+=this.weights[i][j]*input[j];
            }
        }
        console.log(result);
        this.output = result;
        this.activation = this.output;
        this.activation = this.sigmoid();
        return this.output;
    }

    sigmoid(){
        for(let i=0;i<this.output.length;i++){
            this.activation[i] = 2/(1+Math.pow(Math.E, this.activation[i])) -1;
        }
        return this.activation;
    }

    backPropagation(input){
        for(let k=0;k<this.inputSize;k++){
            for(let i=0;i<input.length;i++){
                for(let j=0;j<this.output.length;j++){
                    Net.FC1.delta[k][i] += this.delta[j][k]*this.weights[j][k];
                }
                // Net.FC1.delta[k][i] *= Net.FC1.activation[k]*(1-Net.FC1.activation[k])*input[i];
                Net.FC1.delta[k][i] *= Net.FC1.activation[k]*(1-Net.FC1.activation[k]);
            }
        }
    }

}

const Net = new Network(0.4);