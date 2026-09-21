function WinLine(winCase){
    switch (winCase){
        case 1:
            SetWinLine(2,0,1);
            break;
        case 2:
            SetWinLine(5,0,1);
            break;
        case 3:
            SetWinLine(8,0,1);
            break;
        case 4:
            SetWinLine(4,90,1);
            break;
        case 5:
            SetWinLine(5,90,1);
            break;
        case 6:
            SetWinLine(6,90,1);
            break;
        case 7:
            SetWinLine(5,45,1.4);
            break;
        case 8:
            SetWinLine(5,135,1.4);
            break;
    }
}

// This took sooooooooo long bruh
function SetWinLine(pos, a, s) {
    var box = GetBox(pos);
    var td = box.parentElement;
    var line = document.getElementById("Line");

    td.style.position = "relative";
    td.appendChild(line);

    line.style.display = "block";
    line.style.position = "absolute";
    line.style.left = "50%";
    line.style.top = "50%";
    
    line.style.width = "300%";

    // Center to the cord then transform
    line.style.transform = "translate(-50%, -50%) rotate(" + a + "deg) scaleX(" + s + ")";
}

// Win Logic: CheckWin() --> CheckSide() --> CheckCase()
function CheckWin(){
    var winCase = 0
    var values = CheckSide("Circle.png")
    var circle = values[0];
    if (winCase == 0){
        winCase = values[1];
    }

    values = CheckSide("Cross.png")
    var cross = values[0];
    if (winCase == 0){
        winCase = values[1];
    }

    console.log(circle, cross, winCase);

    if(circle || cross){
        WinLine(winCase);
    }

    if(circle){
        return(1);
    }
    else if(cross){
        return(2);
    }
    else{
        return(0);
    }
}

function CheckSide(side){
    var win = false;
    var winCase = 0;
    if (CheckCase(1,2,3,side)){win=true;winCase=1;}
    if (CheckCase(4,5,6,side)){win=true;winCase=2;}
    if (CheckCase(7,8,9,side)){win=true;winCase=3;}
    if (CheckCase(1,4,7,side)){win=true;winCase=4;}
    if (CheckCase(2,5,8,side)){win=true;winCase=5;}
    if (CheckCase(3,6,9,side)){win=true;winCase=6;}
    if (CheckCase(1,5,9,side)){win=true;winCase=7;}
    if (CheckCase(3,5,7,side)){win=true;winCase=8;}
    return [win, winCase];
}

function CheckCase(a,b,c,side){
    if (GetBox(a).getAttribute('src') == side && GetBox(b).getAttribute('src') == side && GetBox(c).getAttribute('src') == side){
        return true;
    }
    else{
        return false;
    }
}

function GetBox(item){
    return(document.getElementById(item.toString()));
}

function OnClick(id){
    box = document.getElementById(id);
    turnText = document.getElementById("TurnText");
    if (box.getAttribute('src') == "Blank.png" && winner == 0){
        if (circleTurn){
            box.src = "Circle.png";
            box.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
            turnText.textContent = "Current Turn: X"
            circleTurn = false;
        }
        else{
            box.src = "Cross.png";
            box.style.transform = 'rotate(' + Math.floor(Math.random() * 4)*90 + 'deg)';
            turnText.textContent = "Current Turn: O"
            circleTurn = true;
        }
        winner=CheckWin();
        if (winner == 1){
            turnText.textContent = "Game Over! Winner: O"
        }
        if (winner == 2){
            turnText.textContent = "Game Over! Winner: X"
        }
    }
    return false;
}

var circleTurn = true;
var winner = 0;