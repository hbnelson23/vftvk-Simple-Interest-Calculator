function compute() 
{
	var principal = document.getElementById("principal").value;

	// validate the principal input
	if (principal <= 0) {
		alert("Enter a positive number");
		document.getElementById("principal").value = "";
		document.getElementById("principal").focus();
		return false; // go no further
	}

	var rate = document.getElementById("rate").value;
	var years = document.getElementById("years").value;

	var interest = principal * years * rate /100; // the math

	var year = new Date().getFullYear() + parseInt(years);

	// output
	document.getElementById("result").innerHTML = "If you deposit <mark>"+ principal +"</mark>,<br />"
			+"at an interest rate of <mark>"+ rate +"%</mark>.<br />"
			+"You will receive an amount of <mark>"+ interest +"</mark>,<br />"
			+"in the year <mark>"+ year +"</mark>";
}

function updateRate() 
{	// display the 'rate' slider values
	var rateval = document.getElementById("rate").value;
	document.getElementById("rate_val").innerText = rateval +"%";
}