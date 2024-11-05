const navBtn = document.getElementById("nav-toggle");
const navLinks = document.querySelector(".nav-list");

console.log(navBtn);

navBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("active");
});

const updateYear = () => {
  const year = document.getElementById("year");
  year.innerText = new Date().getFullYear();
};

updateYear();
