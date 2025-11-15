function page(page) {
  document.location=page
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.body.classList.remove('loading');
  }, 10);
});