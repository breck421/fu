/* globals define */
define(function(require, exports, module) {
    var Engine        = require('famous/core/Engine');
    var Surface       = require('famous/core/Surface');
    var DeviceView    = require('deviceView/js/DeviceView');
    var StateModifier = require('famous/modifiers/StateModifier');
    var View          = require('famous/core/View');

    var mainContext = Engine.createContext();
    var device;

    createDevice();
    var myView = new View();

    device.add(myView);
    mainContext.add(device);


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

    var surface = new Surface({
        size: [100, 100],
        content: 'click me',
        properties: {
            color: 'white',
            textAlign: 'center',
            backgroundColor: '#FA5C4F'
        }
    });

    myView.add(surface);

    surface.pipe(myView);
// alternatively, myView.subscribe(surface);

// normally inside view module's code
    myView._eventInput.on('click', function() {
        surface.setContent('hello');
    });
});