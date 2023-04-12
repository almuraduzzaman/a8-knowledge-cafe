import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Bookmarked from '../Bookmarked/Bookmarked';
import { ToastContainer, toast } from 'react-toastify';

const BothContainer = () => {
    const [blogs, setBlogs] = useState([]);
    const [time, setTime] = useState(0);
    const [title, setTitle] = useState([]);
    const [ids, setIds]=useState([]);

    const markBtn = (readTime) => {
        setTime(prevTime => prevTime + readTime);
    };

    const bookmarkedBtn = (blog, id) => {
        setIds([...ids,id])
        
        const idValidation= ids.find(i=>i==id)
       if(idValidation){
        toast("You Have Already Bookmarked This Blog!")
       }
        setTitle([...title, blog]);

    };

    useEffect(()=>{
        // console.log(ids);
       
    },[ids])

    useEffect(() => {
        // console.log(title);
    }, [title]);

    useEffect(() => {
        fetch('fakeapi.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className='md:grid grid-cols-4 px-4 md:px-0 md:w-9/12 gap-4 mx-auto'>
            <div className='col-span-3'>
                {
                    blogs.map(blog => <Blog markBtn={markBtn} bookmarkedBtn={bookmarkedBtn} key={blog.id} blog={blog}></Blog>)
                }
            </div>
            <div className='col-span-1'>
                <Bookmarked time={time} title={title}></Bookmarked>
            </div>
        </div>
    );
};

export default BothContainer;