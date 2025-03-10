function openTab(evt, tabName) {
  var tabContent = document.querySelectorAll(".tab-content");
  tabContent.forEach((content) => (content.style.display = "none"));

  var tabLinks = document.querySelectorAll(".tab-link");
  tabLinks.forEach((link) => link.classList.remove("active"));

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("active");
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".tab-content").style.display = "block";
});
