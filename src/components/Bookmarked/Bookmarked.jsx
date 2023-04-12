import React from 'react';

const Bookmarked = (props) => {
    // const title = props;
    // console.log(props);
    return (
        <div className='sticky top-0'>
            <div className='text-info bg-blue-100 p-4 border-2 border-info rounded-md text-center font-semibold'>
                Spent time on read : {props.time} min
            </div>
            <div className='bg-slate-200 mt-4 p-6 rounded-md'>
                <h2 className='text-xl font-bold'>Bookmarked Blogs : {props.title.length}</h2>

                <ul>
                    {props.title.map((singleTitle, index) => <li className='bg-white p-4 my-3 rounded-md' key={index}>{singleTitle}</li>)}
                </ul>

            </div>
        </div>
    );
};

export default Bookmarked;