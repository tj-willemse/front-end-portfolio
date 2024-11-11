const darkMode = () => {
  const themeToggleBtns = document.querySelectorAll('#switch, #switch-2'); // Select both switches

  // state variable
  const theme = localStorage.getItem('theme');

  // on mount
  if (theme) document.body.classList.add(theme);
  themeToggleBtns.forEach((btn) => (btn.checked = theme === 'light-mode')); // Sync switches position

  // handler
  const handleThemeToggle = () => {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
      localStorage.setItem('theme', 'light-mode');
    } else {
      localStorage.removeItem('theme');
      document.body.removeAttribute('class');
    }
  };

  // Event
  themeToggleBtns.forEach((btn) =>
    btn.addEventListener('change', handleThemeToggle)
  );
};

export default darkMode;
