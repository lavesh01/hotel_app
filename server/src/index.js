import cookieParser from "cookie-parser"
import cors from "cors"
import dotenv from "dotenv"
import express from "express"
import hotelRoute from "../routes/hotel.js"
import locationRoute from "../routes/location.js"
import userRoute from "../routes/user.js"

dotenv.config();

const app = express();
app.use(cors({ credentials:true, origin: process.env.ORIGIN_URL}));
app.use(express.json());
app.use(cookieParser())

app.use("/api/user", userRoute)
app.use("/api/hotels", hotelRoute)
app.use("/api", locationRoute)

app.use((err , req, res, next) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);

  res.status(500).json({
    message: "Something went really wrong",
  });
});

const PORT = process.env.PORT || 3000;

app.listen( PORT , () => console.log("Server stared!"));