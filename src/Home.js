import { useState,useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const {data, isLoading, error} = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="home">
            {error && <div>{ error }</div>}
            {isLoading && <p className="loaddingData">Loadding....</p>}
            {data && <BlogList blogs={data} title = "All Blogs."/>}
        </div>
    );
}
 
export default Home;