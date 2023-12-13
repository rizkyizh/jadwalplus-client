import React from 'react';
import PropTypes from 'prop-types';
import ScheduleItem from './ScheduleItem';

const ArsipList = ({ schedules }) => {
  const arsipScheduleLength = schedules.filter((schedule) => schedule.finished).length;

  return (
    <div className="flex flex-col gap-4 justify-center items-center text-lg mb-20">
      {
        arsipScheduleLength
          ? schedules.map((schedule) => schedule.finished && (
            <ScheduleItem key={schedule.id} schedule={schedule} />))
          : (<p>Arsip Schedule kosong</p>)
      }
    </div>
  );
};

ArsipList.propTypes = {
  schedules: PropTypes.array.isRequired,
};

export default ArsipList;
