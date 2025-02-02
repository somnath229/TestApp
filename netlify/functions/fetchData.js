const fetch = require("node-fetch");

exports.handler = async function (event, context) {
  try {
    console.log("Fetching data from API...");
    const response = await fetch("https://api.jsonserve.com/Uw5CrX");

    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }

    const data = await response.json();
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Error fetching data",
        error: error.toString(),
      }),
    };
  }
};
