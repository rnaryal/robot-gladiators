var playerName = window.prompt("What is your Robert's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerHealth, playerAttack);

var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert("Welcome to Robot Gladiators!");
    // new enemy health is subtracted after the player attacks it
    enemyHealth = enemyHealth - playerAttack;

    // store the resulting enemy health in the conosle. We can do this by
   console.log (
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
   )

   // check enemy's health
   if (enemyHealth <= 0) {
    window.alert(enemyName + " has died.");
   }
   else {
    window.alert (enemyName + " still has " + enemyHealth + " health left")
   }
   // put new code under this
console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

// check player's health
if (playerHealth <= 0) {
  window.alert(playerName + " has died!");
} 
else {
  window.alert(playerName + " still has " + playerHealth + " health left.");
}
};

fight ();
