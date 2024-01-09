import { posts } from '../data/data.js'

const Post = () => {
  const post = posts[0]

  return ( 
    <div className="container flex flex-col align-middle">
      <img src={post.url} alt="image" className="w-full h-80 object-cover mb-5"/>
      <h1 className="font-bold text-xl">{post.title}</h1>
      <p className="post-desc">{post.body}</p>
      <p className="post-long-desc"></p>
    </div>
   )
}
 
export default Post