/*jslint vars: true */

var grandee = function () {
    "use strict";
    
    var ui = undefined;
    var transforms = {};
    var ui_available = {};

    return {
	// these need to be public so plugins can add themselves here
	transforms: transforms,
	ui_available: ui_available,

	setVisualization: function (uiname) {
          // set the visualization, by name
	  if(ui_available.hasOwnProperty(uiname)){
	      this.ui = ui_available[uiname];
	      console.log('set UI to ' + uiname);
	      return true;
	      }
	  else{
	      console.log('unable to set UI to ' + uiname);
	      return false;
	      }
	  },
	initialize: function () {
 	    console.log('initializing grandee');
	    // call this once all modules are loaded
	},
	}
}();
