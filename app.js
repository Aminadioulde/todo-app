var modal = document.getElementById("modal");


var span = document.getElementById("fermer");

var btn = document.getElementById("addbtn")
btn.addEventListener("click",toggleModal);
function toggleModal(){
  modal.style.display = "block";
  console.log("amina");
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
let tasks = [];

const addTask = () =>{
  const taskButton = document.getElementById('task-container')
  
} ;
document.getElementById('ref').addEventListener('click', function(e){
  e.preventDefault();

  addTask();
})