"use strict";
exports.__esModule = true;
exports.TaskSchema = void 0;
var joi_1 = require("joi");
exports.TaskSchema = joi_1["default"].object({
    name: joi_1["default"].string().min(6)
        .max(100)
        .required(),
    status: joi_1["default"].string().min(6)
        .max(100)
        .required()
});
function joiValidatorMiddleware(schema) {
    return function (req, res, next) {
        try {
            var result = schema.validate(req.body, {
                stripUnknown: true
            });
            if (result.error) {
                next("Validation error: " + result.error.details.map(function (x) { return x.message; }).join(', '));
            }
            else {
                req.body = result.value;
                next();
            }
        }
        catch (e) {
            res.json({ status: "Failed" });
        }
    };
}
exports["default"] = joiValidatorMiddleware;
