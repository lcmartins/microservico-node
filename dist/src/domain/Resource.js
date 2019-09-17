"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Resource = /** @class */ (function () {
    function Resource(_id, _name) {
        this._id = _id;
        this._name = _name;
    }
    Resource.prototype.toJSON = function () {
        var thisObject = {
            id: this._id,
            name: this._name
        };
        return thisObject;
    };
    Object.defineProperty(Resource.prototype, "resourceId", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    return Resource;
}());
exports.Resource = Resource;
//# sourceMappingURL=Resource.js.map