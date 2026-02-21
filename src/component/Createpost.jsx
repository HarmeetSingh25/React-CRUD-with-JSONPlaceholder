import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
const Createpost = ({ posts, setposts, setcreateposttoggle }) => {

    let { register, handleSubmit, formState: { errors } } = useForm()
    const onsubmit = async (data) => {
        let url = `https://jsonplaceholder.typicode.com/posts?_limit=5`
        let res = await fetch(url, {
            method: "POST", headers: {
                "Content-Type": "application/json"
            }, body: JSON.stringify(data)
        })

        let result = await res.json();

        setposts(prev => [...prev, {...result ,  id : nanoid()}])
        setcreateposttoggle(false)


        alert("Add the new post")
    }

    return (

        <div className="w-screen min-h-screen flex items-center justify-center bg-black/40 fixed top-0 left-0 z-50">

            <div className="relative bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">

                {/* Close Button */}
                <button
                    onClick={() => setcreateposttoggle(false)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-xl transition duration-300"
                >
                    ❌
                </button>

                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    Add New Post
                </h2>

                <form onSubmit={handleSubmit(onsubmit)} className="flex flex-col gap-4">

                    {/* Title */}
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-600 mb-1">
                            Title
                        </label>
                        <input
                            type="text"
                            placeholder="Enter post title"
                            {...register("title", { required: "Title is required" })}
                            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                        />
                    </div>

                    {/* Body */}
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-600 mb-1">
                            Content
                        </label>
                        <textarea
                            rows="4"
                            placeholder="Enter post content"
                            {...register("body", { required: "Body is required" })}
                            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                        />
                    </div>

                    {/* User ID */}
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-600 mb-1">
                            User ID
                        </label>
                        <input
                            type="number"
                            defaultValue={1}
                            {...register("userId")}
                            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                        />
                    </div>

                    <button


                        className="bg-red-500 text-white py-2 rounded-lg font-semibold hover:bg-red-600 transition duration-300"
                    >
                        Create Post</button>

                </form>
            </div>
        </div>
    )
}

export default Createpost