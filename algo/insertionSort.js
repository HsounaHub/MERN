function insertionSort(arr){
    for(var i=1;i<arr.length;i++){
        let temp=arr[i];
        for (var j=i-1;j>=0;j--){
            if(temp < arr[j]){
                
                arr[j+1]=arr[j];
                if(j==0){
                    arr[j]=temp;
                }
            }else{
                arr[j+1]=temp;
                break
            }
        }
        arr[j+1]=temp;
    }
    return arr
} 
console.log(insertionSort([3,5,2,1,0]));