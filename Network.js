class Network {
    constructor(learningRate){
        // this.shape = shape //shape of MLP network
        //8 5 1
        this.learningRate = learningRate;

        this.input = [];
        // console.log(this.input);

        this.FC1 = new FC(4, 2);
        this.FC2 = new FC(2, 1);
        this.output = 0;
        this.scale = 100;
        this.outputScale = 1;
    }

    forwardProp(agent){
        // this.input = [agent.topLeftLEFT/100, agent.topLeftUP/100, agent.topRightUP/100, agent.topRightRIGHT/100
        //     ,agent.bottomLeftLEFT/100, agent.bottomLeftDOWN/100, agent.bottomRightDOWN/100, agent.bottomRightRIGHT/100];
        this.input = [agent.topLeftUP/this.scale, agent.topRightUP/this.scale, agent.bottomLeftDOWN/this.scale, agent.bottomRightDOWN/this.scale];
        
        let inputFC2 = this.FC1.forwardProp(this.input);
        this.FC2.input = inputFC2;
        this.output = this.FC2.forwardProp(inputFC2);
        // console.log(this.output);
        return 2*this.output;  
    }
    backProp(agent){
        let target = this.getTarget(agent);
        // targ.innerHTML = target;

        for(let i=0;i<this.FC2.output.length;i++){
            for(let j=0;j<this.FC2.inputSize;j++){
                this.FC2.delta[i][j] = -1*(-target/this.FC2.activation[i] + ((1-target)/(1-this.FC2.activation[i])))*(this.FC2.activation[i])*(1-this.FC2.activation[i]);
            }
        }
        // this.input = [agent.topLeftLEFT/100, agent.topLeftUP/100, agent.topRightUP/100, agent.topRightRIGHT/100
        //     ,agent.bottomLeftLEFT/100, agent.bottomLeftDOWN/100, agent.bottomRightDOWN/100, agent.bottomRightRIGHT/100];
        this.input = [agent.topLeftUP/this.scale, agent.topRightUP/this.scale, agent.bottomLeftDOWN/this.scale,agent.bottomRightDOWN/this.scale];
        this.FC2.backPropagation(this.input);
        this.updateWeights();
    }

    getTarget(agent){
        let netVERTICAL = (Math.min(agent.topLeftUP,agent.topRightUP)-Math.min(agent.bottomLeftDOWN,agent.bottomRightDOWN))/pathWidth;
        let netHORIZONTAL = (Math.min(agent.topRightRIGHT,agent.bottomRightRIGHT)-Math.min(agent.bottomLeftLEFT,agent.topLeftLEFT))/pathWidth;
        console.log(netVERTICAL)


        if(netVERTICAL>=0) return -1;
        else if(netVERTICAL<0) return 1;
    }

    updateWeights(){
        for(let i=0;i<this.FC2.inputSize;i++){
            for(let j=0;j<this.FC2.output.length;j++){
                this.FC2.weights[j][i]-=Net.learningRate*this.FC2.delta[j][i]*this.FC1.activation[i];
            }            
        }
        for(let i=0;i<this.FC1.inputSize;i++){
            for(let j=0;j<this.FC1.output.length;j++){
                this.FC1.weights[j][i]-=Net.learningRate*this.FC1.delta[j][i]*this.input[i];
            }            
        }

    }

}

class FC {
    constructor(input, size){
        this.inputSize = input;
        this.outputSize = size;
        this.weights = [];
        this.bias = Math.random();
        this.delta = [];
        for(var i=0;i<size;i++) {
            let element = [];
            for(var x=0;x<input;x++) element.push(Math.random());

            this.weights.push(element);
        }
        for(var i=0;i<size;i++) {
            let element = [];
            for(var x=0;x<input;x++) element.push(Math.random());

            this.delta.push(element);
        }
                // this.delta = this.weights;
        this.output=[];
        for(var x=0;x<size;x++) this.output.push(Math.random());
        this.activation = [];
        for(var x=0;x<size;x++) this.activation.push(Math.random());
    }

    forwardProp(input){
        let result = [];
        for(let i=0;i<this.weights.length;i++){
            result.push(1);
            for(let j=0;j<this.weights[i].length;j++){
                result[i]+=this.weights[i][j]*input[j];
            }
        }
        // console.log(result);
        this.output = result;
        this.activation = this.output;
        this.activation = this.sigmoid();
        console.log(this.weights)
        return this.activation;
    }

    sigmoid(){
        for(let i=0;i<this.output.length;i++){
            this.activation[i] = 1/(1+Math.pow(Math.E, this.activation[i])) -0.5;
        }
        return this.activation;
    }
    softmax(arr) {
        return arr.map(function(value,index) { 
          return Math.exp(value) / arr.map( function(y /*value*/){ return Math.exp(y) } ).reduce( function(a,b){ return a+b })
        })
    }

    backPropagation(input){
        for(let i=0;i<input.length;i++){
            for(let j=0;j<this.inputSize;j++){
                for(let k=0;k<this.output.length;k++){
                    Net.FC1.delta[j][i] += this.delta[k][j]*this.weights[k][j];
                }
                Net.FC1.delta[j][i] *= Net.FC1.activation[j]*(1-Net.FC1.activation[j]);
            }
        }
    }

}

const Net = new Network(0.8);