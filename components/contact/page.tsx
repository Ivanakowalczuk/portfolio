
'use client';

import { sendEmail } from '@/utils/send-emails';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit, formState: { isSubmitSuccessful }, reset } = useForm<FormData>();

  async function onSubmit(data: FormData) {
    sendEmail(data);
    const form = document.getElementById('contactForm') as HTMLFormElement; 
    form.reset();
  }

  
  return (
    <form id="contactForm" className='flex-col justify-center items-center sm:w-[500px] sm:m-auto' onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-4xl text-center font-bold text-gray-100 mb-4 animate-fade-down">CONTACTAME</h1>
      <div className='mb-5 '>
        <label
          htmlFor='name'
          className='mb-2 text-base text-white'
        >
          Nombre y apellido
        </label>
        <input
          type='text'
          placeholder='Nombre y apellido'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base  text-gray-700  focus:border-purple-500 focus:shadow-md'
          {...register('name', { required: true })}
        />
      </div>
      <div className='mb-5'>
        <label
          htmlFor='email'
          className='mb-2 text-base text-white'
        >
          Email
        </label>
        <input
          type='email'
          placeholder='nombre@email.com'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base text-gray-700 focus:border-purple-500 focus:shadow-md'
          {...register('email', { required: true })}
        />
      </div>
      <div className='mb-5'>
        <label
          htmlFor='message'
          className='mb-2 text-base text-white'
        >
          Mensaje
        </label>
        <textarea
          rows={4}
          placeholder='Escribe tu mensaje'
          className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base text-gray-700  focus:border-purple-500 focus:shadow-md'
          {...register('message', { required: true })}
        ></textarea>
      </div>
      <div>
        <button className='rounded-md bg-gradient-to-r from-blue-600 to-red-600 py-3 px-8 text-base font-semibold text-white outline-none hover:bg-gradient-to-r hover:from-blue-600/80 hover:to-red-600/80 '>
          Enviar
        </button>
      </div>
    </form>
  );
};

export default Contact;
