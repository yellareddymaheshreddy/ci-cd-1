import express from "express";
import {client} from "@repo/db/client"

const app = express();
const port = 3001;

app.get("/", async(req, res) => {
  const user = await client.user.create({
    data: {
      name: "Alice",}})
  res.send("Hello World!"+JSON.stringify(user));
}
);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
}
);