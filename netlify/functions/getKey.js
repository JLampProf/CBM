require("dotenv").config();

exports.handler = async (event, context) => {
  const key = process.env.GOOGLE_MAPS_API_KEY;
};

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());

app.get("/api/key", async (req, res) => {
  if (!key) {
    return {
      statusCode: 300,
      body: JSON.stringify({ error: "Cannot obtain key." }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ key }),
  };
});
