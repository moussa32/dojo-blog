import { useState,useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(response => {
                if(!response.ok){
                    throw Error("Couldn't fetch the data for that resource.");
                }
                return response.json();
            })
            .then(data => {
                setBlogs(data);
                setIsLoading(false);
                setError(null);
            })
            .catch(erorr => {
                setError(erorr.message);
                setIsLoading(false);
            })
    }, []);

    return ( 
        <div className="home">
            {error && <div>{ error }</div>}
            {isLoading && <p className="loaddingData">Loadding....</p>}
            {blogs && <BlogList blogs={blogs} title = "All Blogs."/>}
        </div>
    );
}
 
export default Home;