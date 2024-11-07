  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
      duration: 100,  // Speed of transition
      shift: 20,      // Shift amount for the marquee effect
      dist: 0,        // Ensures items stay aligned
      padding: 20,    // Space between the logos
      numVisible: 5   // Number of logos visible at once
    });

    // Auto-scroll like a marquee
    setInterval(() => {
      instances[0].next();  // Automatically scroll to the next logo
    }, 1500);  // Adjust time interval for scrolling speed
  });
