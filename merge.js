function merge(arr1, arr2) {
  let arr1Idx = 0;
  let arr2Idx = 0;
  let sorted = [];

  while(sorted.length < arr1.length + arr2.length){
    if(arr1[arr1Idx] < arr2[arr2Idx] || arr2[arr2Idx] === undefined){
      sorted.push(arr1[arr1Idx]);
      arr1Idx++;
    } else if(arr1[arr1Idx] > arr2[arr2Idx] || arr1[arr1Idx] === undefined){
      sorted.push(arr2[arr2Idx]);
      arr2Idx++;
    } else {
      sorted.push(arr1[arr1Idx]);
      sorted.push(arr2[arr2Idx]);
      arr1Idx++;
      arr2Idx++;
    }
  }

  return sorted;
}

function mergeSort(arr) {

  if (arr.length <= 1) return arr;

  let half = Math.ceil(arr.length/2);
  let left = mergeSort(arr.splice(0,half));
  let right = mergeSort(arr);

  return merge(left,right);

}

module.exports = { merge, mergeSort};