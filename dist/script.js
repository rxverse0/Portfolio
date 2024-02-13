//------------> TOP BUTTON
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

//------------> ACTIVE BUTTON

const sectBtn = document.querySelectorAll(".select");
const active = document.querySelectorAll(".active-btn");

function selectBtn() {
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener("click", function () {
      // Remove "active" class from all buttons
      for (let j = 0; j < sectBtn.length; j++) {
        sectBtn[j].classList.remove(
          "active-btn",
          "border",
          "border-gray-800",
          "rounded-full",
          "px-4",
          "py-2"
        );
      }

      // Add "active" class to the clicked button
      this.classList.add(
        "active-btn",
        "border",
        "border-gray-800",
        "rounded-full",
        "px-4",
        "py-2"
      );
    });
  }
}

selectBtn();
