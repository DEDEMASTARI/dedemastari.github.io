const navbar = document.querySelector(".navbar");
const navbarToggle = document.querySelector(".navbar-toggle");
const logo = document.querySelector(".navbar-brand");
const navbarMenu = document.querySelector(".navbar-menu");
const bgSidebar = document.querySelector(".bg-sidebar");
const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll("header nav ul li a");
const btnSend = document.querySelector("footer form button");

navbarToggle.addEventListener("click", function () {
  this.classList.toggle("slide");
  logo.classList.toggle("slide");
  navbarMenu.classList.toggle("slide");
  bgSidebar.classList.toggle("slide");
});

bgSidebar.addEventListener("click", function () {
  this.classList.remove("slide");
  logo.classList.remove("slide");
  navbarMenu.classList.remove("slide");
  bgSidebar.classList.remove("slide");
});

navbarLinks.forEach(function (a) {
  a.addEventListener("click", function () {
    navbarToggle.classList.remove("slide");
    logo.classList.remove("slide");
    navbarMenu.classList.remove("slide");
    bgSidebar.classList.remove("slide");
  });
});

window.addEventListener("scroll", function () {
  navbar.classList.toggle("header-scrolled", window.scrollY > 0);
});

window.onscroll = function () {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 160;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navbarLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav ul li a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

btnSend.addEventListener("click", function () {
  document.getElementById("username").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
});
