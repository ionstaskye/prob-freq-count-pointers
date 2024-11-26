// add whatever parameters you deem necessary
function constructNote(str1, str2) {
    const lowerStr1 = str1.toLowerCase()
    const lowerStr2 = str2.toLowerCase()
    const str1Frequency = counter(lowerStr1)
    const str2Frequency = counter(lowerStr2)
    const keys = Object.keys(str2Frequency)
    for (val in keys){
        let value = keys[val]
        if(str1Frequency[value] > str2Frequency[value]){

            return false
        }
        return true
        
    }
   
}

function counter(str){
    let frequency = {}
    let strArray = str.split("")
    for (val in strArray){
        let character = strArray[val]
        let valCount = frequency[character] || 0
        frequency[character] = valCount +1
    }

    return frequency
}