define(function(require, exports, module) {
    var Engine = require('famous/core/Engine');
    var Surface       = require('famous/core/Surface');
    var DeviceView    = require('deviceView/js/DeviceView');
    var StateModifier = require('famous/modifiers/StateModifier');


    var mainContext = Engine.createContext();


    var device;

    createDevice();

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
    };

    var firstSurface = new Surface({
        size: [200, 400],
        content: 'Hello Do you like my hat',
        properties: {
            color: 'white',
            textAlign: 'center',
            backgroundColor: '#FA5C4F',
            fontSize: '40px',
            borderRadius: '4px'
        }
    });

    firstSurface.setContent('<h1>No I do not, goodbye</h1>');

    device.add(firstSurface);
});