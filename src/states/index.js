import { configureStore } from '@reduxjs/toolkit';
import detailScheduleReducer from './detailSchedule/reducer';
import schedulesReducer from './schedules/reducer';

const store = configureStore({
  reducer: {
    schedules: schedulesReducer,
    detailSchedule: detailScheduleReducer,
  },
});

export default store;
