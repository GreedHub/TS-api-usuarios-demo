import express from 'express'
import userController from './controllers/users'

const PORT = 5000
const app = express();

app.get('/users/:userId', async (req,res)=>{

    const {userId} = req.params

    if(!userId)
        return res.status(400).send()
    
    let results = await userController.getUserById(parseInt(`${userId}`))

    res.json(results)
})

app.listen(PORT,()=>{
    console.log(`App listening on http://localhost:${PORT}`)
})