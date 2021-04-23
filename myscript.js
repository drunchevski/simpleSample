function removeTask(event) {
  console.log(event);
  
  let xXx_Delete_xXx = event.target
  xXx_Delete_xXx.removeChild(xXx_Delete_xXx.childNodes[0]);
  console.log(xXx_Delete_xXx);


  let taskText = document.createTextNode("НЫААААААААААААААА");
  event.target.appendChild(taskText);

  
  /*let taskList = document.getElementById("taskList");
  taskList.removeChild(event.target);
 */ 
}
function PrisivPapicha() {
let gitPush = document.getElementById("Pukich");
let gitgut = document.createElement("img");
let taskInput = document.getElementById("taskInput");
let task = taskInput.value; 
let IWidth = task;
let Iheight = "84.3833px"; 
let massiv = ["pap","papik","papzan","papicio"];
let Rand = Math.floor(Math.random() *4);
let Randy = massiv[Rand];

gitgut.setAttribute("src", Randy+".gif"); 
gitgut.setAttribute("width", IWidth); 
gitgut.setAttribute("height",Iheight)
gitPush.appendChild(gitgut); 
//Math.floor(Math.random() * 5); // 0 1 2 3 4

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
