import React, { useState } from 'react';
import ScheduleList from '../components/ScheduleList';

const Beranda = () => {
  const [schedules, setSchedules] = useState([
    {
      id: 'jsndjcknd',
      schedule: 'makan',
      dateTime: '30 Desesmber 2030',
      createdAt: '30 Desesmber 2030',
      finished: false,
    },
    {
      id: 'jsndjck',
      schedule: 'minum',
      dateTime: '30 Desesmber 2030',
      createdAt: '30 Desesmber 2030',
      finished: true,
    },
    {
      id: 'jsndjnd',
      schedule: 'renang',
      dateTime: '30 Desesmber 2030',
      createdAt: '30 Desesmber 2030',
      finished: true,
    },
  ]);

  return (
    <div className="bgimage">
      <h2>Halaman Beranda setelah login</h2>
      <ScheduleList schedules={schedules} />
    </div>
  );
};

export default Beranda;
