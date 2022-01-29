public class FizzBuzz {
	public String fizzBuzz(int number) {

		String returnString;
		returnString = String.valueOf(number);

		if ((number % 3) == 0) {
			returnString = "Fizz";
			if ((number % 5) == 0)
				returnString += "Buzz";
		} else if ((number % 5) == 0)
			returnString = "Buzz";

		return returnString;
	}

	public String fizzBuzz(
		int number,
		String multiple3Word,
		String multiple5Word,
		String multiple15Word) {

		String returnString;
		returnString = String.valueOf(number);

		if ((number % 3) == 0) {
			returnString = multiple3Word;
			if ((number % 5) == 0)
				returnString = multiple15Word;
		} else if ((number % 5) == 0)
			returnString = multiple5Word;

		return returnString;
		}
}