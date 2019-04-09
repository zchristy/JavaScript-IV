/*

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
class GameObject {
  constructor (gameObj) {
    this.createdAt = gameObj.createdAt;
    this.name = gameObj.name;
    this.dimensions = gameObj.dimensions;
  }
  destroy() {
    return `${this.name} was removed from the game.`
  };
}

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
class CharacterStats extends GameObject {
  constructor(statsObj) {
    super(statsObj);
    this.healthPoints = statsObj.healthPoints;
  }
  takeDamage(){
    return `${this.name} took damage.`
  };
}


/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
class Humanoid extends CharacterStats {
  constructor(humanObj) {
    super(humanObj);
    this.team = humanObj.team;
    this.weapons = humanObj.weapons;
    this.language = humanObj.language;
  }
  greet (){
    return `${this.name} offers a greeting in ${this.language}.`
  };
}

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });
  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });
  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });
  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

// ========================================================================================================
  // Stretch task:
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
  class Villain extends Humanoid{
    constructor (villObj) {
      super(villObj);
    }
    kryptoStrike() {
      this.healthPoints = this.healthPoints - 30;
      if(this.healthPoints > 0) {
        return `You will die Superman! ---- 30 points are taken from ${this.name}'s health... ${this.healthPoints} remain`;
      } else if (this.healthPoints <= 0) {
          return `The world is mine now! MUHAHAHA  Goodbye Superman!`;
      }
    }
  }



  class Hero extends Humanoid {
    constructor (heroObj) {
      super(heroObj);
    }
    powerStrike() {
      this.healthPoints = this.healthPoints - 40;
      if(this.healthPoints > 0) {
        return `You will never rule this planet! ---- 40 points are taken from ${this.name}'s health... ${this.healthPoints} remain`;
        } else if (this.healthPoints <= 0) {
          return `I never wanted to hurt you Lex, you made me do this....`;
        }
    }
  }


  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!

  const lex = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 4,
      height: 8,
    },
    healthPoints: 100,
    name: 'Lex Luthor',
    team: 'Legion of Doom',
    weapons: [
      'Brains',
      'Karate',
      'Kryptonite',
    ],
    language: 'English',
  });

  const clark = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 4,
      height: 8,
    },
    healthPoints: 150,
    name: 'Clark Kent',
    team: 'Justice League',
    weapons: [
      'Extreme Power'
    ],
    language: 'English',
  });

  console.log(lex.kryptoStrike.call(clark)); // Lex shot krytonite at Superman
  console.log(clark.powerStrike.call(lex)); // Superman retaliated back at Lex
  console.log(lex.kryptoStrike.call(clark)); // Lex shot krytonite at Superman
  console.log(clark.powerStrike.call(lex)); // Superman retaliated back at Lex
  console.log(lex.kryptoStrike.call(clark)); // Lex shot krytonite at Superman
  console.log(clark.powerStrike.call(lex)); // Superman retaliated back at Lex
