package com.javaDojo.zookeeper;

public class ZooKeeperTest {
	public static void main(String[] args) {
		
		Gorilla george = new Gorilla();
		
		george.throwSomething();
		george.throwSomething();
		george.throwSomething();
		
		george.eatBanana();
		george.eatBanana();
		
		george.climb();
		
		System.out.println("After a full day's activity, george has "+george.displayEnergy()+" energy left." );
		System.out.println("------------");
		GiantBat batty = new GiantBat();
		
		batty.attackTown();
		batty.attackTown();
		batty.attackTown();
		
		batty.eatHumans();
		batty.eatHumans();
		
		batty.fly();
		
		System.out.println("After a full day's activity, batty has "+batty.displayEnergy()+" energy left." );
	}

}
