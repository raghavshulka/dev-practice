import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";

const App = () => {
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState("");
  const [room, setRoom] = useState("");
  const [receivedMessages, setReceivedMessages] = useState([]);

  useEffect(() => {
    const newSocket = io("http://localhost:3000");
    setSocket(newSocket);

    newSocket.on("connect", () => {
      console.log("Connected to server, socket id:", newSocket.id);
    });

    newSocket.on("welcome", (data) => {
      console.log(data);
    });

    newSocket.on("receive-message", (data) => {
      console.log("Received message:", data);
      setReceivedMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => newSocket.close();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && socket && room) {
      socket.emit("message", { message, room });
      setMessage("");
    }
  };

  const joinRoom = () => {
    if (socket && room) {
      socket.emit("join-room", room);
      console.log(`Joined room: ${room}`);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl mb-4">Socket.IO Chat</h1>
      <div className="mb-4">
        <h2 className="text-xl mb-2">Received Messages:</h2>
        <ul>
          {receivedMessages.map((msg, index) => (
            <li key={index}>{`${msg.room}: ${msg.message}`}</li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <input
          type="text"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
          placeholder="Enter room"
          className="p-2 border rounded mr-2"
        />
        <button onClick={joinRoom} className="bg-green-500 text-white p-2 rounded">
          Join Room
        </button>
      </div>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-grow p-2 border rounded-l"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-r">
          Send
        </button>
      </form>
    </div>
  );
};

export default App;