import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());

app.get("/api/key", async (req, res) => {
  const key = process.env.GOOGLE_MAPS_API_KEY;

  if (!key) {
    return res.status(400).json({ error: "Cannot find key" });
  }

  res.json({ key });
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
