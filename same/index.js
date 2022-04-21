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

  return count === arr1.length ? true : false
}

const anagram = (str1, str2) => {
  if (str1.length !== str2.length) return false
  if (str1.length === 0 && str2.length === 0) return true

  const str1Obj = str1.split("").reduce((res, curr) => {
    res[curr] = ++res[curr] || 1
    return res
  }, {})

  const str2Obj = str2.split("").reduce((res, curr) => {
    res[curr] = ++res[curr] || 1
    return res
  }, {})

  for (let key in str1Obj) {
    if (str2Obj[key] !== str1Obj[key]) return false
  }
  return true
}

const sumZero = (array) => {
  const check = {}
  const result = []

  array.forEach((element) => {
    if (check[0 - element]) {
      result.push([element, check[0 - element]])
    } else check[element] = element
  })

  return result.length === 0 ? undefined : result[result.length - 1]
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

describe("have same charactors", () => {
  it("have same charactors", () => {
    assert.equal(anagram("", ""), true)
    assert.equal(anagram("aaz", "zza"), false)
    assert.equal(anagram("anagram", "nagaram"), true)
    assert.equal(anagram("rat", "car"), false)
    assert.equal(anagram("awesome", "awesom"), false)
    assert.equal(anagram("qwerty", "qeywrt"), true)
  })
})

describe("sum zero", () => {
  it("sum zero", () => {
    assert.deepEqual(sumZero([-3, -2, -1, 0, 1, 2, 3]), [3, -3])
    assert.equal(sumZero([-2, 0, 1, 3]), undefined)
    assert.equal(sumZero([1, 2, 3]), undefined)
  })
})

mocha.run()
