// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
    const length1 = str1.length
    const length2 = str2.length
    let i = 0
    let j = 0
    while (i < length1){
        if (j > length2 ){
            return false
        }
        else if (str1[i] === str2[j]){
            i++
        }
        else{
            j++
        }
    }
    return true
}
