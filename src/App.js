import React from 'react';
import Form from './module/Form'; // Assuming the path to Form.js is correct
import './App.css';
import Dashboard from './module/dashboard'; // Assuming the path to Dashboard.js is correct
import {Routes , Route , Navigate} from 'react-router-dom';

const ProtectedRoute = ({children})=>{
  const isLoggedIn = localStorage.getItem('user.token')!=null || true

  if(!isLoggedIn){
  return <Navigate to={'/users/sign_in'}/>
  }else if(isLoggedIn && ['/users/sign_in'&& '/users/sign_up'].includes(window.location.pathname)){
    return <Navigate to={'/'}/>
  }
  return children
}

function App() {
  return (
     <Routes>
          <Route  path='/' element={
             <ProtectedRoute>
                <Dashboard/>  
             </ProtectedRoute>
          }/>
         <Route  path='/users/sign_in' element={<ProtectedRoute>
          <Form isSignInPage={true}/>
         </ProtectedRoute>}/>
         <Route  path='/users/sign_up' element={<ProtectedRoute>
          <Form isSignInPage={false}/>
         </ProtectedRoute>}/>
     </Routes>

    //<div className="bg-[#e1edff] h-screen flex justify-center items-center">
      //{/* <Form /> */}
      //<Dashboard />
    //</div>
  );
}

export default App;
