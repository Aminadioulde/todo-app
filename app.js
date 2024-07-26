
var modal = document.getElementById("myModal");

var btn = document.getElementById("addbtn");
btn.addEventListener("click", toggleModal);

var span = document.getElementById("fermer");

function toggleModal() {
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
document.addEventListener('DOMContentLoaded', () => {
  const addTaskBtn = document.getElementById('ref');
  const taskTitleInput = document.getElementById('task-title');
  const taskDateInput = document.getElementById('task-date');
  const taskDescInput = document.getElementById('task-desc-input');
  const taskList = document.getElementById('tasks');
  const progressBar = document.getElementById('progress');
  const progressNumbers = document.getElementById('numbers');
  
  let taskCount = 1;
  let completedTasks = 0;
  let currentEditTask = null;


  
  addTaskBtn.addEventListener('click', () => {
      const taskTitle = taskTitleInput.value;
      const taskDate = taskDateInput.value;
      const taskDesc = taskDescInput.value;

      if (taskTitle && taskDate && taskDesc) {
          if (currentEditTask) { 
              currentEditTask.querySelector('span:nth-child(1)').textContent = taskTitle;
              currentEditTask.querySelector('span:nth-child(2)').textContent = taskDate;
              currentEditTask.querySelector('p').textContent = taskDesc;
              currentEditTask = null;
          } 
          else {
              const newTask = document.createElement('div');
              newTask.classList.add('taches');

              newTask.innerHTML = `
                  <span>${taskTitle}</span>
                  <span>${taskDate}</span>
                  <p>${taskDesc}</p>
                  <span class="options">
                      <i class="fas fa-edit"></i>
                      <i class="fas fa-trash-alt"></i>
                  </span>
              `;

              taskList.appendChild(newTask);
              taskCount++;

              addDeleteFunctionality(newTask);
              addEditFunctionality(newTask);
          }

          updateProgressBar();

          clearInputs();
          modal.style.display = 'none';
      }
  });

  function updateProgressBar() {
      progressNumbers.textContent = `${completedTasks}/${taskCount}`;
      const progressPercentage = (completedTasks / taskCount) * 100;
      progressBar.style.width = `${progressPercentage}%`;
  }
  
  function clearInputs() {
      taskTitleInput.value = '';
      taskDateInput.value = '';
      taskDescInput.value = '';
  }

  function addDeleteFunctionality(taskElement) {
      const deleteBtn = taskElement.querySelector('.fa-trash-alt');
      deleteBtn.addEventListener('click', () => {
          taskElement.remove();
          taskCount--;
          updateProgressBar();
      });
  }

  function addEditFunctionality(taskElement) {
      const editBtn = taskElement.querySelector('.fa-edit');
      editBtn.addEventListener('click', () => {
          currentEditTask = taskElement;
          taskTitleInput.value = taskElement.querySelector('span:nth-child(1)').textContent;
          taskDateInput.value = taskElement.querySelector('span:nth-child(2)').textContent;
          taskDescInput.value = taskElement.querySelector('p').textContent;
          modal.style.display = 'block';
      });
  }

  document.querySelectorAll('.taches').forEach(task => {
      addDeleteFunctionality(task);
      addEditFunctionality(task);
  });

  
  updateProgressBar();
});
