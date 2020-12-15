#include <stdio.h>
#include <stdlib.h>

int main() {
	int month, day, year, dooms = 0;
	printf("What month were you born in?\n");
	scanf("%d", &month);
	printf("What day were you born on?\n");
	scanf("%d", &day);
	printf("What year were you born in?\n");
	scanf("%d", &year);
	
	int anchor = year / 100;
	if (anchor % 4 == 2) {
		dooms = 5;
	} else if (anchor % 4 == 3) {
		dooms = 3;
	} else if (anchor % 4 == 0) {
		dooms = 2;
	} else if (anchor % 4 == 1) {
		dooms = 0;
	}
	
	int count = year % 100;
	count = count + (count/4);
	dooms += count;
	dooms %= 7;

	
	int dday;
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
	//printf( <<dday;
	int isFinding = 1;
	while (isFinding) {
		if (abs(dday - day) < 7) {
			if (dday == day) {
				isFinding = 0;
			} else if (dday > day) {
				dooms -= (dday - day);
				if (dooms < 0) {
					dooms += 7;
				}
				isFinding = 0;
			} else {
				dooms += (day - dday);
				dooms %= 7;
				isFinding = 0;
			}
		} else {
			dday += 7;
		}
	}
	
	printf("You were born on a ");
	switch (dooms) {
		case 0:
			printf("Sunday");
			break;
			
		case 1:
			printf("Monday");
			break;
			
		case 2:
			printf("Tuesday");
			break;
			
		case 3:
			printf("Wednesday");
			break;
			
		case 4:
			printf("Thursday");
			break;
			
		case 5:
			printf("Friday");
			break;
			
		case 6:
			printf("Saturday");
			break;
	}
	
	return 0;	
}