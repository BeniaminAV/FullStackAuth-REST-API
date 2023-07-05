"use client"

import React from "react"

interface Links {
  label: string
  onClick: () => void
}

const Links: React.FC<Links> = ({ label, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="font-bold text-rose-700 cursor-pointer hover:text-rose-500">
      {label}
    </div>
  )
}

export default Links
