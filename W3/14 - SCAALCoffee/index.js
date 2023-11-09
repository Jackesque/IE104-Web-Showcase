const AJAXReload = (href) => {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      noidung.innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", href, false);
  xhttp.send();
}