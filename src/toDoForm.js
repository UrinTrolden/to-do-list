import { project } from "./projects";
import { ToDo } from "./toDo";
import { updateListOfTodos } from "./addtodom";
export { toDoForm, submitForm };

const createFormEntry = (inputName, placeHolder, inputType, id) => {
    let formLabel = document.createElement("label");
    formLabel.innerText = inputName + ":";
    formLabel.appendChild(document.createElement("BR"));
    let formInput = document.createElement("input");
    formInput.type = inputType;
    formInput.placeholder = placeHolder;
    formInput.id = id;
    formInput.appendChild(document.createElement("BR"));
    
    return { formLabel, formInput };
}

const createFormSelector = (inputName, options, id) => {
    let formLabel = document.createElement("label");
    formLabel.innerText = inputName + ":";
    formLabel.appendChild(document.createElement("BR"));
    let formInput = document.createElement("select");
    formInput.id = id;
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
    form.classList = "addtodo";
    form.appendChild(document.createElement("BR"));
    //title, description, dueDate, priority, notes, id
    let titelInput = createFormEntry( "Title", "Enter title... ", "text", "title");
    let descriptionInput = createFormEntry( "Description", "Enter description... ", "text", "description");
    let dueDateInput = createFormEntry( "Due date", "Enter date... ", "date", "duedate");
    let priorityInput = createFormSelector("Priority", ["High", "Medium", "Low"], "priority");
    let notesInput = createFormEntry( "Notes", "Enter notes (optional)... ", "text", "notes");
    let submitButton = document.createElement("input");
    submitButton.id = "todobutton";
    submitButton.value = "Post To Do";
    submitButton.type = "submit";

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
    form.appendChild(notesInput.formLabel);
    form.appendChild(notesInput.formInput);
    form.appendChild(document.createElement("BR"));
    form.appendChild(submitButton);
    document.body.appendChild(form);

    return { form };
})();

const idGenerator = (() => {
    let idCount = 0;
    const idIncrement = () => {
        return idCount++;
    }
    return { idIncrement };
})();

const submitForm = (() => {
    toDoForm.form.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log("hello");
        //title, description, dueDate, priority, notes, id
        let toDoTitle = toDoForm.form.querySelector('input[id = "title"]').value;
        let toDoDescription = toDoForm.form.querySelector('input[id = "description"]').value;
        let toDoDueDate = toDoForm.form.querySelector('input[id = "duedate"]').value;
        let toDoPriority = toDoForm.form.querySelector('select[id = "priority"]').value;
        let toDoNotes = toDoForm.form.querySelector('input[id = "notes"]').value;
        let toDoId = idGenerator.idIncrement();
        let toDoEntry = ToDo(toDoTitle, toDoDescription, toDoDueDate, toDoPriority, toDoNotes, toDoId);

        project.currentProject.push(toDoEntry);
        console.log(project.projectsArray);
        updateListOfTodos();
        toDoForm.form.classList = "";
    })
})();



/*
bookform.addEventListener("submit", (e) => {
  e.preventDefault();
  let bookTitle = bookform.querySelector('input[id="title"]').value;
  let bookAuthor = bookform.querySelector('input[id="author"]').value;
  let bookPages = bookform.querySelector('input[id="pages"]').value;
  let bookRead = bookform.querySelector('input[id="read"]').checked;
  console.log(bookform.querySelector('input[id="pages"]').value)
  
  if (bookPages > 0 && bookRead) {
    pagereadNum += Number(bookPages);
    localStorage.setItem('storedPageCount', JSON.stringify(pagereadNum));
  }

  if(bookRead) {
    bookRead = "Read. ✅";
  } else {
    bookRead = "Not read. ❌";
  }

  let bookId = bookIdCreator();
  myLibrary.push(new Book(bookTitle, bookAuthor, bookPages, bookRead, bookId));
  libraryDisplay();
  console.log(myLibrary)
});
*/