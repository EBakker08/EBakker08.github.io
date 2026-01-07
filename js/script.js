
// select dropdown element.
const select = document.getElementById("projectSelect");

// when selection canges-
select.addEventListener("change", function () {
  // -select target-
  const targetId = this.value;
  // -if there is no target, stop.
  if (!targetId) return;

  // smooth scroll to target.
  document.getElementById(targetId).scrollIntoView({
    behavior: "smooth"
  });
});

const backToTopButton = document.getElementById("backToTop");

// Show button after scrolling down
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.add("show");
  } else {
      backToTopButton.classList.remove("show");
  }
});

// Scroll back to top when clicked
backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});