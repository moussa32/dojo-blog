const BlogList = ({ blogs, title }) => {
    return ( 
        <div className="blog-list">
            <h2 className="categoryTitle">{ title }</h2>
            {blogs.map((blog) => (
                <article className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by: { blog.author }</p>
                </article>
            ))}
        </div>
    );
}
 
export default BlogList;