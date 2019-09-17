"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var usecases_1 = require("../usecases");
var domain_1 = require("../domain");
var providers_1 = require("../infrastructure/providers");
var infrastructure_1 = require("../infrastructure");
var ResourceRoute = /** @class */ (function () {
    function ResourceRoute() {
    }
    ResourceRoute.start = function (router) {
        var _this = this;
        var resourceRoute = new ResourceRoute();
        router.get('/resource', function (request, response) {
            response.send({ status: 'SUCCESS' });
        });
        router.post('/resource', function (request, response) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                resourceRoute.bookResource(request, response);
                return [2 /*return*/];
            });
        }); });
    };
    ResourceRoute.prototype.bookResource = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var apiFrontier, bookingUseCase, newBooking, result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        apiFrontier = new providers_1.CreateBookingApiProvider(new infrastructure_1.AxiosHttpProxy());
                        bookingUseCase = new usecases_1.BookingUseCase(apiFrontier);
                        newBooking = this.mapResource(request);
                        return [4 /*yield*/, bookingUseCase.book(newBooking)];
                    case 1:
                        result = _a.sent();
                        response.status(200).send(result);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        response.sendStatus(500);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ResourceRoute.prototype.mapResource = function (request) {
        var requestBody = request.body;
        var newResource = new domain_1.Resource(requestBody.resource.id);
        var user = new domain_1.User(requestBody.user.id);
        var newBooking = new domain_1.Booking(newResource, user, requestBody.beginMiliseconds, requestBody.endMiliseconds);
        return newBooking;
    };
    return ResourceRoute;
}());
exports.ResourceRoute = ResourceRoute;
//# sourceMappingURL=ResourceRoute.js.map