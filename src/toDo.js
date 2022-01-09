
const ToDo = (title, description, dueDate, priority, notes, id) => {
    return { title, description, dueDate, priority, notes, id };
};

const createToDo = (toDo) => {
    let li = document.createElement("li");
    let liID = toDo.id;
    let inputTitle = document.createTextNode(toDo.title);
    let inputDescription = document.createTextNode(toDo.description);
    let inputDueDate = document.createTextNode(toDo.dueDate);
    let inputPriority = document.createTextNode(toDo.priority);
    let inputNotes = document.createTextNode(toDo.notes);


}