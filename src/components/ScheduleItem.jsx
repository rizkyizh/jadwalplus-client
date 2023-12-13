import React, { useState } from 'react';
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
  const [isDeleteConfirmationVisible, setDeleteConfirmationVisibility] = useState(false);

  const finishedSchedule = (id) => {
    dispatch(asyncFinishedSchedule(id));
  };

  const deleteSchedule = (id) => {
    if (isDeleteConfirmationVisible) {
      dispatch(asyncDeleteSchedule(id));
      setDeleteConfirmationVisibility(false);
    } else {
      setDeleteConfirmationVisibility(true);
    }
  };

  const handleDetail = (id) => {
    dispatch(asyncGetDetailSchedule(id));
    navigate(`/schedule/edit/${id}`);
  };

  const today = new Date().toISOString();
  const { dateTime } = schedule;

  return (
    <div className="schedule-container w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%]">
      {isDeleteConfirmationVisible && (
        <div>
          <div className="delete-confirmation-overlay" />
          <div className="delete-confirmation w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%]">
            <h4>Menghapus Jadwal</h4>
            <p>Apakah Kamu Yakin Menghapus Jadwal?</p>
            <div className="delete-warning">
              <div className="warning-text-container" />
            </div>
            <div className="confirmation-buttons">
              <button type="button" onClick={() => deleteSchedule(schedule.id)}>Ya</button>
              <button type="button" onClick={() => setDeleteConfirmationVisibility(false)}>Tidak</button>
            </div>
          </div>
        </div>
      )}
      <div className="schedule-title">
        <h4 id="schedule-text">{schedule.schedule}</h4>
        {showFormattedDate(today) === showFormattedDate(dateTime) && (<p className="is-today">Today</p>)}
      </div>
      <div className="dateTime-container">
        <p className="greyText container-icon-text">
          <FaClock className="fa-icon-size" />
          {showFormattedDate(schedule.dateTime)}
        </p>
        <p className="greyText container-icon-text">
          <FaPen className="fa-icon-size" />
          {showFormattedDate(schedule.createdAt)}
        </p>
      </div>
      <div className="mt-8 flex justify-between">
        <div className="flex gap-1 items-start flex-col sm:flex-row sm:items-center">
          <button id="btn-check-item" type="button" aria-label="checklist-btn" onClick={() => finishedSchedule(schedule.id)}>
            {
              schedule.finished
                ? (<FaCheckSquare className={`fa-icon-size ${schedule.finished ? 'bg-green' : 'bg-gray'}`} />)
                : (<FaRegSquare className={`fa-icon-size ${schedule.finished ? 'bg-green' : 'bg-gray'}`} />)
            }
          </button>
          <p className="text-sm sm:text-base">{schedule.finished ? 'Selesai' : 'Belum selesai'}</p>
        </div>
        <div className="flex gap-2">
          <button className="rounded flex items-center gap-2" id="btn-edit" type="button" aria-label="btn-edit" onClick={() => handleDetail(schedule.id)}>
            <FaEdit id="btn-edit-icon" className="fa-icon-size editDelete-icon" size="16px" />
            <span>EDIT</span>
          </button>
          <button className="rounded flex items-center gap-2" id="btn-delete" type="button" aria-label="delete-btn" onClick={() => deleteSchedule(schedule.id)}>
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
