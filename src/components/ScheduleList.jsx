import React from 'react';
import PropTypes from 'prop-types';
import ScheduleItem from './ScheduleItem';

const ScheduleList = ({ schedules }) => {
  const activeScheduleLength = schedules.filter((schedule) => !schedule.finished).length;

  return (
    <div
      style={{
        display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center', alignItems: 'center',
      }}
      className="margin-bottom-4rem"
    >
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
