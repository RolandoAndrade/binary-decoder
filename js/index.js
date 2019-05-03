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

function change(number)
{
    let button = document.getElementById("b"+number);
    if(button.style.backgroundColor=="rgb(66, 66, 66)")
        button.style.backgroundColor="#afb2af";
    else
        button.style.backgroundColor="#424242";

    displayScreen();
}
function displayScreen()
{
    let b=[document.getElementById("b1"),document.getElementById("b2"),
        document.getElementById("b3"),document.getElementById("b4")];
    let input=[0,0,0,0];
    for(let i=0;i<b.length;i++)
    {
        if(b[i].style.backgroundColor=="rgb(66, 66, 66)")
            input[i]=1;
    }
    let outputScreen=document.getElementById("answer");
    outputScreen.innerHTML=""+Math.round(p.getOutput(input));
}
function learn()
{
    for(let i=0;i<5000;i++)
    {
        p.learn(inputs,outs);
    }
    displayScreen();

}