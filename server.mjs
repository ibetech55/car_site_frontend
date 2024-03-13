/* eslint-disable no-undef */
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import express from "express";
import path from "path";
import history from "connect-history-api-fallback";
import cors from "cors";

const app = express();
app.use(history());
const origins = [
  process.env.VITE_BRAND_API_URL,
  process.env.VITE_AUTH_API_URL,
  process.env.VITE_USER_API_URL,
];
app.use(
  cors({
    origin: origins,
    credentials: true,
  })
);

app.use("/", express.static(path.join("dist")));
app.use("/activate_account/:account_token", express.static(path.join("dist")));

app.use((req, res, next) => {
  const origin = origins.includes(req.header("origin"))
    ? req.headers.origin
    : null;
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  res.setHeader("Access-Control-Allow-Origin", `${origin}`);
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH"
  );
  next();
});

let port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`Listening to Port: ${process.env.PORT}`)
);
