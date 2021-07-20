//selctors
const buttons = document.querySelectorAll("button");
const textArea = document.querySelector("textarea");
const output = document.querySelector(".output");
const alignBtns = document.querySelectorAll(".align-btn");

//eventlisteners

textArea.addEventListener("keyup",showText);
textArea.addEventListener("change",showText);

buttons.forEach(btn=>{
    btn.addEventListener("click",addRemoveStyle);
})

alignBtns.forEach(btn=>{
    btn.addEventListener("click",addRemoveActive);
})



//funtions

function showText(){
    output.textContent = textArea.value;
}

function addRemoveStyle(){
   let buttonValue = this.value;
   this.classList.toggle("active");
   if(buttonValue==="bold"){
       output.classList.toggle("bold");
   }
   if(buttonValue==="italic"){
       output.classList.toggle("italic");
   }
   if(buttonValue==="underline"){
       output.classList.toggle("underline");
   }
   if(buttonValue==="left"){
       output.classList.add("left");
       output.classList.remove("center");
       output.classList.remove("right");
   }
   if(buttonValue==="center"){
       output.classList.add("center");
       output.classList.remove("left");
       output.classList.remove("right");
   }
   if(buttonValue==="right"){
       output.classList.add("right");
       output.classList.remove("center");
       output.classList.remove("left");
   }
}

function addRemoveActive(){
    for(let i=0;i<alignBtns.length;i++){
        alignBtns[i].classList.remove("active");
    }
    this.classList.add("active");
}