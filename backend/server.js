const express=require("express");
const notes=require('./data/tasks.js');
const dotenv=require('dotenv');
const connectDB=require("./config/db")
const  userRoutes = require("./routes/userRoutes")
const { notFound, errorHandler } = require("./middlewares/errorMiddleware.js");
const cors=require('cors');//handling CORS error
const app=express();
dotenv.config();//accesing data from env usualy contains mongoouri and server connection
connectDB();//calling the function to connect

app.use(express.json());
const PORT=process.env.PORT || 3000;



app.use(cors({
    origin:"*"
}))

app.get('/',(req,res) => {
    res.send("API is running...");
})

app.get('/notes',(req,res) => {
    res.json(notes);
})

app.use('/users',userRoutes);

app.use(notFound);
app.use(errorHandler);

app.get('/notes/:id',(req,res)=> {
    const note=notes.filter((note) => note._id===req.params.id);
    res.send(note);
})

app.listen(PORT,res => {
    console.log(PORT)
    console.log('port is running');
})
