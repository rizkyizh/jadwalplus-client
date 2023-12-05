const ActionType = {
  SCHEDULES_DETAIL: 'SCHEDULES_DETAIL',
};

const getDetailScheduleActionCreator = (detailSchedule) => {
  return {
    type: ActionType.SCHEDULES_DETAIL,
    payload: {
      detailSchedule,
    },
  };
};

export { ActionType, getDetailScheduleActionCreator };
