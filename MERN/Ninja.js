class Ninja {
    
    constructor(name, health, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log(this.name);
    }

    showStats() {
        console.log("\nName: ", this.name, "\nStrength: ", this.strength, "\nSpeed: ", this.speed, "\nHealth: ", this.health);
    }

    drinkSake() {
        this.health += 10;
    }
}

class Sensei extends Ninja {
    constructor(name, wisdom = 10) {
        super(name, 100);
        this.wisdom = wisdom;
    }

    showStats() {
        console.log("\nName: ", this.name, "\nStrength: ", this.strength, "\nSpeed: ", this.speed, "\nHealth: ", this.health, "\nWisdom: ", this.wisdom);
    }
    speakWisdom() {
        console.log("Eat m0r piza");
    }
}

// myNinja = new Ninja("Dunny", 90);
// myNinja.drinkSake();
// myNinja.showStats();


const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"copy
// create a class Sensei that inherits from the Ninja class

// add an attribute: wisdom - default to 10

// create a method: speakWisdom()