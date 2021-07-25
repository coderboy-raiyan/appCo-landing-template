function navMenu() {
    let navBar = document.querySelector('.navbar-sticky');
    let scrollTopButton = document.querySelector('#scrollTop')

    window.onscroll = function(){
        let scroll = document.documentElement.scrollTop;
        if(scroll >= 120){
            navBar.classList.add('navbar-sticky-moved-up')
        }else{
            navBar.classList.remove('navbar-sticky-moved-up')
        }

        // Apply Transition
        if(scroll >= 120){
            navBar.classList.add('.navbar-sticky-transition')
            scrollTopButton.classList.add('scrollActive')
        }else{
            navBar.classList.remove('.navbar-sticky-transition')
            scrollTopButton.classList.remove('scrollActive')
        }
        // Sticky onscroll
        if(scroll >= 500){
            navBar.classList.add('.navbar-sticky-on')
        }else{
            navBar.classList.remove('.navbar-sticky-on')
        }
    }
}

navMenu()