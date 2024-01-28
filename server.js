import express from 'express';
// const serverStatic = require("serve-static");
import history from 'connect-history-api-fallback'
const app = express();
app.use(history());

app.use("/", express.static('./dist'));

let port = 3000;
app.listen(port, () => console.log("Listening to Port:", port));