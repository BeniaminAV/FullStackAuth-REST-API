"use client"

import React from "react"

interface Button {
  type?: "submit"
  children: React.ReactNode
  onClick?: () => void
}

const Button: React.FC<Button> = ({ type, children, onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full bg-blue-500 p-2 rounded-md hover:bg-blue-700 hover:text-white transition">
      {children}
    </button>
  )
}

export default Button
