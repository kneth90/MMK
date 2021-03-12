/*
    Materi: Async await

    fungsi async adalah promise, dimana resolve callbacknya adalah value 
        yg direturn.
    Await mereturn hasil yang diresolve sebuah promoise dan menunggu proses tersebut
*/



const prom = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('data');
    }, 2000);
})

// prom.then((v) => {
//     console.log(v);
// })

async function asFunc(){
    const r = await prom;
    
    console.log('hasil fungsi async', r);
}

asFunc();

