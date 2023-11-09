const anchorArray = document.getElementsByTagName('a');

for (const anchorEle of anchorArray) {
  anchorEle.addEventListener('click', () => {
    const tdArray = document.getElementsByTagName('td');
    for (const tdEle of tdArray) {
      const tdEleBgImg = tdEle.style.backgroundImage ?? '';
      const whatTdEleBgImgShouldBe = 'url(./images/nen-lien-ket-muc-luc.png)';
      if (tdEleBgImg !== whatTdEleBgImgShouldBe) {
        tdEle.style.backgroundImage = whatTdEleBgImgShouldBe;
      }
    }

    const parentTdEle = anchorEle.parentNode;
    parentTdEle.style.backgroundImage = 'url(./images/nen-lien-ket-muc-luc-over.png)';
  });
}