import express from 'express'

const app = express()
app.use(express.json())

app.listen(6060, () => {
    console.log("Backend is working.")
})

app.get('/greet', (req, res) => {
    try {
        res.json({ success: true, message: "Hello, Task 1" })
    } catch (error) {
        res.json({ error: true, message: error.message })
    }
})