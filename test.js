function Rickroll(){
    var vid = document.getElementById("Rickroll");
    vid.style.visibility = "visible";
    vid.play();
    setTimeout(HideRickroll, 7900);
}

function HideRickroll(){
    var vid = document.getElementById("Rickroll");
    vid.style.visibility = "hidden";
    vid.pause();
    return false;
}

function Summit(){
    var name = document.getElementById("Name").value;
    var gender = document.getElementById("Gender").value;
    var cardNum = document.getElementById("CardNum").value;
    var choice = document.getElementById("Choice").value;
    var check = document.getElementById("Checkbox").value;
    var result = document.getElementById("Result");
    result.textContent='Hello '+name+', thanks for the free credit card number :)';
    return false;
}

var can = document.getElementById("Canvas");
var ctx = can.getContext("2d");
ctx.font = "60px Georgia";
const gradient = ctx.createLinearGradient(0, 0, can.width, 0);
gradient.addColorStop("0", "red");
gradient.addColorStop("0.2", "orange");
gradient.addColorStop("0.4", "yellow");
gradient.addColorStop("0.6", "green");
gradient.addColorStop("0.8", "blue");
gradient.addColorStop("1", "purple");
ctx.fillStyle = gradient;
ctx.lineWidth = 4;
ctx.strokeText("RAINBOW CANVAS", 28, 72);
ctx.fillText("RAINBOW CANVAS", 28, 72);










dragElement(document.getElementById("Football"));

function dragElement(elmnt) {
  var offX = 0, offY = 0, curX = 0, curY = 0;
  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();

    curX = e.clientX;
    curY = e.clientY;
    offX = elmnt.offsetLeft-curX
    offY = elmnt.offsetTop-curY

    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    curX = e.clientX;
    curY = e.clientY;

    elmnt.style.top = (curY+offY) + "px";
    elmnt.style.left = (curX+offX) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    console.log(elmnt.offsetLeft, elmnt.offsetTop)
    document.onmouseup = null;
    document.onmousemove = null;
  }
}