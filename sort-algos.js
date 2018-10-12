function insertionSort(list) {
  const sortedList = [list[0]];
  let sortIndex = 1;
  while(sortIndex < list.length) {
    let sortElem = list[sortIndex];
    let elementWasSorted = false;
    for(let i = 0; i < sortedList.length; i++) {
      if(sortElem < sortedList[i]) {
        sortedList.splice(i, 0, sortElem);
        elementWasSorted = true;
        break;
      }
    }
    if(!elementWasSorted) {
      sortedList.push(sortElem);
    }
    sortIndex++;
  }
  return sortedList;
}

function selectionSort(list) {
  for(let i = 0; i < list.length - 1; i++) {
    let minIndex = i;
    for(let j = i + 1; j < list.length; j++) {
      if(list[j] < list[minIndex]) {
        minIndex = j;
      }
    }
    let temp = list[i];
    list[i] = list[minIndex];
    list[minIndex] = temp;
  }
  return list;
}

function bubbleSort(list) {
  let listEnd = list.length - 1;
  while(listEnd > 1) {
    for(let i = 0; i < listEnd; i++) {
      if(list[i] > list[i + 1]) {
        let temp = list[i];
        list[i] = list[i + 1];
        list[i + 1] = temp;
      }
    }
    listEnd -= 1;
  }
  return list;
}

function mergeSort(list) {
  if(list.length <= 1) {
    return list;
  }

  let mid = Math.floor(list.length / 2);
  let left = mergeSort(list.slice(0, mid));
  let right = mergeSort(list.slice(mid, list.length));
  return merge(left, right);
}

function merge(left, right) {
  let sortedList = [];
  let leftIndex = 0, rightIndex = 0;
  while(leftIndex < left.length && rightIndex < right.length) {
    if(left[leftIndex] < right[rightIndex]) {
      sortedList.push(left[leftIndex]);
      leftIndex++;
    } else if(left[leftIndex] > right[rightIndex]) {
      sortedList.push(right[rightIndex]);
      rightIndex++;
    } else {
      sortedList.push(left[leftIndex]);
      leftIndex++;
    }
  }
  if(leftIndex < left.length) {
    sortedList = sortedList.concat(left.slice(leftIndex));
  } else if(rightIndex < right.length) {
    sortedList = sortedList.concat(right.slice(rightIndex));
  }
  return sortedList;
}

function quickSort(list) {
  if (list.length <= 1) {
    return list;
  } else {
    let pivot = list.splice(list.length - 1, 1)[0];
    let left = [], right = [];
    let sortedArray = [];

    for(let i = 0; i < list.length; i++) {
      if(list[i] <= pivot) {
        left.push(list[i]);
      } else {
        right.push(list[i]);
      }
    }

    return sortedArray.concat(quickSort(left), pivot, quickSort(right));
  }
}