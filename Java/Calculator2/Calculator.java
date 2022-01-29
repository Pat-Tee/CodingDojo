import java.util.ArrayList;

public class Calculator implements java.io.Serializable {
	private ArrayList<Double> operands;
	private double result;
	private ArrayList<Character> operators;
//CONSTRUCTORS
	public Calculator() {
		operands = new ArrayList<Double>();
		operators = new ArrayList<Character>();
		result = 0;
	}
//GET AND SET METHODS
	public void addOp(double op) {
		operands.add(op);
	}

	public void addOp(char op) {
		if ( op == '=')
			performOperation();
		else
			operators.add(op);
	}

	public double getResult() {
		return result;
	}
//METHODS
	private void performOperation() {
		double tempResult = 0;
		int numOps = operators.size();
		
		if ( numOps > operands.size() - 1 ) {
			System.out.println("Number of operators is too great for the number of operands!\n");
			numOps = operands.size() - 1;
			}
		else if ( numOps < operands.size() - 1 )
			System.out.println("Number of operators is too few for the number of operands!\n");

		for (int i=0; i < numOps; i++) {
			switch (operators.get(i)) {
				case '+': tempResult = operands.get(0) + operands.get(1); break;
				case '-': tempResult = operands.get(0) - operands.get(1); break;
				case '*': tempResult = operands.get(0) * operands.get(1); break;
				case '/': tempResult = operands.get(0) / operands.get(1); break;
				default : tempResult = 0; break;
				}
			System.out.println( String.valueOf(operands.get(0))+" "+String.valueOf(operators.get(i))+" "+String.valueOf(operands.get(1)+" =") ); 
			operands.remove(1);
			operands.set(0, tempResult);
			}	
		result = operands.get(0);
		operators.clear();
		operands.remove(0);
	}
}
