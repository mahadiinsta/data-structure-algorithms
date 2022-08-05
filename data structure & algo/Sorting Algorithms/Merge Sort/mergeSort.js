function mergeSort(arr){
    if(arr.length < 2){
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}


function merge(leftArr,rightArr){
    const sortedArray = [];
    
    while(leftArr.length && rightArr.length){
        if(leftArr[0] < rightArr[0]){
            sortedArray.push(leftArr.shift());
        }else{
            sortedArray.shift(rightArr.shift());
        }
    }
    return [...sortedArray,...leftArr,...rightArr];
}

const array = [0,12,3,4,-4,5];

console.log(mergeSort(array))