const addTodoBtn = document.getElementById("addTodoBtn");
const inputTag = document.getElementById("todoInput");
const todoListUl = document.getElementById("todoList");

let todoText; //This should be populated when the user clicks on Add Button
let todos = [];
let todosString = localStorage.getItem("todos");
//If we have todos int he localStorage, we will read it
if (todosString) {
  todos = JSON.parse(todosString);
}



const populateTodos = () => {
  let string = "";

  for (const todo of todos) {
    string += ` <li id="todo-${todo.id}" class="todo-item ${todo.isCompleted? "completed":""}" >
                    <input type="checkbox" class="todo-checkbox" ${todo.isCompleted? "checked":""} >
                    <span class="todo-text">${todo.title}</span>
                    <button class="delete-btn">×</button>
                </li>`
  }
  todoListUl.innerHTML =  string;
}

addTodoBtn.addEventListener("click", () => {
  todoText = inputTag.value;
  inputTag.value = "";

  let todo = {
    id: todos.length,
    title: todoText,
    isCompleted: false
  };

  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos))
  populateTodos()
})

populateTodos()

const todoCheckboxes = document.querySelectorAll(".todo-checkbox")

todoCheckboxes.forEach((element) => {
  console.log(element)
  element.addEventListener("click", (e) => {
    if(e.target.checked) {
      element.parentNode.classList.add("completed")
      console.log(element.parentNode.id)
      // Grab this todo from todos array and update the todos array to set this todos isCompleted attribute as true
      todos  = todos.map(todo => {
        console.log("todo-" + todo.id, element.parentNode.id)
        if("todo-" + todo.id == element.parentNode.id){
          return {...todo, isCompleted: true}
        }
        else{
          console.log(todo)
          return todo
        }
      })
      console.log(todos)
      localStorage.setItem("todos", JSON.stringify(todos))
    }else{
       element.parentNode.classList.remove("completed")
    }
  })
})
