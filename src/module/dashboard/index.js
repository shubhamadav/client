import React from 'react';
import Avator from '../../assets/avatar.svg'
const Dashboard = () => {
  return (
    <div className='w-screen flex'>
      <div className='w-1/4 border border-black h-screen bg-white'>
           <div>
                <img src={Avator} width={75} height={75}/>
                <div>
                    <h3>Tutoral Shubham</h3>
                    <p>My Acount</p>
                </div>
           </div>
      </div>
      <div className='w-1/2 border border-black h-screen'></div>
      <div className='w-1/4 border border-black h-screen'></div>
    </div>
  );
};

export default Dashboard;
