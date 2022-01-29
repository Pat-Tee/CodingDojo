package com.javaDojo.zookeeper;

public class Gorilla extends Mammal {
	
	public void throwSomething() {
		System.out.println("This Gorilla threw something; lost 5 energy.");
		this.energy -= 5;
	}
	
	public void eatBanana() {
		System.out.println("This Gorilla ate a banana; gained 10 energy.");
		this.energy += 10;
	}
	
	public void climb() {
		System.out.println("This Gorilla climbed quite high; lost 10 energy.");
		this.energy -= 10;
	}
//END CLASS
}
