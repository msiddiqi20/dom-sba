document.body.prepend(document.createElement("nav"));
const navBar = document.querySelector("nav");
navBar.id = "nav-bar";
navBar.classList.add("navbar", "navbar-expand-lg", "bg-body-tertiary");
navBar
  .appendChild(document.createElement("div"))
  .classList.add("container-fluid");

const navLogo = {
  src: "pictures/ToDoIcon.png",
  alt: "To Do Icon",
  href: "index.html",
  text: "Check-Check",
};

const navItems = [
  { text: "Sign In", href: "#" },
  { text: "Sign Out", href: "#" },
];

function createNavBar(navLogo, navItems) {
  const navBarDiv = document.querySelector("div");

  const logoAnchor = document.createElement("a");
  logoAnchor.href = navLogo.href;
  logoAnchor.classList.add("navbar-brand");
  logoAnchor.innerHTML = `<img src="${navLogo.src}" alt="${navLogo.alt}" width="35"
  class="d-inline-block align-text-bottom mx-2">${navLogo.text}`;
  navBarDiv.appendChild(logoAnchor);

  const hamburgerMenuButton = document.createElement("button");
  setAllAttributes(hamburgerMenuButton, {
    class: "navbar-toggler",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#navbarSupportedContent",
    "aria-controls": "navbarSupportedContent",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation",
  });
  hamburgerMenuButton.innerHTML = `<span class="navbar-toggler-icon"></span>`;
  navBarDiv.appendChild(hamburgerMenuButton);

  const navBarCollapse = document.createElement("div");
  navBarCollapse.classList.add("collapse", "navbar-collapse");
  navBarCollapse.id = "navbarSupportedContent";
  navBarDiv.appendChild(navBarCollapse);

  const navBarUl = document.createElement("ul");
  navBarUl.classList.add("navbar-nav", "ms-auto");
  navBarDiv.lastChild.appendChild(navBarUl);

  navItems.forEach((item) => {
    let li = document.createElement("li");
    li.classList.add("nav-item");
    li.innerHTML = `<a class="nav-link" href="${item.href}">${item.text}</a>`;
    navBarUl.appendChild(li);
  });
}

function setAllAttributes(element, allAttributes) {
  for (let attribute in allAttributes) {
    element.setAttribute(attribute, allAttributes[attribute]);
  }
}

createNavBar(navLogo, navItems);

const heroSection = document.createElement("section");
heroSection.id = "hero";

heroSection.innerHTML = `
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

document.body.insertBefore(heroSection, document.querySelector("script"));

const mainSection = document.createElement("section");
mainSection.id = "main-section";
mainSection.classList.add("main", "px-4", "py-5", "my-5");
mainSection.style.backgroundColor = "#48a4d8";
document.body.insertBefore(mainSection, document.querySelector("script"));

const jumbotron = document.createElement("div");
jumbotron.classList.add(
  "jumbotron",
  "container",
  "col-10",
  "col-sm-8",
  "py-3",
  "text-center"
);
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

mainSection.appendChild(jumbotron);

const textInput = document.getElementById("listName");
const createButton = document.getElementById("create");

const liArray = [];

createButton.addEventListener("click", (event) => {
  event.preventDefault();

  jumbotron.innerHTML = `
  <h3 class="display-6 fw-bold">${textInput.value}</h3>
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
    <ul id="itemList" class="list-group-flush mt-5 px-0 col-10">
    </ul>
  </div>
  `;

  enableAdd();
});

function enableAdd() {
  document.getElementById("add").addEventListener("click", (event) => {
    event.preventDefault();

    if (!document.getElementById("itemName").value == "") {
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
      li.textContent = document.getElementById("itemName").value;
      li.classList.add("list-group-item", "col-8", "text-start", "flex-grow-1");
      li.style.fontSize = "27.5px";
      liArray.push(li);
      li.id = liArray.length - 1;

      document.getElementById("itemName").value = "";

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
      document.getElementById("itemList").appendChild(listDiv);

      enableEdit(li.id);
      enableDelete(li.id);
      enableClearAll();
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

    let savedAddButton = document.getElementById("add");
    document.getElementById("add").replaceWith(commitEditButton);

    commitEditButton.addEventListener("click", (event) => {
      event.preventDefault();

      let newValue = document.getElementById("itemName").value;
      document.getElementById("itemName").value = "";

      document
        .getElementById(`Div${id}`)
        .classList.remove(
          "animate__animated",
          "animate__fadeInUp",
          "animate__bounceOut"
        );

      console.log(document.getElementById(`Div${id}`));

      document
        .getElementById(`Div${id}`)
        .addEventListener("animationend", (event) => {
          event.preventDefault();
          document.getElementById(id).textContent = newValue;
          commitEditButton.replaceWith(savedAddButton);
        });

      document
        .getElementById(`Div${id}`)
        .classList.add("animate__animated", "animate__bounceIn");
    });
  });
}

function enableDelete(id) {
  document
    .getElementById(`DeleteBtn${id}`)
    .addEventListener("click", (event) => {
      event.preventDefault();

      if (document.getElementById("edit")) {
        window.alert(
          "You cannot delete an item while editing! Please make changes before deleting."
        );
      } else if (window.confirm("Do you want to delete this item?")) {
        let divRemove = document.getElementById(`Div${id}`);

        divRemove.addEventListener("animationend", (event) => {
          event.preventDefault();
          divRemove.remove();
          enableClearAll();
        });

        divRemove.classList.remove("animate__fadeInUp", "animate__bounceIn");
        divRemove.classList.add("animate__bounceOut");
      }
    });
}

function enableClearAll() {
  const allDivs = document.querySelectorAll("#itemList > div");

  if (allDivs.length > 1 && !document.getElementById("clearAllButton")) {
    let clearAllButton = document.createElement("button");
    clearAllButton.textContent = "Clear All";
    clearAllButton.classList.add("btn", "btn-danger", "btn-lg", "mx-2");
    clearAllButton.id = "clearAllButton";
    document.querySelector(".jumbotron").appendChild(clearAllButton);

    clearAllButton.addEventListener("click", (event) => {
      event.preventDefault();

      if (document.getElementById("edit")) {
        window.alert(
          "You cannot delete all items while editing! Please make changes before deleting."
        );
      } else if (window.confirm("Are you sure you want to delete all items?")) {
        let ul = document.getElementById("itemList");

        ul.addEventListener("animationend", (event) => {
          event.preventDefault();
          ul.remove();
          ul = document.createElement("ul");
          ul.id = "itemList";
          ul.classList.add("list-group-flush", "mt-5", "px-0", "col-10");
          document.getElementById("mainContent").appendChild(ul);
          clearAllButton.classList.add("d-none");
        });

        ul.classList.add("animate__animated", "animate__fadeOutUp");
      }
    });
  } else if (allDivs.length > 1) {
    let clearAllButton = document.getElementById("clearAllButton");
    clearAllButton.classList.remove("d-none");
  } else if (allDivs.length < 1 && document.getElementById("clearAllButton")) {
    let clearAllButton = document.getElementById("clearAllButton");
    clearAllButton.classList.add("d-none");
  }
}
