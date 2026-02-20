import React, { useEffect, useState } from 'react'

const App = () => {
  const [posts, setposts] = useState([])
  const [loading, setloading] = useState(false)
  let fetchdata = async () => {
    let url = `https://jsonplaceholder.typicode.com/posts`
    setloading(true)
    let data = await fetch(url)
    let res = await data.json()
    setposts(res)
    setloading(false)
  }
  let handleDelete = async (id) => {

    let data = posts.filter(elem => {
 return elem.id !== id

}

)
setposts(data)
// console.log(data) 

  }
  useEffect(() => {
    fetchdata()
  }, [])
  console.log(posts);
  return (
    loading ? <div className=' h-screen items-center text-center flex justify-center
'> <p className='text-2xl'>Loading...</p> </div> :
      //  ff
      <div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {posts.map((elem, index) => {
            if (index >= 5) {
              return
            }
            else {
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

                <button onClick={() => handleDelete(elem.id)} className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-600 transition">
                  Delete
                </button>
              </div>
            </div>
            }
          })}
        </div>
      </div>

  )
}

export default App