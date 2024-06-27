document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('projectModal');
  const modalTitle = modal.querySelector('.modal-title');
  const modalDescription = modal.querySelector('.modal-description');
  const closeBtn = modal.querySelector('.close');

  document.querySelectorAll('.know-more-btn').forEach(button => {
    button.addEventListener('click', (event) => {
      const card = event.target.closest('.project-card');
      const title = card.querySelector('.card-title').textContent;
      const description = card.getAttribute('data-description');

      modalTitle.textContent = title;
      modalDescription.innerHTML = description; // Use innerHTML to preserve HTML structure

      modal.style.display = 'flex'; // Use 'flex' to respect the flexbox settings
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});
