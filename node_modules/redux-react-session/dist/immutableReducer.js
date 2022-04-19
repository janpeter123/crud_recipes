'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialState = undefined;

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _actionTypes = require('./actionTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = exports.initialState = _immutable2.default.fromJS({
  authenticated: false,
  checked: false,
  invalid: false,
  user: {}
});

var immutableReducer = function immutableReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.GET_SESSION_SUCCESS:
      {
        var newState = state.set('authenticated', true);
        newState = newState.set('invalid', false);
        return newState.set('checked', true);
      }
    case _actionTypes.GET_SESSION_ERROR:
      {
        var _newState = state.set('authenticated', false);
        return _newState.set('checked', true);
      }
    case _actionTypes.GET_USER_SESSION_SUCCESS:
      {
        return state.set('user', _immutable2.default.fromJS(action.user));
      }
    case _actionTypes.GET_USER_SESSION_ERROR:
      {
        return state.set('user', _immutable2.default.Map());
      }
    case _actionTypes.INVALID_SESSION:
      {
        var _newState2 = state.set('authenticated', false);
        _newState2 = _newState2.set('checked', true);
        _newState2 = _newState2.set('invalid', true);
        _newState2 = _newState2.set('user', _immutable2.default.Map());
        return _newState2;
      }
    default:
      {
        return state;
      }
  }
};

exports.default = immutableReducer;