/*
    Materi: 
        -   array function (beda konsep dengan arrow function)
*/


const array_a = [2 , 1, 5, 4 , 8 , 7, 10]
/* filter */
const getGanjil = (array) => {
    const return_value =  array.filter(function(value){
        return (value%2) != 0
    })
    return return_value;
}

/* map */
const kaliDua = (array) => {
    return array.map((v) => v * 2)
}

/* reduce */
const akumulasi = array => array.reduce((total, num) => total +=num);

/* sort */
const urutkan = array => array.sort((a, b) => a - b);

console.log('array', array_a);
console.log('ganjil', getGanjil(array_a));
console.log('kaliDua', kaliDua(array_a));
console.log('akumulasi', akumulasi(array_a));
console.log('urutan', urutkan(array_a));