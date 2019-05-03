class Sigmoid
{
    f(x)
    {
        return 1/(1+Math.exp(-x));
    }

    dF(x)
    {
        return this.f(x)*(1-this.f(x));
    }
}

class Relu
{
    f(x)
    {
        return Math.max(x,0);
    }

    dF(x)
    {
        return x>0?1:0;
    }
}
