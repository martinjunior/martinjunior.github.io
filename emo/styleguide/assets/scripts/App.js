define(function(require, exports, module) { // jshint ignore:line
    'use strict';
    
    var Shouter = require('components/shouter/Shouter');

    /**
     * Initial application setup. Runs once upon every page load.
     *
     * @class App
     * @constructor
     */
    var App = function() {
        this.init();
    };

    var proto = App.prototype;

    /**
     * Initializes the application and kicks off loading of prerequisites.
     *
     * @method init
     * @private
     */
    proto.init = function() {
        // Create your views here
        
        Shouter.instantiate();
    };

    return App;

});