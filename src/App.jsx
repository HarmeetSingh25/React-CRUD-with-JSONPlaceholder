import React, { useEffect, useState } from 'react'
import Createpost from './component/Createpost'

const App = () => {
  const [posts, setposts] = useState([])
  const [loading, setloading] = useState(false)
  const [createposttoggle, setcreateposttoggle] = useState(false)
  const [editpost, seteditpost] = useState(null)
  let fetchdata = async () => {
    let url = `https://jsonplaceholder.typicode.com/posts?_limit=5`
    setloading(true)
    let data = await fetch(url)
    let res = await data.json()
    setposts(res)
    setloading(false)
  }

  let handleDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id} `, {
      method: "Delete"
    })
    let data = posts.filter(elem => {
      return elem.id !== id

    })

    setposts(data)
    // console.log(data) 

  }
  
  let Updatehandler = (id) => {
    let found = posts.find(post => post.id === id)
    seteditpost(found)

  }
  useEffect(() => {
    fetchdata()
    //  console.log(editpost);
  }, [])
  console.log(posts);
  return (
    loading ? <div className=' h-screen items-center text-center flex justify-center
'> <p className='text-2xl'>Loading...</p> </div> :
      //  ff
      <div>
        <div className='flex flex-col items-end justify-end px-4 py-6 '>
          <div className=' flex justify-between w-screen px-10'>
            <button onClick={() => {

              setcreateposttoggle(true)
            }} class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition duration-300 ease-in-out">
              Create Post
            </button>


          </div>

          {createposttoggle ? <Createpost posts={posts} setposts={setposts} setcreateposttoggle={setcreateposttoggle} /> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {posts.map((elem, index) => {
              // if (index >= 5) {
              //   return
              // }
              // else {
              return <div
                key={elem.id}
                className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition duration-300"
              >
                <h2 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                  {elem.title}
                </h2>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {elem.body}
                </p>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-xs text-gray-400">
                    User ID: {elem.userId}
                  </span>

                  <button onClick={() => Updatehandler(elem.id)} className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-600 transition">
                    Update
                  </button>
                  <button onClick={() => handleDelete(elem.id)} className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-600 transition">
                    Delete
                  </button>
                </div>
              </div>
              // }
            })}
          </div>}
        </div>

      </div>

  )
}

export default App