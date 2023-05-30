import express from "express";

const app = express();
const port = 5000;

app.get("/", (req, res) => res.json({ message: "test" }));

app.listen(port, () => console.log(`server started on port ${port}`));
