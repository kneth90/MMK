/*
    Materi: Object & Array
*/


const an_object = {
    name: "Ken",
    age: 17
}


console.log('this is an_object', an_object);

const other_object = an_object;

console.log('this is other object', other_object);

an_object.age = 20;

console.log('this is an_object', an_object);
console.log('this is other object', other_object);


// Array

let an_array = [1,2,3,4,5];
console.log('this is an array', an_array);
let copy_array = [...an_array]; //spread operator

let other_array = an_array;
console.log('this is other array', other_array)
an_array[0] = 1000;
console.log('this is an array', an_array);
console.log('this is other array', other_array)
console.log('this is copy array', copy_array)


