// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
        const num1Frequency = counter(num1)
        const num2Frequency = counter(num2)
        if (Object.keys(num1Frequency).length !== Object.keys(num2Frequency).length){
            return false
        }
        const keys = Object.keys(num1Frequency)
        for (val in keys){
            let value = keys[val]
            if(num1Frequency[value] !== num2Frequency[value]){
    
                return false
            }
            return true
            
        }
       
    
}


function counter(num){
    let frequency = {}
    let str = num.toString()
    let strArray = str.split("")
    for (val in strArray){
        let character = strArray[val]
        let valCount = frequency[character] || 0
        frequency[character] = valCount +1
    }

    return frequency
}
