// Native details keeps the mobile menu usable without JavaScript.
document.addEventListener('DOMContentLoaded', function () {
  const menu = document.querySelector('.hk-mobile-menu');
  if (!menu) return;
  menu.addEventListener('click', function (event) {
    if (event.target.closest('a, button')) menu.open = false;
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && menu.open) {
      menu.open = false;
      menu.querySelector('summary').focus();
    }
  });
  document.addEventListener('click', function (event) {
    if (menu.open && !menu.contains(event.target)) menu.open = false;
  });
});
