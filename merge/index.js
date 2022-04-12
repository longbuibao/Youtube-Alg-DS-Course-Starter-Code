// Create a function that when given 2 sorted arrays, it returns
// a new sorted array that contains both elements of input arrays
// --- Examples
// merge([1,3], [2,4]) === [1,2,3,4]
// merge([1,5], [4,6,7]) === [1,4,5,6,7]
// merge([4,6,7], [1,5]) === [1,4,5,6,7]

// function merge(arr) {
//   if (arr.length === 1) return arr

//   const middle = Math.floor(arr.length / 2)

//   const left = arr.splice(0, middle)
//   const right = arr.splice(middle)

//   left = merge(left)
//   right = merge(right)

//   const res = []

//   while (left.length > 0 || right.length > 0) {}
// }

console.log(
  mergeSort([1000, 12, 124, 12, 45, 578, 11, 3, 6, 9, 100, 50, 9, 12, 1, 34])
)

// _________ _______  _______ _________   _______  _______  _______  _______  _______
// \__   __/(  ____ \(  ____ \\__   __/  (  ____ \(  ___  )(  ____ \(  ____ \(  ____ \
//    ) (   | (    \/| (    \/   ) (     | (    \/| (   ) || (    \/| (    \/| (    \/
//    | |   | (__    | (_____    | |     | |      | (___) || (_____ | (__    | (_____
//    | |   |  __)   (_____  )   | |     | |      |  ___  |(_____  )|  __)   (_____  )
//    | |   | (            ) |   | |     | |      | (   ) |      ) || (            ) |
//    | |   | (____/\/\____) |   | |     | (____/\| )   ( |/\____) || (____/\/\____) |
//    )_(   (_______/\_______)   )_(     (_______/|/     \|\_______)(_______/\_______)
//                             ____       _
//                             |  _ \     | |
//                             | |_) | ___| | _____      __
//                             |  _ < / _ \ |/ _ \ \ /\ / /
//                             | |_) |  __/ | (_) \ V  V /
//                             |____/ \___|_|\___/ \_/\_/
//                         ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

// mocha.setup("bdd")
// const { assert } = chai

// describe("merge()", () => {
//   it("merge([1, 3], [2, 4]) returns [1, 2, 3, 4]", () => {
//     assert.deepEqual(merge([1, 3], [2, 4]), [1, 2, 3, 4])
//   })
//   it("merge([1, 5], [4, 6, 7]) returns [1, 4, 5, 6, 7]", () => {
//     assert.deepEqual(merge([1, 5], [4, 6, 7]), [1, 4, 5, 6, 7])
//   })
//   it("merge([4, 6, 7], [1, 5]) returns [1, 4, 5, 6, 7]", () => {
//     assert.deepEqual(merge([4, 6, 7], [1, 5]), [1, 4, 5, 6, 7])
//   })
//   it("merge([], []) returns []", () => {
//     assert.deepEqual(merge([], []), [])
//   })
//   it("merge returns new array and does NOT modify input arrays", () => {
//     const a1 = [1, 3]
//     const a2 = [2, 4]
//     merge(a1, a2)
//     assert.deepEqual(a1, [1, 3])
//     assert.deepEqual(a2, [2, 4])
//   })
// })

// mocha.run()
