// Calculate nth fibonacci number
interface Obj{
    [index:number]:number
}
const fibonacci = (n:number, memo:Obj ={}):number => {
    if(memo[n]!=null)return memo[n]
    if(n <2)return 1;
    memo[n]= fibonacci(n-1,memo) + fibonacci(n-2,memo);
    return memo[n];
}

console.log(fibonacci(39));