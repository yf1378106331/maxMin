var flyingwin;
var popupwidth = 200;
var popupheight = 150;
var marginright;
var windowcenter;
var i_top = 200;
var i_left = -popupwidth - 50;
var step = 40;
var timer;
var waitingtime = 5000;
var pause = 20;
function showWindow() {
    flyingwin = window.open("", "flyingwin", "toolbar=no,width=" + popupwidth + ",height=" + popupheight + ",top=100,left=" + (-popupwidth) + "");
    flyingwin.document.open();
    flyingwin.document.write("<html><title>漂浮的窗口</title><body text='#006600'><p align='center'><br><font size='+1' color=red><b>窗体</b></font><br><br>五秒后本窗口消失！</p><\/body><\/html>");
    flyingwin.document.close();
    if (document.all) { marginright = screen.width + 50 }
    if (document.layers) { marginright = screen.width + 50 }
    windowcenter = Math.floor(marginright / 2) - Math.floor(popupwidth / 2)
    timer = setTimeout(closeWin, waitingtime);
}
function closeWin(){   clearTimeout(timer); flyingwin.close();}
onload = showWindow();
