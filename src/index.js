import "./style.css";


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
let projectTasks = {};
let projectCounter = 0;

const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const title = document.getElementById("title").value;
    if (title) {
        console.log(title);

        const projectId = "project-" + projectCounter++;

        const test = document.createElement("div");
        test.className = "project-item";
        test.textContent = title;

        test.dataset.projectId = projectId;
        
        projects.appendChild(test);
        closeModal(projectModal, projectForm);

        projectTasks[projectId] = [];

        //removeThis(projects, test);
        removeProjectBtn(projects, test);
        

        //select title
        //btn appears 
        //title selected div content set to whatever
        test.addEventListener("click", () => {
            console.log("HI FROM EVENT!");

            if (selectedProject) {
                selectedProject.classList.remove("selected");
            }
            
            selectedProject = test;
            selectedProject.classList.add("selected");

            taskNew.style.display = "block";

            showProjectTasks(projectId);

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

function showProjectTasks(projectId) {
    const allTaskElements = document.querySelectorAll(".task-item");
    allTaskElements.forEach(element => {
        element.style.display = "none";
    });

    const projectSpecificTasks = document.querySelectorAll(`.task-item[data-project-id="${projectId}"]`);
    projectSpecificTasks.forEach(element => {
        element.style.display = "block";
    });
}

const taskAdd = document.getElementById("taskAdd");
taskAdd.addEventListener("click", (event) => {
    event.preventDefault();
    const taskTitle = document.getElementById("taskName").value;
    const dates = document.getElementById("date").value;

    const priority = document.getElementById("priority").value;
    const description = document.getElementById("description").value;
    const notes = document.getElementById("notes").value;


    if (taskTitle && dates && selectedProject) {
        console.log(taskTitle);
        console.log(dates);

        const projectId = selectedProject.dataset.projectId;

        const taskContainer = document.createElement("div");
        taskContainer.className = "task-item";
        taskContainer.dataset.projectId = projectId;


        const test2 = document.createElement("div");
        const test3 = document.createElement("div");
        const test4 = document.createElement("div");

        const test5 = document.createElement("div");
        const test6 = document.createElement("div");

        test2.textContent = taskTitle;
        test3.textContent = dates;
        test4.textContent = priority;
        test5.textContent = description;
        test6.textContent = notes;
        taskContainer.appendChild(test2);
        taskContainer.appendChild(test3);
        taskContainer.appendChild(test4);
        taskContainer.appendChild(test5);
        taskContainer.appendChild(test6);

        tasks.appendChild(taskContainer);
        projectTasks[projectId].push(taskContainer);

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "R";
        removeBtn.className = "remove-btn";
        taskContainer.appendChild(removeBtn);
        
        removeBtn.addEventListener("click", () => {
            // Remove from DOM
            taskContainer.remove();
            
            // Remove from our tracking array
            const taskIndex = projectTasks[projectId].indexOf(taskContainer);
            if (taskIndex > -1) {
                projectTasks[projectId].splice(taskIndex, 1);
            }
        });

        closeModal(taskModal, taskForm);
        //removeThis(tasks, test2, test3);
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
        //btn.remove();
        element.remove();
        //taskNew.style.display = "none";
        console.log("in eventListener");

        

        if (element2) {
            element2.remove();
        }
    });
}

function removeProjectBtn(name, element) {
    const container = document.createElement("div");
    container.classList.add("project-container");
    name.removeChild(element);
    container.appendChild(element);
    
    
    
    
    const btn = document.createElement("button");
    btn.classList = "remove-btn";
    btn.textContent = "R";
    container.appendChild(btn);

    name.appendChild(container);

    btn.addEventListener("click", () => {

        const projectId = element.dataset.projectId;

        if (selectedProject === element) {
            taskNew.style.display = "none";
            selectedProject = null;
        }

        if(projectTasks[projectId]) {
            projectTasks[projectId].forEach(taskElement => {
                if(taskElement.parentNode) {
                    taskElement.remove();
                }
            });
            delete projectTasks[projectId];
        }

        //btn.remove();
        //element.remove();
        container.remove();
    });
}

displayModal(btn, projectDialog);
displayModal(taskNew, taskDialog);
//break everything up


//create btn in add, eventListener for btn,
//when btn clicked eventListener to clear html
//put in different html tags 
