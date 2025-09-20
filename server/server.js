import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());

//testing response
app.get("/", (req,res)=>{
    res.json({
        id:1,
        name:"Trackly"
    })
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});

