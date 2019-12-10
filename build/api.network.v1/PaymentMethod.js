"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseModel_1 = require("~shared/api.network.v1/BaseModel");
const datx_1 = require("datx");
const api_network_v1_1 = require("~shared/api.network.v1");
const util_1 = require("~shared/api.network.v1/util");
class PaymentMethod extends BaseModel_1.default {
}
PaymentMethod.type = 'payment_methods';
PaymentMethod.endpoint = util_1.apiUrl('payment_methods');
__decorate([
    datx_1.prop.identifier,
    __metadata("design:type", Number)
], PaymentMethod.prototype, "id", void 0);
__decorate([
    datx_1.prop,
    __metadata("design:type", Object)
], PaymentMethod.prototype, "brand", void 0);
__decorate([
    datx_1.prop,
    __metadata("design:type", String)
], PaymentMethod.prototype, "created_at", void 0);
__decorate([
    datx_1.prop,
    __metadata("design:type", Number)
], PaymentMethod.prototype, "exp_month", void 0);
__decorate([
    datx_1.prop,
    __metadata("design:type", Number)
], PaymentMethod.prototype, "exp_year", void 0);
__decorate([
    datx_1.prop,
    __metadata("design:type", String)
], PaymentMethod.prototype, "last4", void 0);
__decorate([
    datx_1.prop,
    __metadata("design:type", Boolean)
], PaymentMethod.prototype, "default", void 0);
__decorate([
    datx_1.prop,
    __metadata("design:type", Boolean)
], PaymentMethod.prototype, "expired", void 0);
__decorate([
    datx_1.prop,
    __metadata("design:type", String)
], PaymentMethod.prototype, "address_city", void 0);
__decorate([
    datx_1.prop,
    __metadata("design:type", String)
], PaymentMethod.prototype, "address_country", void 0);
__decorate([
    datx_1.prop,
    __metadata("design:type", String)
], PaymentMethod.prototype, "address_line1", void 0);
__decorate([
    datx_1.prop,
    __metadata("design:type", String)
], PaymentMethod.prototype, "address_line2", void 0);
__decorate([
    datx_1.prop,
    __metadata("design:type", String)
], PaymentMethod.prototype, "address_state", void 0);
__decorate([
    datx_1.prop,
    __metadata("design:type", String)
], PaymentMethod.prototype, "address_zip", void 0);
__decorate([
    datx_1.prop,
    __metadata("design:type", String)
], PaymentMethod.prototype, "payment_type", void 0);
exports.PaymentMethod = PaymentMethod;
//# sourceMappingURL=PaymentMethod.js.map