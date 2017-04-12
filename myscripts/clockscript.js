"use strict";

var clock_int;													// TODO: LIMIT SPAM CLICKING BUTTONS
var symbol_int;
var countup_int;
var countdown_int;

var clock_flag;													// TODO: REPLACE FLAG VARS WITH CSS TRIGGERS
var symbol_flag;
var countup_flag;
var countdown_flag;
																// TODO: DEAL W CANCEL BUTTON IN INPUT
var blink_var;
var tic_var;

//-------------------------------------------------------------------
function reset(){
	clearInterval(clock_int);
	clearInterval(countup_int);
	clearInterval(symbol_int);
	clearInterval(countdown_int);

	clock_flag = true;
	symbol_flag = true;
	countup_flag = true;
	countdown_flag = true;

	blink_var = true;
	tic_var = -1;

	document.getElementById("numA").style.color = "#003E77";	// TODO: REPLACE COLORS WITH COLOR REFERENCES
	document.getElementById("symbol").style.color = "#003E77";
	document.getElementById("numB").style.color = "#003E77";

	document.getElementById("symbol").style.visibility = "visible";
	document.getElementById("pause_btn").style.visibility = "hidden";
}
//-------------------------------------------------------------------
function clock() {


	var time_var = new Date();
	var hours_var = time_var.getHours();
	var mins_var = time_var.getMinutes();

	if (clock_flag)
	{
		document.getElementById("clock_btn").style.backgroundColor="#EAE0C8"; // <-
		document.getElementById("clock_btn").style.borderColor="#BCAD75"; // <-
		document.getElementById("countup_btn").style.backgroundColor="#BCAD75";
		document.getElementById("countup_btn").style.borderColor="#EAE0C8";
		document.getElementById("countdown_btn").style.backgroundColor="#BCAD75";
		document.getElementById("countdown_btn").style.borderColor="#EAE0C8";
		
		reset();
		clock_flag = false;
		clockupdate();
		symbolupdate();
	}

	if (hours_var <= 12)
	{
		document.getElementById ("numA").innerHTML = hours_var;
	}
	else
	{
		hours_var -= 12;
		document.getElementById ("numA").innerHTML = hours_var;
	}

	if (mins_var < 10)
	{
		document.getElementById ("numB").innerHTML = "0" + mins_var;
	}
	else
	{
		document.getElementById ("numB").innerHTML = mins_var;
	}
}

function clockupdate(){
  clock_int = setInterval(clock, 8500);
}
//-------------------------------------------------------------------
function symbol() {
	if (blink_var)
	{
		document.getElementById("symbol").style.visibility = "visible";
		blink_var = false;
	}
	else
	{
		document.getElementById("symbol").style.visibility = "hidden";
		blink_var = true;
	}
}

function symbolupdate() {
	symbol_int= setInterval (symbol, 1000);
}

//-------------------------------------------------------------------
function countup() {
	if (countup_flag)
	{
		document.getElementById("clock_btn").style.backgroundColor="#BCAD75";
		document.getElementById("clock_btn").style.borderColor="#EAE0C8";
		document.getElementById("countup_btn").style.backgroundColor="#EAE0C8"; // <-
		document.getElementById("countup_btn").style.borderColor="#BCAD75"; // <-
		document.getElementById("countdown_btn").style.backgroundColor="#BCAD75";
		document.getElementById("countdown_btn").style.borderColor="#EAE0C8";

		reset();
		countup_flag = false;
		countupupdate();

		document.getElementById("pause_btn").style.visibility = "visible";
		document.getElementById("pause_btn").innerHTML = "pause";
	}

	tic_var += 1;

	document.getElementById("numA").innerHTML = Math.floor(tic_var / 60);
	if (tic_var % 60 < 10)
	{
		document.getElementById("numB").innerHTML = "0" + tic_var % 60;
	}
	else
	{
		document.getElementById("numB").innerHTML = tic_var % 60;
	}
}

