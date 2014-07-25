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
            type: 'ipad',
            height: window.innerHeight - 100
        };

        device = new DeviceView(deviceOptions);

        var deviceModifier = new StateModifier({
            size: device.getSize(),
            origin: [0.5, 0.5]
        });

        mainContext.add(deviceModifier).add(device);
    }
});