import { showLoading, hideLoading } from 'react-redux-loading-bar';
import api from '../../utils/network-data';

const ActionType = {
  SCHEDULES_DETAIL: 'SCHEDULES_DETAIL',
  SCHEDULES_DETAIL_UPDATE: 'SCHEDULES_DETAIL_UPDATE',
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

const updateDetailScheduleActionCreator = ({ schedule, dateTime }) => {
  return {
    type: ActionType.SCHEDULES_DETAIL_UPDATE,
    payload: {
      schedule, dateTime,
    },
  };
};

const asyncGetDetailSchedule = (id) => {
  return async (dispatch) => {
    dispatch(showLoading());
    dispatch(clearDetailScheduleActionCreator());

    try {
      const detailSchedule = await api.getSchedule(id);
      dispatch(getDetailScheduleActionCreator(detailSchedule));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
};

export {
  ActionType,
  getDetailScheduleActionCreator,
  clearDetailScheduleActionCreator,
  asyncGetDetailSchedule,
  updateDetailScheduleActionCreator,
};
