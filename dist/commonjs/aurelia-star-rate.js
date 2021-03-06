function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var aurelia_framework_1 = require("aurelia-framework");
function configure(config) {
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./elements/star-rate'));
}
exports.configure = configure;
__export(require("./elements/star-rate"));
__export(require("./elements/StarRateClicked"));

//# sourceMappingURL=aurelia-star-rate.js.map
