const btn = document.getElementById("project");

btn.addEventListener("click", () => {
    projectDialog.showModal();
});

const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const title = document.getElementById("title").value;
    console.log(title);
});

const taskBtn = document.getElementById("taskBtn");
taskBtn.addEventListener("click", () => {
    taskDialog.showModal();
});

//break everything up
