// Basic interactivity: open modal to view images, close on background or ESC
(function() {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modalImg');

  // Open modal when clicking any .thumb img or .btn
  document.querySelectorAll('.thumb img, .btn').forEach(el => {
    el.addEventListener('click', function() {
      const src = this.dataset && this.dataset.img ? this.dataset.img : (this.src || this.getAttribute('src'));
      if (!src) return;
      modalImg.src = src;
      modal.classList.add('show');
      modal.setAttribute('aria-hidden', 'false');
    });
  });

  // Close modal when clicking outside image
  modal.addEventListener('click', function(e) {
    if (e.target === modal || e.target === modalImg) {
      closeModal();
    }
  });

  // Close modal on ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
  });

  // Accessibility: allow Enter key on thumb div to open image
  document.querySelectorAll('.thumb').forEach(t => {
    t.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        const img = this.querySelector('img');
        if (img) img.click();
      }
    });
  });

  function closeModal() {
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
    modalImg.src = '';
  }
})();
