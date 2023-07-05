const arrA1=[0,1,2,2,2,7];
const arrB1=[2,2,6,6,7];
function orderedintersection(sortedA,sortedB){
let result=[]
for (let i=0;i<sortedA.length;i++){
    for(let j=0;j<sortedB.length;j++){
        if(sortedA[i]==sortedB[j]){
            if(result[result.length-1]!=sortedA[i]){
                result.push(sortedA[i])
            }
        }

    }
}
return result
}
console.log(orderedintersection(arrA1,arrB1));
console.log(orderedintersection([0,1,2,2,2,7],[2,2]));


