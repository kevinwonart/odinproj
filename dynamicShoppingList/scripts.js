console.log("here");

const addButton = document.querySelector("#add-item-btn");
const list = document.querySelector("ul");
const itemInput = document.querySelector("input");
addButton.addEventListener("click", () => {
  let listItem = document.createElement("li");
  let delButton = document.createElement("button");
  let span = document.createElement("span");
  listItem.style.cssText = "margin-bottom: 10px";
  span.textContent = itemInput.value;
  delButton.innerHTML = "Delete";
  delButton.style.cssText = "margin-left: 15px";
  delButton.addEventListener("click", () => {
    list.removeChild(listItem);
  });
  itemInput.value = "";
  listItem.appendChild(span);
  listItem.appendChild(delButton);
  list.appendChild(listItem);
});
