function consecutiveSums(arr,k){
    let result=[];
    
    for (var i=0;i<arr.length;i++){
        let sum=0;
        let sumlist=[];
        for (var j=i;j<arr.length;j++){
            sum+=arr[j];
            sumlist.push(arr[j]);
            if(sum==k){
                result.push(sumlist);
                if(arr[j+1]==0){
                    sumlist.push(0);
                    result.push(sumlist);
                }
                sumlist=[];
                break
            }
        }
    }
    return result
}
const arr=[2,5,3,6,7,0,0,23,11]
console.log(consecutiveSums(arr,16));