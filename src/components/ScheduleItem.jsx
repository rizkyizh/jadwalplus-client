import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FaCheckCircle, FaTrashAlt, FaEdit } from 'react-icons/fa';
import { asyncFinishedSchedule, asyncDeleteSchedule } from '../states/schedules/action';
import showFormattedDate from '../utils/showFormattedDate';
import './styles/schedule-style.css';

const ScheduleItem = ({ schedule }) => {
  const dispatch = useDispatch();

  const finishedSchedule = (id) => {
    dispatch(asyncFinishedSchedule(id));
  };

  // const findSchedule = (id) => {
  //   // dispatch(editScheduleActionCreator(id));
  // };

  const deleteSchedule = (id) => {
    dispatch(asyncDeleteSchedule(id));
  };

  return (
    <div className="schedule-container">
      <h4 id="schedule-text">{schedule.schedule}</h4>
      <p className="greyText">
        <span>Waktu : </span>
        {showFormattedDate(schedule.dateTime)}
      </p>
      <p className="greyText">
        <span>Dibuat pada : </span>
        {showFormattedDate(schedule.createdAt)}
      </p>
      <div className="container-check">
        <button id="btn-check-item" type="button" aria-label="checklist-btn" onClick={() => finishedSchedule(schedule.id)}>
          <FaCheckCircle className={`fa-icon-size ${schedule.finished ? 'bg-green' : 'bg-gray'}`} />
        </button>
        <p>{schedule.finished ? 'Selesai' : 'Belum selesai'}</p>
      </div>
      <div className="container-check-editDelete">
        <Link to={`/schedule/edit/${schedule.id}`}>
          <FaEdit id="btn-edit" className="fa-icon-size" />
        </Link>
        <button id="btn-delete" type="button" aria-label="delete-btn" onClick={() => deleteSchedule(schedule.id)}>
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
