document.body.prepend(document.createElement("nav"));
const navBar = document.querySelector("nav");
navBar.id = "nav-bar";
navBar.classList.add("navbar", "navbar-expand-lg", "bg-body-tertiary");
navBar
  .appendChild(document.createElement("div"))
  .classList.add("container-fluid");

navLogo = {
  src: "pictures/ToDoIcon.png",
  alt: "To Do Icon",
  href: "index.html",
  text: "Check-Check",
};

navItems = [
  { text: "Sign In", href: "#" },
  { text: "Sign Out", href: "#" },
];

function createNavBar(navLogo, navItems) {
  const navBarDiv = document.querySelector("div");

  navBarDiv.appendChild(document.createElement("a"));
  logoAnchor = document.querySelector("a");
  logoAnchor.href = navLogo.href;
  logoAnchor.classList.add("navbar-brand");

  logoAnchor.innerHTML = `<img src="${navLogo.src}" alt="${navLogo.alt}" width="35"
  class="d-inline-block align-text-bottom mx-2">${navLogo.text}`;

  navBarDiv.appendChild(document.createElement("button"));
  setAllAttributes(document.querySelector("button"), {
    class: "navbar-toggler",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#navbarSupportedContent",
    "aria-controls": "navbarSupportedContent",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation",
  });
  document.querySelector(
    "button"
  ).innerHTML = `<span class="navbar-toggler-icon"></span>`;

  navBarDiv
    .appendChild(document.createElement("div"))
    .classList.add("collapse", "navbar-collapse");

  navBarDiv.lastChild.id = "navbarSupportedContent";

  navBarDiv.lastChild
    .appendChild(document.createElement("ul"))
    .classList.add("navbar-nav", "ms-auto");

  navItems.forEach((item) => {
    let li = document.createElement("li");
    li.classList.add("nav-item");
    li.innerHTML = `<a class="nav-link" href="${item.href}">${item.text}</a>`;
    navBarDiv.lastChild.firstChild.appendChild(li);
  });
}

createNavBar(navLogo, navItems);

document.body.insertBefore(
  document.createElement("section"),
  document.querySelector("script")
);

document.querySelector("section").innerHTML = `
<div class="px-4 py-5 my-5 text-center">
<img
  class="img-flex mx-auto mb-4 d-none d-sm-block"
  src="pictures/Potential.svg"
  alt="To Do something"
  width="500"
/>
<h1 class="display-3 fw-bold text-body-emphasis text-center">The best to do app...</h1>
<div class="col-lg-6 mx-auto">
  <p class="lead mb-4">
    Write soemthing cool here...
  </p>
</div>
</div>
`;

document.body.insertBefore(
  document.createElement("section"),
  document.querySelector("script")
);

const sections = document.querySelectorAll("section");

sections[1].classList.add("main", "px-4", "py-5", "my-5");
sections[1].style.backgroundColor = "#48a4d8";
sections[1].appendChild(document.createElement("div"));
sections[1].firstChild.classList.add(
  "jumbotron",
  "container",
  "col-10",
  "col-sm-8",
  "py-3",
  "text-center"
);

const jumbotron = document.querySelector(".jumbotron");
jumbotron.style.backgroundColor = "white";
jumbotron.style.boxShadow =
  "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px";
jumbotron.style.borderRadius = "5px";
jumbotron.innerHTML = `
<h2 class="display-5 fw-bold">App Name Here...</h2>
<div id="mainContent">
  <p>Prompt...</p>
  <div class="container col-8">
    <form>
      <div class="col-auto">
        <label for="listName" class="visually-hidden">List Name</label>
        <input type="text" class="form-control form-control-lg" id="listName" placeholder="List Name...">
      </div>
      <div class="col-auto">
        <button id="create" class="btn btn-primary btn-lg mt-3">Create</button>
      </div>
    </form>
  </div>
</div>
`;

const listNameInput = document.getElementById("listName");
const createButton = document.getElementById("create");

const listArray = [];

createButton.addEventListener("click", (event) => {
  event.preventDefault();
  jumbotron.innerHTML = `
  <h3 class="display-6 fw-bold">${listNameInput.value}</h3>
  <div id="mainContent" class="row justify-content-center">
    <p>Prompt...</p>
    <div>
      <form class="d-flex flex-row justify-content-center">
        <div class="col-6">
          <input type="text" class="form-control form-control-lg" id="itemName" placeholder="Add item...">
        </div>
        <div>
          <button id="add" class="btn btn-dark btn-lg mx-2">Add</button>
        </div>
      </form>
    </div>
    <ul id="itemList" class="list-group-flush mt-5 px-0 col-10" style="">
    </ul>
  </div>
  `;

  const itemNameInput = document.getElementById("itemName");
  const addButton = document.getElementById("add");
  const list = document.getElementById("itemList");

  enableAdd(itemNameInput, addButton, list);
});

