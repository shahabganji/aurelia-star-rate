define(["require", "exports", "aurelia-framework", "./elements/StarRateClicked"], function (require, exports, aurelia_framework_1, StarRateClicked_1) {
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    function configure(config) {
        config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./elements/star-rate'));
    }
    exports.configure = configure;
    __export(StarRateClicked_1);
});

//# sourceMappingURL=aurelia-star-rate.js.map
