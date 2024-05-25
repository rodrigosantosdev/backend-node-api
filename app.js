// import express
import express from 'express'
import userRoutes from "./routes/userRoutes.js";

const app = express();
app.use(express.json());
app.use('/api', userRoutes)

app.listen(3001, () => {
    console.log('servidor online nessa porra!!!')
});