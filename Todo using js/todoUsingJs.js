let req= prompt("Enter your request: add, delete, list, quit");
const task= [];

while(true){
    if(req == "quit"){
        break;
    }
    
    else if(req =="list"){
        console.log("Task in the list");
        for(let i=0; i<task.length; i++){
            console.log(i+1 + ". " + task[i]);
        }
    }

    else if(req == "add"){
        const newTask= prompt("Enter the task to your list");
        task.push(newTask);
        console.log("Task added to the list");
    }
    
    else if(req == "delete"){
        console.log("Task in the list");
        for(let i=0; i<task.length; i++){
            console.log(i+1 + ". " + task[i]);
        }
        const deleteTask= prompt("enter the index of task to delete");
        task.splice(deleteTask-1, 1);
    }
    
     req= prompt("Enter your request: add, delete, list, quit");
}