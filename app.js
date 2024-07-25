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
let tasks = [];

const addTask = () =>{
  const taskButton = document.getElementById('task-container')
  
} ;

document.addEventListener('DOMContentLoaded', () => {
  const addTaskBtn = document.getElementById('ref');
  const taskTitleInput = document.getElementById('task-title');
  const taskDateInput = document.getElementById('task-date');
  const taskDescInput = document.getElementById('task-desc-input');
  const taskList = document.getElementById('tasks');
  const progressBar = document.getElementById('progress');
  const progressNumbers = document.getElementById('numbers');
  
  let taskCount = 3;
  let completedTasks = 2;




  addTaskBtn.addEventListener('click', () => {
      const taskTitle = taskTitleInput.value;
      const taskDate = taskDateInput.value;
      const taskDesc = taskDescInput.value;

      if (taskTitle && taskDate && taskDesc) {
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

          updateProgressBar();

          
          taskTitleInput.value = '';
          taskDateInput.value = '';
          taskDescInput.value = '';
          modal.style.display = 'none';
      }
  });

  function updateProgressBar() {
      progressNumbers.textContent = `${completedTasks}/${taskCount}`;
      const progressPercentage = (completedTasks / taskCount) * 100;
      progressBar.style.width = `${progressPercentage}%`;
  }
  
  function addDeleteFunctionality(taskElement) {
      const deleteBtn = taskElement.querySelector('.fa-trash-alt');
      deleteBtn.addEventListener('click', () => {
          taskElement.remove();
          taskCount--;
          updateProgressBar();
      });
  }

  document.querySelectorAll('.taches').forEach(task => {
      addDeleteFunctionality(task);
  });

  updateProgressBar();
});
