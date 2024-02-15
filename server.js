/* eslint-disable no-undef */
import dotenv from 'dotenv';
dotenv.config({path:'./.env'})
import express from 'express';
import path from 'path';
import history from 'connect-history-api-fallback'
const app = express();
app.use(history());

app.use("/", express.static(path.join('dist')));
app.use("/activate_account/:account_token", express.static(path.join('dist')));

let port = process.env.PORT || 3000;
app.listen(port, () => console.log(`%cListening to Port: ${process.env.PUBLIC_URL}`, 'color: blue;'));