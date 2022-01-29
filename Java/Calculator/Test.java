public class Test {
	public static void main(String[] args) {
		Calculator calc = new Calculator();

		calc.performOperation(); //divide by 0
		System.out.println( calc.getResult() );
		calc.setOperand1(100);
		calc.setOperand2(2.54);
		calc.setOperator('*');
		calc.performOperation();

		System.out.println( calc.getResult() );
	}
}
