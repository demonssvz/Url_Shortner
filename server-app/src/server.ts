import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/dbConfig";
import shortUrl from "./routes/shortUrl";
dotenv.config();
connectDb();

  
 const port = process.env.PORT || 5001;


const app = express();
app.listen(port, () => {
  console.log(`✅ Server started successfully on port: ${port}`);
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["http://localhost:3000",
      "https://url-shortner-n86u.vercel.app/api"
     ] ,
    credentials: true,
  })
);

app.use("/api/", shortUrl);

app.get("/", (req, res) => {
  res.send("Backend is working!");
});

app.listen(port, () => {
  console.log(`Server started successfully on port : ${port}`);
});
