function findDate() {
	var month = parseInt(document.getElementById("month").value);
	var day = parseInt(document.getElementById("day").value);
	var year = parseInt(document.getElementById("year").value);
	var anchorYear = Math.floor(year / 100);
	var dooms = 0;
	if (anchorYear % 4 == 2) {
		dooms = 5;
	} else if (anchorYear % 4 == 3) {
		dooms = 3;
	} else if (anchorYear % 4 == 0) {
		dooms = 2;
	} else {
		dooms = 0;
	}

	var count = year % 100;
	count = count + Math.floor(count/4);
	dooms += count;
	dooms %= 7;
	
	var dday = 0;
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

	var isFinding = true;
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
	
	switch (dooms) {
		case 0:
			document.getElementById("birthday").innerHTML = "You were born on a Sunday";
			break;
			
		case 1:
			document.getElementById("birthday").innerHTML = "You were born on a Monday";
			break;
			
		case 2:
			document.getElementById("birthday").innerHTML = "You were born on a Tueday";
			break;
			
		case 3:
			document.getElementById("birthday").innerHTML = "You were born on a Wedneday";
			break;
			
		case 4:
			document.getElementById("birthday").innerHTML = "You were born on a Thursday";
			break;
			
		case 5:
			document.getElementById("birthday").innerHTML = "You were born on a Friday";
			break;
			
		case 6:
			document.getElementById("birthday").innerHTML = "You were born on a Saturday";
			break;
	}
}