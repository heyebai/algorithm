function wiggleMaxLength(nums: number[]): number {
    if(nums.length===0) return 0
    let len=1
    let prevDiff=0
    let currDiff=0
    
    for(let i=1;i<nums.length;i++){
        currDiff=nums[i]-nums[i-1]
        if((prevDiff>=0 && currDiff<0) || (prevDiff<=0 && currDiff>0)){
            prevDiff=currDiff
            len++
        }
    }

    return len
};