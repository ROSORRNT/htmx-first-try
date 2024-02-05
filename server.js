const express = require("express")
const cors = require("cors")
const app = express()
const port = 3000

app.use(cors())

const messages = [
  {
    id: 1,
    text: "Hello World",
  },
  {
    id: 2,
    text: "Hello Node",
  },
]

app.get("/messages", (req, res) => {
  res.json(messages)
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
