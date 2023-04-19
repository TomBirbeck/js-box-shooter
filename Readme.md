# Box Shooter
A Browser game created using JavaScript, HTML and CSS.\
The game involves a player moving around to shoot down enemies that are moving around the game zone within a time limit.\
Each time a player clears a set of enemies extra time will be added on to their remaining time.
## How the code works
\
The game has custom classes for the player, enemies, the bullets and a bullet controller to manage a group of bullets.

### Player class
\
The player class constructor takes in the 'x' and 'y' co-ordinates of the player element, the damage for each bullet (set to a default of 1, but built to allow future development for potential power-ups), and a bullet controller.\
It has methods for when a user is pressing the movement keys, when they stop pressing to move and when they press the space bar to shoot, and to draw the player element on the canvas.

### Enemy class
\
The enemy class constructor takes in the 'x' and  'y' co-ordinates of the enemy element, the enemy color, enemy health, and the directionX and directionY that the enemy will move in.\
It has methods for moving the enemy on the 'x' and 'y' axis depending on what is supplied in directionX and directionY, taking damage when struck by a bullet, for checking when the element hits one of the zone sides, and to draw the enemt element on the canvas.

### Bullet class
\
The bullet class constructor takes in the 'x' and 'y' co-ordinates of a bullet element as well as the speed, damage, and direction.\
It has methods to detect for the bullets colliding with an enemy element and for drawing the bullets on the canvas.

### Bullet Controller class
\
The bullet controller class constructor takes in the canvas element.
It has methods to shoot a bullet, check if a bullet has left the screen, check through an array that containers each bullet and use the bullet class collision detecion method, and to draw the array of bullets onto the screen.

## Helper functions

### Enemy color
The randomEnemyColor function has a preset array of color options, it randomises a whole number between 0 and the length of the colors array -1 (this is to prevent any out of bounds issues when use the number generated as an index for the colors array) and returns the color at the index of the number from the colors array.

### Random Int
The getRandomInt function takes in a minimum value and a maximum and returns a random number from that range, inclusive of the min and max. It is used in the game to randomly generate the health of each enemy.

### Random X direction
The randomXDirection function randomly generates a 0 or 1 and then returns the dirction at that index from the directions array. This is used to set the initial vertical direction the enemy moves in when created.

### Random Y direction
The randomYDirection function randomly generates a 0 or 1 and then returns the dirction at that index from the directions array. This is used to set the initial horizontal direction the enemy moves in when created.
