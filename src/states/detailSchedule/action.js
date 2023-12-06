import api from '../../utils/network-data';

const ActionType = {
  SCHEDULES_DETAIL: 'SCHEDULES_DETAIL',
  SCHEDULES_CLEAR_DETAIL: 'SCHEDULES_CLEAR_DETAIL',
};

const getDetailScheduleActionCreator = (detailSchedule) => {
  return {
    type: ActionType.SCHEDULES_DETAIL,
    payload: {
      detailSchedule,
    },
  };
};

const clearDetailScheduleActionCreator = () => {
  return {
    type: ActionType.SCHEDULES_CLEAR_DETAIL,
  };
};

const asyncGetDetailSchedule = (id) => {
  return async (dispatch) => {
    dispatch(clearDetailScheduleActionCreator());
    try {
      const detailSchedule = await api.getSchedule(id);
      dispatch(getDetailScheduleActionCreator(detailSchedule));
    } catch (error) {
      alert(error.message);
    }
  };
};

export {
  ActionType,
  getDetailScheduleActionCreator,
  clearDetailScheduleActionCreator,
  asyncGetDetailSchedule,
};
