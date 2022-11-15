import { useParams } from "react-router"
import { Link } from "react-router-dom";
import UseFetch from "./UseFetch";
import { useHistory } from "react-router";

const BlogDetails = () => {
    
  const { id } = useParams();
  const { data: blog, isLoading, error } = UseFetch('http://localhost:8000/blogs/' + id);

  const history = useHistory();
  
  const handleDelete = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: "DELETE",
    })
      .then(() => {        
        history.push("/");
      })
  }

  return (
    <div className="blog-details">
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>{ error }</h1>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>

          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
      <div>
        <Link to='/'>Go Back</Link>
      </div>
    </div>
  )
}

export default BlogDetails