import "./styles.css"
import homePage from "./modules/homePage";
import menuPage from "./modules/menuPage";

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");

document.addEventListener("DOMContentLoaded", homePage);

homeButton.addEventListener("click", homePage);
menuButton.addEventListener("click", menuPage);
aboutButton.addEventListener("click", aboutPage);