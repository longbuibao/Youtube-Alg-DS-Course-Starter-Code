function same(arr1, arr2) {
  const hashArr1 = arr1.reduce((res, curr) => {
    res[curr] = ++res[curr] || 1
    return res
  }, {})

  const hashArr2 = arr2.reduce((res, curr) => {
    const key = Math.sqrt(curr)
    res[key] = ++res[key] || 1
    return res
  }, {})

  let count = 0

  arr1.forEach((elment) => {
    if (hashArr1[elment] === hashArr2[elment]) {
      count++
    }
  })

  console.log({ hashArr1, hashArr2 })

  return count === arr1.length ? true : false
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

describe("same function", () => {
  it("get same object from two function", () => {
    assert.equal(same([1, 2, 3], [4, 1, 9]), true)
    assert.equal(same([1, 2, 3], [1, 9]), false)
    assert.equal(same([1, 2, 1], [4, 4, 1]), false)
  })
})

mocha.run()
