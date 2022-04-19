'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.invalidSession = exports.getUserSessionError = exports.getUserSessionSuccess = exports.getSessionError = exports.getSessionSuccess = undefined;

var _actionTypes = require('./actionTypes');

var getSessionSuccess = exports.getSessionSuccess = function getSessionSuccess() {
  return { type: _actionTypes.GET_SESSION_SUCCESS };
};

var getSessionError = exports.getSessionError = function getSessionError() {
  return { type: _actionTypes.GET_SESSION_ERROR };
};

var getUserSessionSuccess = exports.getUserSessionSuccess = function getUserSessionSuccess(user) {
  return {
    user: user,
    type: _actionTypes.GET_USER_SESSION_SUCCESS
  };
};

var getUserSessionError = exports.getUserSessionError = function getUserSessionError() {
  return { type: _actionTypes.GET_USER_SESSION_ERROR };
};

var invalidSession = exports.invalidSession = function invalidSession() {
  return { type: _actionTypes.INVALID_SESSION };
};