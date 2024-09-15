  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
      duration: 200,  // Speed of transition
      shift: 20,      // Shift amount for the marquee effect
      dist: 0,        // Ensures items stay aligned
      padding: 20,    // Space between the logos
      numVisible: 5   // Number of logos visible at once (adjust as needed)
    });

    // Auto-scroll like a marquee
    setInterval(() => {
      instances[0].next();  // Automatically scroll to the next logo
    }, 2000);  // Adjust time interval for scrolling speed
  });
