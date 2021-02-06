import { useState,useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(response => {
                return response.json();
            })
            .then(data => {
                setBlogs(data);
                setIsLoading(false);
            })
    }, []);

    return ( 
        <div className="home">
            {isLoading && <p className="loaddingData">Loadding....</p>}
            {blogs && <BlogList blogs={blogs} title = "All Blogs."/>}
        </div>
    );
}
 
export default Home;