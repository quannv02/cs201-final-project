// Get elements
let btnAdd = document.querySelector("button.btn-add");
let taskName = document.querySelector("input.new-task");
let tbody = document.querySelector("tbody");

// Add event listenners
let oldName = "";
btnAdd.addEventListener("click", createTask);
tbody.addEventListener("click", function(event) {
  if (event.target.classList.contains("btn-done"))
    doneTask(event.target);
  else if (event.target.classList.contains("btn-delete"))
    deleteTask(event.target);
  else if (event.target.classList.contains("btn-edit"))
    oldName = editTask(event.target);
  else if (event.target.classList.contains("btn-save"))
    saveUpdateTask(event.target);
  else if (event.target.classList.contains("btn-cancel"))
    cancelUpdateTask(event.target, oldName);
});

// Functions
// 1. Add task
function addTask(name)
{
  let output =
  `<tr>
    <td><input type="checkbox" class="btn-done"></td>
    <td scope="row">${tbody.childElementCount + 1}</td>
    <td>${name}</td>
    <td class="d-flex justify-content-end">
      <button class="btn-edit"><img src="icons\\edit-svgrepo-com.svg" alt="edit" class="btn-edit"></button>
      <button class="btn-delete"><img src="icons\\trash-svgrepo-com.svg" alt="delete" class="btn-delete"></button>
    </td>
  </tr>`;
  tbody.insertAdjacentHTML("beforeend", output);
}

function createTask()
{
  if(taskName.value == "")
    alert("Task name cannot be blank.");
  else
  {
    let name = taskName.value;
    addTask(name);
    taskName.value = "";
  }
}


// 2. Delete task
function reIndexTable()
{
  let trs = tbody.querySelectorAll("tr");
  trs.forEach(function(tr, i) {
    tr.children[1].textContent = i + 1;
  });
}

function deleteTask(elem)
{
  elem.closest("tr").remove();
  reIndexTable();
}

// 3. Edit task
function editTask(elem)
{
  let tr = elem.closest("tr");

  // add edit name input
  let oldName = tr.children[2].textContent;
  let editNameInput = `<input type="text" class="new-task edit-task" placeholder="Enter task name" value="${oldName}">`;
  tr.children[2].innerHTML = editNameInput;

  // hide checkbox
  let btnDone = tr.querySelector("input");
  btnDone.style.display = "none";

  // hide other buttons
  let allBtn = tbody.querySelectorAll("button");
  allBtn.forEach((btn) => {
    btn.style.display = "none";
  });

  // disabled btn add
  btnAdd.disabled = true;

  // change btn edit and btn delete into btn save and btn cancel
  let btns = tr.querySelectorAll("button");

  btns[0].style.display = "";
  btns[1].style.display = "";

  btns[0].className = "btn-save";
  btns[1].className = "btn-cancel";

  btns[0].innerHTML = '<img src="icons\\check-svgrepo-com.svg" alt="save" class="btn-save">';
  btns[1].innerHTML = '<img src="icons\\close-svgrepo-com.svg" alt="cancel" class="btn-cancel">';

  return oldName;
}

// 4. Update task
function saveUpdateTask(elem)
{
  let tr = elem.closest("tr");

  // update task name and remove input
  let editNameInput = tr.querySelector("input.edit-task");
  if(editNameInput.value == "")
  {
    alert("Task name cannot be blank.");
    return;
  }
  let updatedName = editNameInput.value;
  editNameInput.remove();
  tr.children[2].textContent = updatedName;

  // show checkbox
  let btnDone = tr.querySelector("input");
  btnDone.style.display = "";

  // show other buttons
  let allBtn = tbody.querySelectorAll("button");
  allBtn.forEach((btn) => {
    btn.style.display = "";
  });

  // disabled btn add
  btnAdd.disabled = false;

  // change btn save and btn cancel into btn edit and btn delete
  let btns = tr.querySelectorAll("button");

  btns[0].className = "btn-edit";
  btns[1].className = "btn-delete";

  btns[0].innerHTML = '<img src="icons\\edit-svgrepo-com.svg" alt="edit" class="btn-edit">';
  btns[1].innerHTML = '<img src="icons\\trash-svgrepo-com.svg" alt="delete" class="btn-delete">';
}

function cancelUpdateTask(elem, oldName)
{
  let tr = elem.closest("tr");

  // update task name and remove input
  let editNameInput = tr.querySelector("input.edit-task");
  editNameInput.remove();
  tr.children[2].textContent = oldName;

  // show checkbox
  let btnDone = tr.querySelector("input");
  btnDone.style.display = "";

  // show other buttons
  let allBtn = tbody.querySelectorAll("button");
  allBtn.forEach((btn) => {
    btn.style.display = "";
  });

  // disabled btn add
  btnAdd.disabled = false;

  // change btn save and btn cancel into btn edit and btn delete
  let btns = tr.querySelectorAll("button");

  btns[0].className = "btn-edit";
  btns[1].className = "btn-delete";

  btns[0].innerHTML = '<img src="icons\\edit-svgrepo-com.svg" alt="edit" class="btn-edit">';
  btns[1].innerHTML = '<img src="icons\\trash-svgrepo-com.svg" alt="delete" class="btn-delete">';
}

// 5. Task done
function doneTask(elem)
{
  let tr = elem.closest("tr");
  let btnDone = tr.querySelector("input");
  let btns = tr.querySelectorAll("button");

  if (btnDone.checked === true)
  {
    btns[0].style.display = "none";
    btns[1].style.display = "none";
    //tr.style.textDecorationLine = "line-through";
    tr.style.background = "url('backgrounds/strike.png') 0px 50% repeat-x transparent";
    tr.style.opacity = 0.5;
  }
  else
  {
    btns[0].style.display = "";
    btns[1].style.display = "";
    //.style.textDecoration = "none";
    tr.style.background = "";
    tr.style.opacity = 1;
  }
}
