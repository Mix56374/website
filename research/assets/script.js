function page(page) {
  document.location = page
}

function toggle_nav_bar() {
  document.getElementById('navbar').classList.toggle('top');
}


document.addEventListener('DOMContentLoaded', function() {
  var navbar = document.getElementById('navbar')
  var body = document.body
  
  setTimeout(function() {
    body.classList.remove('loading');
  }, 10);

  window.addEventListener('scroll', function() {
    if (window.scrollY <= 0) {
      navbar.classList.remove('top');
    } else if (!navbar.classList.contains('top')) {
      navbar.classList.add('top');
    }
  });
});