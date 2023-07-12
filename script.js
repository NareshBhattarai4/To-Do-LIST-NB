const content=document.getElementById("content");
const inputVal=document.getElementById("input-val");

const addItem=()=>{

    if(inputVal.value==""){
        alert("Please Enter Item");
    }else{

    const li=document.createElement('li');
    li.innerText=inputVal.value;
   content.appendChild(li)
   const span=document.createElement("span");
    span.innerHTML="\u00d7";
   li.appendChild(span);
  
    }
    inputVal.value="";
    
}
content.addEventListener("click",(e)=>{
    if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
})