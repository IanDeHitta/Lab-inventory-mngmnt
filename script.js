function login() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  if (email === 'admin' && password === 'password') {
    document.getElementById('login-screen').classList.remove('active');
    document.getElementById('login-screen').classList.add('hidden');
    document.getElementById('main-nav').classList.remove('hidden');
    document.getElementById('main-nav').classList.add('visible');
    showScreen('home');
  } else {
    alert('Invalid credentials. Demo: admin / password');
  }
}

function logout() {
  document.getElementById('login-screen').classList.remove('hidden');
  document.getElementById('login-screen').classList.add('active');
  document.getElementById('main-nav').classList.remove('visible');
  document.getElementById('main-nav').classList.add('hidden');
  // Hide all screens
  const screens = document.querySelectorAll('.screen');
  screens.forEach(screen => {
    screen.classList.remove('active');
  });
  document.getElementById('login-email').value = '';
  document.getElementById('login-password').value = '';
  // Hide profile menu
  document.getElementById('profile-menu').classList.remove('show');
}

function showScreen(screenId) {
  // Hide all screens
  const screens = document.querySelectorAll('.screen');
  screens.forEach(screen => {
    screen.classList.remove('active');
  });
  // Show selected screen
  document.getElementById(screenId + '-screen').classList.add('active');
}

function toggleProfile() {
  const menu = document.getElementById('profile-menu');
  menu.classList.toggle('show');
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
  const profileIcon = document.getElementById('user-icon');
  const menu = document.getElementById('profile-menu');
  if (!profileIcon.contains(event.target) && !menu.contains(event.target)) {
    menu.classList.remove('show');
  }
});
