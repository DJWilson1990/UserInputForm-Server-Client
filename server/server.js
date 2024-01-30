import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());

app.post("/messages", function (request, response) {
  console.log("request.body", request.body);
  response.json({ status: "Message received!" });
});

app.listen("3000", () => {
  console.log("Server started on port 7070");
});
