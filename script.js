
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value;
    if (taskText.trim() !== "") {
      let span = document.createElement("span")
  
      var listItem = document.createElement("li");
      listItem.innerText = taskText;
      let checkbox = document.createElement("input")
      checkbox.setAttribute("type", "checkbox")
      listItem.appendChild(span)
      span.appendChild(checkbox)
      checkbox.addEventListener("click", () => {
        if (checkbox.checked) {
          listItem.style.color = "red", textDecoration = "line-through"
          listItem.style.textDecoration = "line-through"
        } else {
          listItem.style.color = "blue"
          listItem.style.textDecoration = "none"
        }
      })
      let del = document.createElement("button")
      del.textContent = "delete"
      span.appendChild(del)
      del.addEventListener("click", () => {
        listItem.remove()
      })
      let taskList = document.getElementById("taskList")
      taskList.appendChild(listItem)
      taskInput.value = ""
    }
  }
  
  async function fu() {
    let a =await fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => {
      const taskList = document.getElementById('taskList');
  
      data.forEach(todo => {
        const listItem = document.createElement('li');
        const title = document.createElement('span');
        title.textContent = todo.title;
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        if (checkbox.checked) {
          listItem.style.textDecoration = "line-through"
        } else {
          listItem.style.textDecoration = "none"
        }
        let deli = document.createElement("button")
        deli.innerText = "delete"
  
        deli.addEventListener("click", () => {
          listItem.remove()
        })
        taskList.appendChild(listItem);
        let span = document.createElement("span")
        listItem.appendChild(title);
        listItem.appendChild(span)
  
        span.appendChild(checkbox);
        span.appendChild(deli)
      });
    })
    .catch(error => {
      console.log('An error occurred:', error);
    });
  }
  fu()
  