const isPalindrome=(s:string):boolean=>{
  let left=0
  let right=s.length-1
  while(left<right){
      if(s[left]!==s[right]){
          return false
      }
      left++
      right--
  }
  return true
}

function partition(s: string): string[][] {
  const result=[]
  const temp=[]
  const backTracking=(index)=>{
      if(temp.join('').length===s.length){
          result.push(temp.slice())
          return
      }
      for(let i=index;i<s.length;i++){
          if(isPalindrome(s.substring(index,i+1))){
              temp.push(s.substring(index,i+1))
              backTracking(i+1)
              temp.pop()
          }
      }   
  }
  backTracking(0)
  return result
};