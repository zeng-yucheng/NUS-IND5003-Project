var x = document.getElementsByName('search_engine');
var i;
for (i = 1; i < x.length + 1; i++) {
  if (x[i - 1].checked) break;
}
document.getElementById('frame1').contentWindow.postMessage(JSON.stringify({'search_engine': i, 'content': document.getElementById('text1').value}), '*');
