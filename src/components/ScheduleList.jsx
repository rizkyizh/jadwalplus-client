import React from 'react';
import PropTypes from 'prop-types';
import ScheduleItem from './ScheduleItem';

const ScheduleList = ({ schedules }) => {
  const activeScheduleLength = schedules.filter((schedule) => !schedule.finished).length;

  return (
    <div className="flex flex-col gap-4 justify-center items-center text-lg mb-20">
      {
        activeScheduleLength
          ? schedules.map((schedule) => !schedule.finished && (
            <ScheduleItem key={schedule.id} schedule={schedule} />))
          : (<p>Schedule kosong</p>)
      }
    </div>
  );
};

ScheduleList.propTypes = {
  schedules: PropTypes.array.isRequired,
};

export default ScheduleList;
