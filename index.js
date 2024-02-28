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

function setAllAttributes(element, allAttributes) {
  for (let attribute in allAttributes) {
    console.log(allAttributes.attribute);
    element.setAttribute(attribute, allAttributes[attribute]);
  }
}
