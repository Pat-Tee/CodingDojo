public class SinglyLinkedList {
	public Node head;
//CONSTRUCTORS
	public SinglyLinkedList() {
		head = null;
	}
//METHODS GET AND SET
	public void add(int value) {
		Node newNode = new Node(value);
		if (head == null) {
			head = newNode;
		} else {
			Node pointer = head;
			while(pointer.next != null) {
				pointer = pointer.next;
			}
			pointer.next = newNode;
		}
	}

	public void remove() {
		if (head != null) {
			Node pointer = head;
			
			while (pointer.next != null) {
				if (pointer.next.next != null)
					pointer = pointer.next;
				else
					pointer.next = null;
			}
		}
	}
//METHODS
	public void printValues() {
		if (head != null) {
			Node pointer = head;

			while (pointer != null) {
				System.out.println(pointer.value);
				pointer = pointer.next;
				}
		} else {
			System.out.println("List is empty.");
		}
	}
} 
