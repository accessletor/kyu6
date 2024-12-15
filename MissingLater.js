function findMissingLetter(array)
{
//   penelusuran menggunakan looping
for (let i = 0; i < array.length - 1; i++) {
    // melakukan pengkondisian dan melakuakn converting dengan code ASCII
    if (array[i].charCodeAt(0) + 1 !== array[i + 1].charCodeAt(0)) {
        return String.fromCharCode(array[i].charCodeAt(0) + 1 )
    }
    
}
}
console.log(findMissingLetter(['a','b','c','d','f']))