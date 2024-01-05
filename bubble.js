function bubbleSort(arr) {
  console.log("Input:", arr)

  for(let i = arr.length; i >= 0; i-- ){
    for(let j = 0; j < i - 1; j++){
      console.log("i = ", i, "j = ", j)
      if(arr[j] > arr[j+1]){
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        console.log("Swapped ", arr[j] + " and " + arr[j+1])
        console.log("Swapped arr", arr)
      }
    }
  }
  console.log("Result:", arr)
  return arr;
}

module.exports = bubbleSort;