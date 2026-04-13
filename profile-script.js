let currentMenuId = '';
let currentIconId = '';

function toggleProfile() {
  // Close all profile menus
  document.querySelectorAll('.profile-menu').forEach(menu => menu.classList.remove('show'));
  
  currentMenuId = currentMenuId === 'profile-menu-header' ? '' : 'profile-menu-header';
  const menu = document.getElementById('profile-menu-header');
  if (menu) {
    menu.classList.toggle('show');
  }
}

// Global click outside handler
document.addEventListener('click', function(event) {
  const profileMenus = document.querySelectorAll('.profile-menu, .user-icon');
  let clickedOutside = true;
  profileMenus.forEach(element => {
    if (element.contains(event.target)) {
      clickedOutside = false;
    }
  });
  if (clickedOutside) {
    document.querySelectorAll('.profile-menu').forEach(menu => menu.classList.remove('show'));
  }
});

function logout() {
  localStorage.clear();
  window.location.href = 'index.html';
}

