package com.javaDojo.zookeeper;

public class GiantBat extends Mammal {
	
	GiantBat() {
		this.energy = 300;
	}
	
	public void fly() {
		System.out.println("fft fft fft fft fft fft fft; A Giant Bat has taken flight; lost 50 energy.");
		this.energy -= 50;
	}
	
	public void eatHumans() {
		System.out.println("NOM NOM NOM NOM; A Giant Bat has devoured a human; gained 25 energy.");
		this.energy += 25;
	}
	
	public void attackTown() {
		System.out.println("wwwwwuuuuuuuuuaaaaaaaaaAAAAAAOOOOOOOOOOOOOAAAAUUUUUUU; A Giant Bar has set the town on fire; lost 100 energy.");
		this.energy -= 100;
	}
}
