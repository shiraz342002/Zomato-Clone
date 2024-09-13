import React from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import App from '../../App';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);

    
    toast.success('OTP sent successfully!', {
      position: "top-center",
      autoClose: 3000,
    });

    
    setTimeout(() => {
      navigate('/'); 
    }, 3000); 
  };

  const onSignup = () => {
    navigate('/signup');
  };

  return (
    <>
    <App/>
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-md p-6">
        <h2 className="text-2xl font-bold mb-4">Login</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center border border-gray-300 rounded-lg mb-4">
            <input
              type='text'
              placeholder="Phone Number"
              {...register('phone')}
              className="w-full p-2 border-gray-300"
            />
          </div>

          <button
            type="submit"
            className="bg-red-500 text-white py-2 rounded-lg w-full mb-4"
          >
            Send OTP
          </button>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">or</span>
            </div>
          </div>

          <button className="flex items-center justify-center w-full py-2 border border-gray-300 rounded-lg mb-4">
            <MdEmail className="text-xl text-red-500 mr-2" />
            Continue with Email
          </button>

          <button className="flex items-center justify-center w-full py-2 border border-gray-300 rounded-lg">
            <FcGoogle className="text-xl mr-2" />
            Sign in with Google
          </button>

          <div className="mt-4 text-center text-gray-500 text-sm">
            New to Zomato?{' '}
            <button onClick={onSignup} className="text-red-500 hover:underline">
              Create account
            </button>
          </div>
        </form>

        <ToastContainer /> 
      </div>
    </div>
    </>
  );
};

export default Login;
