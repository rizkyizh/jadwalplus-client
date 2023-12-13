import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';
import { asyncAddSchedule } from '../states/schedules/action';
import './styles/addSchedule.css';

const AddSchedulePage = () => {
  const [schedule, setSchedule] = useInput('');
  const [dateTime, setDateTime] = useInput('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();

    const formatDateTime = new Date(dateTime).toISOString();

    dispatch(asyncAddSchedule({
      schedule, dateTime: formatDateTime,
    }));

    setSchedule('');
    setDateTime('');

    navigate('/');
  };

  const minToday = () => {
    return new Date().toISOString().split('T')[0];
  };

  return (
    <form
      className="user-info-container pt-8"
      onSubmit={submitHandler}
    >
      <div className="site-name pb-5">Buat Jadwal Baru</div>
      <div className="red-box w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] p-4">
        <div className="input-container">
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Judul Jadwal"
            autoComplete="off"
            value={schedule}
            onChange={(e) => setSchedule(e.target.value)}
          />
        </div>
        <div className="input-container mt-4">
          <input
            type="date"
            id="tanggal"
            name="tanggal"
            min={minToday()}
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
          />
        </div>
        <button id="simpanButton" className="mt-8 bg-black text-white w-[100%] py-3 rounded" type="submit">SIMPAN</button>
      </div>
    </form>
  );
};

export default AddSchedulePage;
