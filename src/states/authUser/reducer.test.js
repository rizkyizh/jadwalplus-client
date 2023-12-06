import { describe, it, expect } from 'vitest';
import authUserReducer from './reducer';

describe('authUserReducer', () => {
  it('should return initial state when action UNKNOWN', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'UNKNOWN',
    };

    // action
    const nextState = authUserReducer(initialState, action);

    // expect
    expect(nextState).toEqual(initialState);
  });

  it('should return authUser when action SET_AUTH_USER', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'SET_AUTH_USER',
      payload: {
        authUser: {
          username: 'John Doe',
          email: 'john@example.com',
        },
      },
    };

    // action
    const nextState = authUserReducer(initialState, action);

    // expect
    expect(nextState).toEqual(action.payload.authUser);
  });

  it('should return null when action UNSET_AUTH_USER', () => {
    // arrange
    const initialState = {
      username: 'John Doe',
      email: 'john@example.com',
    };

    const action = {
      type: 'UNSET_AUTH_USER',
    };

    // action
    const nextState = authUserReducer(initialState, action);

    // expect
    expect(nextState).toEqual(null);
  });
});
