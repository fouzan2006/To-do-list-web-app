//script.js

//select elements
const taskinput = document.getElementById("taskinput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

//Add a Task
addTaskBtn.addEventListener("click",()=> {
    const task = taskinput.value.trim();
    if(task){
        const li = document.createElement("li");
        li.innerHTML = `
        ${task}
        <button class="delete-btn">Delete</button>
        `;
        //Mark task as completed
        li.addEventListener("click",()=>{
            li.classList.toggle("completed");
        });
        //Delete task
        li.querySelector(".delete-btn").addEventListener("click",(e)=>{
            e.stopPropagation();//Prevent triggering the completion toggle
            taskList.removeChild(li);
        });
        //Add the task to the list
        taskList.appendChild(li);
        //Clear input field
        taskinput.value="";
    }else{
        alert("Please enter a task!");
    }
    
});
