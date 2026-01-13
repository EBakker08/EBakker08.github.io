
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
