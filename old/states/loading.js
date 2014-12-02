/**
* The Loading State is going to be used to load in all of the in-game assets that we need in game.
*
* Because in this blueprint there is only a single "hidden object" section we are going to load in all of 
* the asset's at this point.
*
* If you have multiple states however, I would recommend have loading the other graphics as they are required by their states, 
* Otherwise the loading times maybe a bit long and it is not the most optimal solution.
*
*/

/**
* Since we want to use the custom Kiwi.JS loader with the bobing kiwi/html5 logo and everything. We need to extend the KiwiLoadingScreen State.  
* The KiwiLoadingScreen State is an extentsion of a normal State but it has some custom code to handle the loading/bobbing/fading of all the items, so if you override a method (like the preload) for example just make sure you call the super method.
* 
* The parameters we are passing into this method are as ordered.
* 1 - name {String} Name of this state.
* 2 - stateToSwitch {String} Name of the state to switch to AFTER all the assets have loaded. Note: The state you want to switch to should already have been added to the game.
* 3 - dimensions {Object} A Object containing the width/height that the game is to be. For example {width: 1024, height: 768}
* 4 - subfolder {String} The folder that the loading graphics are located at. 
*/

var GamepadPlugin = GamepadPlugin || {};

GamepadPlugin.Loading = new KiwiLoadingScreen('Loading', 'Intro', 'assets/img/loading/');

GamepadPlugin.Loading.preload = function () {
	
	//Make sure to call the super at the top.
	//Otherwise the loading graphics will load last, and that defies the whole point in loading them. 
	KiwiLoadingScreen.prototype.preload.call(this);

	/**
	* Replace with your own in-assets to load.
	**/
	this.addImage('kiwiName', 'assets/img/Xbox360/kiwijs-name.png');

	this.addImage('XBOX_A', 'assets/img/Xbox360/faceButton0.png');
	this.addImage('XBOX_B', 'assets/img/Xbox360/faceButton1.png');
	this.addImage('XBOX_X', 'assets/img/Xbox360/faceButton2.png');
	this.addImage('XBOX_Y', 'assets/img/Xbox360/faceButton3.png');

	this.addImage('XBOX_DPAD', 'assets/img/Xbox360/dpad.png');
	this.addImage('XBOX_DPAD_DOWN', 'assets/img/Xbox360/dpadDown.png');
	this.addImage('XBOX_DPAD_LEFT', 'assets/img/Xbox360/dpadLeft.png');
	this.addImage('XBOX_DPAD_RIGHT', 'assets/img/Xbox360/dpadRight.png');
	this.addImage('XBOX_DPAD_UP', 'assets/img/Xbox360/dpadUp.png');

	this.addImage('XBOX_BUMPER_LEFT', 'assets/img/Xbox360/leftShoulder0.png');
	this.addImage('XBOX_BUMMPER_RIGHT', 'assets/img/Xbox360/rightShoulder0.png');
	this.addImage('XBOX_TRIGGER_LEFT', 'assets/img/Xbox360/leftShoulder1.png');
	this.addImage('XBOX_TRIGGER_RIGHT', 'assets/img/Xbox360/rightShoulder1.png');

	this.addImage('XBOX_LEFT_STICK', 'assets/img/Xbox360/leftStickButton.png');
	this.addImage('XBOX_RIGHT_STICK', 'assets/img/Xbox360/rightStickButton.png');

	this.addImage('XBOX_BACK', 'assets/img/Xbox360/select.png');
	this.addImage('XBOX_START', 'assets/img/Xbox360/start.png');





	this.addSpriteSheet('icons', 'assets/img/kiwijs-icons.png', 100, 90);

};
