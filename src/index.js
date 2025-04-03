const btn = document.getElementById("project");
const taskBtn = document.getElementById("taskBtn");
const projectModal = document.getElementById("projectDialog");
const projectForm = document.querySelector(".project-info");

const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const title = document.getElementById("title").value;
    console.log(title);
    closeModal(projectModal, projectForm);
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
