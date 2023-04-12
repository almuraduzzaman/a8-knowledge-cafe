import React from 'react';

const Header = () => {
    return (
        <div className='px-4 md:px-0 md:w-9/12 mx-auto'>
            <div className='flex justify-between items-center pt-12'>
                <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
                <img className='w-[50px] h-[50px] rounded-full border-2 border-gray-400' src="https://picsum.photos/200/300" alt="User Image" />
            </div>
            <div className='bg-gray-400 h-0.5 my-8'></div>
        </div>
    );
};

export default Header; 