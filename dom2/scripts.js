const sect = document.querySelector("section");
const link = document.querySelector("a");
link.textContent = "dino sore";
link.href = "https://developer.mozilla.org";

const para = document.createElement("p");
para.textContent = "We hope you enjoyed the ride.";

sect.appendChild(para);

const text = document.createTextNode(
  " - the premier source for web development knowledge.",
);

const linkPara = document.querySelector("p");
linkPara.appendChild(text);

para.style.color = "red";
para.style.cssText = "black";
