import java.util.ArrayList;

public class Basics {

	public static void print1To (int max) {
		for (int i=1; i <= max; i++) {
			System.out.println(i);
		}
	}

	public static void printOddsTo (int max) {
		for (int i=1; i <= max; i+=2) {
			System.out.println(i);
		}
	}	

	public static int sumNumsTo (int max) {
		int sum = 0;

		for (int i=1; i < max; i++) {
			sum += i;
		}

		return sum;
	}

	public static void printArray (int[] array) {
		int size = array.length;

		for (int i=0;i<size;i++) {
			System.out.println(array[i]);
		}
	}

	public static void printArrayMax(int[] array) {
		int size = array.length;
		int max = array[0];
		
		for (int i=1;i<size;i++) {
			if (array[i] > max)
				max = array[i];
		}
		System.out.println(max);
	}

	public static void createArrayOddsTo(int max) {
		ArrayList<Integer> arrayList = new ArrayList<Integer>();
		
		for (int i=0,j=1; j<max; i++, j+=2) {
			arrayList.add(j);
			System.out.println( arrayList.get(i) );
		}
	}
	
}
