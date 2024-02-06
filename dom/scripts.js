const body = document.querySelector("body");
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);


const paragraph = document.createElement("p");
paragraph.setAttribute("style", "color: blue");
paragraph.textContent = "This is a blue paragraph"
body.appendChild(paragraph);

const h3 = document.createElement("h3");
h3.setAttribute("style", "color: red");
h3.textContent ="This is a red h3";
body.appendChild(h3);

const div = document.createElement("div");
div.style.cssText = "background-color: pink; border-style: solid; border-width: 4px; border-color: black;"
const innerH1 = document.createElement("h1");
innerH1.textContent = "I'm in a div";
const innerP = document.createElement("p");
innerP.textContent = "ME TOO";
div.appendChild(innerH1);
div.appendChild(innerP);
body.appendChild(div);
