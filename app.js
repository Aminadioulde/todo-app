
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
  
  let taskCount =0 ;
  let completedTasks = 0;
  let currentEditTask = null;
  let tasks = loadTasks();


  
  addTaskBtn.addEventListener('click', () => {
      const taskTitle = taskTitleInput.value;
      const taskDate = taskDateInput.value;
      const taskDesc = taskDescInput.value;

      if (taskTitle && taskDate && taskDesc) {
          if (currentEditTask) { 
              currentEditTask.querySelector('span:nth-child(1)').textContent = taskTitle;
              currentEditTask.querySelector('span:nth-child(2)').textContent = taskDate;
              currentEditTask.querySelector('p').textContent = taskDesc;
              saveTasks();
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
              tasks.push({title: taskTitle, date:taskDate, desc: taskDesc});
              saveTasks();
          }


          clearInputs();
          modal.style.display = 'none';
      }
    
  });


  
  function clearInputs() {
      taskTitleInput.value = '';
      taskDateInput.value = '';
      taskDescInput.value = '';
  }

  function addDeleteFunctionality(taskElement) {
      const deleteBtn = taskElement.querySelector('.fa-trash-alt');
      deleteBtn.addEventListener('click', () => {
        const index = Array.from(taskList.children).indexOf(taskElement);
        tasks.splice(index, 1);
          taskElement.remove();
          taskCount--;
          saveTasks();

      });
  }

  function addEditFunctionality(taskElement) {
      const editBtn = taskElement.querySelector('.fa-edit');
      editBtn.addEventListener('click', () => {
          currentEditTask = taskElement;
          const index = Array.from(taskList.children).indexOf(taskElement);
          const task = tasks[index];
          taskTitleInput.value = task.title;
          taskDateInput.value = task.date;
          taskDescInput.value = task.desc;
          modal.style.display = 'block';
      });
  }

  
  function loadTasks() {
    const tasksJSON = localStorage.getItem('tasks');
    if (tasksJSON) {
      const tasksArray = JSON.parse(tasksJSON);
      tasksArray.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.classList.add('taches');
        taskElement.innerHTML = `
          <span>${task.title}</span>
          <span>${task.date}</span>
          <p>${task.desc}</p>
          <span class="options">
            <i class="fas fa-edit"></i>
            <i class="fas fa-trash-alt"></i>
          </span>
        `;
        taskList.appendChild(taskElement);
        addDeleteFunctionality(taskElement);
        addEditFunctionality(taskElement);
        taskCount++;
      });

      return tasksArray;
    }
    return [];
  }

  function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

});
