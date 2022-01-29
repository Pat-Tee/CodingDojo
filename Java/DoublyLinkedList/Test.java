public class Test {
	public static void main(String[] args) {
		DoublyLinkedList dll = new DoublyLinkedList();
		System.out.println("\n");

		dll.push( new Node(4) );
		dll.push( new Node(10) );
		dll.push( new Node(15) );
		dll.push( new Node(3) );
		dll.push( new Node(7) );
		dll.push( new Node(45) );
		dll.push( new Node(-100) );
		System.out.println( "Size of dll is "+dll.size() );
		dll.printValuesForward();
		System.out.println( "dll contains 10? "+dll.contains(10) );
		dll.printValuesBackward();
		dll.pop();
		System.out.println( "One node popped, new size is "+dll.size() );
		dll.printValuesForward();
	}
}
