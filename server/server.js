import express from "express";
import "dotenv/config";
import cors from "cors";
import http, { Server as HttpServer } from "http"; // Rename Server to HttpServer
import { connectDB } from "./lib/db.js";
import userRouter from "./routes/userRoutes.js";
import messageRouter from "./routes/messageRoutes.js";
import { Server } from "socket.io"; // Correct import for socket.io

const app = express();
const server = http.createServer(app); // Use the renamed HttpServer

// Initialize socket.io server
export const io = new Server(server, {
    cors: { origin: "*" }
});

// Store online users
export const userSocketMap = {};

// Socket.io connection handler
io.on("connection", (socket) => {
    const userId = socket.handshake.query.userId;
    console.log("User Connected", userId);

    if (userId) userSocketMap[userId] = socket.id;

    // Emit online users to all connected clients
    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    socket.on("disconnect", () => {
        console.log("User Disconnected", userId);
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });
});

app.use(express.json({ limit: "4mb" }));
app.use(cors());
app.use("/api/status", (req, res) => res.send("Server is live"));
app.use("/api/auth", userRouter);
app.use("/api/messages", messageRouter);

await connectDB();


if(process.env.NOSE_ENV !== "production"){

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log("server is running on PORT " + PORT));
}


//export  server for vercel

export default server;