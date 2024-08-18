import React, { useState } from 'react';
import Input from './components/input';
import { HideIcon, ShowIcon } from "@/assets";
import { SignupImg } from "@/assets";
import { NavLink } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Error from '../components/error';
import { signUpUser } from '../services/auth';
import { setToken } from '../utils/auth';
import Buttons from './components/buttons';
import Meta from './../components/Meta';


const Signup = () => {
  const [pass, setPass] = useState(true)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    await registerUser({ name: data.name, email: data.email, password: data.password });
  };

  const registerUser = async (data) => {
    try {
      const { token } = await signUpUser(data);
      if (token) {
        setToken(token);
        window.location.href = "/";
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Meta title="Signup" pageURL={window.location.href} desc="money manager - register on money manager and simplify your budget" />
      <div className='w-full h-screen flex items-center'>
        <div className='w-2/4 md:grid place-content-center 3xl:hidden hidden'>
          <img src={SignupImg} alt="signup image" className='max-h-svh' />
        </div>
        <div className='md:w-2/4 md:inline-block md:ps-20 3xl:w-full 3xl:grid w-full grid place-content-center'>
          <form onSubmit={handleSubmit(onSubmit)} className='my-4 w-96 flex flex-col gap-4 relative'>
            <h1 className='font-semibold text-2xl text-center'>Signup For Free</h1>
            <div className='flex flex-col gap-2'>
              <span className='font-semibold'>Name</span>
              <Input
                type='text'
                placeholder="Full Name"
                {...register('name', { required: { value: true, message: "Name is required" } })}
              />
              {errors.name && <Error content={errors.name.message} />}
            </div>
            <div className='flex flex-col gap-2'>
              <span className='font-semibold'>Email</span>
              <Input
                type='email'
                placeholder="name@gmail.com"
                {...register('email', { required: { value: true, message: "Email is required" } })}
              />
              {errors.email && <Error content={errors.email.message} />}
            </div>
            <div className='flex flex-col gap-2'>
              <span className='font-semibold'>Password</span>
              <div className="relative">
                <Input
                  type={pass ? 'password' : 'text'}
                  placeholder="Password"
                  {...register('password', { required: { value: true, message: "Password is required" }, minLength: { value: 8, message: "Enter atleast 8 characters" } })}
                />
                <img
                  className="absolute right-2 top-2 cursor-pointer"
                  src={pass ? ShowIcon : HideIcon} alt={`${pass ? 'show' : 'hide'} password`}
                  onClick={() => { setPass(!pass) }}
                />
              </div>
              {errors.password && <Error content={errors.password.message} />}
            </div>
            <Buttons value="Signup" isSubmitting={isSubmitting} />
            <div className='text-center text-lg'>Already have an account? <NavLink to={'/signin'} className={'font-bold hover:text-primary'}>Sign in</NavLink></div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup
