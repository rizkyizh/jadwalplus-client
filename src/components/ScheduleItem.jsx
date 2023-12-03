/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

const ScheduleItem = ({ schedule }) => {
  return (
    <div style={{ backgroundColor: '#fff' }}>
      <h4>{schedule.schedule}</h4>
      <p>{schedule.dateTime}</p>
      <p>{schedule.createdAt}</p>
      <p>{schedule.finished ? 'selesai' : 'belum selesai'}</p>
    </div>
  );
};

ScheduleItem.propTypes = {
  schedule: PropTypes.shape({
    id: PropTypes.string.isRequired,
    schedule: PropTypes.string.isRequired,
    dateTime: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    finished: PropTypes.bool.isRequired,
  }),
};

export default ScheduleItem;
