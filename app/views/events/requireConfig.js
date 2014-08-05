/*globals require*/
require.config({
    shim: {

    },
    paths: {
        famous: '../../lib/famous',
        requirejs: '../../lib/requirejs/require',
        almond: '../../lib/almond/almond',
        deviceView: '../../lib/deviceView'
    }
});
require(['views']);