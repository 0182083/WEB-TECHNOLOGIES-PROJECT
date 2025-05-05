document.addEventListener('DOMContentLoaded', function () {
  const bell = document.querySelector('.bell');
  const count = document.querySelector('.unread-count');
 
  bell.addEventListener('click', function () {
    count.style.display = 'none';
    alert("You checked your notifications!");
  });
});
 