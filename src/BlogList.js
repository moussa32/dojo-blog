const BlogList = ({ blogs, title, handleDelete }) => {
    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog) => (
                <article className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by: { blog.author }</p>
                    <button onClick={() => handleDelete(blog.id)}>delete blog</button>
                </article>
            ))}
        </div>
    );
}
 
export default BlogList;