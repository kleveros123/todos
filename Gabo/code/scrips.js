document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector('.carousel-wrapper');
    let scrollAmount = 0;
    const cardWidth = document.querySelector('.card').offsetWidth + 15; 
  
    window.moveCarousel = function(direction) {
      const containerWidth = container.scrollWidth;
      const containerVisibleWidth = container.clientWidth;
  
      if (direction === 'next') {
        if (scrollAmount < containerWidth - containerVisibleWidth) {
          scrollAmount += cardWidth;
        } else {
          scrollAmount = 0; 
        }
      } else if (direction === 'prev') {
        if (scrollAmount > 0) {
          scrollAmount -= cardWidth;
        } else {
          scrollAmount = containerWidth - containerVisibleWidth; 
        }
      }
  
      container.style.transform = `translateX(-${scrollAmount}px)`; 
    }
  
    setInterval(function() {
      moveCarousel('next');
    }, 5000);
  });
  