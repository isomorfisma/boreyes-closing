(function () {
  var items = document.querySelectorAll('[data-in]');
  requestAnimationFrame(function () {
    items.forEach(function (el) { el.classList.add('is-in'); });
  });
})();
