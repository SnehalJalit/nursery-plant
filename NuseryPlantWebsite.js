
    // JavaScript for toggling the navbar
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const navbarCollapse = document.getElementById('navbarNavDropdown');
  
    hamburgerIcon.addEventListener('click', () => {
      // Toggle active class for hamburger icon
      hamburgerIcon.classList.toggle('active');
  
      // Toggle show class for navbar
      navbarCollapse.classList.toggle('show');
    });
   