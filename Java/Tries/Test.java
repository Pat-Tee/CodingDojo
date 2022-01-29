public class Test {
	public static void main(String[] args) {
		Trie trie = new Trie();
		
		trie.insertWord("car");
		trie.insertWord("card");
		trie.insertWord("chip");
		trie.insertWord("trie");
		trie.insertWord("try");

		System.out.println(trie.isPrefixValid("tr"));
		System.out.println(trie.isPrefixValid("qu"));
		System.out.println(trie.isPrefixValid("ca"));
		System.out.println(trie.isPrefixValid("card"));

		System.out.println(trie.isWordValid("ca"));
		System.out.println(trie.isWordValid("card"));

		trie.printAllKeys();		
	}
}
