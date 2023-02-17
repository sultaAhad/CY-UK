<!-- Jquery JS-->
<script src="js/jquery.min.js"></script>
<!-- Jquery JS-->

<!-- main js -->
<script src="js/index.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/popper.min.js"></script>
<!-- main js -->

<!-- slick slider js -->
<script src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
<!-- slick slider js -->

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"></script>
<script>
    const tl = gsap.timeline();

    tl.to(".banner-heading h1", 1.8, {
        y: -05,
        opacity: 1,
        ease: "power4.out",
        delay: 1,
        stagger: {
            amount: 0.3
        }
    })
    tl.to(".banner-heading-para h2", 1.8, {
        y: -05,
        opacity: 1,
        ease: "power4.out",
        delay: 0.5,
        stagger: {
            amount: 0.3
        }
    })
</script>


<!-- header navbar -->
<script>
    const CurrentLocation = location.href;
    const menuItem = document.querySelectorAll(".main-top-navbar .navbar-light .navbar-nav .nav-link");
    const menuLength = menuItem.length;
    for (let i = 0; i < menuLength; i++) {
        if (menuItem[i].href === CurrentLocation) {
            menuItem[i].id = "active";
        }
    }
</script>