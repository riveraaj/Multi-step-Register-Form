import App from "./App.js";

if(!localStorage.getItem("Step"))
    localStorage.setItem("Step", 1); //Setup Step in 1

document.addEventListener('DOMContentLoaded', App);