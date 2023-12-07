import React from 'react';
import PropTypes from 'prop-types';
import ScheduleItem from './ScheduleItem';

const ArsipList = ({ schedules }) => {
  const arsipScheduleLength = schedules.filter((schedule) => schedule.finished).length;

  return (
    <div
      style={{
        display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center', alignItems: 'center', fontSize: 'larger',
      }}
      className="margin-bottom-4rem"
    >
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
