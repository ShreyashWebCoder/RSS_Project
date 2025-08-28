import express from "express";
import cors from "cors";
import authRouter from "./routes/auth/authRouter.js";
import adminRouter from "./routes/adminRouter.js";

const app = express();

// Define CORS options for production

// Use the cors middleware with your defined options
app.use(cors());

app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/admin", adminRouter);

export default app;
