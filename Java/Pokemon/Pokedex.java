import java.util.ArrayList;

public class Pokedex extends AbstractPokemon {
	static private ArrayList<Pokemon> myPokemon  = new ArrayList<Pokemon>();
	
	public static void addPokemon(Pokemon newPokemon) {
		myPokemon.add(newPokemon);
	}

	public void listPokemon() {
		for ( Pokemon poke : myPokemon )
			System.out.println(poke.getName());
	}
}
