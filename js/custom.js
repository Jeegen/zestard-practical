// Products Slider
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:13,
    dots: false,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})


// Email Validation
$("#submit").on("click", function (e) {
    e.preventDefault();
    var email = $.trim($("#inputEmail").val());
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        alert("Please enter your email address.");
    } else if (!pattern.test(email)) {
        alert("Please enter a valid email address.");
    } else {
        alert("Thank you! Your request is submitted successfully.");
        // Proceed with submission
    }
});


// Auto Update Copyright Year
document.getElementById('currentYear').textContent = new Date().getFullYear();