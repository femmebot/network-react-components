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
class Subscription extends BaseModel_1.default {
}
Subscription.type = 'subscriptions';
Subscription.endpoint = util_1.apiUrl('subscriptions');
__decorate([
    datx_1.prop.identifier,
    __metadata("design:type", Number)
], Subscription.prototype, "id", void 0);
__decorate([
    datx_1.prop,
    __metadata("design:type", String)
], Subscription.prototype, "created_at", void 0);
__decorate([
    datx_1.prop,
    __metadata("design:type", Number)
], Subscription.prototype, "plan_id", void 0);
__decorate([
    datx_1.prop,
    __metadata("design:type", Number)
], Subscription.prototype, "payment_method_id", void 0);
__decorate([
    datx_1.prop,
    __metadata("design:type", Number)
], Subscription.prototype, "coupon_id", void 0);
__decorate([
    datx_1.prop,
    __metadata("design:type", Number)
], Subscription.prototype, "quantity", void 0);
__decorate([
    datx_1.prop,
    __metadata("design:type", Boolean)
], Subscription.prototype, "prorate", void 0);
__decorate([
    datx_1.prop.toOne(api_network_v1_1.PaymentMethod),
    __metadata("design:type", api_network_v1_1.PaymentMethod)
], Subscription.prototype, "payment_method", void 0);
__decorate([
    datx_1.prop.toOne(api_network_v1_1.Plan),
    __metadata("design:type", api_network_v1_1.Plan)
], Subscription.prototype, "plan", void 0);
__decorate([
    datx_1.prop.toOne(api_network_v1_1.Coupon),
    __metadata("design:type", api_network_v1_1.Coupon)
], Subscription.prototype, "coupon", void 0);
exports.Subscription = Subscription;
//# sourceMappingURL=Subscription.js.map