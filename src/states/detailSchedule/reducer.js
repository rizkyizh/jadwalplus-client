import { ActionType } from './action';

const detailScheduleReducer = (detailSchedule = {}, action = {}) => {
  switch (action.type) {
    case ActionType.SCHEDULES_DETAIL:
      return action.payload.detailSchedule;
    default:
      return detailSchedule;
  }
};

export default detailScheduleReducer;
