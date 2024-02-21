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
    window.alert(playerName + " has choosen to skip.")
  } else {
    window.alert("Enter a valid option. Try Again!")
  }


}
fight ();
