(function() {
    'use strict';

    var canvas = document.getElementById('canvas');

    var engine = new Shape.Engine(canvas);
    var promise = new Promise((resolve) => { resolve(); });

    start();
//    document.getElementById('go').addEventListener('click', start);



    function start() {
//        document.getElementById('go').removeEventListener('click', start);

        var txtQuery = getQueryVariable("text");
        if(!txtQuery){
            txtQuery = "Oops,Xsk,Love,Yt"
        }
        var txtArr = txtQuery.split(',');
        for(var i in txtArr){
            let txtArrElement = txtArr[i];
            promise = promise
                .then(() => engine.toText(txtArrElement))
                .then(() => engine.shake());
        }
        promise
            .then(() => engine.clear())
    }

    function getQueryVariable(variable)
    {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            if(pair[0] == variable){return pair[1];}
        }
        return(false);
    }
})();
