public class Test {
	public static void main(String[] args) {
		Pokemon myPokemon = new Pokemon("Pikachu", "little yellow rat");
		Pokedex myDex = new Pokedex();
		Pokemon newPokemon = new Pokemon("Gengar", "Purple critter", 100);
		
		System.out.println( myPokemon.getName() );
		System.out.println( myPokemon.getType() );
		System.out.println( myPokemon.getHealth() );

		myDex.addPokemon( myPokemon );
		myDex.addPokemon( newPokemon );

		myDex.listPokemon();

		myPokemon.attackPokemon(newPokemon);
	}
}
