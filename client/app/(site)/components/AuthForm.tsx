"use client"

import React, { useCallback, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import Button from "@/app/components/Button"
import Input from "@/app/components/Input"
import { toast } from "react-hot-toast"

type VARIANT = "LOGIN" | "REGISTER"

const AuthForm = () => {
  const router = useRouter()
  const [username, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [variant, setVariant] = useState("LOGIN")

  const addVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER")
    } else {
      setVariant("LOGIN")
    }
  }, [variant])

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      setIsLoading(true)

      if (variant === "REGISTER") {
        await register()
        await login()
      } else if (variant === "LOGIN") {
        await login()
      }
    } catch (error) {
      console.log(error)
      
    } finally {
      setIsLoading(false)
    }
  }

  const register = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      }

      await axios.post(
        "http://localhost:8080/auth/register",
        {
          username,
          email,
          password,
        },
        config
      )

      toast.success("Registration completed!")
      router.push("/home")
    } catch (error) {
      console.log(error)
      
    }
  }

  const login = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      }

      const { data } = await axios.post(
        "http://localhost:8080/auth/login",
        {
          email,
          password,
        },
        config
      )

      toast.success("Logged in!")
      router.push("/home")
      console.log(data)
      localStorage.setItem("UserInfo", JSON.stringify(data))
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong")
    }
  }

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={onSubmit}>
          {variant === "REGISTER" && (
            <Input
              id="name"
              label="Name"
              type="name"
              disabled={isLoading}
              onChange={(e) => setUserName(e.target.value)}
            />
          )}
          <Input
            id="email"
            label="Email address"
            type="email"
            disabled={isLoading}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            id="password"
            label="Password"
            type="password"
            disabled={isLoading}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            <Button  type="submit">
              {variant === "LOGIN" ? "Sign in" : "Register"}
            </Button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
          <div>
            {variant === "LOGIN"
              ? "New to Messenger?"
              : "Aleardy have an account?"}
          </div>
          <div onClick={addVariant} className="underline cursor-pointer">
            {variant === "LOGIN" ? "Create an account" : "Login"}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthForm
