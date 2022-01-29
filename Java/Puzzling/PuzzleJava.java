import java.util.Random;

public class PuzzleJava {

	Random random = new Random();

	public int[] randomArray(int length, int max) {
		int[] array;
		array = new int[length];
		//randomInt = random.Int();
		
		for (int i=0; i < length; i++) {
			array[i] = random.nextInt(max)+1;
			}	
		return array;	
	}

	public char randomLetter() {
		char[] alphabet;
		alphabet = new char[26];
		int index = random.nextInt(26);
		
		for (char a='a',i=0; i< 26; i++,a++ )
			alphabet[i] = a;

		return alphabet[index];
	}

	public char[] randomWord(int length) {
		char[] word;
		word = new char[length];

		for (int i=0; i < length; i++)
			word[i] = randomLetter();

		return word;
	}

	public char[][] randomWords(int numWords, int length) {
		char[][] sentence;
		sentence = new char[numWords][length];

		for (int i=0; i<numWords; i++)
			sentence[i] = randomWord(length);

		return sentence;
	}
}
