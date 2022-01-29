/*
You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment,
 so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their
 phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk
 (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to
 traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes
 (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). 
It will never give you an empty array (that's not a walk, that's standing still!).
*/
import java.util.Random;
// import java.util.Arrays;

public class WalkTheApp {
	public static void main(String args[]) {

		Random randGen = new Random();
		int northCount = 0;
		int eastCount = 0;
		int i = 0;

		for (; i < 10; i++) {
			switch (randGen.nextInt(4)) {
				case 0: {System.out.println("You went North"); northCount++; break;}
				case 1: {System.out.println("You went South"); northCount--; break;}
				case 2: {System.out.println("You went East"); eastCount++; break;}
				case 3: {System.out.println("You went West"); eastCount--; break;}
				default: break; 
			}
		}

		if (northCount == 0 && eastCount == 0 && i == 10) {
			System.out.println("You made it back on time!");
		} else System.out.println("You did not make it back on time.");
		
/*		int sizeX = 8;
		int sizeY = 8;
		Random randGen = new Random();

		if (args.length > 0) {
			sizeX = Integer.parseInt(args[0]);
			System.out.println("output of parseInt: "+Integer.parseInt(args[0]));
			if (args.length > 1) {
				sizeY = Integer.parseInt(args[1]);
				System.out.println("output of parseInt: "+Integer.parseInt(args[1]));
			} else
			sizeY = sizeX;
		}
		System.out.println("args length: "+args.length+" x: "+sizeX+" y: "+sizeY);
		
		String city[][] = new String[sizeY][sizeX];

		System.out.println("\nCity:\n"+"--------");
		for (int i=0; i<sizeY* sizeX; i++) {
			switch (direction[i] {
				case "n": {if (y > 0) city[y-1][x] = "*"; break;}
				case "e": {if (x < city[y].length) city[y][x+1] = "*"; break;}
				case "w": {if (x > 0) city[y][x-1] = "*"; break;}
				case "s": {if (y < city[y].length) city[y+1][x] = "*"; break;}
				default: break;
				}
			//System.out.println(city[y][x]);
			System.out.println(Arrays.toString(city[y]) );
		}*/	
	}
}
