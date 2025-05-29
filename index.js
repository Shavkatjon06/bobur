import express from 'express'

const app = express()
app.use(express.json())

app.listen(6060, () => {
    console.log("Backend is working")
})

app.get('/greet', (req, res) => {
    try {
        res.json({ success: true, message: "Hello, World!" })
    } catch (error) {
        res.json({ error: true, message: error.message })
    }
})