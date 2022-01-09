import './styles.css';

const helloWorld = document.createElement("div");
helloWorld.innerText = "Hello World!";
document.body.appendChild(helloWorld);

const createFormEntry = (inputName, placeHolder, inputType) => {
    let formLabel = document.createElement("label");
    formLabel.innerText = inputName + ":";
    formLabel.appendChild(document.createElement("BR"));
    let formInput = document.createElement("input");
    formInput.type = inputType;
    formInput.placeholder = placeHolder;
    formInput.appendChild(document.createElement("BR"));
    
    return { formLabel, formInput };
}

const createFormSelector = (inputName, inputType, options) => {
    let formLabel = document.createElement("label");
    formLabel.innerText = inputName + ":";
    formLabel.appendChild(document.createElement("BR"));
    let formInput = document.createElement("select");
    formInput.appendChild(document.createElement("BR"));
    
    for (let i = 0; i < options.length; i++) {
        let option = document.createElement("option");
        option.value = options[i].toLowerCase(); 
        option.innerText = options[i];
        formInput.appendChild(option);
    }

    return { formLabel, formInput };
}

const toDoForm = (() => {
    let form = document.createElement("form");
    form.id = "toDoForm";
    form.innerText = "Create toDo";
    form.appendChild(document.createElement("BR"));
    //title, description, dueDate, priority, notes, id
    let titelInput = createFormEntry( "Title", "Enter title... ", "text");
    let descriptionInput = createFormEntry( "Description", "Enter description... ", "text");
    let dueDateInput = createFormEntry( "Due date", "Enter date... ", "date");
    let priorityInput = createFormSelector("Priority", "select", ["High", "Medium", "Low"]);
    




    form.appendChild(titelInput.formLabel);
    form.appendChild(titelInput.formInput);
    form.appendChild(document.createElement("BR"));
    form.appendChild(descriptionInput.formLabel);
    form.appendChild(descriptionInput.formInput);
    form.appendChild(document.createElement("BR"));
    form.appendChild(dueDateInput.formLabel);
    form.appendChild(dueDateInput.formInput);
    form.appendChild(document.createElement("BR"));
    form.appendChild(priorityInput.formLabel);
    form.appendChild(priorityInput.formInput);
    form.appendChild(document.createElement("BR"));



    document.body.appendChild(form);
})();

