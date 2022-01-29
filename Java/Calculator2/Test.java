public class Test {
	public static void main(String[] args) {
		Calculator calc = new Calculator();
		System.out.println("\n");
		calc.addOp(4);
		calc.addOp(3);
		calc.addOp(2);
		calc.addOp(10);
		calc.addOp(3);

		calc.addOp('+');
		calc.addOp('-');
		calc.addOp('*');
		calc.addOp('/');
		calc.addOp('=');
		
		System.out.println( calc.getResult() +"\n" );
		
		calc.addOp(1);
		calc.addOp(1);
		calc.addOp('+');
		calc.addOp('+');
		calc.addOp('=');
		
		System.out.println( calc.getResult() +"\n" );

		calc.addOp(2);
		calc.addOp(2);
		calc.addOp('=');
	}
}
