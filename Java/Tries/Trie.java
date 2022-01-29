import java.util.Set;

public class Trie {
	public Node root;
//CONSTRUCTORS
	public Trie() {
		this.root = new Node();
	}
//METHODS
	public void insertWord(String word) {
		Node currentNode = this.root;

		for (int i=0; i< word.length(); i++) {
			Character currentLetter = word.charAt(i);
			Node child = currentNode.children.get(currentLetter);
			if (child == null) {
				child = new Node();
				currentNode.children.put(currentLetter, child);
			}
			currentNode = child;
		}
		currentNode.isCompleteWord = true;
	}

	public boolean isPrefixValid(String prefix) {
		Node currentNode = this.root;
		Node child = null;
		for (int i=0; i < prefix.length(); i++) {			
			child = currentNode.children.get( prefix.charAt(i) );

			if (child == null)
				return false;
			currentNode = child;
		}

		return true;
	}

	public boolean isWordValid(String word) {
		Node currentNode = this.root;
		Node child = null;
		for (int i=0; i < word.length(); i++) {
			child = currentNode.children.get( word.charAt(i) );

			if (child == null)
				return false;
			currentNode = child;
		}
		if (child.isCompleteWord == false)
			return false;
		else return true;
	}

	public void printAllKeys() {
		printAllKeysRec(this.root);		
	}

	private void printAllKeysRec(Node node) {
		Set<Character> keys = node.children.keySet();
		Node child = null;
	
		for ( Character key : keys ) {
			System.out.println(key);

			child = node.children.get(key);
			if ( child != null )
			this.printAllKeysRec(child);
		}
	}
}
