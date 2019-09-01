import express from "express";

const server = express();
server.get("/", (_, res) => {
  res.send("Hello ts-node!");
});

server.listen(3000, () => {
  console.log(`[SERVER] Running at http://localhost:3000`);
});
