const switchTab = tabNumber => {
  // Сховати всі вкладки
  const tabContents = document.querySelectorAll('.tab__content');
  tabContents.forEach(tabContent => {
    tabContent.style.display = 'none';
  });

  // Показати вибрану вкладку
  const selectedTabContent = document.getElementById('content' + tabNumber);
  if (selectedTabContent) {
    selectedTabContent.style.display = 'block';
  }
};

const switchCurrentTab = () => {
  const allTabs = document.querySelectorAll('.js-tab');

  allTabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
      switchTab(i);

      allTabs.forEach(tab => {
        tab.classList.remove('current');
      });

      tab.classList.add('current');
    });
  });
};
switchCurrentTab();
