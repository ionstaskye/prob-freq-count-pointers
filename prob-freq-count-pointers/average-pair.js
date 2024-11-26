// add whatever parameters you deem necessary
function averagePair(arr, target) {
    left = 0
    right = arr.length - 1
    while (right > left){
        average = (arr[left]+arr[right])/2
        console.log(average, arr[left], arr[right])
        if (average === target){
            return true
        }
        else if (average > target){
            right -= 1
        }
        else{
            left += 1            
        }
    }
    return false
}
