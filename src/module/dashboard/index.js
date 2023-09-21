import React, { useEffect, useState } from 'react';
import Avatar from '../../assets/avatar.svg'; // Corrected import name
import Input from "../../component/Input";

const Dashboard = () => {
  const contacts = [
    {
      name: "Rahul",
      status: "Available",
      img: Avatar, // Corrected import name
    },
    {
      name: "Choto",
      status: "Available",
      img: Avatar, // Corrected import name
    },
    {
      name: "Fighter",
      status: "Available",
      img: Avatar, // Corrected import name
    },
    {
      name: "Panday",
      status: "Available",
      img: Avatar, // Corrected import name
    },
    {
      name: "Ankit",
      status: "Available",
      img: Avatar, // Corrected import name
    },
    {
      name: "Tiloo",
      status: "Available",
      img: Avatar, // Corrected import name
    },
  ];
  
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('user:detail'));
    
    const fetchConversation = async () => {
      const res = await fetch(`http://localhost:8000/api/conversation/${loggedInUser?.id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      const resData = await res.json();
      setConversations(resData);
    };
    
    fetchConversation();
  }, []);
  
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user:detail')));
  const [conversations, setConversations] = useState([]);
  console.log('user:>>', user);
  console.log('conversation:>>', conversations);

  return (
    <div className='w-screen flex'>
      <div className='w-1/4 h-screen bg-white'>
        <div className='flex items-center my-8'>
          <div className='border border-primary p-[2px] rounded-full'>
            <img src={Avatar} width={75} height={75} alt="Avatar" /> {/* Added alt attribute */}
          </div>
          <div className='ml-4'>
            <h3 className='text-2xl'>{user?.fullName}</h3>
            <p className='text-lg'>My Account</p> {/* Corrected typo "Acount" to "Account" */}
          </div>
        </div>
        <hr />
        <div>
          <div className='text-primary text-lg'>Message</div>
          <div>
            {conversations.map(({ conversationId, user }) => (
              <div className='flex items-center py-8 border-b border-b-gray-300' key={conversationId}>
                <div className='cursor-pointer flex items-center'>
                  <div>
                    <img src={Avatar} width={60} height={60} alt="Avatar" /> {/* Added alt attribute */}
                  </div>
                  <div className='ml-6'>
                    <h3 className='text-lg'>{user?.fullName}</h3>
                    <p className='text-sm'>{user?.email}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='w-1/2 h-screen bg-white flex flex-col items-center'>
        <div className='w-[75%] bg-secondary h-[80px] mt-14 rounded-full flex items-center px-14'>
          <div className='cursor-pointer'><img src={Avatar} width={60} height={60} alt="Avatar" /></div>
          <div className='ml-6 mr-auto'>
            <h3 className='text-lg'>Rahul</h3>
            <p className='text-sm font-light text-gray-600'>online</p>
          </div>
          <div className='cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone-call" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              <path d="M15 7a2 2 0 0 1 2 2" />
              <path d="M15 3a6 6 0 0 1 6 6" />
            </svg>
          </div>
        </div>
        <div className='h-[75%] border w-full overflow-scroll'>
          <div className='h-[1000px] px-10 py-14'>
            <div className='max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6'>
              This is my app, you are all fools.
            </div>
            <div className='max-w-[40%] bg-primary rounded-b-xl rounded-tr-xl ml-auto p-4 text-white'>
              Habibi, come to Dubai.
            </div>
            {/* Repeat these message divs for your messages */}
          </div>
          <div className='p-14 w-full flex items-center'>
            <Input
              placeholder='Type a message....'
              className='w-full p-4 border-0 shadow-md rounded-full bg-light focus:right-0 focus:border-0 outline-none'
            />
            <div className='ml-4 p-4 cursor-pointer bg-light rounded-full'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-send"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 14l11 -11" />
                <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
              </svg>
            </div>
            <div className='ml-4 p-4 cursor-pointer bg-light rounded-full'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-clipboard-plus"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                <path d="M9 3v2a2 2 0 0 1 2 2h2a2 2 0 0 1 2 -2v-2" />
                <path d="M10 14h4" />
                <path d="M12 12v4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className='w-1/4 border h-screen'></div>
    </div>
  );
};

export default Dashboard;
