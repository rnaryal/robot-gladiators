var playerName = window.prompt("What is your player's name?");
var playerHealth = 100;
var playerAttack = 10;

// you can console the all variables in a single command
console.log(playerName, playerHealth, playerAttack);

var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;


// this creates a function named "fight"

function fight () {
  window.alert ("Welcome to Robot Gladiators");

  var promptFight = window.prompt("Would you like to FIGHT or SKIP? Enter 'FIGHT' or 'SKIP' to choose");
  if (promptFight === "fight" || promptFight === "FIGHT") {

  
  // Subtract the value of playerAttack from the enemyHealth and use that result to update the enemyHealth variable
  enemyHealth = enemyHealth - playerAttack;

  // log  resulting message in the console so we know that it worked.
  console.log(playerName + " attacked " + enemyName + "and " + enemyName + " has " + enemyHealth + " remaining");

  // Subtract the value of enemyAttack from the playerHealth and use that result to update the value in playerHealth vriable
  playerHealth = playerHealth - enemyAttack;

  // Log a resulting message to the console so we know that it worked.
console.log(
  enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
);

// check player's health
if (playerHealth <= 0) {
  window.alert(playerName + " has died");
} else {
  console.log(playerName + " still has " + playerHealth + " health left");
}
  }

  else if (promptFight === "SKIP" || promptFight === "skip") {
// confirm player wants to skip
var confirmSkip = window.confirm("Are you sure you'd like to quit?");

// if yes (true), leave fight
if (confirmSkip) {
  window.alert(playerName + " has decided to skip this fight. Goodbye!");
  // subtract money from playerMoney for skipping
  playerMoney = playerMoney - 2;
}
// if no (false), ask question again by running fight() again
else {
  fight();
}
// if player did not chose 1 or 2 in prompt
} else {
window.alert("You need to pick a valid option. Try again!");
}
}; // end of fight function

// run fight function to start game
fight();