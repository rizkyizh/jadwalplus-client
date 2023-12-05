/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import ScheduleItem from './ScheduleItem';

const ArsipList = ({ schedules }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} className="margin-bottom-4rem">
      {
        schedules.length
          ? schedules.map((schedule) => schedule.finished && (
            <ScheduleItem key={schedule.id} schedule={schedule} />))
          : (<p>Schedule belum dibuat</p>)
      }
    </div>
  );
};

ArsipList.propTypes = {
  schedules: PropTypes.array.isRequired,
};

export default ArsipList;
