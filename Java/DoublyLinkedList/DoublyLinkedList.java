public class DoublyLinkedList {
	public Node head;
	public Node tail;
//CONSTRUCTORS
	public DoublyLinkedList() {
		this.head = null;
		this.tail = null;
	}
//GET AND SET METHODS
	public void push(Node newNode) {
		if (this.head == null) {
			this.head = newNode;
			this.tail = newNode;
			return;
		}

		Node lastNode = this.tail;
		lastNode.next = newNode;
		newNode.prev = lastNode;
		this.tail = newNode;
	}
//METHODS
	public void printValuesForward() {
		Node pointer = this.head;

		while (pointer != null) {
			System.out.println(pointer.value);
			pointer = pointer.next;
		}
	}

	public void printValuesBackward() {
		Node pointer = this.tail;

		while (pointer != null) {
			System.out.println(pointer.value);
			pointer = pointer.prev;
		}
	}

	public Node pop() {
		Node pointer = this.tail.prev;
		pointer.next = null;
		this.tail = pointer;
		
		return pointer;
	}

	public boolean contains(Integer value) {
		Node pointer1 = this.head;
		Node pointer2 = this.tail;
		
		while (pointer1 != pointer2) {
			if (pointer1.value == value || pointer2.value == value)
				return true;	
			pointer1 = pointer1.next;
			pointer2 = pointer2.prev;
		}
		return false;
	}

	public int size() {
		Node pointer = this.head;
		int count = 0;
		
		while (pointer != null) {
			count++;
			pointer = pointer.next;
		}
		return count;
	}
}
