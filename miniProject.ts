interface Todo {
  text: string;
  completed: boolean;
}

const todos: Todo[] = [];

const btn = document.getElementById("btn") as HTMLButtonElement;
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector("form")!;
const list = document.getElementById("todolist")!;

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();
  const newTodo: Todo = {
    text: input.value,
    completed: false,
  };

  createTodo(newTodo);
  todos.push(newTodo);
  input.value = "";
}

function createTodo(todo: Todo) {
  const newLi = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  newLi.style.display = "flex";
  newLi.style.alignItems = "flex-end";
  newLi.append(todo.text);
  newLi.append(checkbox);
  list.append(newLi);
}

form.addEventListener("submit", handleSubmit);

// btn?.addEventListener("click", function () {
//   alert("Clicked");
// });

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   console.log("Submitted");
// });
