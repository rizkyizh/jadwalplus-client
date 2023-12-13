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

  const today = new Date().toISOString();
  const { dateTime } = schedule;

  return (
    <div className="schedule-container">
      <div className="schedule-title">
        <h4 id="schedule-text">{schedule.schedule}</h4>
        {showFormattedDate(today) === showFormattedDate(dateTime) && (<p className="is-today">Today</p>)}
      </div>
      <div className="dateTime-container">
        <p className="greyText container-icon-text">
          <FaClock className="fa-icon-size" size="16px" />
          {showFormattedDate(schedule.dateTime)}
        </p>
        <p className="greyText container-icon-text">
          <FaPen className="fa-icon-size" size="16px" />
          {showFormattedDate(schedule.createdAt)}
        </p>
      </div>
      <div className="container-check-editDelete">
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
        <div className="container-editDelete">
          <button className="btn-editDelete" id="btn-edit" type="button" aria-label="btn-edit" onClick={() => handleDetail(schedule.id)}>
            <FaEdit id="btn-edit-icon" className="fa-icon-size editDelete-icon" size="16px" />
            <span>EDIT</span>
          </button>
          <button className="btn-editDelete" id="btn-delete" type="button" aria-label="delete-btn" onClick={() => deleteSchedule(schedule.id)}>
            <FaTrashAlt id="btn-delete-icon" className="fa-icon-size editDelete-icon" size="16px" />
            <span>DELETE</span>
          </button>
        </div>
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
