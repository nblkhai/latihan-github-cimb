
function maxDiff (arr){
    arr.sort(function(a,b){
        return a-b
    })
    return arr[arr.length -1] - arr[0]
}
console.log(maxDiff([5,19,8,7,6,12]))

    
