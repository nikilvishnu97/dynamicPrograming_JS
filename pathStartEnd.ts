// calculate the number of paths in n*m grid using dynamic programming

const pathCount = (row:number, col:number,memo:{[str:string]:number} ={}):number=>{
    const str =`${row},${col}`
    if (memo[str]!=null)return memo[str]
    if(row ===1 && col==1)return 1
    if(row===0 || col===0)return 0;
    memo[str]= pathCount(row-1,col,memo) + pathCount(row,col-1,memo)
    return memo[str]
}

console.log(pathCount(18,18))