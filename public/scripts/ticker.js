const languages = [
    'Welcome',
    'Nari Jámaxaki',
    'Bienvenue',
    '欢迎',
  ];
  
  const tickerContent = document.querySelector('.ticker-content');
  tickerContent.innerHTML = languages.map(lang => `<span>${lang}</span>`).join('');
  