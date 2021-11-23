const fadeElement = document.querySelector('.fade-in-element');
fadeElement.classList.remove('fade-in-transition');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
        fadeElement.classList.add('fade-in-transition');
      return;
    }

    square.classList.remove('fade-in-transition');
  });
});

observer.observe(document.querySelector('.secondary-container'));