console.time('time');
console.log('Shashank Yadav');    console.log([1,2,3,4]);
console.log({name:'Shashank', lastname: 'Yadav', Number: 1});
console.table({name:'Shashank', lastname: 'Yadav', Number: 1});
console.warn('This is warning.');
console.timeEnd('time');
console.log("Variables in JS.");
//console.error("This is an error");
//var, let, const

var a=5;
console.log(a+7);
const b=7;
//b=5; Assignment in const is an error.
console.log(b);
{
    let b=5;
    console.log(b);
}
var s="String";
console.log(s);
var sum=0;
for(var i=0; i<a; i++) {
    sum=sum+i;
}
console.log(sum);
