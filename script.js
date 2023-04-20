const lBulb1 = document.querySelector("#lightbulb1");
const lBulb2 = document.querySelector("lightbulb2");
const lBulb3 = document.querySelector("lightbulb3");
const subtitle = document.querySelector(".subtitle")
let count = 0;

lBulb1.addEventListener("click", function(){
    count++;
    subtitle.innerHTML = count;
    this.classList.toggle("active")
})

lBulb2.addEventListener("click", function(){
    count++;
    subtitle.innerHTML = count;
    this.classList.toggle("active")
})

lBulb3.addEventListener("click", function(){
    count++;
    subtitle.innerHTML = count;
    this.classList.toggle("active")
})