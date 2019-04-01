function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://172.30.137.117/api/ibge/", true);
  xhttp.send();
}
