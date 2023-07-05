"use client"

import React from "react"
import Container from "./Container"
import Links from "./Links"
import { useRouter } from "next/navigation"
import { toast } from "react-hot-toast"
import Button from "./Button"

const Navbar = () => {
  const router = useRouter()

  const logOut = () => {
    try {
      localStorage.removeItem("UserInfo")

      console.log(localStorage)
      router.push("/")
      toast.success("You logout.")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="fixed w-full bg-green-300 z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex items-center justify-between space-x-5 uppercase">
            <div className="flex gap-x-4">
              <Links onClick={() => router.push("/home")} label="Home" />
              <Links onClick={() => router.push("/posts")} label="Post" />
              <Links onClick={() => router.push("/comments")} label="Comment" />
              <Links onClick={() => router.push("/todo")} label="Todo" />
            </div>
            <div className="w-[100px]">
              <Button onClick={() => logOut()}>Log out</Button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Navbar
