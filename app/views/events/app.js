/* globals define */
define(function(require, exports, module) {
    var Engine        = require('famous/core/Engine');
    var Surface       = require('famous/core/Surface');
    var DeviceView    = require('deviceView/js/DeviceView');
    var StateModifier = require('famous/modifiers/StateModifier');
    var EventHandler = require('famous/core/EventHandler');

    var mainContext = Engine.createContext();
    var device;

    createDevice();
//    setEngineEvents();
//    createSurface();
//    createSurface2();
    createSurfaces();

    function createDevice() {
        var deviceOptions = {
            type: 'iphone',
            height: window.innerHeight - 100
        };
        device = new DeviceView(deviceOptions);
        var deviceModifier = new StateModifier({
            size: device.getSize(),
            origin: [0.5, 0.5]
        });
        mainContext.add(deviceModifier).add(device);
    }

    function createSurface() {
        var surface = new Surface({
            size: [undefined, 100],
            content: 'Click Me',
            properties: {
                color: 'white',
                textAlign: 'center',
                backgroundColor: '#FA563F'
            }
        });

        surface.on('click', function() {
            surface.setProperties({
                backgroundColor: '#878785'
            })
        });

        device.add(surface);
    }

    function createSurface2() {
        var eventHandler = new EventHandler();
        var surface = new Surface({
            size: [100, 100],
            content: 'A<br>click me to emit "hello"',
            properties: {
                color: 'white',
                textAlign: 'center',
                backgroundColor: '#FA5C4F'
            }
        });

        surface.on('click', function() {
            eventHandler.emit('hello');
        });

        eventHandler.on('hello', function() {
            surface.setContent('heard hello');
        });

        device.add(surface);
    }

    function setEngineEvents() {
        Engine.on('keydown', function(e) {
            surface.setContent(e.which);
        });

        //Can be used to make you app responsive
        Engine.on('resize', function() {
            surface.setContent('resized');
        });
    }

    function createSurfaces() {
        var eventHandlerA = new EventHandler();
        var eventHandlerB = new EventHandler();

        var surfaceA = new Surface({
            size: [100, 100],
            content: 'A<br>click me to say hello',
            properties: {
                color: 'white',
                textAlign: 'center',
                backgroundColor: '#FA5C4F'
            }
        });

        var surfaceB = new Surface({
            size: [100, 100],
            content: 'B',
            properties: {
                color: 'white',
                textAlign: 'center',
                backgroundColor: '#FA5C4F'
            }
        });

        var modifierB = new StateModifier({
            origin: [1, 1]
        });

        surfaceA.on('click', function() {
            eventHandlerA.emit('hello');
            surfaceA.setContent('said hello');
        });

        eventHandlerB.subscribe(eventHandlerA);

        eventHandlerB.on('hello', function() {
            surfaceB.setContent('heard hello');
        });

        device.add(surfaceA);
        device.add(modifierB).add(surfaceB);
    }
});