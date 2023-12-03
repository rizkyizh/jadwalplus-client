/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import ScheduleItem from './ScheduleItem';

const ScheduleList = ({ schedules }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} className="margin-bottom-4rem">
      {
        schedules.map((schedule) => <ScheduleItem key={schedule.id} schedule={schedule} />)
      }
    </div>
  );
};

ScheduleList.propTypes = {
  schedules: PropTypes.array.isRequired,
};

export default ScheduleList;
