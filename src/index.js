const btn = document.getElementById("project");
const taskBtn = document.getElementById("taskBtn");
const projectModal = document.getElementById("projectDialog");
const projectForm = document.querySelector(".project-info");
const taskModal = document.getElementById("taskDialog");
const taskForm = document.querySelector(".task-info");

const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const title = document.getElementById("title").value;
    if (title) {
        console.log(title);
        closeModal(projectModal, projectForm);
    }
    else {
        alert("Please provide project title");
    }
    
});

function displayModal(btn, dialog) {
    btn.addEventListener("click", () => {
        dialog.showModal();
        console.log("hiya");
    });
}

const taskAdd = document.getElementById("taskAdd");
taskAdd.addEventListener("click", (event) => {
    event.preventDefault();
    const taskTitle = document.getElementById("taskName").value;
    console.log(taskTitle);
    //Add close modal
    closeModal(taskModal, taskForm);
});


function closeModal(modal, form) {
    modal.close();
    if (form) {
        form.reset();
    }
}

displayModal(btn, projectDialog);
displayModal(taskBtn, taskDialog);
//break everything up
