const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.status(200).json({
    message: 'Welcome to Reverse IP service🥂 Visit /reverse-ip endpoint to see your reverse IP'
  });
});

const getIp = async (req, res) => {
  const data = await req.headers
  const actualIp = data['x-original-forwarded-for'];
  const reversedIp = actualIp.split('.').reverse().join('.');

  return res.status(200).json({
    actualIp,
    reversedIp
  })
}

app.get("/reverse-ip", getIp);

const PORT = process.env.PORT || 5678;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});
