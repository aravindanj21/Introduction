//Dom Selection
let input = document.querySelector("#taskInput");
let button = document.querySelector("#addBtn");
let list = document.querySelector("#taskList");

// Event Handling
button.addEventListener("click", function () {

    
    
    let taskValue = input.value;

    if (taskValue.trim() === "") {
        alert("Please enter a task");
        return;
    }
     
    // Dynamic Element Creation
    let li = document.createElement("li");
    li.innerText = taskValue;

    li.style.color = "black";
    li.style.fontSize = "18px";

     li.setAttribute("class", "task-item");

    //  Remove
     li.addEventListener("click", function () {
        li.remove();
    });
     
    // Append
    list.append(li);

    //  Clear the input field
     input.value = "";
});
