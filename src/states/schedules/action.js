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

const finishedScheduleActionCreator = (id) => {
  return {
    type: ActionType.SCHEDULES_FINISHED,
    payload: {
      id,
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

export {
  receiveSchedulesActionCreator,
  addScheduleActionCreator,
  finishedScheduleActionCreator,
  deleteScheduleActionCreator,
  updateScheduleActionCreator,
  editScheduleActionCreator,
  ActionType,
};
