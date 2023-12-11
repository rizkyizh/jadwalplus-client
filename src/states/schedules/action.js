import api from '../../utils/network-data';

const ActionType = {
  SCHEDULES_ADD: 'SCHEDULES_ADD',
  SCHEDULES_RECEIVE: 'SCHEDULES_RECEIVE',
  SCHEDULES_FINISHED: 'SCHEDULES_FINISHED',
  SCHEDULES_DELETE: 'SCHEDULES_DELETE',
  SCHEDULES_EDIT: 'SCHEDULES_EDIT',
  SCHEDULES_UPDATE: 'SCHEDULES_UPDATE',
};

const receiveSchedulesActionCreator = (schedules) => {
  return {
    type: ActionType.SCHEDULES_RECEIVE,
    payload: {
      schedules,
    },
  };
};

const addScheduleActionCreator = (schedule) => {
  return {
    type: ActionType.SCHEDULES_ADD,
    payload: {
      schedule,
    },
  };
};

const editScheduleActionCreator = (schedule) => {
  return {
    type: ActionType.SCHEDULES_EDIT,
    payload: {
      schedule,
    },
  };
};

const finishedScheduleActionCreator = (id, finished) => {
  return {
    type: ActionType.SCHEDULES_FINISHED,
    payload: {
      id,
      finished,
    },
  };
};

const deleteScheduleActionCreator = (id) => {
  return {
    type: ActionType.SCHEDULES_DELETE,
    payload: {
      id,
    },
  };
};

const updateScheduleActionCreator = ({ id, schedule, dateTime }) => {
  return {
    type: ActionType.SCHEDULES_UPDATE,
    payload: {
      id,
      schedule,
      dateTime,
    },
  };
};

const asyncGetAllSchedule = (search = '') => {
  return async (dispatch) => {
    try {
      const schedules = await api.getAllSchedule(search);
      dispatch(receiveSchedulesActionCreator(schedules));
    } catch (error) {
      alert(error.message);
    }
  };
};

const asyncAddSchedule = ({ schedule, dateTime }) => {
  return async (dispatch) => {
    try {
      const newSchedule = await api.addSchedule({ schedule, dateTime });
      dispatch(addScheduleActionCreator(newSchedule));
    } catch (error) {
      alert(error.message);
    }
  };
};

const asyncFinishedSchedule = (scheduleId) => {
  return async (dispatch) => {
    try {
      const { id, finished } = await api.finishedSchedule(scheduleId);
      dispatch(finishedScheduleActionCreator(id, finished));
    } catch (error) {
      alert(error.message);
    }
  };
};

const asyncDeleteSchedule = (scheduleId) => {
  return async (dispatch) => {
    try {
      const id = await api.deleteSchedule(scheduleId);
      dispatch(deleteScheduleActionCreator(id));
    } catch (error) {
      alert(error.message);
    }
  };
};

const asyncUpdateSchedule = ({ id, schedule, dateTime }) => {
  return async (dispatch) => {
    try {
      const newSchedule = await api.updateSchedule({ id, schedule, dateTime });
      dispatch(updateScheduleActionCreator({
        id: newSchedule.id,
        schedule: newSchedule.schedule,
        dateTime: newSchedule.dateTime,
      }));
    } catch (error) {
      alert(error.message);
    }
  };
};

export {
  receiveSchedulesActionCreator,
  addScheduleActionCreator,
  finishedScheduleActionCreator,
  deleteScheduleActionCreator,
  updateScheduleActionCreator,
  editScheduleActionCreator,
  ActionType,
  asyncGetAllSchedule,
  asyncAddSchedule,
  asyncFinishedSchedule,
  asyncDeleteSchedule,
  asyncUpdateSchedule,
};
