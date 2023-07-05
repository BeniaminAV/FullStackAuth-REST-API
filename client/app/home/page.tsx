import React from "react"
import Navbar from "../components/Navbar"

const Home = () => {
  return (
    <main className="w-full h-full bg-gray-900">
      <Navbar />
      <div className="pt-40">
        <div className="flex items-center justify-center gap-x-10 text-center">
          <div>
            <h2 className="text-rose-500 text-3xl">Back-End</h2>
            <p className="text-neutral-500 font-bold">Typescript</p>
            <p className="text-neutral-500 font-bold">Nodemon</p>
            <p className="text-neutral-500 font-bold">Ts-Node</p>
            <p className="text-neutral-500 font-bold">Express</p>
          </div>
          <div>
            <h2 className="text-rose-500 text-3xl">Front-End</h2>
            <p className="text-neutral-500 font-bold">Typescript</p>
            <p className="text-neutral-500 font-bold">Next.Js</p>
            <p className="text-neutral-500 font-bold">React.Js</p>
            <p className="text-neutral-500 font-bold">TailwindCSS</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
