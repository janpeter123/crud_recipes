'use strict';

var _index = require('../index');

var _reducer = require('../reducer');

var _redux = require('redux');

// import { __setError, __setSession, __setUser } from 'localforage';
// import * as Cookies from "js-cookie";

jest.mock('localforage');

describe('API functions', function () {
  var store = void 0;
  var user = void 0;

  describe('server', function () {
    describe('with session and user in the request', function () {
      beforeEach(function () {
        store = (0, _redux.createStore)(_index.sessionReducer, _reducer.initialState);
        user = { email: 'test@test.com', firstName: 'test', lastName: 'test' };
        var cookies = 'USER-SESSION={%22token%22:%2212345%22}; USER_DATA={%22email%22:%22test@test.com%22%2C%22firstName%22:%22test%22%2C%22lastName%22:%22test%22}';
        var req = { get: jest.fn(function () {
            return cookies;
          }) };
        _index.sessionService.initServerSession(store, req, { redirectPath: 'redirectionPath' });
      });

      describe('saveFromClient', function () {
        test('change authenticated flag to true', function (done) {
          // wait for change the redux store
          var unsubscribe = store.subscribe(function () {
            var state = store.getState();
            expect(state.authenticated).toEqual(true);
            unsubscribe();
            done();
          });
        });

        test('save the user', function (done) {
          // wait for change the redux store
          var unsubscribe = store.subscribe(function () {
            var state = store.getState();
            // wait to change the user
            if (!(Object.keys(state.user).length === 0 && state.user.constructor === Object)) {
              expect(state.user).toMatchObject(user);
              unsubscribe();
              done();
            }
          });
        });
      });

      describe('checkAuth', function () {
        var nextState = void 0;
        var replace = void 0;
        beforeEach(function () {
          nextState = { location: { pathname: 'test' } };
          replace = jest.fn();
        });

        test('does call next function', function (done) {
          var next = jest.fn(function () {
            expect(next).toHaveBeenCalled();
            done();
          });
          _index.sessionService.checkAuth(nextState, replace, next);
        });
      });
    });

    describe('without any item in the request', function () {
      beforeEach(function () {
        store = (0, _redux.createStore)(_index.sessionReducer, _reducer.initialState);
        var cookies = undefined;
        var req = { get: jest.fn(function () {
            return cookies;
          }) };
        _index.sessionService.initServerSession(store, req, { redirectPath: 'redirectionPath' });
      });

      describe('checkAuth', function () {
        var nextState = void 0;
        var next = void 0;
        beforeEach(function () {
          nextState = { location: { pathname: 'test' } };
          next = jest.fn();
        });

        test('does call replace function', function (done) {
          var replace = jest.fn(function () {
            expect(replace).toHaveBeenCalled();
            done();
          });
          _index.sessionService.checkAuth(nextState, replace, next);
        });

        test('does redirect to the redirectPath', function (done) {
          var expectedArg = {
            pathname: 'redirectionPath',
            state: { nextPathname: nextState.location.pathname }
          };
          var replace = jest.fn(function () {
            expect(replace).toHaveBeenCalledWith(expectedArg);
            done();
          });
          _index.sessionService.checkAuth(nextState, replace, next);
        });
      });
    });
  });
});