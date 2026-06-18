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

// Question 11

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

const q11arr=(students2.map((s)=>{
    return{
        name:s.name,
        avg:s.marks.reduce((total,m)=>{
            return total+m;
        },0)/s.marks.length
    };
})).filter(s=>s.avg>=85)
.sort((a,b)=>b.avg-a.avg) 
.map(s=>s.name);
console.log(q11arr);

// Question 12
const products1 = [
{ name: "Laptop", category: "Electronics" },
{ name: "Phone", category: "Electronics" },
{ name: "Shirt", category: "Clothing" }
];

const q12=products1.reduce(function(group,product){
    if(!group[product.category]){
        group[product.category]=[];
    }
    group[product.category].push(product.name);
    return group;
},{});
console.log(q12);