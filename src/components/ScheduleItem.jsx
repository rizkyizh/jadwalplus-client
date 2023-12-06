import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { FaCheckCircle, FaTrashAlt, FaEdit } from 'react-icons/fa';
import { asyncFinishedSchedule, asyncDeleteSchedule } from '../states/schedules/action';
import showFormattedDate from '../utils/showFormattedDate';

const ScheduleItem = ({ schedule }) => {
  const dispatch = useDispatch();

  const finishedSchedule = (id) => {
    dispatch(asyncFinishedSchedule(id));
  };

  const findSchedule = (id) => {
    // dispatch(editScheduleActionCreator(id));
  };

  const deleteSchedule = (id) => {
    dispatch(asyncDeleteSchedule(id));
  };

  return (
    <div style={{ backgroundColor: '#fff' }}>
      <h4>{schedule.schedule}</h4>
      <p>
        <span>waktu : </span>
        {showFormattedDate(schedule.dateTime)}
      </p>
      <p>
        <span>dibuat pada : </span>
        {showFormattedDate(schedule.createdAt)}
      </p>
      <div className="container-check">
        <button type="button" aria-label="checklist-btn" onClick={() => finishedSchedule(schedule.id)}>
          <FaCheckCircle className={`fa-icon-size ${schedule.finished ? 'bg-green' : 'bg-gray'}`} />
        </button>
        <p>{schedule.finished ? 'selesai' : 'belum selesai'}</p>
      </div>
      <div className="container-check">
        <button type="button" aria-label="edit-btn" onClick={() => findSchedule(schedule.id)}>
          <FaEdit className="fa-icon-size" />
        </button>
        <button type="button" aria-label="delete-btn" onClick={() => deleteSchedule(schedule.id)}>
          <FaTrashAlt className="fa-icon-size" />
        </button>
      </div>
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
