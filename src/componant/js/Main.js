
    window.onscroll = function () {
        const header_navbar = document.querySelector(".navbar-area");
        const sticky = header_navbar.offsetTop;

        if (window.pageYOffset > sticky) {
            header_navbar.classList.add("sticky");
        } else {
            header_navbar.classList.remove("sticky");
        }

    };

    