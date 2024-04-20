function scramble(word) {
    arr = word.split('')
    arr2 = []
    for (let i = 0; i < arr.length; i++) {
        let r = Math.floor(Math.random() * arr.length)
        while (arr2.includes(arr[r])) {
            r = Math.floor(Math.random() * arr.length)
        }
        arr2.push(arr[r])
    }
    if (arr2.join('') === arr.join('')) return scramble(arr);
    return arr2.join('/')
}