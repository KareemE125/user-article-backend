import express from 'express'
import connectDB from './DB/conncetion.js'
import authRouter from './src/modules/auth/auth.router.js'
import userRouter from './src/modules/user/user.router.js'
import articleRouter from './src/modules/article/article.router.js'

const BASE_URL = '/api/v1'
const app = express()
const port = 5000

app.use(express.json())

app.use(`${BASE_URL}/auth`,authRouter);
app.use(`${BASE_URL}/users`,userRouter);
app.use(`${BASE_URL}/articles`,articleRouter);

app.use('*',(_,res)=>res.json({message: '404 Page Not Found'}))

connectDB();

app.listen(port, () => console.log(`Example app listening on port ${port}!`))