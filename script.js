const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!")                         // if the field is empty i will show alert 
    }
    else{
        let li = document.createElement("li");                    // it will transfer this data in li
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);                            // it will show data in li under ui

        let span = document.createElement("span");                // this for cross(X) sign to delete data
        span.innerHTML = "\u00d7";                                // this code is for X symbol
        li.appendChild(span);
    }

    inputBox.value = "";                                         //for clear text field automatic
    saveData();                                                  // calling function for save data and it will save updated content to browser
}

listcontainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){                                     //if we click on list item it will checked the symbol and again click it will uncheck  
        e.target.classList.toggle("checked");
        saveData();     
    }
    else if(e.target.tagName === "SPAN"){                                // if we click on span (X) it will delete the task
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){                                                      // this function is use to save data in our browser if we resetart or refresh browser
    localStorage.setItem("data",listcontainer.innerHTML);
}

function showTask(){                                                       // it will take data from storage to the function
    listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();                                                                 //calling funtion for see data in browser