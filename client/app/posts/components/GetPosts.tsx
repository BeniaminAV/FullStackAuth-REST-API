import React from "react"

const GetPosts = async () => {
  const getAllPosts = async () => {
    const res = await fetch("http://localhost:8080/data/posts")
    return res.json()
  }

  const posts = await getAllPosts()

  return (
    <div>
      {posts.map((post: any) => {
        return (
          <div key={post.id} className="space-x-2 text-rose-500 py-4">
            <div className="flex items-center justify-start space-x-2">
              <p>{post.id}.</p>
              <p>{post.title}</p>
            </div>
            <p className="text-md text-green-500">{post.body}</p>
          </div>
        )
      })}
    </div>
  )
}

export default GetPosts
