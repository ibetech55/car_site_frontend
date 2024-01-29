/* eslint-disable no-undef */
import express from 'express';
import path from 'path'
import history from 'connect-history-api-fallback'
const app = express();
app.use(history());

app.use("/", path.join(__dirname, "dist"));

let port = process.env.PORT || 3000 ;
app.listen(port, () => console.log("Listening to Port:", port));