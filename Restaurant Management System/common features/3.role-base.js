function setRole() {
  const role = document.getElementById('roleSelect').value;
  const allFeatures = document.querySelectorAll('.feature');
 
allFeatures.forEach(el => el.style.display = 'none');
 
  if (role === 'admin') {
    document.querySelector('.admin-only').style.display = 'block';
    document.querySelector('.editor-only').style.display = 'block';
    document.querySelector('.user-only').style.display = 'block';
  } else if (role === 'editor') {
    document.querySelector('.editor-only').style.display = 'block';
    document.querySelector('.user-only').style.display = 'block';
  } else if (role === 'user') {
    document.querySelector('.user-only').style.display = 'block';
  }
}