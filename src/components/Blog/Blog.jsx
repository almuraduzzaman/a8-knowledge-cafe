import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookBookmark, faBookmark } from '@fortawesome/free-solid-svg-icons';

const Blog = (props) => {
    const { id, author_name, blog_title, blog_cover_image, author_image, read_time, publish_date, hash_tags } = props.blog;
    const markBtn = props.markBtn;
    const bookmarkedBtn = props.bookmarkedBtn;
    // console.log(props.blog);

    return (
        <div className='mb-6'>
            <div className="card bg-base-100 shadow-xl">
                <figure><img className='w-full h-[450px]' src={blog_cover_image} /></figure>
                <div className='mt-8 mb-4 mx-3 card-body'>
                    <div className='flex justify-between'>
                        <div className='md:flex gap-4'>
                            <img className='w-[50px] h-[50px] rounded-full border-2 border-gray-400' src={author_image} alt="" />
                            <div>
                                <h3 className='text-2xl font-bold'>{author_name}</h3>
                                <p className='text-slate-500'>{publish_date}</p>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <div className="text-slate-500 text-xl">{read_time} min read <FontAwesomeIcon onClick={() => bookmarkedBtn(blog_title,id)} className='cursor-pointer hover:text-red-500' icon={faBookBookmark} /></div>
                        </div>
                    </div>
                    <h2 className="text-4xl font-bold my-4">{blog_title}</h2>
                    {/* <p className='text-slate-500'>{hash_tags}</p> */}
                    {
                        <p className='text-slate-500'>{hash_tags.map((tags,index)=><span className='mr-2' key={index}>{tags}</span>)}</p>
                    }
                    <div className="card-actions justify-start">
                        <div onClick={() => markBtn(read_time)} className="btn btn-link text-info mt-4 hover:text-blue-600">Mark as read</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;