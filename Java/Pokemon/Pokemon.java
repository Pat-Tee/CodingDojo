public class Pokemon {
//VARIABLES
	protected String name = "unnamed";
	protected String type = "unknown";
	protected int health = 100;
	
	private static int count = 0;
//CONSTRUCTORS
	Pokemon() {
		name = "unnamed";
		type = "unknown";
		health = 100;
		count++;
	}

	Pokemon(String name, String type, int health) {
		this.name = name;
		this.type = type;
		this.health = health;
		count++;
	}

	Pokemon(String name, String type) {
		this.name = name;
		this.type = type;
		count++;
	}
//METHODS - Get and Set
	public String getName() {
		return this.name;
	}

	public String getType() {
		return this.type;
	}

	public int getHealth() {
		return this.health;
	}

	public int countPokemon() {
		return this.count;
	}
//METHODS
	public void attackPokemon(Pokemon pokemon) {
		System.out.println(name + " attacked " + pokemon.getName() + "!");
	}
//END CLASS
}
