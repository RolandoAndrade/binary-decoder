let inputs = [
    [0,0,0,0],
    [0,0,0,1],
    [0,0,1,0],
    [0,0,1,1],
    [0,1,0,0],
    [0,1,0,1],
    [0,1,1,0],
    [0,1,1,1],
    [1,0,0,0],
    [1,0,0,1],
    [1,0,1,0],
    [1,0,1,1],
    [1,1,0,0],
    [1,1,0,1],
    [1,1,1,0],
    [1,1,1,1]];

let outs = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

let p = new Perceptron(4,new Relu());

for(let i=0;i<inputs.length;i++)
{
    console.log(i,p.getOutput(inputs[i]));
}

for(let i=0;i<5000;i++)
{
    p.learn(inputs,outs);
}

for(let i=0;i<inputs.length;i++)
{
    console.log(i,p.getOutput(inputs[i]));
}
