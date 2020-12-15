import java.util.Scanner;
import java.lang.Math;

class Birthday {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    int month, day, year, dooms = 0;
    System.out.println("What month were you born in");
    month = input.nextInt();
    System.out.println("What day were you born in");
    day = input.nextInt();
    System.out.println("What year were you born in");
    year = input.nextInt();
    input.close();

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

	
	  int dday = 0;
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

	  boolean isFinding = true;
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
	
	  System.out.print("You were born on a ");
	  switch (dooms) {
		  case 0:
			  System.out.println("Sunday");
			  break;
			
		  case 1:
			  System.out.println("Monday");
			  break;
			
		  case 2:
			  System.out.println("Tueday");
			  break;
			
		  case 3:
			  System.out.println("Wednesday");
			  break;
			
		  case 4:
			  System.out.println("Thursday");
			  break;
			
		  case 5:
			  System.out.println("Friday");
			  break;
			
		  case 6:
			  System.out.println("Saturday");
			  break;
	  }
  }
}