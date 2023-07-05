import React from "react"

const getAllTodos = async () => {
  const res = await fetch("http://localhost:8080/data/todo")
  return res.json()
}

const GetTodos = async () => {
  const todos = await getAllTodos()

  return (
    <div>
      {todos.map((todo: any) => {
        return (
          <div key={todo.id} className="space-x-2 text-rose-500 py-4">
            <div className="flex items-center justify-start space-x-2">
              <p>{todo.id}.</p>
              <p>{todo.title}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default GetTodos
