import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../hooks/useInput';
import { asyncGetDetailSchedule } from '../states/detailSchedule/action';
import { asyncUpdateSchedule } from '../states/schedules/action';
import './styles/addSchedule.css';

const EditSchedulePage = () => {
  const { id } = useParams();
  const {
    detailSchedule = null,
  } = useSelector((states) => states);
  const dispatch = useDispatch();
  console.log(detailSchedule);

  const [schedule, setSchedule] = useInput('');
  const [dateTime, setDateTime] = useInput('');

  useEffect(() => {
    dispatch(asyncGetDetailSchedule(id));
    setSchedule(detailSchedule.schedule);
    setDateTime(new Date(detailSchedule.dateTime).toISOString().split('T')[0]);
  }, [id, dispatch]);

  const navigate = useNavigate();

  // const dateTimeFormated = new Date(detailSchedule.dateTime).toISOString().split('T')[0];
  // const [schedule, setSchedule] = useInput('');
  // const [dateTime, setDateTime] = useInput('');
  // const [schedule, setSchedule] = useState(detailSchedule?.schedule);
  // const [dateTime, setDateTime] = useState(detailSchedule?.dateTime);

  const submitHandler = (event) => {
    event.preventDefault();

    const formatDateTime = new Date(dateTime).toISOString();

    dispatch(asyncUpdateSchedule({
      id: detailSchedule.id, schedule, dateTime: formatDateTime,
    }));

    navigate('/');
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
