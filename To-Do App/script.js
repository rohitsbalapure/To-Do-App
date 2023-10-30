const taskEntry = document.getElementById('taskEntry');
const taskList = document.getElementById('task-list');

function addTask(){
    if (taskEntry.value=='') {
        alert("Enter a task")
    }
    else{
        let li = document.createElement('li');
        li.innerHTML= taskEntry.value;
        taskList.appendChild(li);

    }
    taskEntry.value=''
}