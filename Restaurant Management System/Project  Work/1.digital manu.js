function filterMenu(tag) {
  const items = document.querySelectorAll('.menu-item');
  items.forEach(item => {
    if (tag === 'all') {
item.style.display = 'block';
    } else {
item.style.display = item.classList.contains(tag) ? 'block' : 'none';
    }
  });
}