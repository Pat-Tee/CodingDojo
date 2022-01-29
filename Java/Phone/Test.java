public class Test {
	public static void main(String[] args) {
		Galaxy s9 = new Galaxy("S9", "Verizon", "ring ring ring", 99);
		iPhone iphone10 = new iPhone("10", "AT&T", "zing zing zing", 100);

		s9.displayInfo();System.out.println( s9.ring() );
		System.out.println( s9.unlock() );

		iphone10.displayInfo();
		System.out.println( iphone10.ring() );
		System.out.println( iphone10.unlock() );
	}
}
