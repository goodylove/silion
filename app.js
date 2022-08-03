let hambuger = document.querySelector(".bar-btn");
let mobile = document.querySelector(".unlit");
let men = document.querySelector(".men");
const timeCont = document.querySelector(".time-cont");
const myfirstImge = document.querySelectorAll(".set1");
const secondImge = document.querySelectorAll(".set2");
const thirdImge = document.querySelectorAll(".set3");
const fourtImge = document.querySelectorAll(".set4");

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
myfirstImge.forEach((i) => {
  observer.observe(i);
});
const observer2 = new IntersectionObserver(
  (enteries) => {
    enteries.forEach((e) => {
      e.target.classList.toggle("second-img", e.isIntersecting);
      if (e.isIntersecting) {
        observer2.unobserve(e.target);
      }
    });
  },
  {
    threshold: 1,
  }
);

secondImge.forEach((i) => {
  observer2.observe(i);
});
const observer3 = new IntersectionObserver(
  (enter) => {
    enter.forEach((p) => {
      p.target.classList.toggle("third-imge", p.isIntersecting);
      if (p.isIntersecting) {
        observer3.unobserve(p.target);
      }
    });
  },
  {
    threshold: 1,
  }
);
thirdImge.forEach((a) => {
  observer3.observe(a);
});

const observer4 = new IntersectionObserver(
  (enter) => {
    enter.forEach((p) => {
      p.target.classList.toggle("fourth-imge", p.isIntersecting);
      if (p.isIntersecting) {
        observer4.unobserve(p.target);
      }
    });
  },
  {
    threshold: 1,
  }
);
fourtImge.forEach((a) => {
  observer4.observe(a);
});
