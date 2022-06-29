const likeButtons = Array.from(document.querySelectorAll(".photo__like"));

likeButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    button.classList.toggle("photo__like_active");
    const inc = button.classList.contains("photo__like_active") ? 1 : -1;
  });
});