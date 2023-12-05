import React from 'react';
import { useSelector } from 'react-redux';
import ArsipList from '../components/ArsipList';
import './styles/about.css';

const ArsipPage = () => {
  const {
    schedules,
  } = useSelector((states) => states);

  return (
    <div className="bgimage">
      <ArsipList schedules={schedules} />
    </div>
  );
};

export default ArsipPage;
