
/**
* The core GamepadPlugin game file.
* 
* This file is only used to initalise (start-up) the main Kiwi Game 
* and add all of the relevant states to that Game.
*
*/

//Initialise the Kiwi Game. 

var gameOptions = {
	renderer: Kiwi.RENDERER_WEBGL, 
	width: 800,
	height: 600,
	plugins: ['Gamepad']
}
var game = new Kiwi.Game('content', 'GamepadPlugin', null, gameOptions);
this.game.stage.color = '061029';

//Add all the States we are going to use.
game.states.addState(GamepadPlugin.Loading);
game.states.addState(GamepadPlugin.Intro);
game.states.addState(GamepadPlugin.Play);

game.states.switchState("Loading");