function setAllAttributes(element, allAttributes) {
  for (let attribute in allAttributes) {
    element.setAttribute(attribute, allAttributes[attribute]);
  }
}

function enableAdd(input, button, list) {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    if (!input.value == "") {
      let listDiv = document.createElement("div");
      listDiv.classList.add(
        "d-flex",
        "flex-row",
        "justify-content-center",
        "rounded",
        "px-2",
        "animate__animated",
        "animate__fadeInUp"
      );

      let li = document.createElement("li");
      li.textContent = input.value;
      input.value = "";
      li.classList.add("list-group-item", "col-8", "text-start", "flex-grow-1");
      li.style.fontSize = "27.5px";
      listArray.push(li);
      li.id = listArray.length - 1;
      listDiv.id = `Div${li.id}`;
      listDiv.appendChild(li);

      let editButton = document.createElement("a");
      editButton.classList.add("mt-1");
      editButton.href = "";
      editButton.id = `EditBtn${li.id}`;
      editButton.innerHTML = `
      <i
      class="material-symbols-outlined"
      style=" font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48; font-size: 35px; color: #ffc008;">
      pending
      </i>
      `;
      listDiv.appendChild(editButton);

      let deleteButton = document.createElement("a");
      deleteButton.classList.add("mt-1");
      deleteButton.href = "";
      deleteButton.id = `DeleteBtn${li.id}`;
      deleteButton.innerHTML = `
      <i
      class="material-symbols-outlined"
      style=" font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48; font-size: 35px; color: red;">
      cancel
      </i>
      `;
      listDiv.appendChild(deleteButton);
      list.appendChild(listDiv);

      enableEdit(li.id);
      enableDelete(li.id);
      clearAll();
    }
  });
}

function enableEdit(id) {
  document.getElementById(`EditBtn${id}`).addEventListener("click", (event) => {
    event.preventDefault();
    window.alert("You are about to make changes to this item");
    let divEdit = document.getElementById(`Div${id}`);
    document.getElementById("itemName").value = divEdit.firstChild.textContent;
    let commitEditButton = document.createElement("button");
    commitEditButton.id = "edit";
    commitEditButton.classList.add("btn", "btn-dark", "btn-lg", "mx-2");
    commitEditButton.textContent = "Save";
    savedAddButton = document.getElementById("add");

    document.getElementById("add").replaceWith(commitEditButton);

    commitEditButton.addEventListener("click", (event) => {
      event.preventDefault();

      let newValue = document.getElementById("itemName").value;
      document.getElementById("itemName").value = "";
      document
        .getElementById(`Div${id}`)
        .classList.remove("animate__fadeInUp", "animate__bounceOut");
      document.getElementById(`Div${id}`).classList.add("animate__bounceIn");
      document
        .getElementById(`Div${id}`)
        .addEventListener("animationend", (event) => {
          document.getElementById(id).textContent = newValue;
          commitEditButton.replaceWith(savedAddButton);
        });
    });
  });
}

function enableDelete(id) {
  document
    .getElementById(`DeleteBtn${id}`)
    .addEventListener("click", (event) => {
      event.preventDefault();

      if (window.confirm("Do you want to delete this item?")) {
        let divRemove = document.getElementById(`Div${id}`);

        divRemove.addEventListener("animationend", (event) => {
          event.preventDefault();
          divRemove.remove();
          clearAll();
        });
        divRemove.classList.remove("animate__fadeInUp", "animate__bounceIn");
        divRemove.classList.add("animate__bounceOut");
      }
    });
}

function clearAll() {
  const allDivs = document.querySelectorAll("#itemList > div");
  if (allDivs.length > 1 && !document.getElementById("clearAllButton")) {
    let clearAllButton = document.createElement("button");
    clearAllButton.textContent = "Clear All";
    clearAllButton.classList.add("btn", "btn-danger", "btn-lg", "mx-2");
    clearAllButton.id = "clearAllButton";
    document.querySelector(".jumbotron").appendChild(clearAllButton);

    clearAllButton.addEventListener("click", (event) => {
      event.preventDefault();
      if (window.confirm("Are you sure you want to delete all items?")) {
        for (let div of document.querySelectorAll("#itemList > div")) {
          div.remove();
        }
        clearAllButton.classList.add("d-none");
      }
    });
  } else if (allDivs.length > 1) {
    let clearAllButton = document.getElementById("clearAllButton");
    clearAllButton.classList.remove("d-none");
  } else if (allDivs.length < 1 && document.getElementById("clearAllButton")) {
    let clearAllButton = document.getElementById("clearAllButton");
    clearAllButton.classList.add("d-none");
  } else {
  }
}
