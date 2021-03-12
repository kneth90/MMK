/*
    Materi: const and let variable

*/


function funcA1(){
    if(1 == 1){
        var a = 10;
    }
    console.log('this is funcA1', a);
}

function funcA2(){
    if(1 ==1){
        let a = 0;
    }
    console.log('this is funcA2', a);
}

function funcA3(){
    const a = 10;
    let b = 10;

    // b = 2000;
    // a = 2000;
    console.log(`A is ${a}`);
    console.log(`B is ${b}`);
}

function funcA4(){
    const a = [];
    let b = [];

    //a = [1,2,3,4,5];
    // b = [1,2,3];
    // a[0] = 1;

    console.table(a);
    console.table(b);
}


funcA4()