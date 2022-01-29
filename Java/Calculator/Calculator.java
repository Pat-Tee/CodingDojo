public class Calculator implements java.io.Serializable {
	private double operand1;
	private double operand2;
	private double result;
	private char operator;
//CONSTRUCTORS
	public Calculator() {
		operand1 = 0;
		operand2 = 0;
		operator = '/';
	}

	public Calculator(double op1, double op2, char op) {
		operand1 = op1;
		operand2 = op2;
		op = operator;
	}
//GET AND SET METHODS
	public void setOperand1(double op1) {
		operand1 = op1;
	}

	public void setOperand2(double op2) {
		operand2 = op2;
	}

	public void setOperator(char op) {
		operator = op;
	}

	public double getResult() {
		return result;
	}
//METHODS
	public void performOperation() {
		switch (operator) {
			case '+': result = operand1 + operand2; break;
			case '-': result = operand1 - operand2; break;
			case '*': result = operand1 * operand2; break;
			case '/': result = operand1 / operand2; break;
			default : result = 0; break;
		} 
	}
}
