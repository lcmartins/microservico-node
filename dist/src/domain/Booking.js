"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Booking = /** @class */ (function () {
    function Booking(_resource, _user, _beginMiliseconds, _endMiliseconds, _id) {
        this._resource = _resource;
        this._user = _user;
        this._beginMiliseconds = _beginMiliseconds;
        this._endMiliseconds = _endMiliseconds;
        this._id = _id;
    }
    Booking.prototype.toJSON = function () {
        var thisObject = {
            resource: this._resource.toJSON(),
            user: this._user.toJSON(),
            beginMiliseconds: this._beginMiliseconds,
            endMiliseconds: this._endMiliseconds
        };
        return JSON.stringify(thisObject);
    };
    return Booking;
}());
exports.Booking = Booking;
//# sourceMappingURL=Booking.js.map