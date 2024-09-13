import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { toast, ToastContainer,  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from '../../App';

const SignupForm = () => {
  const { register, handleSubmit } = useForm();  

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    toast.success('Signed up successfully!'),
    
  
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const onLogin = () => {
    navigate('/login');
  };

  return (
    <>
        <App/>
  
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-11/12 md:w-4/12 p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl md:text-2xl text-gray-800 font-bold">Sign up</h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type='text'
            {...register('fullName')}
            placeholder='Full Name'
            className='w-full p-2 border rounded mt-1 mb-4 border-gray-300'
          />

          <input
            type='email'
            placeholder='Email Address'
            {...register('email')}
            className='w-full p-2 border rounded mt-1 mb-4 border-gray-300'
          />

          <div className="flex items-start mt-5 mb-4">
            <input
              type="checkbox"
              className="mr-2 mt-1"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label className="text-xs text-gray-500">
              I agree to the Terms of Service, Privacy Policy, and Content Policies
            </label>
          </div>

          <button
            type='submit'
            className={`w-full py-2 rounded-lg ${isChecked ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
            disabled={!isChecked}
          >
            Create Account
          </button>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">or</span>
            </div>
          </div>

          <button className="flex items-center justify-center w-full py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
            <FcGoogle className="w-5 h-5 mr-2" />
            Sign in with Google
          </button>

          <div className="mt-4 text-center text-gray-500 text-sm">
            Already have an account?{' '}
            <a className="text-red-500 hover:underline" onClick={onLogin}>
              Log in
            </a>
          </div>
        </form>
        <ToastContainer/>
      </div>
    </div>
    </>
  );
};

export default SignupForm;
