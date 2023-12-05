import React from 'react';
import { useSelector } from 'react-redux';
import ScheduleList from '../components/ScheduleList';

const Beranda = () => {
  const {
    schedules,
  } = useSelector((states) => states);

  return (
    <div className="bgimage">
      <ScheduleList schedules={schedules} />
    </div>
  );
};

export default Beranda;
