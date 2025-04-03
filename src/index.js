const btn = document.getElementById("project");
const projectModal = document.getElementById("projectDialog");
const projectForm = document.querySelector(".project-info");

btn.addEventListener("click", () => {
    projectDialog.showModal();
});

const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const title = document.getElementById("title").value;
    console.log(title);
    closeModal();
});

const taskBtn = document.getElementById("taskBtn");
taskBtn.addEventListener("click", () => {
    taskDialog.showModal();
});


function closeModal() {
    projectModal.close();
    projectForm.reset();

}


//break everything up
