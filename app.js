// Get the modal
var modal = document.getElementById("modal");


// Get the <span> element that closes the modal
var span = document.getElementById("fermer");

// When the user clicks on the button, open the modal
var btn = document.getElementById("addbtn")
btn.addEventListener("click",toggleModal);
function toggleModal(){
  modal.style.display = "block";
  console.log("amina");
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
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