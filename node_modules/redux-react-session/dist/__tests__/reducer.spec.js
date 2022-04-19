'use strict';

var _reducer = require('../reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _actionTypes = require('../actionTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Reducer', function () {
  test('set initial state by default', function () {
    var action = { type: 'unknown' };
    var expected = _reducer.initialState;

    expect((0, _reducer2.default)(undefined, action)).toEqual(expected);
  });

  describe('GET_SESSION_SUCCESS', function () {
    var action = { type: _actionTypes.GET_SESSION_SUCCESS };

    test('change authenticated to true value', function () {
      expect((0, _reducer2.default)(_reducer.initialState, action).authenticated).toEqual(true);
    });

    test('change checked to true value', function () {
      expect((0, _reducer2.default)(_reducer.initialState, action).checked).toEqual(true);
    });

    test('not change the user object', function () {
      expect((0, _reducer2.default)(_reducer.initialState, action).user).toEqual(_reducer.initialState.user);
    });
  });

  describe('GET_SESSION_ERROR', function () {
    var action = { type: _actionTypes.GET_SESSION_ERROR };

    test('change authenticated to false value', function () {
      expect((0, _reducer2.default)(_reducer.initialState, action).authenticated).toEqual(false);
    });

    test('change checked to true value', function () {
      expect((0, _reducer2.default)(_reducer.initialState, action).checked).toEqual(true);
    });

    test('not change the user object', function () {
      expect((0, _reducer2.default)(_reducer.initialState, action).user).toEqual(_reducer.initialState.user);
    });
  });

  describe('GET_USER_SESSION_SUCCESS', function () {
    var user = { email: 'test@test.com', firstName: 'test', lastName: 'test' };
    var action = { user: user, type: _actionTypes.GET_USER_SESSION_SUCCESS };

    test('save the new user', function () {
      expect((0, _reducer2.default)(_reducer.initialState, action).user).toEqual(user);
    });

    test('not change the authenticated flag', function () {
      expect((0, _reducer2.default)(_reducer.initialState, action).authenticated).toEqual(_reducer.initialState.authenticated);
    });
  });

  describe('GET_USER_SESSION_ERROR', function () {
    var user = { email: 'test@test.com', firstName: 'test', lastName: 'test' };
    var modificatedState = { user: user, authenticated: true };
    var action = { type: _actionTypes.GET_USER_SESSION_ERROR };

    test('remove the saved user', function () {
      expect((0, _reducer2.default)(modificatedState, action).user).toEqual({});
    });

    test('not change the authenticated flag', function () {
      expect((0, _reducer2.default)(modificatedState, action).authenticated).toEqual(modificatedState.authenticated);
    });
  });

  describe('INVALID_SESSION', function () {
    var action = { type: _actionTypes.INVALID_SESSION };

    test('change authenticated to false value', function () {
      expect((0, _reducer2.default)(_reducer.initialState, action).authenticated).toEqual(false);
    });

    test('change checked to true value', function () {
      expect((0, _reducer2.default)(_reducer.initialState, action).checked).toEqual(true);
    });

    test('change invalid session to true', function () {
      expect((0, _reducer2.default)(_reducer.initialState, action).invalid).toEqual(true);
    });

    test('not change the user object', function () {
      expect((0, _reducer2.default)(_reducer.initialState, action).user).toEqual(_reducer.initialState.user);
    });
  });
});