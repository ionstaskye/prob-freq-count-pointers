// add whatever parameters you deem necessary
function pivotIndex(arr) {
    let arrSum = 0
    for (val in arr){
        arrSum += arr[val]
    }
    let leftSum = 0
    for (val in arr){
        let value = arr[val]
        let rightSum = arrSum -value - leftSum
        if(leftSum === rightSum){
            return val
        }
        else{
            leftSum += value
        }
    }
    return -1
}
