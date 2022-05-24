import express from 'express'
import cors from 'cors'

const PORT = 5100
const app = express().use(express.json()).use(cors())

app.use(express.static('public'))

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})