document.addEventListener('DOMContentLoaded', () => {
  let activePanel;
  const panelItem = document.querySelectorAll('.accordeon__title');
  const plus = document.querySelectorAll('.fas.fa-plus');
  const minus = document.querySelectorAll('.fas.fa-minus');
  panelItem.__proto__.forEach = [].__proto__.forEach;
  //plus.__proto__.forEach = [].__proto__.forEach;
  //minus.__proto__.forEach = [].__proto__.forEach;
  
  panelItem.forEach(function(item) {
    item.addEventListener('click', function() {
      this.classList.add('accordeon-active');
      this.nextElementSibling.classList.add('active');

      if (activePanel) {
        activePanel.classList.remove('accordeon-active');
        activePanel.nextElementSibling.classList.remove('active');
      }
      activePanel = (activePanel === this) ? 0 : this;
    });
  });
});