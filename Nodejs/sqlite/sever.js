import express from "express";
import cors from "cors";
import morgan from "morgan";
const app = express();
const prisma = new PrismaClient();
const port = 3000;

// Middlewares
app.use(cors()); // Allows Cross Domains
app.use(morgan("dev")); // Show Logs
app.use(express.json()); // For read JSON
import { PrismaClient } from "@prisma/client";


// Middleware
app.use(express.json());

// GET /logs - ดึงข้อมูลทั้งหมดจาก honeypot_logs
app.get("/logs", async (req, res) => {
  try {
    const logs = await prisma.honeypot_logs.findMany();
    res.json(logs);
  } catch (error) {
    console.error("❌ Error fetching logs:", error);
    res.status(500).json({ error: "Internal Server Error" });
    console.log("prisma keys:", Object.keys(prisma));

  }
});

// ตัวอย่าง POST เพื่อใส่ข้อมูล
app.post("/logs", async (req, res) => {
  const { ip, attack } = req.body;
  try {
    const newLog = await prisma.honeypot_logs.create({
      data: { ip, attack },
    });
    res.json(newLog);
  } catch (error) {
    console.error("❌ Error inserting log:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