function countupupdate() {
	countup_int = setInterval(countup, 1000);
}
//-------------------------------------------------------------------
function countdown() {

	document.getElementById("clock_btn").style.backgroundColor="#BCAD75";
	document.getElementById("countup_btn").style.backgroundColor="#BCAD75";
	document.getElementById("countdown_btn").style.backgroundColor="#EAE0C8";
	
	var validate = false;
	var temp = 0;

	if (countdown_flag)
	{
		document.getElementById("clock_btn").style.backgroundColor="#BCAD75";
		document.getElementById("clock_btn").style.borderColor="#EAE0C8";
		document.getElementById("countup_btn").style.backgroundColor="#BCAD75";
		document.getElementById("countup_btn").style.borderColor="#EAE0C8";
		document.getElementById("countdown_btn").style.backgroundColor="#EAE0C8"; // <-
		document.getElementById("countdown_btn").style.borderColor="#BCAD75"; // <-

		reset();

		while (validate == false){
			validate = true;

			tic_var=prompt("Enter a number of minutes (ex: 2.5).");

			try{
				if (isNaN(tic_var)) throw "";
			}
			catch(err) {
				validate = false;
			}

			if (validate == true){
				if (tic_var < 0){
					validate = false;
				}
			}
		}

		tic_var *= 60;

		countdownupdate();
		countdown_flag = false;

		document.getElementById("pause_btn").style.visibility = "visible";
		document.getElementById("pause_btn").innerHTML = "pause";
	}

	tic_var -= 1;

	if (tic_var >= 0)						//TODO: MAKE OUTPUT DIV BACKGROUND FLASH BETWEEN +1 AND -1
	{
		document.getElementById("numA").innerHTML = Math.floor(tic_var / 60);
		if (tic_var % 60 < 10)
		{
			document.getElementById("numB").innerHTML = "0" + tic_var % 60;
		}
		else
		{
			document.getElementById("numB").innerHTML = tic_var % 60;
		}
	}
	else
	{
		document.getElementById("numA").style.color = "#DC291E";
		document.getElementById("symbol").style.color = "#DC291E";
		document.getElementById("numB").style.color = "#DC291E";

		temp = -1 * tic_var;

		document.getElementById("numA").innerHTML = "(" + Math.floor(temp / 60);
		if (temp % 60 < 10)
		{
			document.getElementById("numB").innerHTML = "0" +(temp % 60) + ")";
		}
		else
		{
			document.getElementById("numB").innerHTML = temp % 60 + ")";
		}

	}
}

function countdownupdate() {
	countdown_int = setInterval(countdown, 1000);
}
//-------------------------------------------------------------------
function pause() {
	var tempTic;

	if(countup_flag === false){
		if (document.getElementById("pause_btn").innerHTML == "pause")
		{
			tempTic = tic_var;
			reset();
			tic_var = tempTic;
			countup_flag = false;
			document.getElementById("pause_btn").style.visibility = "visible";
			document.getElementById("pause_btn").style.backgroundColor="#EAE0C8";
			document.getElementById("pause_btn").style.borderColor="#BCAD75";
			document.getElementById("pause_btn").innerHTML = "continue";
		}
		else {
			countupupdate();
			document.getElementById("pause_btn").style.backgroundColor="#BCAD75";
			document.getElementById("pause_btn").style.borderColor="#EAE0C8";
			document.getElementById("pause_btn").innerHTML = "pause";
		}
	}

	if (countdown_flag === false){
		if (document.getElementById("pause_btn").innerHTML == "pause")
		{
			tempTic = tic_var;
			reset();
			tic_var = tempTic;
			countdown_flag = false;

			if (tic_var<0){
				document.getElementById("numA").style.color = "#DC291E";
				document.getElementById("symbol").style.color = "#DC291E";
				document.getElementById("numB").style.color = "#DC291E";
			}

			document.getElementById("pause_btn").style.visibility = "visible";
			document.getElementById("pause_btn").style.backgroundColor="#EAE0C8";
			document.getElementById("pause_btn").style.borderColor="#BCAD75";
			document.getElementById("pause_btn").innerHTML = "continue";
		}
		else {
			countdownupdate();
			document.getElementById("pause_btn").style.backgroundColor="#BCAD75";
			document.getElementById("pause_btn").style.borderColor="#EAE0C8";
			document.getElementById("pause_btn").innerHTML = "pause";
		}
	}

}









