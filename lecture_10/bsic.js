let a=10;
let b=20;
console.log(a+b);
let c=30;
let d=40;
console.log(c+d);
function add(x,y){
    return x+y;
}
function greet(name){
    return ("Hello" + name);
}
function user(g){
    console.log(greet("Naman"));
}
user(add(10,5));
user(greet);

const numbers=[1,2,3,4,5];
const t=function(num){
    return num*3;
}
const triplet=numbers.map(function(num){
    return num*3;
})
const tripletdemo=numbers.map(t);
console.log(tripletdemo);
console.log(triplet);

const even=numbers.filter(function(num){
    return num%2==0;
});
console.log(even);

const total=numbers.reduce(function(sum,num){
    return sum*num;
});
console.log(total);

const thrice=x=> x*x*x;
console.log(thrice(5));
const hello=()=>"Hello World";
console.log(hello());
const doubled =numbers.map(num=>num*2);
console.log(doubled);
