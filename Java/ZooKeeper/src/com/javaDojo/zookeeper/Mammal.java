package com.javaDojo.zookeeper;

public class Mammal {

	protected int energy;
	
	Mammal () {
		this(100);
	}
	
	Mammal (int energy) {
		this.energy = energy;
	}
	
	public int displayEnergy() {
		System.out.println(energy);		
		return energy;
	}
//END CLASS
}
