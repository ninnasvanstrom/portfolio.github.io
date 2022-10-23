//VARIABLES
//Sections
const mainPage = document.querySelector("main");

//Navbar
const hamburgerMenu = document.getElementById("hamburger-menu");
const menuPopup = document.getElementById("menu-popup"); 
const closeButton = document.getElementById("close-button");
const aboutButton = document.getElementById("menu-popup-about");
const workButton = document.getElementById("menu-popup-work");
const contactButton = document.getElementById("menu-popup-contact");
const workSection = document.getElementById("work");
const contactSection = document.getElementById("footer");

//Projects
const quantifiedSelfImage = document.getElementById("quantified-self-image");
const quantifiedSelffName = document.getElementById("project-one-name");
const wehopImage = document.getElementById("wehop-image");
const wehopName = document.getElementById("project-two-name");


//EVENT LISTENERS
//Menu
hamburgerMenu.addEventListener("click", openMenu);
closeButton.addEventListener("click", closeMenu);
aboutButton.addEventListener("click", goToAbout);
workButton.addEventListener("click", goToWork);
contactButton.addEventListener("click", goToWork);

//Work section
//(E) FUNCTIONS?
quantifiedSelfImage.addEventListener("mouseover", showProjectOneName);
quantifiedSelfImage.addEventListener("mouseout", hideProjecOnetName);

wehopImage.addEventListener("mouseover", showProjectTwoName);
wehopImage.addEventListener("mouseout", hideProjectTwoName);


//FUNCTIONS
//Menu
function openMenu () {
    menuPopup.style.display = "block";
    mainPage.style.display = "none";
}

function closeMenu () {
    menuPopup.style.display = "none";
    mainPage.style.display = "block";
}

function goToAbout () {
    menuPopup.style.display = "none";
    mainPage.style.display = "block";

}

function goToWork () {
    menuPopup.style.display = "none";
    mainPage.style.display = "block";
    window.location.hash = workSection;

}

function goToContact () {
    menuPopup.style.display = "none";
    mainPage.style.display = "block";
    window.location.hash = contactSection;

}

//Rotate logo
function scrollRotateLogo() {
    let triangleLogo = document.getElementById("dot-logo");
    triangleLogo.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
}

window.onscroll = function () {
    scrollRotateLogo();

};

//Work
function showProjectOneName () {
    quantifiedSelffName.style.display = "block";
}

function hideProjecOnetName () {
    quantifiedSelffName.style.display = "none";
}

function showProjectTwoName () {
    wehopName.style.display = "block";
}

function hideProjectTwoName () {
    wehopName.style.display = "none";
}





// Console message 
console.log("She's brilliant, hire her.")
