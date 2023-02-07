<!-- Jquery JS-->
<script src="js/jquery.min.js"></script>
<!-- Jquery JS-->

<!-- index bootstrap js -->
<script src="js/index.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/popper.min.js"></script>
<!-- index js -->

<!-- aos js -->
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<!-- aos js -->

<!-- wow js -->
<script src="js/wow.min.js"></script>
<!-- wow js -->

<!-- slick slider js -->
<script src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
<!-- slick slider js -->

<!-- aos js -->
<script>
AOS.init();
</script>

<!-- wow animated  -->
<script>
wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 0, // default
    mobile: true, // default
    live: true // default
})
</script>

<script>
// Header
const CurrentLocation = location.href;
const menuItem = document.querySelectorAll(".normal-nav-items .menu");
const menuLength = menuItem.length;
for (let i = 0; i < menuLength; i++) {
    if (menuItem[i].href === CurrentLocation) {
        menuItem[i].id = "active";
    }
}
</script>