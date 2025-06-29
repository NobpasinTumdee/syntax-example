import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();
const port = 3000;

// Middlewares
app.use(cors()); // Allows Cross Domains
app.use(morgan("dev")); // Show Logs
app.use(express.json()); // For read JSON


// http://localhost:3000/
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Error handling
app.use((err, req, res, next) => {
  const statusCode = typeof err.code === "number" ? err.code : 500;
  res.status(statusCode).json({
    message: err.message || "Something went wrong!",
    code: err.code,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})