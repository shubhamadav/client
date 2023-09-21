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
    // ... (other contacts)
  ];

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('user:detail'));

    const fetchConversation = async () => {
      try {
        const res = await fetch(`http://localhost:8000/api/conversation/${loggedInUser?.id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const resData = await res.json();
        setConversations(resData);
      } catch (error) {
        console.error('Error fetching conversation:', error);
      }
    };

    fetchConversation();
  }, []);

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user:detail')));
  const [conversations, setConversations] = useState([]);
  const [Messages , setMessages] = useState([]);
  console.log('user:>>', user);
  console.log('conversation:>>', conversations);
   
const fetchMessages = async(conversationId)=>{
  
      const res = await fetch(`http://localhost:8000/api/message/${conversationId}`,{
         method:'GET',
         headers:{
            'Content-Type':'application/json',
         }
      })
      const resData = await res.json();
      setMessages(resData);
  
}


  return (
    <div className='w-screen flex'>
      {/* Left Sidebar */}
      <div className='w-1/4 h-screen bg-white'>
        {/* User Profile */}
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
            {conversations.length > 0 ? (
              conversations.map(({ conversationId, user }) => (
                <div className='flex items-center py-8 border-b border-b-gray-300' key={conversationId}>
                  <div className='cursor-pointer flex items-center' onClick={() => console.log('Hello')}>
                    <div>
                      <img src={Avatar} width={60} height={60} alt="Avatar" /> {/* Added alt attribute */}
                    </div>
                    <div className='ml-6'>
                      <h3 className='text-lg'>{user?.fullName}</h3>
                      <p className='text-sm'>{user?.email}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className='text-center text-lg font-semibold'>No conversation</div>
            )}
          </div>
        </div>
      </div>

      {/* Middle Content */}
      <div className='w-1/2 h-screen bg-white flex flex-col items-center'>
        {/* Contact Info */}
        <div className='w-[75%] bg-secondary h-[80px] mt-14 rounded-full flex items-center px-14'>
          <div className='cursor-pointer'>
            <img src={Avatar} width={60} height={60} alt="Avatar" />
          </div>
          <div className='ml-6 mr-auto'>
            <h3 className='text-lg'>Rahul</h3>
            <p className='text-sm font-light text-gray-600'>online</p>
          </div>
          <div className='cursor-pointer'>
            {/* Phone icon */}
          </div>
        </div>

        {/* Chat Messages */}
        <div className='h-[75%] border w-full overflow-scroll'>
          <div className='h-[1000px] px-10 py-14'>
                 {
                  Messages.length>0 ?
                  Messages.map(({message, user:{id}={}})=>{
                    if(id === user?.id)
                  })
                 }
          </div>
          <div className='p-14 w-full flex items-center'>
            <Input
              placeholder='Type a message....'
              className='w-full p-4 border-0 shadow-md rounded-full bg-light focus:right-0 focus:border-0 outline-none'
            />
            <div className='ml-4 p-4 cursor-pointer bg-light rounded-full'>
              {/* Send icon */}
            </div>
            <div className='ml-4 p-4 cursor-pointer bg-light rounded-full'>
              {/* Clipboard icon */}
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className='w-1/4 border h-screen'></div>
    </div>
  );
};

export default Dashboard;
