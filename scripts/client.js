const navbar = document.querySelector('.navbar');
      const logo = document.getElementById('logo');

      window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');

          logo.src = "./images/logo.jpg";
        } else {
          navbar.classList.remove('scrolled');
          logo.src = "./images/logo_white.png";
        }
      });