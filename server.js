const PORT = 8000;
const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");

const app = express();

app.use(cors());
app.use(express.json());

require("dotenv").config();
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
app.post("/images", async (req, res) => {
  try {
    // const { prompt } = req.body;
    const response = await openai.images.generate({
      prompt: req.body.message,
      n: 4,
      size: "1024x1024",
      response_format: "b64_json",
    });
    console.log(response.data.data);
    res.send(response.data.data);
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(PORT, () => console.log(`Your server is running on PORT ${PORT}`));