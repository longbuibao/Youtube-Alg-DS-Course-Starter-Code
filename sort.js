function swap(arr, i, j) {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
  return arr
}

mocha.setup("bdd")
const { assert } = chai

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1
    let temp = arr[i]
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = temp
  }

  return arr
}

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) [arr[i], arr[j]] = [arr[j], arr[i]]
    }
  }
  return arr
}

//selectionSort works by having sorted data accumulate at start of array
function selectionSort(arr) {
  let minElement = arr[0]
  let position = 0

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < minElement) {
        minElement = arr[j]
        position = j
      }
    }
    swap(arr, i, position)
    minElement = arr[i + 1]
    position = i + 1
  }
  return arr
}

const quickSort = (arr) => {
  if (arr.length < 2) return arr

  const pivot = arr.pop()

  const leftArray = []
  const rightArray = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= pivot) {
      rightArray.push(arr[i])
    } else leftArray.push(arr[i])
  }

  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]
}

const _mergeArrays = (a, b) => {
  const c = []

  while (a.length && b.length) {
    c.push(a[0] > b[0] ? b.shift() : a.shift())
  }

  //if we still have values, let's add them at the end of `c`
  while (a.length) {
    c.push(a.shift())
  }
  while (b.length) {
    c.push(b.shift())
  }

  return c
}

const mergeSort = (arr) => {
  if (arr.length < 2) return arr

  const middle = Math.floor(arr.length / 2)

  return [
    ..._mergeArrays(
      mergeSort(arr.slice(0, middle)),
      mergeSort(arr.slice(middle, arr.length))
    ),
  ]
}

describe("Bubble Sort", () => {
  it("sorts an array", () => {
    assert.deepEqual(bubbleSort([5, 1, 3, 7, 6, 2, 4]), [1, 2, 3, 4, 5, 6, 7])
    assert.deepEqual(
      bubbleSort([
        1000, 12, 124, 12, 45, 578, 11, 3, 6, 9, 100, 50, 9, 12, 1, 34,
      ]),
      [1, 3, 6, 9, 9, 11, 12, 12, 12, 34, 45, 50, 100, 124, 578, 1000]
    )
  })
})

describe("Selection Sort", () => {
  it("sorts an array", () => {
    assert.deepEqual(selectionSort([5, 1, 3, 2, 4]), [1, 2, 3, 4, 5])
    assert.deepEqual(
      bubbleSort([
        1000, 12, 124, 12, 45, 578, 11, 3, 6, 9, 100, 50, 9, 12, 1, 34,
      ]),
      [1, 3, 6, 9, 9, 11, 12, 12, 12, 34, 45, 50, 100, 124, 578, 1000]
    )
  })
})

describe("Insertion Sort", () => {
  it("sorts an array", () => {
    assert.deepEqual(insertionSort([5, 1, 3, 2, 4]), [1, 2, 3, 4, 5])
    assert.deepEqual(
      bubbleSort([
        1000, 12, 124, 12, 45, 578, 11, 3, 6, 9, 100, 50, 9, 12, 1, 34,
      ]),
      [1, 3, 6, 9, 9, 11, 12, 12, 12, 34, 45, 50, 100, 124, 578, 1000]
    )
  })
})

describe("Quick Sort", () => {
  it("sorts an array", () => {
    assert.deepEqual(quickSort([5, 1, 3, 2, 4]), [1, 2, 3, 4, 5])
    assert.deepEqual(
      quickSort([
        1000, 12, 124, 12, 45, 578, 11, 3, 6, 9, 100, 50, 9, 12, 1, 34,
      ]),
      [1, 3, 6, 9, 9, 11, 12, 12, 12, 34, 45, 50, 100, 124, 578, 1000]
    )
  })
})

describe("Merge Sort", () => {
  it("sorts an array", () => {
    assert.deepEqual(mergeSort([5, 1, 3, 2, 4]), [1, 2, 3, 4, 5])
    assert.deepEqual(
      mergeSort([
        1000, 12, 124, 12, 45, 578, 11, 3, 6, 9, 100, 50, 9, 12, 1, 34,
      ]),
      [1, 3, 6, 9, 9, 11, 12, 12, 12, 34, 45, 50, 100, 124, 578, 1000]
    )
  })
})

mocha.run()
