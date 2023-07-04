function twoSum(arr,k){
    let result=[];
    
    for (var i=0;i<arr.length;i++){
        found=false;
        for (var j=0;j<arr.length;j++){
            if(i!=j){
                if((arr[i]+arr[j])==k){
                    result.push(i,j);
                    found=true;
                    break;
                }
            }
        }
        if(found){
            break;
        }
    }
    return result
}
const arr1=[2,11,7,15];
const arr2=[2,3,4];
const arr3=[3,3]
console.log(twoSum(arr1,9));
console.log(twoSum([3,2,4],6));
console.log(twoSum([3,3],6));

