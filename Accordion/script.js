const item = document.querySelectorAll(".item");

item.forEach((item) => {
  const button = item.querySelector(".title");

  button.addEventListener("click", () => {
    const activeItem = document.querySelector(".item.active");
    if (activeItem && activeItem !== item) {
      activeItem.classList.remove("active");
    }
    item.classList.toggle("active");
  });
});
