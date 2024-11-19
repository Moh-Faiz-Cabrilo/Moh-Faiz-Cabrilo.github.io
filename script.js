// Scroll to top button functionality
const gotopbtn = document.querySelector('.go-top-btn');

window.addEventListener("scroll", checkHeight);

function checkHeight() {
  if (window.scrollY > 200) {
    gotopbtn.style.display = "flex";  // Show button when scrolled down 200px
  } else {
    gotopbtn.style.display = "none";  // Hide button when scrolled back up
  }
}

// Scroll to the top when the button is clicked
gotopbtn.addEventListener("click", scrollToTop);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'  // Smooth scroll effect
  });
}


  
  
  
  


