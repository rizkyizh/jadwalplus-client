import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { updateDetailScheduleActionCreator } from '../states/detailSchedule/action';
import { asyncUpdateSchedule } from '../states/schedules/action';
import './styles/addSchedule.css';

const EditSchedulePage = () => {
  const {
    detailSchedule = null,
  } = useSelector((states) => states);
  const dispatch = useDispatch();

  const handleInputChangeSchedule = (value) => {
    dispatch(updateDetailScheduleActionCreator({ schedule: value }));
  };

  const handleInputChangeDateTime = (value) => {
    dispatch(updateDetailScheduleActionCreator({ dateTime: value }));
  };

  const navigate = useNavigate();
  const dateTimeFormated = moment(detailSchedule?.dateTime).format('YYYY-MM-DD');

  const submitHandler = (event) => {
    event.preventDefault();

    const formatDateTime = new Date(detailSchedule.dateTime).toISOString();

    dispatch(asyncUpdateSchedule({
      id: detailSchedule.id, schedule: detailSchedule.schedule, dateTime: formatDateTime,
    }));

    if (detailSchedule.finished) {
      navigate('/schedules/arsip');
    } else {
      navigate('/');
    }
  };

  const minToday = () => {
    return new Date().toISOString().split('T')[0];
  };

  if (!detailSchedule) {
    return null;
  }

  return (
    <form
      className="user-info-container bgimage"
      onSubmit={submitHandler}
    >
      <div className="site-name">Edit Jadwal Baru</div>
      <div className="red-box">
        <div className="input-container">
          <input
            type="text"
            id="schedule"
            name="schedule"
            placeholder="Judul Jadwal"
            value={detailSchedule?.schedule}
            onChange={(e) => handleInputChangeSchedule(e.target.value)}
          />
        </div>
        <div className="input-container">
          <input
            type="date"
            id="dateTime"
            name="dateTime"
            min={minToday()}
            value={dateTimeFormated}
            onChange={(e) => handleInputChangeDateTime(e.target.value)}
          />
        </div>
        <div className="button-container">
          <button id="simpanButton" className="save-button" type="submit">SIMPAN</button>
        </div>
      </div>
    </form>
  );
};

export default EditSchedulePage;
