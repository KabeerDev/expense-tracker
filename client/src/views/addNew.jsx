import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import InputGroup from './components/inputGroup';
import Buttons from './components/buttons';
import Categories from './components/addnew/categories';
import Error from '../components/error';
import { add } from '../services/info';
import usePage from '../hooks/usePage';
import Select from './components/addnew/select';
import Meta from '../components/Meta';

const AddNew = () => {
  const { setPath } = usePage();
  const [category, setCategory] = useState("");
  const [showCat, setShowCat] = useState(false);
  const [type, setType] = useState('expense');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, setValue, setError, formState: { errors, isSubmitting } } = useForm();

  useEffect(() => setValue('category', category || 'Select'), [category, setValue]);

  const onSubmit = async (data) => {
    if (data.category === 'Select') {
      setError('category', { message: "Category is required" });
      return;
    } else {
      try {
        const res = await add({ ...data, type });
        if (res?.success) {
          setIsSubmitted(true);
          setTimeout(() => setPath('/'), 600);
        }
      } catch (err) {
        console.error(err);
      };
    };
  };

  const types = [
    { label: "Expense", value: "expense" },
    { label: "Income", value: "income" },
  ];

  return (
    <>
      <Meta title="add new" pageURL={window.location.href} />
      {showCat && <Categories type={type} category={category} setCategory={setCategory} cat={showCat} setCat={setShowCat} />}
      <div className='flex justify-center items-center h-full'>
        <form onSubmit={handleSubmit(onSubmit)} className='min-w-72 md:min-w-96 flex flex-col gap-3'>
          <InputGroup
            label="Amount"
            type='number'
            isRequired
            placeholder="Amount"
            {...register('amount', { required: "Amount is required", min: { value: 100, message: "Minimum amount must be 100" } })}
            error={errors.amount}
          />
          <InputGroup
            label="Note"
            type='text'
            placeholder="Enter note"
            {...register('note', { minLength: { value: 10, message: "Minimum 10 characters" } })}
            error={errors.note}
          />
          <Select
            label="Type*"
            options={types}
            onChange={(e) => {
              setValue('category', "Select");
              setType(e.target.value);
            }}
            type={type}
          />
          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-6'>
              <span className='font-semibold text-lg'>Category*</span>
              <input
                type='button'
                className='bg-gray hover:bg-slate-300 py-2 px-3 rounded-lg cursor-pointer'
                onClick={() => setShowCat(true)}
                {...register('category', { required: "Category is required" })}
              />
            </div>
            {errors.category && <Error content={errors.category.message} />}
          </div>
          <Buttons value="ADD" isSubmitting={isSubmitting} submitted={isSubmitted} />
        </form>
      </div>
    </>
  );
};

export default AddNew;
