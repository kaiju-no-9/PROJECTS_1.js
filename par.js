const inputBox=document.getElementById("inputBox");
const listContainer= document.getElementById("listContainer");
function addTask(){
    if(inputBox.value===''){
        alert("youmust write something!");

    }
    else{
        let li = document.createElement("li");
        li.textContent= inputBox.value;
        listContainer.appendChild(li);
        let span =document.createElement("span");
        span.textContent="\u00d7";
        li.appendChild(span);
    }
     inputBox.value = "";
     saveData();


}
listContainer.addEventListener("click", function(e){ 
    if(e.target.tagNmae==="li"){ /*this part of code not working */
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();

    }
} ,false)
/*here we are makig the website shuch that the data is stored even after refesh*/
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();