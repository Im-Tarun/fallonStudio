import React from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {
    const { register,
         handleSubmit,
         reset,
          formState: { errors } } = useForm();

    const onSubmit = async(feedback) => { 
        console.log(feedback);
        const response = await fetch("api/submit-feedbacks", {
            method : "POST",
            headers:{
                'Content-Type': "application/json"
            },
            body: JSON.stringify(feedback)
        })
        const data = await response.json()
        console.log(data)
        reset()
    };

    return (
        <div className=' flex flex-col rounded-lg bg-[#ffffff] shadow-xl '> 
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-8 p-8 pt-12'>
                    <div className='relative h-fit'>
                        <label
                            htmlFor="name"
                            className="absolute text-sm font-semibold bottom-8.5 left-3 bg-[#ffffff] px-2 text-[#6c25ff]"
                        >
                            Full Name <span className='text-red-600'>*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Marry Doe"
                            autoComplete='off'
                            {...register('name', { required: 'Full Name is required' })}
                            className=" w-full border-2 border-gray-300 rounded-md px-5 py-2 focus:border-[#6c25ff]  outline-none placeholder:text-gray-400 placeholder:text-sm"
                        />
                        {errors.name && <p className='text-red-600 absolute right-0 text-sm'>{errors.name.message}</p>}
                    </div>

                    <div className='relative h-fit'>
                        <label
                            htmlFor="email"
                            className="absolute text-sm font-semibold bottom-8.5 left-3 bg-[#ffffff] px-2 text-[#6c25ff]"
                        >
                            Email Address <span className='text-red-600'>*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="example@example.com"
                            autoComplete='off'
                            {...register('email', { required: 'Email Address is required' })}
                            className=" w-full border-2 border-gray-300 rounded-md px-5 py-2 focus:border-[#6c25ff]  outline-none placeholder:text-gray-400 placeholder:text-sm"
                        />
                        {errors.email && <p className='text-red-600 absolute right-0 text-sm'>{errors.email.message}</p>}
                    </div>
 

                    <div className='relative h-fit'>
                        <label
                            htmlFor="message"
                            className="absolute text-sm font-semibold -top-3 left-3 bg-[#ffffff] px-2 text-[#6c25ff]"
                        >
                            Message <span className='text-red-600'>*</span>
                        </label>
                        <textarea
                            id="message"
                            placeholder="Loved this form"
                            autoComplete='off'
                            {...register('message', { required: 'message is required' })}
                            className=" w-full border-2 border-gray-300 rounded-md px-5 py-2 focus:border-[#6c25ff] outline-none placeholder:text-gray-400 placeholder:text-sm"
                            rows={4}
                            
                        />
                        {errors.message && <p className='text-red-600 absolute right-0 text-sm'>{errors.message.message}</p>}
                    </div>
 

                    <button type="submit" className='w-full bg-[#6c25ff] py-2.5 text-center text-white font-semibold rounded-md'>
                       Submit
                    </button>
                </form> 
        </div>
    );
};

export default Form;
