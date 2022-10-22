//VARIABLES
//Sections
const mainPage = document.getElementById("main-page");

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





// //Function declarations-------------------------

    //on scroll

// //Functions-------------------------------------

//     //Logo
   

//     // function scrollRotateStar() {
//     //     let purpleStar = document.getElementById("star-image");
//     //     purpleStar.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
//     // }

//     // // Kanske dumt att alla dom här stjärnorna har olika namn , den ovan också 
//     // // Den här funkar inte (classname)..?
//     // function scrollRotateStars() {
//     //     let footerStars = document.getElementsByClassName("star_image");
//     //     footerStars.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
//     // }

//     // function navbarNavigation() {
//     //     let navbarLine = document.getElementById('green-line');
//     //     navbarLine.style.color = 'blue';
//     // }





// //Tutorial:
// //https://www.youtube.com/watch?v=RsPWEmfOQdU&ab_channel=WEBCIFAR


// //Variables
// const sections = document.querySelectorAll('section');
// const navLi = document.querySelectorAll('nav .menu-container ul li');

// //Functions---------------------------
// //Target the sections when scrolling the page
// window.addEventListener('scroll', () => {
//     let current = ''; //current section
    
//     sections.forEach(section => {
//         const sectionTop = section.offsetTop; //.offsetTop returns the top position in pxls of the section
//         const sectionHeight = section.clientHeight; //.clientHeight measures the inner height of the sections in terms of pixels including the CSS properties like padding 

//         //window.pageYOffset returns the number of pixels the document is currently scrolled along the vertical axis (that is, up or down)
//         //.getAttribute('id') returns the id value of the element, in this case the section
//         //if the pageYOffset value is greater than or equal to sectionTop, then set the current variable to that sections id-attribute
//         if(window.pageYOffset >= (sectionTop)) {  //to make the nav change sooner
//             current = section.getAttribute("id");
//         }
//     })

//     //log the current section you're browsing at
//     //console.log(current);

//     //for each li-element..
//     navLi.forEach(li => {
//         //..remove the .active class if they have it:
//         li.classList.remove('active');

//         //..if the li-element contains a class that matches the current variable..
//         if(li.classList.contains(current)) {
//             //..add the active class to that li-element
//            li.classList.add('active'); 
//         };
//     })
// })


// //Console message 
// console.log('What are you doing here??? :)')


// // - sectionHeight / 3