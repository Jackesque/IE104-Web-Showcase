const successAlert = () => {
  let trArray = document.getElementsByTagName('tr');
  trArray[trArray.length-1].style.display = 'table-row';
}
const handleSubmit = (e) => {
  e.preventDefault();
  successAlert();
}
