import { posts } from '../data/data.js'
import Card from '../components/Card.jsx'

const Home = () => {
  return ( 
    <div className="container mx-auto">
      <h1 className="text-2xl mb-9">Homepage</h1>
      <div className='grid grid-cols-3 gap-8'>
        {posts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
    </div>
   )
}
 
export default Home