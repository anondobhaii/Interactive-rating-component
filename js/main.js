const numbers = document.querySelectorAll(".buttons")[0];
const thank = document.querySelectorAll(".thank")[0];
const box = document.querySelectorAll(".rat-sta")[0];
const submit = document.querySelector("#submit");
const rateNum = document.querySelector("#rateNum");

console.log(numbers.children.length)

let a = 0;

numbers.addEventListener("click", (e)=>{
    for (let i = 0; i < numbers.children.length; i++) {
        if( numbers.children[i] === e.target){
            // numbers.children[i].style.background = "var(--c-p-o)";
            // numbers.children[i].style.color = "var(--c-n-w)";
            numbers.children[i].classList.add("active");
            a = i;
        }else{
            // numbers.children[i].style.background = "var(--c-n-mg)";
            // numbers.children[i].style.color = "var(--c-n-lg)";
            numbers.children[i].classList.remove("active");

        }
    }
})

submit.addEventListener("click", ()=> {
    rateNum.textContent = a + 1 ;
    thank.style.display = "flex";
    box.style.display = "none";
    

})

console.log(numbers.children[1].classList)
