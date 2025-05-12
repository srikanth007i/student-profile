const toggleBtn = document.getElementById('toggle-btn');
const extraInfo = document.getElementById('extra-info');

toggleBtn.addEventListener('click', () => {
  extraInfo.classList.toggle('hidden');
  toggleBtn.textContent = extraInfo.classList.contains('hidden') ? 'Show More' : 'Show Less';
});
