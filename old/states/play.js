var GamepadPlugin = GamepadPlugin || {};

GamepadPlugin.Play = new Kiwi.State('Play');

/**
* The PlayState in the core state that is used in the game. 
*
* It is the state where majority of the functionality occurs 'in-game' occurs.
* 
*/


/**
* This create method is executed when a Kiwi state has finished loading any resources that were required to load.
*/
GamepadPlugin.Play.create = function () {

	/*
	* Replace with your own game creation code here...
	*/
  	this.name = new Kiwi.GameObjects.StaticImage(this, this.textures.kiwiName, 10, 10);

    this.xbox_a = new Kiwi.GameObjects.Sprite( this, this.textures.XBOX_A, 550 + 50, 200 );
    this.xbox_b = new Kiwi.GameObjects.Sprite( this, this.textures.XBOX_B, 550, 200 + 50 );
    this.xbox_x = new Kiwi.GameObjects.Sprite( this, this.textures.XBOX_X, 550, 200 - 50 );
    this.xbox_y = new Kiwi.GameObjects.Sprite( this, this.textures.XBOX_Y, 550 - 50, 200 );

    this.xbox_dpad = new Kiwi.GameObjects.Sprite( this, this.textures.XBOX_DPAD, 1500, 200 );
    this.xbox_dpad_left = new Kiwi.GameObjects.Sprite( this, this.textures.XBOX_DPAD_LEFT, 150, 200 );
    this.xbox_dpad_right = new Kiwi.GameObjects.Sprite( this, this.textures.XBOX_DPAD_RIGHT, 150, 200 );
    this.xbox_dpad_up = new Kiwi.GameObjects.Sprite( this, this.textures.XBOX_DPAD_UP, 150, 200 );
    this.xbox_dpad_down = new Kiwi.GameObjects.Sprite( this, this.textures.XBOX_DPAD_DOWN, 150, 200 );

    this.xbox_lb = new Kiwi.GameObjects.Sprite( this, this.textures.XBOX_BUMPER_LEFT, 0, 0 );
    this.xbox_rb = new Kiwi.GameObjects.Sprite( this, this.textures.XBOX_BUMPER_RIGHT, 0, 0 );
    this.xbox_lt = new Kiwi.GameObjects.Sprite( this, this.textures.XBOX_TRIGGER_LEFT, 0, 0 );
    this.xbox_rt = new Kiwi.GameObjects.Sprite( this, this.textures.XBOX_TRIGGER_RIGHT, 0, 0 );

    this.xbox_ls = new Kiwi.GameObjects.Sprite( this, this.textures.XBOX_XBOX_LEFT_STICK, 0, 0 );
    this.xbox_rs = new Kiwi.GameObjects.Sprite( this, this.textures.XBOX_XBOX_RIGHT_STICK, 0, 0 );

    this.xbox_start = new Kiwi.GameObjects.Sprite( this, this.textures.XBOX_START, 0, 0 );
    this.xbox_back = new Kiwi.GameObjects.Sprite( this, this.textures.XBOX_BACK, 0, 0 );
  		

    this.game.gamepads.gamepads[0].buttonOnDownOnce.add( this.buttonOnDownOnce, this );
    this.game.gamepads.gamepads[0].buttonIsDown.add( this.buttonIsDown, this );
    this.game.gamepads.gamepads[0].buttonOnUp.add( this.buttonOnUp, this );

    this.game.gamepads.gamepads[0].thumbstickOnDownOnce.add( this.thumbstickOnDownOnce, this );
    this.game.gamepads.gamepads[0].thumbstickIsDown.add( this.thumbstickIsDown, this );
    this.game.gamepads.gamepads[0].thumbstickOnUp.add( this.thumbstickOnUp, this );


  	//Add the GameObjects to the stage
  	this.addChild(this.xbox_a);
  	this.addChild(this.xbox_b);
  	this.addChild(this.xbox_x);
    this.addChild(this.xbox_y);

    this.addChild(this.xbox_dpad);
    this.addChild(this.xbox_dpad_down);
    this.addChild(this.xbox_dpad_up);
    this.addChild(this.xbox_dpad_left);
    this.addChild(this.xbox_dpad_right);

    // this.addChild(this.xbox_lb);
    // this.addChild(this.xbox_rb);
    // this.addChild(this.xbox_lt);
    // this.addChild(this.xbox_rt);

    // this.addChild(this.xbox_ls);
    // this.addChild(this.xbox_rs);

    // this.addChild(this.xbox_start);
    // this.addChild(this.xbox_back);
  	// this.addChild(this.);




    this.addChild(this.name);
  
}

GamepadPlugin.Play.buttonOnDownOnce = function( button ){
  console.log("DOWN:", button.name );

}

GamepadPlugin.Play.buttonIsDown = function( button ){
  // console.log("DOOOOWN", button.name );

}

GamepadPlugin.Play.buttonOnUp = function( button ){
  console.log("UP:  ", button.name);

}

GamepadPlugin.Play.thumbstickOnDownOnce = function( thumbstick ){
  // console.log( this.shorten( thumbstick.value ), thumbstick.name );

}

GamepadPlugin.Play.thumbstickIsDown = function( thumbstick ){
  console.log(this.shorten( thumbstick.value ), thumbstick.name);
}

GamepadPlugin.Play.thumbstickOnUp = function( thumbstick ){
  // console.log(this.shorten( thumbstick.value ), thumbstick.name);

}

GamepadPlugin.Play.shorten = function( num ){
  return Math.round(num * 1000) / 1000;

}

