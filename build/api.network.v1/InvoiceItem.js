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
const util_1 = require("~shared/api.network.v1/util");
const PaymentMethod_1 = require("~shared/api.network.v1/PaymentMethod");
class InvoiceItem extends BaseModel_1.default {
}
InvoiceItem.type = 'invoice_items';
InvoiceItem.endpoint = util_1.apiUrl('invoice_items');
__decorate([
    datx_1.prop.identifier,
    __metadata("design:type", Number)
], InvoiceItem.prototype, "id", void 0);
__decorate([
    datx_1.prop,
    __metadata("design:type", String)
], InvoiceItem.prototype, "description", void 0);
__decorate([
    datx_1.prop,
    __metadata("design:type", Number)
], InvoiceItem.prototype, "quantity", void 0);
__decorate([
    datx_1.prop,
    __metadata("design:type", Number)
], InvoiceItem.prototype, "amount", void 0);
__decorate([
    datx_1.prop,
    __metadata("design:type", Number)
], InvoiceItem.prototype, "unit_amount", void 0);
__decorate([
    datx_1.prop,
    __metadata("design:type", String)
], InvoiceItem.prototype, "period_start", void 0);
__decorate([
    datx_1.prop,
    __metadata("design:type", String)
], InvoiceItem.prototype, "period_end", void 0);
__decorate([
    datx_1.prop,
    __metadata("design:type", Boolean)
], InvoiceItem.prototype, "prorated", void 0);
__decorate([
    datx_1.prop.toOne(PaymentMethod_1.PaymentMethod),
    __metadata("design:type", PaymentMethod_1.PaymentMethod)
], InvoiceItem.prototype, "payment_method", void 0);
exports.InvoiceItem = InvoiceItem;
//# sourceMappingURL=InvoiceItem.js.map