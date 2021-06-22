
import express from 'express';
import config from './config';
import connect from './db/connect';
import route from './api/router/router';
const port=config.port as number;
const host=config.host as string;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

connect();
route(app);
app.listen(port,host,()=>{
    console.log(`Server listening at http://${host}:${port}`);
})

