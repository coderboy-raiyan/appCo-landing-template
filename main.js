function navMenu() {
  let navBar = document.querySelector(".navbar-sticky");
  let scrollTopButton = document.querySelector("#scrollUp");

  window.onscroll = function () {
    let scroll = document.documentElement.scrollTop;
    if (scroll >= 120) {
      navBar.classList.add("navbar-sticky-moved-up");
    } else {
      navBar.classList.remove("navbar-sticky-moved-up");
    }

    // Apply Transition
    if (scroll >= 120) {
      navBar.classList.add("navbar-sticky-transition");
      // scrollTopButton.classList.add('scrollActive')
    } else {
      navBar.classList.remove("navbar-sticky-transition");
      // scrollTopButton.classList.remove('scrollActive')
    }
    // Sticky onscroll
    if (scroll >= 500) {
      navBar.classList.add("navbar-sticky-on");
    } else {
      navBar.classList.remove("navbar-sticky-on");
    }
  };
}

navMenu();

// ======================Counter Design===============//

let counters = document.querySelectorAll('.count')


  counters.forEach((counter)=>{
    counter.innerHTML = 0
  
    let updateCounter = () => {
      let targetCount = Number(counter.getAttribute('data-target'))
      let startingCount = Number(counter.innerHTML)
      let incr = Math.floor(targetCount / 100)
      if(startingCount < targetCount){
        counter.innerHTML = `${startingCount + incr}`
        setTimeout(updateCounter, 10)
      }else{
        counter.innerHTML = targetCount
      }
    }
  
    updateCounter()
  })


