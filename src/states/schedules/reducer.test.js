import { describe, it, expect } from 'vitest';
import schedulesReducer from './reducer';

describe('schedulesReducer function', () => {
  it('should return initial state when action UNKNOWN', () => {
    // Arrange
    const initialState = [];
    const action = {
      type: 'UNKNOWN',
    };

    // Action
    const nextState = schedulesReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(initialState);
  });

  it('should return schedules when action SCHEDULES_RECEIVE', () => {
    // Arrange
    const initialState = [];
    const action = {
      type: 'SCHEDULES_RECEIVE',
      payload: {
        schedules: [
          {
            id: '47t42784',
            schedule: 'memancing',
            dateTime: '2023-11-14T14:00:10.690Z',
            finished: false,
            createdAt: '2023-11-14T14:00:10.690Z',
          },
          {
            id: '47t427bvfbf',
            schedule: 'main bola',
            dateTime: '2023-11-14T14:00:10.690Z',
            finished: false,
            createdAt: '2023-11-14T14:00:10.690Z',
          },
        ],
      },
    };

    // Action
    const nextState = schedulesReducer(initialState, action);

    // Assert
    expect(nextState).toEqual([...action.payload.schedules]);
  });

  it('should return schedules with new value when action SCHEDULES_ADD', () => {
    // Arrange
    const initialState = [
      {
        id: '47t42784',
        schedule: 'memancing',
        dateTime: '2023-11-14T14:00:10.690Z',
        finished: false,
        createdAt: '2023-11-14T14:00:10.690Z',
      },
    ];
    const action = {
      type: 'SCHEDULES_ADD',
      payload: {
        schedule: {
          id: '47t427bvfbf',
          schedule: 'main bola',
          dateTime: '2023-11-14T14:00:10.690Z',
          finished: false,
          createdAt: '2023-11-14T14:00:10.690Z',
        },
      },
    };

    // Action
    const nextState = schedulesReducer(initialState, action);

    // Assert
    expect(nextState).toEqual([action.payload.schedule, ...initialState]);
  });

  it('should return schedules with new finished value when action SCHEDULES_FINISHED', () => {
    // Arrange
    const initialState = [
      {
        id: '47t42784',
        schedule: 'memancing',
        dateTime: '2023-11-14T14:00:10.690Z',
        finished: false,
        createdAt: '2023-11-14T14:00:10.690Z',
      },
    ];
    const action = {
      type: 'SCHEDULES_FINISHED',
      payload: {
        id: '47t42784',
      },
    };

    // Action
    const nextState = schedulesReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(initialState.map((schedule) => (
      schedule.id === action.payload.id
        ? { ...schedule, finished: !schedule.finished } : schedule)));
  });

  it('should return schedules without schedule deleted value when SCHEDULES_DELETE', () => {
    // Arrange
    const initialState = [
      {
        id: '47t42784',
        schedule: 'memancing',
        dateTime: '2023-11-14T14:00:10.690Z',
        finished: false,
        createdAt: '2023-11-14T14:00:10.690Z',
      },
      {
        id: '47t427bvfbf',
        schedule: 'main bola',
        dateTime: '2023-11-14T14:00:10.690Z',
        finished: false,
        createdAt: '2023-11-14T14:00:10.690Z',
      },
    ];
    const action = {
      type: 'SCHEDULES_DELETE',
      payload: {
        id: '47t42784',
      },
    };

    // Action
    const nextState = schedulesReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(initialState.filter((schedule) => schedule.id !== action.payload.id));
  });

  it('should return schedules with new updated schedule when SCHEDULES_UPDATE', () => {
    // Arrange
    const initialState = [
      {
        id: '47t42784',
        schedule: 'memancing',
        dateTime: '2023-11-14T14:00:10.690Z',
        finished: false,
        createdAt: '2023-11-14T14:00:10.690Z',
      },
    ];
    const action = {
      type: 'SCHEDULES_UPDATE',
      payload: {
        id: '47t42784',
        schedule: 'berenang',
        dateTime: '2023-11-14T14:00:10.690Z',
      },
    };

    // Action
    const nextState = schedulesReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(initialState.map((schedule) => (
      schedule.id === action.payload.id
        ? { ...schedule, schedule: action.payload.schedule, dateTime: action.payload.dateTime }
        : schedule)));
  });
});
