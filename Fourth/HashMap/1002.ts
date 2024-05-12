function commonChars(words: string[]): string[] {
    if(!words.length) return []
    const res = new Array(26).fill(0)
    for(const c of words[0]){
        res[c.charCodeAt(0)-97]++
    }
    for(let i=1;i<words.length;i++){
        const temp=new Array(26).fill(0)
        for(const c of words[i]){
            temp[c.charCodeAt(0)-97]++
        }
        for(let j =0;j<res.length;j++){
            res[j]=Math.min(res[j],temp[j])
        }
    }
    const result:string[]=[]
    for(let j=0;j<res.length;j++){
        for(let i=0;i<res[j];i++){
            result.push(String.fromCharCode(j+97))
        }
    }
    return result
};