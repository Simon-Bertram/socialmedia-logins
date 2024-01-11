import { posts } from '../data/data.js'
import { useLocation } from "react-router-dom"

const Post = () => {
  const location = useLocation()
  const path = location.pathname.split("/")[2]
  const post = posts.find(post => post.id.toString() === path)

  console.log(location)

  return ( 
    <div className="flex flex-col align-middle">
      <img src={post.url} alt="image" className="w-full h-80 object-cover mb-5"/>
      <div className="container mx-auto">
        <h1 className="font-bold text-4xl text-center mb-8">{post.title}</h1>
        <p className="post-desc text-gray-500 text-2xl font-light">{post.body}</p>
        <p className="post-long-desc"></p>
      </div>
    </div>
   )
}
 
export default Post