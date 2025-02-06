document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector('.carousel-wrapper');
    let scrollAmount = 0;
    const cardWidth = document.querySelector('.card').offsetWidth + 15; // Ancho de la card + margen
  
    // Función para mover el carrusel
    window.moveCarousel = function(direction) {
      const containerWidth = container.scrollWidth;
      const containerVisibleWidth = container.clientWidth;
  
      if (direction === 'next') {
        if (scrollAmount < containerWidth - containerVisibleWidth) {
          scrollAmount += cardWidth;
        } else {
          scrollAmount = 0; // Si llega al final, vuelve al inicio
        }
      } else if (direction === 'prev') {
        if (scrollAmount > 0) {
          scrollAmount -= cardWidth;
        } else {
          scrollAmount = containerWidth - containerVisibleWidth; // Si está al inicio, va al final
        }
      }
  
      container.style.transform = `translateX(-${scrollAmount}px)`; // Usamos transform para mover el carrusel
    }
  
    // Movimiento automático cada 5 segundos
    setInterval(function() {
      moveCarousel('next');
    }, 5000); // Mueve cada 5 segundos
  });
  