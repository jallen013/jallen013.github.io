var x = 0;

function menuflipper()
{


	if (x == 0)
	{
		document.getElementById ("menu").style.display = "block";
		x = 1;
	}
	else
	{
		document.getElementById ("menu").style.display = "none";
		x = 0;
	}
}