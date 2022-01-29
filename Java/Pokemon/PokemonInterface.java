public interface PokemonInterface {
	public Pokemon createPokemon(String name, String type, int health);
	public String pokemonInfo(Pokemon pokemon);
	public void listPokemon();
}
