import { Comments, Posts, Todos } from "../data"
import express from "express"

export const getAllPosts = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    return res.json(Posts)
  } catch (error) {
    console.log(error)
    return res.sendStatus(400)
  }
}

export const getAllComments = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    return res.json(Comments)
  } catch (error) {
    console.log(error)
    return res.sendStatus(400)
  }
}

export const getAllTodos = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    return res.json(Todos)
  } catch (error) {
    console.log(error)
    return res.sendStatus(400)
  }
}
