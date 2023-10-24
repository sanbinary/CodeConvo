import express from "express"
import http from "http"
import { Request, Response } from "express"

const app = express()

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!")
})

const server = http.createServer(app)

const port = process.env.PORT || "8000"

server.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
