import { ActionType } from './action';

const detailScheduleReducer = (detailSchedule = null, action = {}) => {
  switch (action.type) {
    case ActionType.SCHEDULES_DETAIL:
      return action.payload.detailSchedule;
    case ActionType.SCHEDULES_CLEAR_DETAIL:
      return null;
    case ActionType.SCHEDULES_DETAIL_UPDATE:
      return {
        ...detailSchedule,
        schedule: action.payload.schedule ? action.payload.schedule : detailSchedule.schedule,
        dateTime: action.payload.dateTime ? action.payload.dateTime : detailSchedule.dateTime,
      };
    default:
      return detailSchedule;
  }
};

export default detailScheduleReducer;
