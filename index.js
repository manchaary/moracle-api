import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import fetch from "node-fetch";
dotenv.config();
const app = express();

app.use(cors());

const API_URL_TEMP = "https://football-forecast.herokuapp.com";

app.get("/get_teams/", async function (req, res, next) {
  const response = await fetch(
    `${process.env.MORACLE_API_BASE_URL}/get_teams`,
    {
      method: "GET",
    }
  ).then((res) => res.json());
  res.json(response);
});

app.get("/get_matches/:date", async function (req, res, next) {
  const mockData = [
    {
      homeTeam: "Congo",
      visitorTeam: "Poland",
      startDate: new Date().toISOString(),
      stadium: "Ahmad Bin Ali Stadium",
    },
  ];
  res.json(mockData);
});

app.get("/predict/football/:teams", async function (req, res) {
  if (!req.params.teams) {
    return res.json();
  }
  const response = await fetch(
    `${API_URL_TEMP}/predict/football/${req.params.teams}`,
    {
      method: "GET",
    }
  ).then((res) => res.json());
  return res.json(response);
});

app.listen(5463, function () {
  console.log("CORS-enabled web server listening on port 80");
});
