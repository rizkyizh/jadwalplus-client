import { describe, it, expect } from 'vitest';
import detailScheduleReducer from './reducer';

describe('detailScheduleReducer', () => {
  it('should return initial state when action UNKNOWN', () => {
    // Arrange
    const initialState = {};
    const action = {
      type: 'UNKNOWN',
    };

    // Action
    const nextState = detailScheduleReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(initialState);
  });

  it('should return new detail schedule when action SCHEDULES_DETAIL', () => {
    // Arrange
    const initialState = {};
    const action = {
      type: 'SCHEDULES_DETAIL',
      payload: {
        detailSchedule: {
          id: '47t42784',
          schedule: 'memancing',
          dateTime: '2023-11-14T14:00:10.690Z',
          finished: false,
          createdAt: '2023-11-14T14:00:10.690Z',
        },
      },
    };

    // Action
    const nextState = detailScheduleReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(action.payload.detailSchedule);
  });
});
