function paginate (arr, size) {
  return arr.reduce((acc, val, i) => {
    let idx = Math.floor(i / size)
    let page = acc[idx] || (acc[idx] = [])
    page.push(val)

    return acc
  }, [])
}

let array = [1, 2, 3, 4, 5]
let page_size = 2
let pages = paginate(array, page_size)

console.log(pages)    // all pages
console.log(pages[1]) // second page
