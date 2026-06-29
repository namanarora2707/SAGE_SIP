let h=document.getElementById("heading")
console.log(h.parentElement);

let input=document.getElementById("input");
let btn=document.getElementById("btn");
let list=document.getElementById("list");

btn.addEventListener("click",function(){
    console.log("button hit");
    let task=input.value;
    if(task.trim()==="") return;
    let li=document.createElement("li");
    li.innerText=task;
    list.appendChild(li);
    input.value="";
})

button.addEventListener("click", function(){
document.body.classList.toggle("dark");
});

