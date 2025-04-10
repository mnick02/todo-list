const btn = document.getElementById("project");
const taskBtn = document.getElementById("taskBtn");
const projectModal = document.getElementById("projectDialog");
const projectForm = document.querySelector(".project-info");
const taskModal = document.getElementById("taskDialog");
const taskForm = document.querySelector(".task-info");
const projects = document.getElementById("projects-bar");
const tasks = document.getElementById("task-content");

//const taskAdd = document.getElementById("taskAdd");
//taskAdd.style.display = 'none';

//Remove btn from html create here
//remove btn when remove project

const taskNew = document.createElement("button");
taskNew.id = "taskNew";
taskNew.textContent = "New Task";
taskNew.style.display = "none";
tasks.appendChild(taskNew);

let selectedProject = null;

const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const title = document.getElementById("title").value;
    if (title) {
        console.log(title);
        const test = document.createElement("div");
        test.textContent = title;
        projects.appendChild(test);
        closeModal(projectModal, projectForm);
        //removeThis(projects, test);
        removeProjectBtn(projects, test);

        //select title
        //btn appears 
        //title selected div content set to whatever
        test.addEventListener("click", () => {
            console.log("HI FROM EVENT!");
            taskNew.style.display = 'block';
        });


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
    const dates = document.getElementById("date").value;


    if (taskTitle && dates) {
        console.log(taskTitle);
        console.log(dates);
        const test2 = document.createElement("div");
        const test3 = document.createElement("div");
        test2.textContent = taskTitle;
        test3.textContent = dates;
        tasks.appendChild(test2);
        tasks.appendChild(test3);
        closeModal(taskModal, taskForm);
        removeThis(tasks, test2, test3);
    }
    else {
        alert("Please provide task title and date");
    }

});


function closeModal(modal, form) {
    modal.close();
    if (form) {
        form.reset();
    }
}


function removeThis(name, element, element2) {
    const btn = document.createElement("button");
    btn.textContent = "R";
    name.appendChild(btn);

    btn.addEventListener("click", () => {
        btn.remove();
        element.remove();
        taskNew.style.display = "none";
        console.log("in eventListener");
        

        if (element2) {
            element2.remove();
        }
    });
}

function removeProjectBtn(name, element) {
    const btn = document.createElement("button");
    btn.textContent = "R";
    name.appendChild(btn);

    btn.addEventListener("click", () => {
        if (selectedProject === element) {
            taskNew.style.display = "none";
            selectedProject = null;
        }

        btn.remove();
        element.remove();
    });
}

displayModal(btn, projectDialog);
displayModal(taskNew, taskDialog);
//break everything up


//create btn in add, eventListener for btn,
//when btn clicked eventListener to clear html
//put in different html tags 
