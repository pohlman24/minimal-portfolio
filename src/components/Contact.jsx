import React from 'react';
import Title from './Title';

function Content(){
    return(
        
        <div className='flex flex-col mb-10 mx-auto'>
            <div className='flex justify-center items-center'>
                <form
                    action="https://getform.io/f/59a795a5-2d5d-4465-9be1-9168817025cb"
                    method='POST'
                    className='flex flex-col w-full md:w-7/12'
                >
                    <Title>Contact Me</Title>
                    <input 
                        type="text"
                        name='name'
                        placeholder='Name'
                        className='p-2 bg-transparent border-2 rounded-md foucs:outline-none'
                    />
                    <input 
                        type="text"
                        name='email'
                        placeholder='Email'
                        className='my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none'
                    />
                    <textarea 
                        name="message" 
                        placeholder='Message' 
                        rows="10"
                        className='mb-4 p-2 bg-transparent border-2 rounded-md focus:outline-none'
                    />
                    <button
                        type='submit' 
                        className='text-center inline-bloock px-8 py-3 w-max text-base front-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white'>
                        Contact Me
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Content;