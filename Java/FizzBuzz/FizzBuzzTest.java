public class FizzBuzzTest {

	public static void main(String[] args) {
		FizzBuzz tester = new FizzBuzz();

		System.out.println(tester.fizzBuzz(9));
		System.out.println(tester.fizzBuzz(10));
		System.out.println(tester.fizzBuzz(15));
		System.out.println(tester.fizzBuzz(16));
		System.out.println(tester.fizzBuzz(2));
		System.out.println(tester.fizzBuzz(30));

		System.out.println(tester.fizzBuzz(9,"Hello", "World", "Hello world!"));
		System.out.println(tester.fizzBuzz(10,"Hello", "World", "Hello world!"));
		System.out.println(tester.fizzBuzz(15,"Hello", "World", "Hello world!"));
		System.out.println(tester.fizzBuzz(16,"Hello", "World", "Hello world!"));
		System.out.println(tester.fizzBuzz(2,"Hello", "World", "Hello world!"));
		System.out.println(tester.fizzBuzz(30,"Hello", "World", "Hello world!"));
	}
}