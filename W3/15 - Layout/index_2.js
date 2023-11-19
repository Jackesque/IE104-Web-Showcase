const anchorArray = document.getElementsByTagName('a');

for (const anchorEle of anchorArray) {
  anchorEle.addEventListener('click', () => {
    for (const anchorIterator of anchorArray) {
      anchorIterator.style.color = 'white';
    }
    anchorEle.style.color = 'yellow';
  });
}
