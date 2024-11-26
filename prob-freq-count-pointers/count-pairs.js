// add whatever parameters you deem necessary
function countPairs(arr, tar) {
    let count = 0
    for (i=0; i<arr.length; i++){
        for (j=0; j<arr.length-(1+i); j++){
            if(arr[i]+arr[j+1+i] === tar){
                count ++
            }
        }
    }
    return count
}
