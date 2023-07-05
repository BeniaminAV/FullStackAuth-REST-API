import { getAllTodos, getAllComments, getAllPosts } from "../controllers/data"
import express from "express"

export default (router: express.Router) => {
  router.get("/data/posts", getAllPosts)
  router.get("/data/comments", getAllComments)
  router.get("/data/todo", getAllTodos)
}
