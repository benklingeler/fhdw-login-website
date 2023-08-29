import express from "express";
import ViteExpress from "vite-express";

const app = express();

app.use(express.json());

app.post("/login", async (request, response) => {
  const { username, password } = request.body;

  await delay(1000);

  response.send(`Welcome ${username}!`);
});

ViteExpress.listen(app, 5577, () =>
  console.log("Server is listening on port 5577...")
);

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
