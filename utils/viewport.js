//Get the button
const mybutton = document.querySelector(".scroll-button");

mybutton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

document.addEventListener("scroll", () => {
  const viewportHeight = window.innerHeight;

  if (window.scrollY > viewportHeight / 2) {
    mybutton.style.visibility = "visible";
  } else {
    mybutton.style.visibility = "hidden";
  }
});
