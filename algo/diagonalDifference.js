function diagonalDifference(arr){
    let sumleft=0;
    let sumright=0;
for(let i=0;i<arr.length;i++){
    sumleft+=arr[i][i];
    sumright+=arr[i][arr.length-1-i];
}
return Math.abs(sumleft-sumright)
}

console.log(diagonalDifference([[1,2,3],[4,5,6],[9,8,9]]));