import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  FaRegSquare, FaCheckSquare, FaTrashAlt, FaEdit, FaClock, FaPen,
} from 'react-icons/fa';
import { asyncFinishedSchedule, asyncDeleteSchedule } from '../states/schedules/action';
import { asyncGetDetailSchedule } from '../states/detailSchedule/action';
import showFormattedDate from '../utils/showFormattedDate';
import './styles/schedule-style.css';

const ScheduleItem = ({ schedule }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const finishedSchedule = (id) => {
    dispatch(asyncFinishedSchedule(id));
  };

  const deleteSchedule = (id) => {
    dispatch(asyncDeleteSchedule(id));
  };

  const handleDetail = (id) => {
    dispatch(asyncGetDetailSchedule(id));
    navigate(`/schedule/edit/${id}`);
  };

  const today = new Date().toISOString().split('T')[0];
  const dateTime = schedule.dateTime.split('T')[0];

  return (
    <div className="schedule-container">
      <h4 id="schedule-text">{schedule.schedule}</h4>
      <p className="greyText container-icon-text">
        <FaClock className="fa-icon-size" />
        {showFormattedDate(schedule.dateTime)}
      </p>
      <p className="greyText container-icon-text">
        <FaPen className="fa-icon-size" />
        {showFormattedDate(schedule.createdAt)}
      </p>
      <div className="container-check">
        <button id="btn-check-item" type="button" aria-label="checklist-btn" onClick={() => finishedSchedule(schedule.id)}>
          {
            schedule.finished
              ? (<FaCheckSquare className={`fa-icon-size ${schedule.finished ? 'bg-green' : 'bg-gray'}`} />)
              : (<FaRegSquare className={`fa-icon-size ${schedule.finished ? 'bg-green' : 'bg-gray'}`} />)
          }
        </button>
        <p>{schedule.finished ? 'Selesai' : 'Belum selesai'}</p>
      </div>
      <div className="container-check-editDelete">
        <button type="button" aria-label="btn-edit" onClick={() => handleDetail(schedule.id)}>
          <FaEdit id="btn-edit" className="fa-icon-size" />
        </button>
        <button id="btn-delete" type="button" aria-label="delete-btn" onClick={() => deleteSchedule(schedule.id)}>
          <FaTrashAlt className="fa-icon-size" />
        </button>
      </div>
      {today === dateTime && (<p className="is-today">Tepat hari ini</p>)}
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
