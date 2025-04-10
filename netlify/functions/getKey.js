require("dotenv").config();

exports.handler = async (event, context) => {
  const key = process.env.GOOGLE_MAPS_API_KEY;

  console.log(key);

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
};
