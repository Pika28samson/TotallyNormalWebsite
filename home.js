function StartTaco(){
    audio = new Audio("bg-music.mp3");
    audio.volume = 0.2;
    audio.play();
    document.getElementById("TacoBtn").onclick="";
    setTimeout(() => SpawnTaco(), 3500);
}

function SpawnTaco(){
    const taco = document.createElement("img");
    taco.setAttribute('src', "taco.png");

    taco.setAttribute('height', '5%');
    taco.setAttribute('width', '5%');
    taco.setAttribute('class', 'Taco');
    document.body.appendChild(taco);
    taco.style.left = (Math.random()*100) + "%"
    taco.angle = Math.random() * 360;
    taco.style.transform = 'rotate(' + taco.angle + 'deg)';
    MoveTaco(taco, 2, Math.random()*2-1);
    setTimeout(() => SpawnTaco(), 300);
}

function MoveTaco(taco, speed, dir){
    x = taco.offsetLeft;
    y = taco.offsetTop;

    if (y > window.innerHeight) {
        taco.remove();
        return;
    }

    taco.style.top = (y+speed) + "px";

    taco.angle += dir
    taco.style.transform = 'rotate(' + taco.angle + 'deg)';
    setTimeout(() => MoveTaco(taco, speed, dir), 10);
}

function PlayCat(){
    cat = document.getElementById("Cat");
    cat.src="cat-spin.gif";
    cat.onclick="";
    audio = new Audio("oiia.mp3");
    audio.play();
    setTimeout(() => StopCat(), 1700);
}

function StopCat(){
    cat = document.getElementById("Cat");
    cat.src="cat-idle.png";
    cat.onclick=PlayCat;
}

function Check67(){
    textbox = document.getElementById("HomeInput");
    if (textbox.value == "67"){
	console.log(67);
        textbox.value = "";
	div = document.getElementById("Jumpscare");
	div.style.backgroundImage = "url(67.jpg)"
	audio = new Audio("67.mp3");
	audio.volume = 1;
	audio.play();
        setTimeout(() => Stop67(), 1700);
    }
}

function Stop67(){
    div = document.getElementById("Jumpscare");
    div.style.backgroundImage = ""
}

dragElement(document.getElementById("Pencil"));

function dragElement(elmnt) {
  var offX = 0, curX = 0; var appleX = document.getElementById("Apple").offsetLeft; var audioPlayed = false;
  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();

    curX = e.clientX;
    offX = elmnt.offsetLeft-curX

    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    document.getElementById("PencilText").textContent = "";
    curX = e.clientX;
    targetX = curX+offX;
    if (targetX<appleX){
	targetX = appleX;
        if (!audioPlayed){
	    audioPlayed = true;
	    audio = new Audio("ppap.mp3");
	    audio.play();
	}
    }
    elmnt.style.left = (targetX) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    console.log(appleX, elmnt.offsetLeft)
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


function PlayNyan(){
    document.getElementById("NyanCat").src = "nyan-move.gif";
    SpawnTrail();
}

function SpawnTrail(){
    var trail = document.createElement("img");
    trail.setAttribute('src', "nyan-trail.png");
    trail.setAttribute('class', "NyanTrail");
    var cat = document.getElementById("NyanCat");
    orgX = cat.offsetLeft +100;
    trail.style.position = "absolute"; 
    trail.style.left = orgX + "px";
    document.body.appendChild(trail);
    MoveTrail(trail, orgX, false);
}

function MoveTrail(trail, orgX, spawned){
    trail.style.left = (trail.offsetLeft+2) + "px";
    if (trail.offsetLeft>orgX+90 && !spawned){
	spawned = true;
	SpawnTrail();
    }
    if (trail.offsetLeft>window.innerWidth){
	trail.remove();
    }
    setTimeout(() => MoveTrail(trail, orgX, spawned), 10)
}