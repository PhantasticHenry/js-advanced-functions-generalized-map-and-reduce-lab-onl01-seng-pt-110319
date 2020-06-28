const map = (arr, callback) => {
    const newArr = []
    arr.forEach(e => {
        newArr.push(callback(e))
    })
    return newArr;
}

const reduce = (arr, callback, startingPoint) => {
    let result = (!!startingPoint) ? startingPoint : arr[0]
    let i = (!!startingPoint) ? 0 : 1

    for (; i < arr.length; i++ ){
        result = callback(arr[i], result)
    }
    return result;
}