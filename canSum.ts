const canSum = (targetSum:number, numbers:number[],memo:{[index:number]:boolean} = {}):boolean=>{
    if(memo[targetSum]!=null)return memo[targetSum]
    if(targetSum===0)return true;
    if(targetSum<0)return false;
    let flag = false
    for(let num of numbers){
        flag = flag || canSum(targetSum-num,numbers,memo)
        if(flag)break;
    }
    memo[targetSum]=flag
    return flag
}

console.log(canSum(7,[2,3]))
console.log(canSum(7,[5,3,4,7]))
console.log(canSum(7,[2,4]))
console.log(canSum(300,[7,14]))
console.log(canSum(500,[7,5,10,16,13,14]))