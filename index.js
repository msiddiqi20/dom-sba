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
sections[1].style.backgroundColor = "#042d6b";
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
  <div id="mainContent">
    <p>Prompt...</p>
    <div>
      <form class="d-flex flex-row justify-content-center">
        <div class="col-6">
          <input type="text" class="form-control form-control-lg" id="itemName" placeholder="Add item...">
        </div>
        <div>
          <button id="add" class="btn btn-primary btn-lg mx-2">Add</button>
        </div>
      </form>
    </div>
    <ul id="itemList" class="list-group my-3">
    </ul>
  </div>
  `;

  const itemNameInput = document.getElementById("itemName");
  const addButton = document.getElementById("add");
  const list = document.getElementById("itemList");

  enableAdd(itemNameInput, addButton, list);
  enableActiveListItem(list);
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
      let li = document.createElement("li");
      li.classList.add("list-group-item");
      li.textContent = input.value;
      input.value = "";

      listArray.push(li);
      li.id = listArray.length - 1;
      list.appendChild(li);
      console.log(li);
    }
  });
}

function enableActiveListItem(ul) {
  ul.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.tagName.toLowerCase() == "li") {
      event.target.classList.add("active");
      singleActive(ul, event.target.id);
    }
  });
}

function singleActive(ul, id) {
  const allListItems = ul.children;

  for (let item of allListItems) {
    if (item.id != id) {
      item.classList.remove("active");
    }
  }
}
