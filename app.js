let hambuger = document.querySelector(".bar-btn");
let mobile = document.querySelector(".unlit");
let men = document.querySelector(".men");
const timeCont = document.querySelector(".time-cont");
const myfirstImge = document.querySelectorAll(".set1");
const secondImge = document.querySelectorAll(".set2");
const thirdImge = document.querySelectorAll(".set3");
const fourtImge = document.querySelectorAll(".set4");
const pink1 = document.querySelectorAll(".pink");
const orange1 = document.querySelectorAll(".orange");
const yellow1 = document.querySelectorAll(".yellow");
const myLastItem = [
  ...pink1,
  ...orange1,
  ...yellow1,
  ...fourtImge,
  ...myfirstImge,
  ...secondImge,
  ...thirdImge,
];

hambuger.addEventListener("click", function () {
  men.classList.toggle("sho");
});
timeCont.addEventListener("click", () => {
  men.classList.remove("sho");
});
const observer = new IntersectionObserver(
  (enteries) => {
    enteries.forEach((e) => {
      e.target.classList.toggle("first-img", e.isIntersecting);
      if (e.isIntersecting) {
        observer.unobserve(e.target);
      }
    });
  },
  {
    threshold: 1,
  }
);

myLastItem.forEach((p) => {
  observer.observe(p);
});
