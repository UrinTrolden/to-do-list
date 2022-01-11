import { project } from "./projects";
import { toDoForm } from "./toDoForm";
export { updateListOfTodos };


const initializeDom = (() => {
    let addToDoButton = document.createElement("button");
    addToDoButton.id = "addtodobutton";
    addToDoButton.innerText = "Add to do";
    let toDoContainer = document.createElement("div");


    document.body.appendChild(toDoContainer);
    document.body.appendChild(addToDoButton);


    return { toDoContainer, addToDoButton };
})();

const updateListOfTodos = () => {
    while (initializeDom.toDoContainer.firstChild) {
        initializeDom.toDoContainer.removeChild(initializeDom.toDoContainer.lastChild);
    }
    project.currentProject.forEach(toDo => {
            let list = document.createElement("li");
            let inputTitle = document.createTextNode(toDo.title);
            let inputDescription = document.createTextNode(toDo.description);
            let inputDueDate = document.createTextNode(toDo.dueDate);
            let inputPriority = document.createTextNode(toDo.priority);
            let inputNotes = document.createTextNode(toDo.notes);

            inputTitle.classList = "todotitle";

            list.appendChild(inputTitle);
            list.appendChild(inputDescription);
            list.appendChild(inputDueDate);
            list.appendChild(inputPriority);
            list.appendChild(inputNotes);
            
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