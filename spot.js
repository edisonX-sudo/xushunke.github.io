(function() {
    'use strict';

    var canvas = document.getElementById('canvas');

    var engine = new Shape.Engine(canvas);
    var promise = new Promise((resolve) => { resolve(); });

    start();
//    document.getElementById('go').addEventListener('click', start);
    
    function start() {
//        document.getElementById('go').removeEventListener('click', start);
        promise.then(() => engine.toText('Oops'))
        .then(() => engine.shake())
        .then(() => engine.toText('dot'))
        .then(() => engine.shake())
        .then(() => engine.toText('around'))
        .then(() => engine.shake())
        .then(() => engine.toText('here'))
        .then(() => engine.shake())
        .then(() => engine.clear())
        .then(() => {}
            // document.getElementById('go').addEventListener('click', start)
        );
    }
})();
