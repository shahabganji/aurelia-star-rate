System.register(["./elements/StarRateClicked"], function (exports_1, context_1) {
    var __moduleName = context_1 && context_1.id;
    function configure(config) {
        config.globalResources('./elements/star-rate');
    }
    exports_1("configure", configure);
    var exportedNames_1 = {
        "configure": true
    };
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default" && !exportedNames_1.hasOwnProperty(n)) exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (StarRateClicked_1_1) {
                exportStar_1(StarRateClicked_1_1);
            }
        ],
        execute: function () {
        }
    };
});

//# sourceMappingURL=aurelia-star-rate.js.map
