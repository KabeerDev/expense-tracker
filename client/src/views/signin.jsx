import React, { useState } from 'react'
import Input from './components/input'
import { HideIcon, ShowIcon } from "@/assets";
import { LoginImg } from "@/assets";
import { NavLink } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Error from '../components/error';
import useSession from '../hooks/useSession';
import Buttons from './components/buttons';
import Meta from '../components/Meta';

const Signin = () => {
  const { login } = useSession();
  const [pass, setPass] = useState(true)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await login({ email: data.email, password: data.pass });
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <div className='w-full h-screen flex items-center'>
    <Meta title="Login" pageURL={window.location.href} desc="money manager - signin on money manager and simplify your budget" />
    <div className='md:w-2/4 3xl:w-full w-full grid place-content-center'>
        <form onSubmit={handleSubmit(onSubmit)} className='my-8 w-96 flex flex-col gap-8'>
          <h1 className='font-semibold text-2xl text-center'>Welcome Back</h1>
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
                {...register('pass', { required: { value: true, message: "Password is required" }, minLength: { value: 8, message: "Enter atleast 8 characters" } })}
              />
              <img
                className="absolute right-2 top-2 cursor-pointer"
                src={pass ? ShowIcon : HideIcon} alt={`${pass ? 'show' : 'hide'} password`}
                onClick={() => { setPass(!pass) }}
              />
            </div>
            {errors.pass && <Error content={errors.pass.message} />}
          </div>
          <Buttons value="Signin" isSubmitting={isSubmitting} />
          <div className='text-center text-lg'>Don't have an account? <NavLink to={'/signup'} className={'font-bold hover:text-primary'}>Sign up</NavLink></div>
        </form>
      </div>
      <div className='w-2/4 md:grid place-content-center 3xl:hidden hidden'>
        <img src={LoginImg} alt="signup image" className='max-h-svh' />
      </div>
    </div>
  )
}

export default Signin
