const isValidSegment=(s:string)=>{
    const num=parseInt(s)
    return num>=0 && num<=255
}
function restoreIpAddresses(s: string): string[] {
    const result=[]
    const temp=[]
    const backTracking=(index)=>{
        if(temp.length>4) return
        if(temp.length===4 && temp.join('').length===s.length){
            result.push(temp.join('.'))
            return
        }
        if(s[index]==='0'){
            temp.push(s[index])
            backTracking(index+1)
            temp.pop()
            return
        }
        for(let i=index;i<=s.length;i++){
            const sub=s.substring(index,i)
            
            if(isValidSegment(sub)){

                temp.push(sub)
                backTracking(i)
                temp.pop()
            }
        }
    }
    backTracking(0)
    return result
};