const ActionType = {
  SCHEDULES_ADD: 'SCHEDULES_ADD',
  SCHEDULES_RECEIVE: 'SCHEDULES_RECEIVE',
  // SCHEDULES_GET: 'SCHEDULES_GET',
  SCHEDULES_FINISHED: 'SCHEDULES_FINISHED',
  SCHEDULES_DELETE: 'SCHEDULES_DELETE',
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

// belum digunakan
// const getScheduleActionCreator = (id) => {
//   return {
//     type: ActionType.SCHEDULES_GET,
//     payload: {
//       id,
//     },
//   };
// };

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
  // getScheduleActionCreator,
  finishedScheduleActionCreator,
  deleteScheduleActionCreator,
  updateScheduleActionCreator,
  ActionType,
};
