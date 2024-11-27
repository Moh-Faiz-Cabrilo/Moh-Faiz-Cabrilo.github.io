// Scroll to top start
const gotopbtn = document.querySelector('.go-top-btn');

window.addEventListener("scroll", checkHeight);

function checkHeight() {
  if (window.scrollY > 200) {
    gotopbtn.style.display = "flex";  
  } else {
    gotopbtn.style.display = "none";  
  }
}


gotopbtn.addEventListener("click", scrollToTop);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'  
  });
}
// scroll to top end

// navbar shining simering splendid start
const navLinks = document.querySelectorAll('.nav-link');


const sections = document.querySelectorAll('section');


window.addEventListener('scroll', () => {
  let current = '';

 
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100; 
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});
// navbar shining end



  
  
  
  


