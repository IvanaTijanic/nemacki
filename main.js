window.addEventListener("scroll", () => {
  let alimatons = document.querySelector(".price .title");
  let position = alimatons.getBoundingClientRect();
  if (position.top < window.innerHeight && position.bottom >= 0) {
    console.log("Element is partially visible in screen");

    alimatons.style = "animation: zoom-in 7s;";
  }
});
