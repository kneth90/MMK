/*
    Materi: Promise

    promise adalah janji :)
*/


const callback = (par) => {
    console.log('data ditampilkan, ', par);
}

// callback, old
//  anggap setTimeout itu proses pengambilan data ajax 
// function getData(data, callback){
//     setTimeout(_ => {
//         console.log('mengambil data dari db');
//         callback(data)
//     }, 2000)
// }
// getData(' data2 filter ', callback); 



// promise
const prom = new Promise(function(resolve, reject){
    setTimeout( _ => {
        resolve("data dari promise");
    }, 2000)
});
const prom2 = new Promise(function(resolve, reject){
    setTimeout( _ => {
        resolve("data dari promise 2");
    }, 2000)
});

prom.then(function(v){
  callback(v);  
})

Promise.all([prom, prom2]).then(function(values){
    console.log(values);
})


