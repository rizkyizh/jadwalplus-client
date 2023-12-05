import React from 'react';
import { useDispatch } from 'react-redux';
import useInput from '../hooks/useInput';
import { editScheduleActionCreator } from '../states/schedules/action';
import './styles/addSchedule.css';

const EditSchedulePage = () => {
  const [schedule, setSchedule] = useInput('');
  const [dateTime, setDateTime] = useInput('');

  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();

    const id = +new Date();
    const createdAt = new Date().toISOString();
    const finished = false;
    const formatDateTime = new Date(dateTime).toISOString();

    dispatch(editScheduleActionCreator({
      schedule, dateTime: formatDateTime, id, createdAt, finished,
    }));

    setSchedule('');
    setDateTime('');
  };

  const minToday = () => {
    return new Date().toISOString().split('T')[0];
  };

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
            id="username"
            name="username"
            placeholder="Judul Jadwal"
            value={schedule}
            onChange={(e) => setSchedule(e.target.value)}
          />
        </div>
        <div className="input-container">
          <input
            type="date"
            id="tanggal"
            name="tanggal"
            min={minToday()}
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
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
