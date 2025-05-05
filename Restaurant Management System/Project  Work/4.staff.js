function allowDrop(ev) {
  ev.preventDefault();
}
 
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}
 
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.innerHTML = document.getElementById(data).innerText;
}
 
function saveAvailability() {
  const name = document.getElementById("empName").value;
  const days = document.getElementById("availDays").value;
  document.getElementById("availabilityOutput").innerText =
    `${name} is available on: ${days}`;
}
 