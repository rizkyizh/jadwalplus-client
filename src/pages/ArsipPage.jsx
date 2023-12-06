import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { asyncGetAllSchedule } from '../states/schedules/action';
import ArsipList from '../components/ArsipList';
import './styles/about.css';

const ArsipPage = () => {
  const {
    schedules,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetAllSchedule());
  }, [dispatch]);

  return (
    <div className="bgimage">
      <ArsipList schedules={schedules} />
    </div>
  );
};

export default ArsipPage;
