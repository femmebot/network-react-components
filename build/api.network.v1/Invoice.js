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
const InvoiceItem_1 = require("~shared/api.network.v1/InvoiceItem");
const PaymentMethod_1 = require("~shared/api.network.v1/PaymentMethod");
const util_1 = require("~shared/api.network.v1/util");
class Invoice extends BaseModel_1.default {
}
Invoice.type = 'invoices';
Invoice.endpoint = util_1.apiUrl('invoices');
__decorate([
    datx_1.prop.identifier,
    __metadata("design:type", Number)
], Invoice.prototype, "id", void 0);
__decorate([
    datx_1.prop,
    __metadata("design:type", String)
], Invoice.prototype, "period_start", void 0);
__decorate([
    datx_1.prop,
    __metadata("design:type", String)
], Invoice.prototype, "period_end", void 0);
__decorate([
    datx_1.prop,
    __metadata("design:type", String)
], Invoice.prototype, "status", void 0);
__decorate([
    datx_1.prop,
    __metadata("design:type", Number)
], Invoice.prototype, "amount", void 0);
__decorate([
    datx_1.prop,
    __metadata("design:type", Number)
], Invoice.prototype, "subtotal", void 0);
__decorate([
    datx_1.prop.toMany(InvoiceItem_1.InvoiceItem),
    __metadata("design:type", Array)
], Invoice.prototype, "invoice_items", void 0);
__decorate([
    datx_1.prop.toMany(PaymentMethod_1.PaymentMethod),
    __metadata("design:type", Array)
], Invoice.prototype, "payment_methods", void 0);
exports.Invoice = Invoice;
//# sourceMappingURL=Invoice.js.map