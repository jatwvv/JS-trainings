const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function AddTask() {
  if (inputBox.value === "") {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let button = document.createElement("button");
    button.innerHTML = "Remove";
    li.appendChild(button);
  }
  inputBox.value = "";
  saveDate();
}

listContainer.addEventListener(
  "click",
  function (e) {
     if (e.target.tagName === "BUTTON") {
      e.target.parentElement.remove();
      saveDate();
    }
  },
  false
);

function saveDate() {
  localStorage.setItem("date", listContainer.innerHTML);
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("date");
}
showTask();