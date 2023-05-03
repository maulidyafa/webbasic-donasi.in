/* =========== NAVBAR =========== */
const navbar = document.querySelector(".navbar");
const navreponsive = document.querySelector(".nav-responsive");

navreponsive.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

/* =========== SCROLL =========== */
const scrollAtas = document.querySelector(".scroll-atas");

scrollAtas.addEventListener("click", () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", (e) => {
  const scrollHeight = window.pageYOffset;

  if (scrollHeight > 700) {
    scrollAtas.classList.add("show");
  } else {
    scrollAtas.classList.remove("show");
  }
});
