let massiv = ["pap.gif", "papicio.gif", "papik.gif", "papzan.gif"];

let droparea = null;
document.addEventListener("DOMContentLoaded", onDomLoaded);

function addPapich(imagefile) {
  let img = imagefile.target.result;
  massiv.push(img);
  createAndPushPapich(img);
}

function consumer(e) {
  e.preventDefault();
  let dt = e.dataTransfer;
  let file = dt.files[0];
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = addPapich;
}

function createAndPushPapich(img) {
  let gitPush = document.getElementById("Pukich");
  let gitgut = document.createElement("img");
  let widthInput = document.getElementById("widthInput");
  let IWidth = widthInput.value;
  let IHeight = "120px";

  gitgut.setAttribute("src", img);
  gitgut.setAttribute("height", IHeight);
  gitgut.setAttribute("width", IWidth);
  gitPush.appendChild(gitgut);
  window.scrollTo(0, document.body.scrollHeight);
}

function PrisivPapicha() {
  let Rand = Math.floor(Math.random() * massiv.length);
  let Randy = massiv[Rand];
  createAndPushPapich(Randy);
}

function preventDefault(e) {
  e.preventDefault();
}

function onDomLoaded() {
  document.getElementById("consumer").addEventListener("drop", consumer, false);
  document
    .getElementById("consumer")
    .addEventListener("dragover", preventDefault, false);
}
