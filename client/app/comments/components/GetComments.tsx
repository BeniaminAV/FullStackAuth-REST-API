import React from "react"

const getAllComments = async () => {
  const res = await fetch("http://localhost:8080/data/comments")
  return res.json()
}

const GetComments = async () => {
  const comments = await getAllComments()

  return (
    <div>
      {comments.map((comment: any) => {
        return (
          <div key={comment.id} className="space-x-2 text-rose-500 py-4">
            <div className="flex items-center justify-start space-x-2">
              <p>{comment.id}.</p>
              <p>{comment.name}</p>
            </div>
            <p className="text-orange-500">Email: {comment.email}</p>
            <p className="text-md text-green-500">{comment.body}</p>
          </div>
        )
      })}
    </div>
  )
}

export default GetComments
