'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialState = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actionTypes = require('./actionTypes');

var initialState = exports.initialState = {
  authenticated: false,
  checked: false,
  invalid: false,
  user: {}
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.GET_SESSION_SUCCESS:
      {
        return {
          user: _extends({}, state.user),
          authenticated: true,
          checked: true,
          invalid: false
        };
      }
    case _actionTypes.GET_SESSION_ERROR:
      {
        return _extends({}, state, {
          user: _extends({}, state.user),
          authenticated: false,
          checked: true
        });
      }
    case _actionTypes.GET_USER_SESSION_SUCCESS:
      {
        return _extends({}, state, { user: action.user });
      }
    case _actionTypes.GET_USER_SESSION_ERROR:
      {
        return _extends({}, state, { user: {} });
      }
    case _actionTypes.INVALID_SESSION:
      {
        return {
          user: {},
          checked: true,
          authenticated: false,
          invalid: true
        };
      }
    default:
      {
        return state;
      }
  }
};

exports.default = reducer;