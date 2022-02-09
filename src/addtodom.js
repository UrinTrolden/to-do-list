import { project } from "./projects";
import { toDoForm } from "./toDoForm";
export { updateListOfTodos };

function createComponent(name, type, text) {
    const element = document.createElement(type);
    if (name != "") element.classList.add(name);
    if (text != "") element.innerText = text;
    return element;
}

const initializeDom = (() => {
    let addToDoButton = document.createElement("button");
    addToDoButton.id = "addtodobutton";
    addToDoButton.innerText = "Add to do";
    let toDoContainer = document.createElement("div");
    toDoContainer.classList = "todocontainer";


    document.body.appendChild(toDoContainer);
    document.body.appendChild(addToDoButton);


    return { toDoContainer, addToDoButton };
})();

const updateListOfTodos = () => {
    while (initializeDom.toDoContainer.firstChild) {
        initializeDom.toDoContainer.removeChild(initializeDom.toDoContainer.lastChild);
    }
    project.currentProject.forEach(toDo => {
            let list = document.createElement("div");
            let inputTitle = createComponent("title", "h1", toDo.title);
            let inputDescription = createComponent("description", "p", toDo.description);
            let inputDueDate = createComponent("date", "p", toDo.dueDate);
            //let inputPriority = createComponent("priority", "p", "Priority: " + toDo.priority.toUpperCase());
            let inputNotes = createComponent("notes", "p", toDo.notes);
            list.appendChild(inputTitle);
            list.appendChild(inputDescription);
            list.appendChild(inputDueDate);
            //list.appendChild(inputPriority);
            list.appendChild(inputNotes);
            list.classList = "todocard";
            switch (toDo.priority) {
                case "high":
                    list.style.background = "rgb(235, 88, 52)";
                    break;
                case "medium":
                    list.style.background = "rgb(232, 235, 52)";
                    break;
                case "low":
                    list.style.background = "rgb(67, 235, 52)";
                    break;
            };

            initializeDom.toDoContainer.appendChild(list);
    })
}

const addToDoOnclick = (() => {
    initializeDom.addToDoButton.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("hello there");
        toDoForm.form.classList = "show";
    })
})();