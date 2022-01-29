import java.util.ArrayList;

public class ExceptionsList {

	public static void main(String[] args) {
	
		ArrayList<Object> aList = new ArrayList<Object>();

		aList.add("10");
		aList.add("Ten");
		aList.add(10);
		aList.add("Hello");

		Integer valueInteger; 

		for (int i=0; i< aList.size(); i++) {
			try {
				valueInteger = (Integer) aList.get(i);
			} catch (ClassCastException msg) {
				System.out.println( "Could not convert "+ aList.get(i) +" to Integer." );
				//System.out.println(msg);
			}
		}

		System.out.println("Program successfully completed.");
	}
}
