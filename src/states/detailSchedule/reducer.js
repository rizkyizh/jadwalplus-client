import { ActionType } from './action';

const detailScheduleReducer = (detailSchedule = null, action = {}) => {
  switch (action.type) {
    case ActionType.SCHEDULES_DETAIL:
      return action.payload.detailSchedule;
    case ActionType.SCHEDULES_CLEAR_DETAIL:
      return null;
    default:
      return detailSchedule;
  }
};

export default detailScheduleReducer;
