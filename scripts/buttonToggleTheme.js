let themeColor = 'dark';

function setTheme() {
  document.documentElement.setAttribute(
    'data-color-theme',
    themeColor ? 'dark' : ''
  );
}

function toggleThemeColor() {
  themeColor = themeColor ? '' : 'dark';
  themeButton.innerText = themeColor ? '🌑' : '☀️';

  setTheme();
}

function createToggleThemeButton() {
  const themeButton = document.createElement('button');
  themeButton.setAttribute('id', 'toggle-theme-button');
  themeButton.innerText = themeColor ? '🌑' : '☀️';
  themeButton.addEventListener('click', toggleThemeColor);

  const body = document.body;
  body.insertAdjacentElement('afterbegin', themeButton);

  return themeButton;
}

setTheme();
const themeButton = createToggleThemeButton();