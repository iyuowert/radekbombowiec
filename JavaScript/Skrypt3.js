<HTML>
<HEAD>
<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=iso-8859-2">
<SCRIPT LANGUAGE="JavaScript" type="text/javascript">
<!-- Ukrycie przed przeglądarkami nie obsługującymi JavaScriptów
var speedTable = new Array();
var speed = 100;
var speedLevels = 7;
var layersCount = 10;
function ustaw()
{
  clWidth = document.body.clientWidth - 50;
  for (i = 0; i < layersCount; i++){
    document.getElementById('el' + i).style.left = Math.ceil(Math.random() * clWidth);
    speedTable[i] = Math.ceil(Math.random() * speedLevels);
  }
}
function start()
{
  clWidth = document.body.clientWidth - 50;
  clHeight = document.body.clientHeight;
  for (i = 0; i < layersCount; i++){
    y = parseInt(document.getElementById('el' + i).style.top);
    y += speedTable[i];
    if (y >= clHeight - 45){
      y = 1;
      document.getElementById('el' + i).style.left = Math.ceil(Math.random() * clWidth);
      speedTable[i] = Math.ceil(Math.random() * speedLevels);
    }
    document.getElementById('el' + i).style.top = y;
  }
  setTimeout('start();', speed);
}
// Koniec kodu JavaScript -->
</SCRIPT>
</HEAD>
<BODY onLoad='ustaw();start();'>
<SCRIPT LANGUAGE= "JavaScript" type= "text/javascript">
<!-- Ukrycie przed przeglądarkami nie obsługującymi JavaScriptów
for (i = 0; i < layersCount; i++){
  str = '<DIV ID="el' + i + '" ';
  str += 'style = "visibility: visible; ';
  str += 'width=50px; ';
  str += 'heigth=45px; ';
  str += 'position: absolute; ';
  str += 'top: 1; ';
  str += 'left: 1;">';
  str += '<IMG SRC="sniezynka.gif">';
  str += '</DIV>';
  document.write(str);
}
//document.write('<H1 align="center">Treść strony<H1>');
// Koniec kodu JavaScript -->
</SCRIPT>
<H1 align="center">Treść strony<H1>
</BODY>
</HTML>
 
