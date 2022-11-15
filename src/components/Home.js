import BlogList from "./BlogList";
import UseFetch from "./UseFetch";

const Home = () => {

  const { data:blogs, isLoading, error } = UseFetch('http://localhost:8000/blogs');

  return (
    <div className="home">
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>{ error }</h1>}
      {blogs && <BlogList blogs={blogs} title="All Blog" />}
    </div>
  );
}
 
export default Home;