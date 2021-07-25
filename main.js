function navMenu() {
  let navBar = document.querySelector(".navbar-sticky");
  let scrollTopButton = document.querySelector("#scrollTop");

  window.onscroll = function () {
    let scroll = document.documentElement.scrollTop;
    if (scroll >= 120) {
      navBar.classList.add(".navbar-sticky-moved-up");
    } else {
      navBar.classList.remove(".navbar-sticky-moved-up");
    }

    // Apply Transition
    if (scroll >= 120) {
      navBar.classList.add(".navbar-sticky-transition");
      // scrollTopButton.classList.add('scrollActive')
    } else {
      navBar.classList.remove(".navbar-sticky-transition");
      // scrollTopButton.classList.remove('scrollActive')
    }
    // Sticky onscroll
    if (scroll >= 500) {
      navBar.classList.add(".navbar-sticky-on");
    } else {
      navBar.classList.remove(".navbar-sticky-on");
    }
  };
}

navMenu();

// ======================Counter Design===============//

// document.addEventListener("DOMContentLoaded", () => {
//   function counter(id, start, end, duration) {
//     let obj = document.getElementById(id);
//     current = start;
//     range = end - start;
//     increment = end > start ? 1 : -1;
//     step = Math.abs(Math.floor(duration / range));
//     timer = setInterval(() => {
//       current += increment;
//       obj.textContent = current;
//       if (current == end) {
//         clearInterval(timer);
//       }
//     }, step);
//   }
//   counter("count1",0,2350,2000);
//   counter("count2",0,2150,3000);
//   counter("count3",0,2350,4000);
//   counter("count4",0,2250,2000);
// });
