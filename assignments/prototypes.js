/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

function pause(numberMillis) { 
  var now = new Date(); 
  var exitTime = now.getTime() + numberMillis; 
  while (true) { 
      now = new Date(); 
      if (now.getTime() > exitTime) 
          return; 
  } 
} 


console.log(`\n\n\n\n*** Prototype *** \n\n\n\n`)

function GameObject(attributes) {                     // === GameObject ===
  this.createdAt = attributes.createdAt;              // createdAt
  this.name = attributes.name;                        // name
  this.dimensions = attributes.dimensions;            // dimensions (These represent the character's size in the video game)
} 

GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`;   // destroy() // prototype method that returns: `${this.name} was removed from the game.`
}


function CharacterStats(attributes) {                 // === CharacterStats ===
  GameObject.call(this, attributes);                  // Instances of CharacterStats should have all of the same properties as GameObject.
  this.healthPoints = attributes.healthPoints;        // healthPoints
}

CharacterStats.prototype = Object.create(GameObject.prototype);       // should inherit destroy() from GameObject's prototype

CharacterStats.prototype.takeDamage = function() { 
  return `${this.name} took damage.`;                // takeDamage() // prototype method -> returns the string '<object name> took damage.'
}


function Humanoid(attributes) {                       // === Humanoid (Having an appearance or character resembling that of a human.) ===
  CharacterStats.call(this, attributes);              // Instances of Humanoid should have all of the same properties as GameObject and CharacterStats.
  this.team = attributes.team;                        // team
  this.weapons = attributes.weapons;                  // weapons
  this.language = attributes.language;                // language
}

Humanoid.prototype = Object.create(CharacterStats.prototype);           // should inherit destroy() from GameObject through CharacterStats
                                                                        // should inherit takeDamage() from CharacterStats
Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}.`;       // greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
}

// DONE - Inheritance chain: GameObject -> CharacterStats -> Humanoid


// Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!


function Villain(attributes) {
  Humanoid.call(this, attributes);
}

Villain.prototype = Object.create(Humanoid.prototype);

Villain.prototype.cuts = function() {
  console.log(`\n`);
  if (swordsman.healthPoints < 1) {
    console.log(`The Swordsman is dead and can't fight!\nThe Swordsman lost the fight!`);
    throw new Error("Swordsman is dead");
  }
  let hit = Math.floor(Math.random() * 10);
  if (hit < 2) {
    return `The Swordsman missed everyone!`;
  } else if (hit < 6) {
    let deathPoints = Math.floor(Math.random() * 10);
    mage.healthPoints -= deathPoints;
    console.log(`The Swordsman hit the Mage and scored ${deathPoints} points of damage, the mage has ${mage.healthPoints} health points left`);
    if (mage.healthPoints < 1) {
      return `The mage is dead!`;
    }else {
      return `Now there coming after you!!!`
    };
  } else {
    let deathPoints = Math.floor(Math.random() * 10);
    archer.healthPoints -= deathPoints;
    console.log(`The Swordsman hit the Archer and scored ${deathPoints} points of damage, the archer has ${archer.healthPoints} health points left`);
    if (archer.healthPoints < 1) {
      return `The mage is dead!`;
    } else {
      return `Now there coming after you!!!`;
    };
  }
}


function Hero(attributes) {
  Humanoid.call(this, attributes);
}

Hero.prototype = Object.create(Humanoid.prototype);

Hero.prototype.stabs = function() {
  console.log(`\n`);
  if (archer.healthPoints < 1) {
    return `The Archer is dead and can't fight!`;
  }
  let hit = Math.floor(Math.random() * 10);
  if (hit < 5) {
    return `The Archor missed the Swordsman!`;
  } else {
    let deathPoints = Math.floor(Math.random() * 10);
    swordsman.healthPoints -= deathPoints;
    console.log(`The Archor hit the Swordsman and scored ${deathPoints} points of damage, the Swordsman has ${swordsman.healthPoints} health points left`);
    if (swordsman.healthPoints < 1) {
      return `The Swordsman is dead!`;
    }else {
      return `You didn't get him yet!!!`
    };
  } 
}

Hero.prototype.slashes = function() {
  console.log(`\n`);
  if (mage.healthPoints < 1) {
    return `The Mage is dead and can't fight!`;
  }
  let hit = Math.floor(Math.random() * 10);
  if (hit < 5) {
    return `The Mage missed the Swordsman!`;
  } else {
    let deathPoints = Math.floor(Math.random() * 10);
    swordsman.healthPoints -= deathPoints;
    console.log(`The Mage hit the Swordsman and scored ${deathPoints} points of damage, the Swordsman has ${swordsman.healthPoints} health points left`);
    if (swordsman.healthPoints < 1) {
      return `The Swordsman is dead!`;
    }else {
      return `You didn't get him yet!!!`
    };
  } 
}


// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 70,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Villain({
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

  const archer = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 70,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });
  
// console.log(mage.createdAt); // Today's date
// console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
// console.log(swordsman.healthPoints); // 15
// console.log(mage.name); // Bruce
// console.log(swordsman.team); // The Round Table
// console.log(mage.weapons); // Staff of Shamalama
// console.log(archer.language); // Elvish
// console.log(archer.greet()); // Lilith offers a greeting in Elvish.
// console.log(mage.takeDamage()); // Bruce took damage.
// console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
console.log(swordsman.cuts());
pause(4000);
console.log(archer.stabs());
pause(4000);
console.log(mage.slashes());
console.log(swordsman.cuts());
pause(4000);
console.log(archer.stabs());
pause(4000);
console.log(mage.slashes());
console.log(swordsman.cuts());
pause(4000);
console.log(archer.stabs());
pause(4000);
console.log(mage.slashes());
console.log(swordsman.cuts());
pause(4000);
console.log(archer.stabs());
pause(4000);
console.log(mage.slashes());
console.log(swordsman.cuts());
pause(4000);
console.log(archer.stabs());
pause(4000);
console.log(mage.slashes());
console.log(swordsman.cuts());
pause(4000);
console.log(archer.stabs());
pause(4000);
console.log(mage.slashes());
console.log(swordsman.cuts());
pause(4000);
console.log(archer.stabs());
pause(4000);
console.log(mage.slashes());
console.log(swordsman.cuts());
pause(4000);
console.log(archer.stabs());
pause(4000);
console.log(mage.slashes());

