// index.js

import Contact from "./Contact.js";



// var number = 5
// let name = "Sherry";

// number = 12;
// name = "Pluralsight ";

// // Writing to the document
// document.writeln(name + number);
// // alert("Hello World");

const formInfo = document.getElementById("formInfo");


let hasJob = false;
if (hasJob) {
    // I have a job
    showMessage("Thanks for visiting, I'm currently employed");
} else {
    // I need a job
    showMessage("Please look around, I'm currently looking for a position.");
}

let today = new Date();
let dayOfWeek = today.getDay();
if (dayOfWeek === 0 || dayOfWeek === 6) {
    showMessage("Since it is the weekend, please be patient with my returning your email");
}


function showMessage(message) {
    formInfo.innerHTML = "<p>" + message + "</p>";
}

function clearMessage() {
    formInfo.innerHTML = "";
}

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const contact = new Contact(contactForm);
    contact.send();
});

const experiences = document.getElementsByClassName("experience");
for (let x = 0; x < experiences.length; x++) {
    const item = experiences[x];
    item.addEventListener("mouseenter", function (event) {
        event.target.style = "background-color: #999999;"; 
    });
    item.addEventListener("mouseleave", function (event) {
        event.target.style = ""; 
    });
}






