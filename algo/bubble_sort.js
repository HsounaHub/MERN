function bubbleSort(nums){
    let times=0;
    while (times<nums.length) {
        for (let i=0;i<nums.length;i++){
            for (let j=0;j<nums.length;j++){
                if(nums[i]<nums[j]){
                    let temp=nums[i];
                    nums[i]=nums[j];
                    nums[j]=temp;
                }
            }
        }
    times++
    }
    return nums;
}

const nums1=[5,3,4,2,1];
const nums2=[9,2,5,6,4,3,7,10,1,8]
const nums3=[10,9,8,7,6,5,4,3,2,1]

console.log(nums1);
bubbleSort(nums1);
console.log(nums1);
console.log(nums2);
bubbleSort(nums2);
console.log(nums2);
console.log(nums3);
bubbleSort(nums3);
console.log(nums3);