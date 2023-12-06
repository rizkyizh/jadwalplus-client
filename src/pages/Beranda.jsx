import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ScheduleList from '../components/ScheduleList';
import { asyncGetAllSchedule } from '../states/schedules/action';

const Beranda = () => {
  const {
    schedules,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetAllSchedule());
  }, [dispatch]);

  return (
    <div className="bgimage">
      <ScheduleList schedules={schedules} />
    </div>
  );
};

export default Beranda;
