/* eslint-disable no-undef */
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import express from "express";
import path from "path";

const app = express();


app.use("/", express.static(path.join("dist")));
app.use("/activate_account/:account_token", express.static(path.join("dist")));

const port = process.env.PORT || 3000;

if (process.env.NODE_ENV === "development") {
  app.listen(port, process.env.CAR_SITE_FRONTEND_DOMAIN, () =>
    console.log(`Listening to Port: ${process.env.CAR_SITE_FRONTEND_URL}`)
  );
} else {
  app.listen(port, () =>
    console.log(`Listening to Port: ${process.env.CAR_SITE_FRONTEND_URL}`)
  );
}
