"use strict";
exports.__esModule = true;
var react_1 = require("react");
var dva_1 = require("dva");
var About_1 = require("../About");
var Course = function () {
    var dispatch = dva_1.useDispatch();
    var addDisptch = react_1.useCallback(function () { return dispatch({
        type: 'add'
    }); }, [dispatch]);
    return (react_1["default"].createElement(react_1.Fragment, null,
        "\u8BFE\u7A0B ",
        react_1["default"].createElement("br", null),
        react_1["default"].createElement("button", { onClick: addDisptch }, "\u8BFE\u7A0B"),
        react_1["default"].createElement("h3", null, "-----------------"),
        react_1["default"].createElement(About_1["default"], null)));
};
exports["default"] = Course;
