export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }
  
  function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  }
  
  function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, j]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        // We overwrite the value at index k in the original array with the
        // value at index i in the auxiliary array.
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        // We overwrite the value at index k in the original array with the
        // value at index j in the auxiliary array.
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, i]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, i]);
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([j, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([j, j]);
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }

  // bubble sort
export function getBubbleSortAnimations(array) {
    const arr = [...array];
  const n = arr.length;
  let sorted = false;
  let animations = [];

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap elements
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        sorted = false;
        animations.push([i, i + 1]); // Mark the two elements to be swapped
      }
    }
  }

  // Visualize the sorting process
  return animations;

 }

 export function getInsertionSortAnimations(array) {
  const arr = [...array];
  const n = arr.length;
  let animations = [];

  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      animations.push([j + 1, j]); // Mark the two elements to be swapped
      j--;
    }
    arr[j + 1] = key;
  }

  // Visualize the sorting process
  return animations;
}

 export function getSelectionSortAnimations(array) {
  const arr = [...array];
  const n = arr.length;
  let animations = [];

  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;

    for (let j = i + 1; j < n; j++) {
      // Mark the elements being compared
     // animations.push([minIdx, j, false]);

      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }

    // Swap elements if necessary
    if (minIdx !== i) {
      let temp = arr[i];
      arr[i] = arr[minIdx];
      arr[minIdx] = temp;
      // Mark the elements to be swapped
      animations.push([minIdx, i, true]);
    }
  }

  // Visualize the sorting process
  return animations;
}

 export function getQuickSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  quickSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

function quickSortHelper(mainArray, startIdx, endIdx, auxiliaryArray, animations) {
  if (startIdx >= endIdx) return;
  const pivotIdx = partition(mainArray, startIdx, endIdx, auxiliaryArray, animations);
  quickSortHelper(mainArray, startIdx, pivotIdx - 1, auxiliaryArray, animations);
  quickSortHelper(mainArray, pivotIdx + 1, endIdx, auxiliaryArray, animations);
}

function partition(mainArray, startIdx, endIdx, auxiliaryArray, animations) {
  const pivot = mainArray[endIdx];
  let pivotIdx = startIdx;
  for (let i = startIdx; i < endIdx; i++) {
    // Push animation to highlight elements being compared
    animations.push([i, endIdx]);
    // Push animation to revert color
    animations.push([i, endIdx]);
    if (mainArray[i] <= pivot) {
      // Push animation to overwrite value at index i
      animations.push([pivotIdx, mainArray[i]]);
      // Swap values
      const temp = mainArray[i];
      mainArray[i] = mainArray[pivotIdx];
      mainArray[pivotIdx] = temp;
      pivotIdx++;
    }
  }
  // Push animation to highlight pivot
  animations.push([pivotIdx, endIdx]);
  // Push animation to revert color
  animations.push([pivotIdx, endIdx]);
  // Swap pivot with element at pivotIdx
  const temp = mainArray[pivotIdx];
  mainArray[pivotIdx] = mainArray[endIdx];
  mainArray[endIdx] = temp;
  return pivotIdx;
}

  