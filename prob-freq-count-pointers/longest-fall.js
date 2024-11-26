// add whatever parameters you deem necessary
function longestFall(arr) {
    let highestCount = 0
    let count = 1
    for (i=0; i < arr.length; i++){
        if (arr[i] > arr[i+1]){
            count ++
        }
        else{
            if (count> highestCount){
                highestCount = count
            }
            count = 0

        }
    }
    return highestCount
}
