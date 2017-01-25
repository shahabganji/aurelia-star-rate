var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var aurelia_framework_1 = require("aurelia-framework");
var StarRateClicked_1 = require("./StarRateClicked");
var StarRate = (function () {
    function StarRate(ea) {
        this.ea = ea;
        this.readOnly = true;
        this.color = 'Black';
        this.mouseRate = -1;
    }
    StarRate.prototype.mouseEnter = function (value) {
        if (this.readOnly) {
            return;
        }
        if (value > this.maxRate) {
            this.mouseRate = this.maxRate;
        }
        else {
            this.mouseRate = value + 1;
        }
    };
    StarRate.prototype.setRate = function (value) {
        if (this.readOnly) {
            return;
        }
        this.rate = value + 1;
        this.ea.publish(new StarRateClicked_1.StarRateClicked(this.rate, value));
    };
    StarRate.prototype.mouseLeft = function () {
        if (this.readOnly) {
            return;
        }
        this.mouseRate = -1;
    };
    return StarRate;
}());
__decorate([
    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
    __metadata("design:type", Number)
], StarRate.prototype, "rate", void 0);
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", Number)
], StarRate.prototype, "maxRate", void 0);
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", Boolean)
], StarRate.prototype, "readOnly", void 0);
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", String)
], StarRate.prototype, "color", void 0);
exports.StarRate = StarRate;

//# sourceMappingURL=star-rate.js.map
