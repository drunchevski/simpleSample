function removeTask(event) {
  console.log(event);
  /*
  let taskList = document.getElementById("taskList");
  taskList.removeChild(event.target);
  */
}

function addTask() {
  let taskInput = document.getElementById("taskInput");
  let task = taskInput.value;

  let taskList = document.getElementById("taskList");

  let taskText = document.createTextNode(task);
  let taskNode = document.createElement("h4");
  taskNode.setAttribute("class", "task panel");
  taskNode.onclick = removeTask;
  taskNode.appendChild(taskText);
  taskList.appendChild(taskNode);
}

function buttonClicked() {
  let suda = document.getElementById("suda");
  if (!suda) return;

  for (let i = 0; i < 25; i++) {
    var node = document.createElement("img");
    node.setAttribute("src", "pap.gif");
    node.setAttribute("width", 250);
    suda.appendChild(node);
  }
}
