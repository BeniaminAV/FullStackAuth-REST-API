import express from "express"
import authentication from "./authentication"
import users from "./users"
import data from "./data"

const router = express.Router()

export default (): express.Router => {
  authentication(router)
  users(router)
  data(router)

  return router
}
