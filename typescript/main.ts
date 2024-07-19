declare var ScrollReveal: any;
// todo ------------------------ Start navbar -------------------------- //
const navbar = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 600) {
    navbar.style.background = "#111";
  } else {
    navbar.style.background = "transparent";
  }
});
// todo -------------------------- End navbar -------------------------- //
// todo -------------------------- Start About ------------------------- //

const aboutContainer = document.querySelector(".about .container");
const about = document.querySelector(".about") as HTMLElement;
const aboutProg = document.querySelectorAll(
  ".about .prog .progress-bar"
) as NodeListOf<HTMLElement>;

ScrollReveal().reveal(aboutContainer, {
  duration: 1300,
  distance: "50px",
  origin: "bottom",
  delay: 300,
});

window.addEventListener("scroll", () => {
  if (window.scrollY >= about.offsetTop - 150) {
    aboutProg.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
});

// todo -------------------------- End About ---------------------------- //
// todo -------------------------- Start Services ----------------------- //

const servicesRows = document.querySelectorAll(".services .row");

ScrollReveal().reveal(servicesRows, {
  duration: 1300,
  distance: "50px",
  origin: "bottom",
  delay: 500,
});

// todo -------------------------- End Services ------------------------ //
// todo -------------------------- Start Blog -------------------------- //

const cardBlog = document.querySelectorAll(".blog .card");

ScrollReveal().reveal(cardBlog[0], {
  duration: 1300,
  distance: "30px",
  origin: "bottom",
  delay: 300,
});
ScrollReveal().reveal(cardBlog[1], {
  duration: 1300,
  distance: "30px",
  origin: "bottom",
  delay: 600,
});
ScrollReveal().reveal(cardBlog[2], {
  duration: 1300,
  distance: "30px",
  origin: "bottom",
  delay: 900,
});

// todo -------------------------- End Blog ---------------------------- //
// todo -------------------------- Start Stats ------------------------- //

const stats = document.querySelector(".stats") as HTMLElement;
const statsNumber = document.querySelectorAll(
  ".stats .container .row .number"
) as NodeListOf<HTMLElement>;
let start = false;

window.addEventListener("scroll", () => {
  if (window.scrollY >= stats.offsetTop - 200) {
    if (!start) {
      statsNumber.forEach((num) => startCount(num));
    }
    start = true;
  }
});
function startCount(el: any) {
  let goal = el.dataset.number;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

// todo -------------------------- End Stats --------------------------- //
