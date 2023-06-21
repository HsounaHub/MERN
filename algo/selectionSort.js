const myarr=[3,2,9,5,1,4,8]
const arrtest=[4,5,1,3,6,7,10,2,8,9]
function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let minidx=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[minidx]){
                minidx=j;
            }
        }
            let temp=arr[i];
            arr[i]=arr[minidx];
            arr[minidx]=temp;
        
    }
    return arr
}
console.log(selectionSort(myarr));
console.log(selectionSort(arrtest));