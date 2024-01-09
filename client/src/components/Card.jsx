import { Link } from "react-router-dom"

const Card = ({ post }) => {
  return ( 
    <div className="card p-5 border rounded-lg shadow-lg">
      <Link className="link" to={`/post/${post.id}`}>
        <img src={post.url} alt="" className="h-52 object-cover my-5" />
        <span className="title">{post.title}</span>
        <p className="desc mb-5 leading-6">{post.desc}</p>
        <button className="btn bg-blue-800 text-white">Read More</button>
      </Link>
    </div>
   )
}
 
export default Card