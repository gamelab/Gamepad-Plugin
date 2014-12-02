Gamepad Plugin - 1.0.0
=======================================

##Todo:
* Write 'How to use' documentation
* onGamepadConnect and onGamepadDisconnect events
* Add duration of button presses
* Add debug feature
* explain gamepad interface / button layout: 

##Description:

This plugin brings the features of Gamepad.js to Kiwi.js

Currently for more information and features look at the Gamepad.js documentation here: https://dvcs.w3.org/hg/gamepad/raw-file/default/gamepad.html

This documentation also includes controller map / layout.


 

##Files / Folders
* assets/ - Assets used by the examples. 
* plugins/ - Final built version of the plugins.
* examples/ - Examples of using Chipmunk physics. 
* lib/ - External libraries that this plugin requires. 
* src/ - Source files for the plugin. 

##How to Include:  

Copy the  `plugins/gamepad-plugin-x.x.x.js` file (or the minified version) into your project directory. We recommend that you place plugin scripts inside a `plugins/` folder to easily manage all plugins used, although this is not required.

Then link in both of the javascript files that we copied above into your HTML file. Make sure to place the link to the plugin itself **underneath** the link to the `kiwi.js` file.

Now we need to tell the game to use the plugin. To do so you need to add the name of the plugin ("Gamepad") to the plugins section of the game options.

```javascript
var game = new Kiwi.Game("domElementId", "GameName", null, { plugins: ["Gamepad"]});
```

Make sure that you also pass the names of other plugins that you want to use.

Your game should now have access to the plugin. 

##How to use:
TODO

###TODO: How to use plugin

**Currently not written**
 
Documentation will come soon. Look at examples folder for how to use.


##More Documentation
Further examples can be found in the `examples` folder of this repo.

##Thanks
If you have further questions, suggestions, or find any issues with the plugin, don't hesitate to contact us at [KiwiJS.](http:www.kiwijs.org)
