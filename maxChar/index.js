// Return the character most commonly used in the string.
// --- Examples
// maxChar("I loveeeeeee noodles") === "e"
// maxChar("1337") === "3"

function maxChar(str) {
  const countObject = str.split("").reduce((res, curr) => {
    if (res[curr] === undefined) {
      res[curr.toLowerCase()] = 1
    } else res[curr]++

    return res
  }, {})

  return Object.keys(countObject).reduce((res, curr) => {
    if (countObject[curr] > curr) {
      curr = countObject[curr]
    }

    return curr
  }, -Infinity)
}

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

mocha.setup("bdd")
const { assert } = chai

describe("Max Character", () => {
  it("maxChar() finds the most frequently used character", () => {
    assert.equal(maxChar("a"), "a")
    assert.equal(maxChar("test"), "t")
    assert.equal(maxChar("I loveeeeee noodles"), "e")
    assert.equal(maxChar("1337"), "3")
  })
})

mocha.run()

// const arr = [1, 100, -1, 0, 5, 7, 4]

// const bubbleSort = (arr) => {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++)
//       if (arr[i] < arr[j]) {
//         let temp = arr[i]
//         arr[i] = arr[j]
//         arr[j] = temp
//       }
//   }
// }

// bubbleSort(arr)
// console.log(arr)
