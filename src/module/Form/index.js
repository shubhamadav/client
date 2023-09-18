import React, { useState } from 'react';
import Input from "../../component/Input";
import Button from "../../component/Button";

const Form = ({
  isSignInPage = false,
}) => {
  const [data, setData] = useState({
    fullName: '', // Initialize fullName with an empty string
    email: '',
    password: '',
  });
   console.log('data :=>', data)
  return (
    <div className="bg-white w-96 h-96 shadow-lg rounded-lg flex flex-col justify-center items-center">
      <div className="text-4xl font-extrabold">Welcome{isSignInPage ? ' Back' : ''}</div>
      <div className="text-xl font-light">
        {isSignInPage ? 'Sign in to get explored' : 'Sign up to the app'}
      </div>
       <form className="flex flex-col items-center w-full" onSubmit={()=>console.log('submittied')}>
      {!isSignInPage && (
        <Input
          label='Full Name'
          name='fullName'
          placeholder="Enter your full name"
          className='mb-4'
          value={data.fullName}
          onChange={(e) => setData({ ...data, fullName: e.target.value })}
        />
      )}

      {/* Second input with a unique 'name' */}
      <Input
        label='Email'
        name='email'
        placeholder="Enter your email"
        className='mb-4'
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />

      {/* Third input with a unique 'name' */}
      <Input
        label='Password'
        name='password'
        placeholder="Enter your password"
        className='mb-10'
        value={data.password}
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />
      
      <Button label={isSignInPage ? "Sign In" : "Sign Up"} type='submit' className='w-1/2' />
      </form>
      <div>
        {isSignInPage
          ? "Don't have an account?"
          : "Already have an account?"}
        <span className='text-primary cursor-pointer underline'>
          {isSignInPage ? ' Sign up' : ' Sign in'}
        </span>
      </div>
    </div>
  );
};

export default Form;
