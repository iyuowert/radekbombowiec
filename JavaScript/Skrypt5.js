
<HTML>
<HEAD>
<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=iso-8859-2">
<SCRIPT LANGUAGE= "JavaScript" type= "text/javascript">
<!-- Ukrycie przed przeglądarkami nie obsługującymi JavaScriptów
var speed = 1;
var step = 1;
var index = 0;
var colorTable = new Array();
var cR = new Array();
var cG = new Array();
var cB = new Array();
function prepareColors(RF, GF, BF, RT, GT, BT, pos)
{
  if (RF == RT){
    for (i = 0; i < 256; i++){
      cR[i] = RT;
    }
  }
  else{
    if (RF < RT){
      for (i = RF; i < RT; i++){
        cR[i] = i;
      }
    }
    else{
      x = 0;
      for (i = RF; i > RT; i--){
        cR[x++] = i;
      }
    }
  }
  if (GF == GT){
    for (i = 0; i < 256; i++){
      cG[i] = GT;
    }
  }
  else{
    if (GF < GT){
      for (i = GF; i < GT; i++){
        cG[i] = i;
      }
    }
    else{
      x = 0;
      for (i = GF; i >= GT; i--){
        cG[x++] = i;
      }
    }
  }
  if (BF == BT){
    for (i = 0; i < 256; i++){
      cB[i] = BT;
    }
  }
  else{
    if (BF < BT){
      for (i = BF; i < BT; i++){
        cB[i] = i;
      }
    }
    else{
      x = 0;
      for (i = BF; i >= BT; i--){
        cB[x++] = i;
      }
    }
  }
  for (i = 0; i < 255; i++){
    color = (cR[i] < 16)? '0' + cR[i].toString(16):cR[i].toString(16);
    color += (cG[i] < 16)? '0' + cG[i].toString(16):cG[i].toString(16);
    color += (cB[i] < 16)? '0' + cB[i].toString(16):cB[i].toString(16);
    color = '#' + color;
    colorTable[pos * 256 + i] = color;
    }
}
function makeTable()
{
  prepareColors(255, 255, 255, 255, 255, 0, 0);
  prepareColors(255, 255, 0, 0, 255, 0, 1);
  prepareColors(0, 255, 0, 0, 255, 255, 2);
  prepareColors(0, 255, 255, 0, 0, 255, 3);
  prepareColors(0, 0, 255, 255, 0, 255, 4);
  prepareColors(255, 0, 255, 255, 0, 0, 5);
  prepareColors(255, 0, 0, 255, 255, 255, 6);
}
function textChange()
{
  document.getElementById('text').style.color = colorTable[index];
  index += step;
  if (index > colorTable.length || index < 0) step = -step;
  setTimeout("textChange()", speed);

}
// Koniec kodu JavaScript -->
</SCRIPT>
</HEAD>
<BODY onLoad='makeTable();textChange()'>
<DIV ID="text"
     style = "visibility: visible;
              width:40%;
              heigth:20%;
              text-Align:center;
              position:relative;
              top:10%;
              left:30%;
              background-color:#000000";
>
<H2>Tekst na warstwie</H2>
</DIV>
</BODY>
</HTML>
