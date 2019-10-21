Scenario('open my website', (I) => {
  I.amOnPage('http://localhost');
  I.click('Login');
  I.click('Delete');
  pause();
});