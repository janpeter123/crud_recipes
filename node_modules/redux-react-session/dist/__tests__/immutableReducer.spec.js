'use strict';

var _immutable = require('immutable');

var _immutableReducer = require('../immutableReducer');

var _immutableReducer2 = _interopRequireDefault(_immutableReducer);

var _actionTypes = require('../actionTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Reducer', function () {
  test('set initial state by default', function () {
    var action = { type: 'unknown' };
    var expected = _immutableReducer.initialState;

    expect((0, _immutableReducer2.default)(undefined, action)).toEqual(expected);
  });

  describe('GET_SESSION_SUCCESS', function () {
    var action = { type: _actionTypes.GET_SESSION_SUCCESS };

    test('change authenticated to true value', function () {
      var authenticated = (0, _immutableReducer2.default)(_immutableReducer.initialState, action).get('authenticated');
      expect(authenticated).toEqual(true);
    });

    test('change checked to true value', function () {
      var checked = (0, _immutableReducer2.default)(_immutableReducer.initialState, action).get('checked');
      expect(checked).toEqual(true);
    });

    test('not change the user object', function () {
      var user = (0, _immutableReducer2.default)(_immutableReducer.initialState, action).get('user');
      expect(user).toEqual(_immutableReducer.initialState.get('user'));
    });
  });

  describe('GET_SESSION_ERROR', function () {
    var action = { type: _actionTypes.GET_SESSION_ERROR };

    test('change authenticated to false value', function () {
      var authenticated = (0, _immutableReducer2.default)(_immutableReducer.initialState, action).get('authenticated');
      expect(authenticated).toEqual(false);
    });

    test('change checked to true value', function () {
      var checked = (0, _immutableReducer2.default)(_immutableReducer.initialState, action).get('checked');
      expect(checked).toEqual(true);
    });

    test('not change the user object', function () {
      var user = (0, _immutableReducer2.default)(_immutableReducer.initialState, action).get('user');
      expect(user).toEqual(_immutableReducer.initialState.get('user'));
    });
  });

  describe('GET_USER_SESSION_SUCCESS', function () {
    var newUser = { email: 'test@test.com', firstName: 'test', lastName: 'test' };
    var action = { user: newUser, type: _actionTypes.GET_USER_SESSION_SUCCESS };

    test('save the new user', function () {
      var user = (0, _immutableReducer2.default)(_immutableReducer.initialState, action).get('user').toJS();
      expect(user).toEqual(newUser);
    });

    test('not change the authenticated flag', function () {
      var authenticated = (0, _immutableReducer2.default)(_immutableReducer.initialState, action).get('authenticated');
      expect(authenticated).toEqual(_immutableReducer.initialState.get('authenticated'));
    });
  });

  describe('GET_USER_SESSION_ERROR', function () {
    var user = { email: 'test@test.com', firstName: 'test', lastName: 'test' };
    var modificatedState = (0, _immutable.fromJS)({ user: user, authenticated: true });
    var action = { type: _actionTypes.GET_USER_SESSION_ERROR };

    test('remove the saved user', function () {
      var user = (0, _immutableReducer2.default)(modificatedState, action).get('user').toJS();
      expect(user).toEqual({});
    });

    test('not change the authenticated flag', function () {
      var authenticated = (0, _immutableReducer2.default)(modificatedState, action).get('authenticated');
      expect(authenticated).toEqual(modificatedState.get('authenticated'));
    });
  });

  describe('INVALID_SESSION', function () {
    var action = { type: _actionTypes.INVALID_SESSION };

    test('change authenticated to false value', function () {
      var authenticated = (0, _immutableReducer2.default)(_immutableReducer.initialState, action).get('authenticated');
      expect(authenticated).toEqual(false);
    });

    test('change checked to true value', function () {
      var checked = (0, _immutableReducer2.default)(_immutableReducer.initialState, action).get('checked');
      expect(checked).toEqual(true);
    });

    test('change invalid session to true', function () {
      var invalid = (0, _immutableReducer2.default)(_immutableReducer.initialState, action).get('invalid');
      expect(invalid).toEqual(true);
    });

    test('not change the user object', function () {
      var user = (0, _immutableReducer2.default)(_immutableReducer.initialState, action).get('user').toJS();
      expect(user).toEqual(_immutableReducer.initialState.get('user').toJS());
    });
  });
});