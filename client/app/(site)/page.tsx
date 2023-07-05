import React from "react"
import AuthForm from "./components/AuthForm"

const Home = () => {
  return (
    <div className="flex min-h-full flex-col justify-center items-center py-12 sm:px-16 lg:px-8 bg-gray-900">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
          Sign in to your account
        </h2>
      </div>
      <AuthForm />
    </div>
  )
}

export default Home
