import express from "express";
import socketIO from "socket.io";

const PORT = 4000;
const app = express();

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(express.static(`${process.cwd()}/src/public`));

app.get("/", (req, res) => res.render("home"));

const handleListening = () => {
  console.log(`🚀 http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
