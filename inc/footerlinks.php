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