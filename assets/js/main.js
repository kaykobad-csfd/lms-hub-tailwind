  // page loader
  var myLoader;
  function loadWindow(){
    myLoader = setTimeout(showPage, 1500)
  }

function showPage(){
  document.getElementById('loader').style.display = 'none';
  document.getElementById('content').style.display = 'block';
}

/* toggle search */
var searchIcon = document.getElementById('searchIcon');
var closeIcon = document.getElementById('closeIcon');
var searchInput = document.getElementById('searchInput');

function toggleSearch() {
    // Toggle the search visibility
    searchIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
    searchInput.classList.toggle('opacity-0');
    searchInput.classList.toggle('invisible');
    searchInput.classList.toggle('translate-y-5');
}

// Function to hide search if clicked outside
window.addEventListener('click', function (e) {
    if (!searchInput.contains(e.target) && !e.target.closest('button')) {
        if (!searchInput.classList.contains('opacity-0')) {
            toggleSearch(); // Hide the search input if it's open
        }
    }
});

  // course grid
  const gridBtn = document.querySelector('.grid-btn');
  const colBtn = document.querySelector('.col-btn');
  const courseItems = document.querySelectorAll('.course-item');
  const courseGridThumb = document.querySelectorAll('.course-grid-thumb');
  const courseGridThumbImg = document.querySelectorAll('.course-grid-thumb-img');

  // instructor grid
  const instructorVOne = document.querySelectorAll('.instructorVOne');
  const instructorVTwo = document.querySelectorAll('.instructorVTwo');

  function toggleView(isGridView) {
      gridBtn.classList.toggle('!bg-primary', isGridView);
      gridBtn.classList.toggle('!text-white', isGridView);
      colBtn.classList.toggle('!bg-primary', !isGridView);
      colBtn.classList.toggle('!text-white', !isGridView);

      courseItems.forEach(item => {
          item.classList.toggle('!col-span-full', !isGridView);
          item.classList.toggle('lg:!p-6', !isGridView);
          item.classList.toggle('lg:flex', !isGridView);
      });
      courseGridThumb.forEach(thumb => {
          thumb.classList.toggle('lg:rounded-2xl', !isGridView);
      });
      courseGridThumbImg.forEach(img => {
          img.classList.toggle('lg:h-full', !isGridView);
          img.classList.toggle('lg:object-cover', !isGridView);
      });

      // instructor grid
      instructorVOne.forEach(item => {
          item.classList.toggle('grid', isGridView);
          item.classList.toggle('hidden', !isGridView);
      });
      instructorVTwo.forEach(item => {
          item.classList.toggle('hidden', isGridView);
          item.classList.toggle('grid', !isGridView);
      });
  }

  function toggleGrid() {
      toggleView(true);
  }
  function toggleCol() {
      toggleView(false);
  }

  /* toggle Drawer */
  var mobileNav = document.getElementById('mobile-nav');
  var mobileNavOverlay = document.getElementById('mobile-nav-overlay');
  
  function toggleMobileNav() {
    mobileNav.classList.toggle('translate-x-0');
    mobileNavOverlay.classList.toggle('opacity-80');
    mobileNavOverlay.classList.toggle('invisible');
  }

  /* mobile nav dropdown item */
  document.querySelectorAll('.sm-dropdown-item > a').forEach(nav => {
    nav.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default anchor behavior
      
      const navPanel = this.nextElementSibling;
      this.classList.toggle('active');
      
      // Toggle maxHeight for the panel
      if (navPanel.style.maxHeight) {
        navPanel.style.maxHeight = null;
      } else {
        navPanel.style.maxHeight = `${navPanel.scrollHeight}px`;
        
        // Close other panels
        document.querySelectorAll('.sm-dropdown-item .navPanel').forEach(panel => {
          if (panel !== navPanel) {
            panel.style.maxHeight = null;
            panel.previousElementSibling.classList.remove('active');
          }
        });
      }
    });
    
    // Set initial state if accordion has 'active' class
    const accordionPanel = nav.nextElementSibling;
    if (nav.classList.contains('active')) {
      accordionPanel.style.maxHeight = `${accordionPanel.scrollHeight}px`;
    } else {
      accordionPanel.style.maxHeight = null;
    }
  });
  
  // FAQ Accordion
  document.querySelectorAll('.accordion').forEach(accordion => {
    accordion.addEventListener('click', function () {
      const accordionPanel = this.nextElementSibling;
      this.classList.toggle('active');
  
      // Check if this panel is active or not
      if (accordionPanel.style.maxHeight) {
        accordionPanel.style.maxHeight = null;
      } else {
        accordionPanel.style.maxHeight = `${accordionPanel.scrollHeight}px`;
  
        // Close other panels
        document.querySelectorAll('.accordion + .panel').forEach(panel => {
          if (panel !== accordionPanel) {
            panel.style.maxHeight = null;
            panel.previousElementSibling.classList.remove('active');
          }
        });
      }
    });
  
    // If accordion declared 'active' class is open panel
    const accordionPanel = accordion.nextElementSibling;
    if (accordion.classList.contains('active')) {
      accordionPanel.style.maxHeight = `${accordionPanel.scrollHeight}px`;
    } else {
      accordionPanel.style.maxHeight = null;
    }
  });

  // course tab
  function tabCourses(evt, courseCategory) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    tablinks = document.getElementsByClassName("tablinks");

    // Display all courses when 'All' is selected
    if (courseCategory === 'All') {
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "block";
      }
    } else {
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      document.getElementById(courseCategory).style.display = "block";
    }

    // Remove active class from all buttons
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    // Add active class to the clicked button
    evt.currentTarget.className += " active";
  }

  /** Swiper Slide **/
  // Blog slide
  var swiper = new Swiper(".instructor", {
    speed: 1500,
    spaceBetween: 30,
    pagination: {
      el: ".instructor-pagination",
      clickable: true,
    },
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 20 },
      480: { slidesPerView: 2, spaceBetween: 30 },
      768: { slidesPerView: 2, spaceBetween: 30 },
      1024: { slidesPerView: 3, spaceBetween: 30 },
    },
    navigation: {
      nextEl: '.next-instructor',
      prevEl: '.prev-instructor'
    }
  });
  // Blog slide
  var swiper = new Swiper(".blog-slider", {
    speed: 1500,
    spaceBetween: 30,
    pagination: {
      el: ".blog-pagination",
      clickable: true,
    },
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 20 },
      480: { slidesPerView: 2, spaceBetween: 30 },
      768: { slidesPerView: 2, spaceBetween: 30 },
      1024: { slidesPerView: 3, spaceBetween: 30 },
    },
    
  });

  // Counter Function
  (function counter() {
    const counters = document.querySelectorAll(".counter-value");
  
    if (counters.length) {
      counters.forEach((counter) => {
        const valueText = counter.getAttribute("data-value");
        const value = parseFloat(valueText); // Parse the value as a float
        const duration = parseInt(counter.getAttribute("data-duration")) || 2000; // Default duration is 2000ms
        const delay = parseInt(counter.getAttribute("data-delay")) || 0; // Default delay is 0ms
        const startTime = Date.now() + delay;
  
        const updateCount = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const count = progress * value;
  
          counter.innerText = formatNumber(count);
          
          if (progress < 1) {
            requestAnimationFrame(updateCount);
          } else {
            counter.innerText = formatNumber(value); // Ensure final value is displayed
          }
        };
  
        function formatNumber(num) {
          if (num >= 1000000) {
            return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M'; // Format as millions
          } else if (num >= 1000) {
            return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k'; // Format as thousands
          } else {
            return Math.floor(num); // Show integer value without decimal
          }
        }
  
        // Start the animation after the delay
        setTimeout(() => {
          updateCount();
        }, delay);
      });
    }
  })();

  // Sticky Navigation Bar
  window.addEventListener('scroll', function () {
    const nav = document.getElementById('sticky-navbar');
    const navHeight = nav.offsetHeight;

    if (window.scrollY > navHeight + 200) {
      nav.classList.add('fixed_top');
    } else if (window.scrollY < navHeight) {
      nav.classList.remove('fixed_top');
    }
  });
  

  // video show popup
  document.addEventListener('DOMContentLoaded', () => {
    const videoWrapper = document.querySelector('.video-wrapper');
    if (videoWrapper) {
      const videoContainer = videoWrapper.querySelector('.video-container');
  
      document.querySelectorAll('.play-video').forEach(button => {
        button.addEventListener('click', () => {
          videoWrapper.classList.remove('invisible');
          videoContainer.classList.remove('scale-0');
          videoWrapper.classList.add('opacity-100');
        });
      });
  
      videoWrapper.addEventListener('click', event => {
        if (event.target === videoWrapper) {
          videoWrapper.classList.add('invisible');
          videoContainer.classList.add('scale-0');
        }
      });
    }
  });
  