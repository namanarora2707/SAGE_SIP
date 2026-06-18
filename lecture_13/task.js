// Question 1
const names=["gagan","ishan","yogesh"];

const q1=names.map(function(name){
    return name.toUpperCase();
})
const q1arr=names.map(name=>name.toUpperCase());
console.log(q1);
console.log(q1arr);

// Question 2

const products=[{id:1, name:"Laptop"},{id:2,name:"phone"},{id:3,name:"Tablet"}];

const q2=products.map(function(product){
    return product.name;
})
const q2arr=products.map(product=>product.name);
console.log(q2);
console.log(q2arr);

// Question 3

const animals=["apple","banana","cat","elephant","dog"];
const q3=animals.filter(function(animal){
    return animal.length>5;
})
const q3arr=animals.filter(animal=>animal.length>5);
console.log(q3);
console.log(q3arr);

// Question 4
const ages=[{name:"A",age:16},{name:"B",age:22},{name:"C",age:19}];
const q4= ages.filter(function(age){
    return age.age>18;
})
const q4arr=ages.filter(age=> age.age>18);
console.log(q4);
console.log(q4arr);

// Question 5

const words=["hello","world","javascript"];
const q5=words.reduce(function(total,word){
    return total+=word.length;
},0);
const q5arr=words.reduce((total,word)=>total+=word.length,0);
console.log(q5);
console.log(q5arr);

const q5demo=words.reduce((join,word)=>join+=word);
console.log(q5demo);

const q5dem=words.map(word=>word.length);
console.log(q5dem);

// Question 6

const nums1=[1,2,3,4,5,6,7,8];

const q6=nums1.filter(function(num){
    return num%2==0;
}).map(function(num){
    return num*num;
})
console.log(q6);

const q6arr=nums1.filter(num=>num%2==0 && num%3==0).map(n=>n*n).reduce((total,n)=>total+=n,0);

console.log(q6arr);

// Question 7

const employees = [
{ name: "A", salary: 30000 },
{ name: "B", salary: 50000 },
{ name: "C", salary: 40000 }
];

const q7=employees.reduce(function(total,e){
    return total+=e.salary;
},0);

const q7arr=employees.reduce((total,e)=>total+=e.salary,0);
console.log(q7);
console.log(q7arr);

// Question 8

const students = [
{ name: "A", marks: 35 },
{ name: "B", marks: 75 },
{ name: "C", marks: 45 },
{ name: "D", marks: 25 }
];

const q8 =students.filter(function(mark){
    return mark.marks>40;
}).map(function(name){
    return name.name;
});

const q8arr=students.filter(mark=>mark.marks>40).map(name=>name.name);
console.log(q8);
console.log(q8arr);

// Question 9

const marks1=[60,80,90,70];

const q9=marks1.reduce(function(total,n){
    return total+=n;
},0)/marks1.length;

const q9arr=marks1.reduce((total,n)=>total+=n,0)/marks1.length;
console.log(q9);
console.log(q9arr);

// Question 10

const fruits = [
"apple",
"banana",
"apple",
"orange",
"banana",
"apple"
];

const q10=fruits.reduce(function(occ,fruit){
    occ[fruit]=(occ[fruit]||0)+1;
    return occ;
},{});

const q10arr=fruits.reduce((occ,fruit)=>{occ[fruit]=(occ[fruit]||0)+1; return occ},{});

console.log(q10);
console.log(q10arr);

// Question 12
const students2 = [
{
name: "Utkarsh",
marks: [80, 90, 85]
},
{
name: "Yukta",
marks: [95, 92, 98]
},
{
name: " Navneet",
marks: [60, 70, 65]
}
];

const q12arr=(students2.map((s)=>{
    return{
        name:s.name,
        avg:s.marks.reduce((total,m)=>{
            return total+m;
        },0)/s.marks.length
    };
})).filter(s=>s.avg>=85)
.sort((a,b)=>b.avg-a.avg) 
.map(s=>s.name);
console.log(q12arr);
// Question 13

const products1 = [
{ name: "Laptop", category: "Electronics" },
{ name: "Phone", category: "Electronics" },
{ name: "Shirt", category: "Clothing" }
];

const q13=products1.reduce(function(group,product){
    if(!group[product.category]){
        group[product.category]=[];
    }
    group[product.category].push(product.name);
    return group;
},{});
console.log(q13);