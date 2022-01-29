public class PuzzleJavaTest {

	public static void main(String[] args) {
		PuzzleJava puzzler = new PuzzleJava();
		int[] array = puzzler.randomArray(10, 20);
		
		//for (int i =0; i<array.length; i++)
		// 	System.out.println(array[i]);

		System.out.println( puzzler.randomLetter() );
		System.out.println( puzzler.randomWord(8) );
		int length = 8;
		char[][] sentence = puzzler.randomWords(length,8);
		for (int i=0; i<length; i++)
			System.out.println(sentence[i]);
	}
}
