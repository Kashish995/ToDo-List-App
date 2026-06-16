const addTodoBtn = document.getElementById("addTodoBtn");

const inputTag = document.getElementById("todoInput")
let todoText; //This should be populated when the user clicks on Add Button
let todos = [];

let todosString = localStorage.getItem("todos")
if(todosString) {
    todos = JSON.parse(todosString)
}


addTodoBtn.addEventListener("click", () => {
    console.log("Hey I just clicked")
    todoText = inputTag.value
    console.log(todoText)
    inputTag.value = ""

    let todo = {
        title: todoText,
        isCompleted: false,
    }

    todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(todos))
})