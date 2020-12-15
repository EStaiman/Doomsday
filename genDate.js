let enableWhy = false;

let findDate = function(month, day, year) {
	let elem = document.getElementById("help");
	let anchorYear = Math.floor(year / 100);
	let dooms = 0;
	if (anchorYear % 4 == 2) {
		dooms = 5;
	} else if (anchorYear % 4 == 3) {
		dooms = 3;
	} else if (anchorYear % 4 == 0) {
		dooms = 2;
	} else {
		dooms = 0;
	}
	elem.innerHTML = dooms + " ";
	
	let count = year % 100;
	count = count + Math.floor(count/4);
	dooms += count;
	dooms %= 7;
	elem.innerHTML = elem.innerHTML + dooms + " ";
	
	let dday = 0;
	switch (month) {
		case 1:
			if (year % 400 == 0) {
				dday = 4;
			} else if (year % 100 != 0 && year % 4 == 0) {
				dday = 4;
			} else {
				dday = 3;
			}
			break;
		
		case 2:
			if (year % 400 == 0) {
				dday = 1;
			} else if (year % 100 != 0 && year % 4 == 0) {
				dday = 1;
			} else {
				dday = 0;
			}
			break;
		
		case 3:
			dday = 0;
			break;
			
		case 4:
			dday = 4;
			break;
			
		case 5:
			dday = 2;
			break;
			
		case 6:
			dday = 6;
			break;
			
		case 7:
			dday = 4;
			break;
			
		case 8:
			dday = 1;
			break;
			
		case 9:
			dday = 5;
			break;
			
		case 10:
			dday = 3;
			break;
			
		case 11:
			dday = 0;
			break;
			
		case 12:
			dday = 5;
			break;
	}
	elem.innerHTML = elem.innerHTML + dday + " ";
	
	let isFinding = true;
	while (isFinding) {
		if (Math.abs(dday - day) < 7) {
			if (dday == day) {
				isFinding = false;
			} else if (dday > day) {
				dooms -= (dday - day);
				if (dooms < 0) {
					dooms += 7;
				}
				isFinding = false;
			} else {
				dooms += (day - dday);
				dooms %= 7;
				isFinding = false;
			}
		} else {
			dday += 7;
		}
	}
	return dooms;
}

function genDate() {
	document.getElementById("help").style.visibility = "hidden";
	document.getElementById("check").innerHTML = " ";
	document.getElementById("test").value = "";
	document.getElementById("test").focus();
	document.getElementById("test").select();
	
	let month = Math.floor(Math.random() * 12) + 1;
	let year = Math.floor(Math.random() * 400) + 1800;
	let day;
	switch(month) {
		case (9):
		case (4):
		case (6):
		case (11):
			day = Math.floor(Math.random() * 30) + 1;
		break;
		
		case (1):
		case (3):
		case (5):
		case (7):
		case (8):
		case (10):
		case (12):
			day = Math.floor(Math.random() * 31) + 1;
		break;
		
		case (2):
			if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
				day = Math.floor(Math.random() * 29) + 1;
			} else {
				day = Math.floor(Math.random() * 28) + 1;
			}
		break;
	}
	document.getElementById("birthday").innerHTML = month + " " + day + " " + year;
}

let testDate = function() {
	let elems = document.getElementById("birthday").innerHTML.split(" ");
	let result = findDate(parseInt(elems[0]), parseInt(elems[1]), parseInt(elems[2]));
	let theDay = parseInt(document.getElementById("test").value);
	if (result == theDay) {
		document.getElementById("check").innerHTML = "Correct!";
	} else {
		document.getElementById("check").innerHTML = "Incorrect, the correct day is " + result;
	}
	if (enableWhy) {
		document.getElementById("help").style.visibility = "visible";
		}	
	let helps = document.getElementById("help").innerHTML.split(" ");
	let data = "This is because the anchor year was " + helps[0] +
				", the doomsday is " + helps[1] + ", and since the month is " +
				elems[0] + ", this corresponds with the " + helps[2] +
				" day, and you can calculate the correct day of " + result + ".";
	document.getElementById("help").innerHTML = data;
}

let toggle = function() {
	if (enableWhy == true) {
		enableWhy = false;
		document.getElementById("tog").innerHTML = "Enable Why";
		document.getElementById("help").style.visibility = "hidden";
	} else {
		enableWhy = true;
		document.getElementById("tog").innerHTML = "Disable Why";
		document.getElementById("help").style.visibility = "visible";
	}
}