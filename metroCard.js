var rides; 
var cost; 
var total; 

function totalCalc(){
	rides = document.getElementById("rides").value;
	cost = 2.75;
	total = rides * cost;
	

	calcAlert();
}

function calcAlert(){

	if (total > 115) {
		alert("You spend less than $115. You should not get a monthly MetroCard!");
	} else {
		alert("You spend more than $115. You should get a monthly MetroCard!")
	}
	
} 
