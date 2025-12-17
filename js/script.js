
const select = document.getElementById("projectSelect");

select.addEventListener("change", function () {
  const targetId = this.value;
  if (!targetId) return;

  document.getElementById(targetId).scrollIntoView({
    behavior: "smooth"
  });
});
