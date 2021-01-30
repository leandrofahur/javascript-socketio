const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const port = process.env.PORT || 3000;

const PORT = process.env.PORT || 3000;
const IP = process.env.IP || "0.0.0.0";

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
    console.log(msg);
  });
});

http.listen(PORT, IP, () => {
  console.log(`Socket.IO server running at http://:${IP}:${PORT}`);
});

// port forwarding
// socketio
