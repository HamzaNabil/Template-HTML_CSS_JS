function HoverButton()
{
	document.getElementById("butt").style.backgroundColor="#080";
}

function Hover()
{
	document.getElementById("butt").style.backgroundColor="#00BCBA";
	
}

function Show()
{
	document.getElementById("Click").style.visibility="visible";
}

function Hide()
{
	document.getElementById("Click").style.visibility="hidden";
}

var n = 0;
function Hovered()
{
	n = n + 1 ;
    document.getElementById("img1").innerHTML = n;
}


function clc()
{
    document.getElementById("Clicks").style.color="f50";
	document.getElementById("Clicks").style.textDecoration="underline";
}

function valid()
{
  	var t = prompt("Name ..");
	if (t == "hamza")
	{
	   window.location = "index.html";
    }
	else 
	{
		alert ("Wrong !!");
	}
	
}