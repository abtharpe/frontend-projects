const splashView = document.getElementById('splash-view');
const loginView = document.getElementById('login-view');
const enterButton = document.getElementById('enter-button');

// This section is for the splash-view and all items contained within it
enterButton.addEventListener('click', () => {
    splashView.style.display = 'none';
    loginView.style.display = 'block';
});