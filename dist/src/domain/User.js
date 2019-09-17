"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(_id, _name) {
        this._id = _id;
        this._name = _name;
    }
    User.prototype.toJSON = function () {
        var thisObject = {
            id: this._id,
            name: this._name
        };
        return thisObject;
    };
    Object.defineProperty(User.prototype, "userId", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map