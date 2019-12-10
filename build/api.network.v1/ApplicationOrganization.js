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
class ApplicationOrganization extends BaseModel_1.default {
}
ApplicationOrganization.type = 'application_organizations';
ApplicationOrganization.endpoint = util_1.apiUrl('application_organizations');
__decorate([
    datx_1.prop.identifier,
    __metadata("design:type", Number)
], ApplicationOrganization.prototype, "id", void 0);
__decorate([
    datx_1.prop,
    __metadata("design:type", String)
], ApplicationOrganization.prototype, "organization_id", void 0);
__decorate([
    datx_1.prop,
    __metadata("design:type", String)
], ApplicationOrganization.prototype, "external_id", void 0);
exports.ApplicationOrganization = ApplicationOrganization;
//# sourceMappingURL=ApplicationOrganization.js.map