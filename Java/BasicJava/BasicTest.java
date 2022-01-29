public class BasicTest {
	public static void main(String[] args) {
		Basics tester = new Basics();
		int[] testArray = {5,5,5,6,3,0,1};
		
		//tester.print1To(255);
		//tester.printOddsTo(255);
		//System.out.println( tester.sumNumsTo(255) );
		//tester.printArray(testArray);
		tester.printArrayMax(testArray);
		tester.createArrayOddsTo(255);
	}
}
