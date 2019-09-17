"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var bodyParser = __importStar(require("body-parser"));
var ResourceRoute_1 = require("./routes/ResourceRoute");
var Application = /** @class */ (function () {
    function Application() {
        this.express = express_1.default();
        this.configure();
        this.startRoutes();
    }
    Application.prototype.start = function () {
        var port = 3000;
        this.express.set('port', port);
        this.express.listen(port, function () {
            console.log('server up in port: ', port);
        }).on('error', function (error) {
            console.log(error.message);
        });
    };
    Application.prototype.configure = function () {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    };
    Application.prototype.startRoutes = function () {
        var router = express_1.default.Router();
        ResourceRoute_1.ResourceRoute.start(router);
        this.express.use(router);
    };
    return Application;
}());
exports.default = new Application().start();
//# sourceMappingURL=Application.js.map