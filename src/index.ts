const app = document.querySelector("#root");

const title = document.createElement("h1");

const titleText = document.createTextNode("Homework 1");
title.appendChild(titleText);

app?.appendChild(title);

console.log(app);
