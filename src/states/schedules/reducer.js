import { ActionType } from './action';

const schedulesReducer = (schedules = [], action = {}) => {
  switch (action.type) {
    case ActionType.SCHEDULES_RECEIVE:
      return [...action.payload.schedules];
    case ActionType.SCHEDULES_ADD:
      return [action.payload.schedule, ...schedules];
    case ActionType.SCHEDULES_FINISHED:
      return schedules.map((schedule) => (
        schedule.id === action.payload.id ? { ...schedule, finished: true } : schedule));
    case ActionType.SCHEDULES_DELETE:
      return schedules.filter((schedule) => schedule.id !== action.payload.id);
    case ActionType.SCHEDULES_UPDATE:
      return schedules.map((schedule) => (
        schedule.id === action.payload.id
          ? { ...schedule, schedule: action.payload.schedule, dateTime: action.payload.dateTime }
          : schedule));
    default:
      return schedules;
  }
};

export default schedulesReducer;
