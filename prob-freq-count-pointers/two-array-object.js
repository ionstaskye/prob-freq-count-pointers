// add whatever parameters you deem necessary
function twoArrayObject(arr1, arr2) {
    let newObj = {}
    for (val in arr1){
        let key = arr1[val]
        if(arr2[val] === undefined){
            newObj[key] = null
        }
        else{
            newObj[key] = arr2[val]
        }
    }
    return newObj
}
