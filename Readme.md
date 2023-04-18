# Box Shooter
A Browser game created using JavaScript, HTML and CSS.\
The game involves a player moving around to shoot down enemies that are moving around the game zone within a time limit.\
Each time a player clears a set of enemies extra time will be added on to their remaining time.
## How the code works
\
The game has custom classes for the player, enemies, the bullets and a bullet controller to manage a group of bullets.

### Player class
\
The player class takes in the 'x' and 'y' co-ordinates of the player element, the damage for each bullet (set to a default of 1, but built to allow future development for potential power-ups), and a bullet controller.\
It has methods for when a user is pressing the movement keys, when they stop pressing to move and when they press te space bar to shoot.

### Enemy class
\
The enemy class takes in the 'x' and  'y' co-ordinates of the enemy element, the enemy color, enemy health, and the directionX and directionY that the enemy will move in.\
It has methods for moving the enemy on the 'x' and 'y' axis depending on what is supplied in directionX and directionY, taking damage when struck by a bullet, and for checking when the element hits one of the zone sides.
