/* eslint-disable no-undef */
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import express from "express";
import path from "path";
import history from "connect-history-api-fallback";
import cors from "cors";

const app = express();
app.use(history());
// const origins = [process.env.VITE_BRAND_API_URL, process.env.VITE_AUTH_API_URL, process.env.VITE_USER_API_URL]

app.use(
  cors({
    origin: `${process.env.PUBLIC_URL}/*`,
    credentials: true,
  })
);
app.use((req, res, next) => {
  // const origin = origins.includes(req.header('origin'))
  // ? req.headers.origin
  // : null;
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  res.setHeader(
    "Access-Control-Allow-Origin",
    `${process.env.API_URL_PREFIX}/*`
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH"
  );
  next();
});

app.use("/", express.static(path.join("dist")));
app.use("/activate_account/:account_token", express.static(path.join("dist")));

let port = process.env.PORT || 3000;

if (process.env.NODE_ENV === "development") {
  app.listen(port, process.env.CAR_SITE_FRONTEND_DOMAIN, () =>
    console.log(`Listening to Port: ${process.env.CAR_SITE_FRONTEND_URL}`)
  );
} else {
  app.listen(port, () =>
    console.log(`Listening to Port: ${process.env.CAR_SITE_FRONTEND_URL}`)
  );
}
