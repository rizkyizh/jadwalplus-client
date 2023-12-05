import { ActionType } from './action';

const schedulesData = [
  {
    id: 'jsndjcknd',
    schedule: 'makan',
    dateTime: '2023-12-05T12:34:56.789Z',
    createdAt: '2023-12-05T12:34:56.789Z',
    finished: false,
  },
  {
    id: 'jsndjck',
    schedule: 'minum',
    dateTime: '2023-12-05T12:34:56.789Z',
    createdAt: '2023-12-05T12:34:56.789Z',
    finished: false,
  },
  {
    id: 'jsndjnd',
    schedule: 'renang',
    dateTime: '2023-12-05T12:34:56.789Z',
    createdAt: '2023-12-05T12:34:56.789Z',
    finished: false,
  },
  {
    id: 'jsndjna',
    schedule: 'renang',
    dateTime: '2023-12-05T12:34:56.789Z',
    createdAt: '2023-12-05T12:34:56.789Z',
    finished: false,
  },
];

const schedulesReducer = (schedules = schedulesData || [], action = {}) => {
  switch (action.type) {
    case ActionType.SCHEDULES_RECEIVE:
      return [...action.payload.schedules];
    case ActionType.SCHEDULES_ADD:
      return [action.payload.schedule, ...schedules];
    case ActionType.SCHEDULES_FINISHED:
      return schedules.map((schedule) => (
        schedule.id === action.payload.id
          ? { ...schedule, finished: !schedule.finished } : schedule));
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
