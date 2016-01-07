define(function(require, exports, module) { // jshint ignore:line
    'use strict';

    /*
        {% Name: Shouter %}

        {% Category: components %}
        
        {% Description: shouter_docs.md %}
     */

    var $ = require('jquery');

    /**
     * When clicked, this thing
     * will shout something
     *
     * @class Shouter
     * @constructor
     */
    var Shouter = function($element) {
        this.$element = $element;

        this.message = this.$element.data('shout');

        this._onClick = this._onClick.bind(this);

        this.init();
    };

    Shouter.shout = function(message) {
        alert(message);
    };

    Shouter.instantiate = function() {
        var $shouters = $('[data-component="Shouter"]');
        var length = $shouters.length;
        var i = 0;

        for (; i < length; i++) {
            new Shouter($shouters.eq(i));
        }
    };

    var proto = Shouter.prototype;

    proto.init = function() {
        this.enable();
    };

    proto.enable = function() {
        this.$element.on('click', this._onClick);
    };

    proto._onClick = function(event) {
        Shouter.shout(this.message);
    };

    return Shouter;

});