public abstract class AbstractPokemon implements PokemonInterface {

	public Pokemon createPokemon(String name, String type, int health) {
		Pokemon poke = new Pokemon(name, type, health);
		return poke;
	}
	public String pokemonInfo(Pokemon pokemon) {
		String info = pokemon.name + pokemon.type + String.valueOf(pokemon.health);
		return info;
	}
}
