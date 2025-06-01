import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createSocketConnection } from "../Utiles/Socket";
import { useSelector } from "react-redux";
import axios from "axios";
import { BaseUrl } from "../Utiles/Constants";

const Chat = () => {
  const { userID } = useParams();
  console.log(userID);
  const [message, setMessage] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const loginuser = useSelector((s) => s?.userAuth?.loginDetails);
  const fetchChatMessages = async () => {
    const chat = await axios.get(BaseUrl + "/chat/" + userID, {
      withCredentials: true,
    });
    console.log(chat.data.messages);
    const chatMessages = chat?.data.messages.map((msg) => {
      const { senderId, text } = msg;
      return {
        firstName: senderId?.firstName,
        lastName: senderId?.lastName,
        text,
      };
    });
    setMessage(chatMessages);
  };
  useEffect(() => {
    fetchChatMessages();
  }, []);

  useEffect(() => {
    if (!loginuser._id) return;
    const socket = createSocketConnection();
    socket.emit("joinChat", {
      firstName: loginuser.firstName,
      userId: loginuser._id,
      targetUserId: userID,
    });
    socket.on("messageReceived", ({ firstName, lastName, text }) => {
      console.log(firstName + " : " + text);
     setMessage((prevMessages) => [...prevMessages, { firstName, lastName, text }]);
    });
    return () => {
      socket.disconnect();
    };
  }, [userID, loginuser?._id]);

  const sendMessage = () => {
    const socket = createSocketConnection();
    socket.emit("sendMessage", {
      firstName: loginuser.firstName,
      lastName: loginuser.lastName,
      userId: loginuser._id,
      targetUserId: userID,
      text: newMessage,
    });
    setNewMessage("");
  };
  return (
    <div className="max-w-md mx-auto min-h-72 p-4 border border-b-blue-600 my-10 rounded-lg shadow">
      {message.map((msg, index) => {
        return (
          <div key={index} className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
                />
              </div>
            </div>
            <div className="chat-header">
              {`${msg.firstName}  ${msg.lastName}`}
              <time className="text-xs opacity-50">12:45</time>
            </div>
            <div className="chat-bubble">{msg.text}</div>
            <div className="chat-footer opacity-50">Delivered</div>
          </div>
        );
      })}
      {/* <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
            />
          </div>
        </div>
        <div className="chat-header">
          Anakin
          <time className="text-xs opacity-50">12:46</time>
        </div>
        <div className="chat-bubble">I hate you!</div>
        <div className="chat-footer opacity-50">Seen at 12:46</div>
      </div> */}
      <div className="mt-4 flex">
        <input
          type="text"
          className="flex-grow p-2 border bg-black rounded"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button
          onClick={sendMessage}
          className="ml-2 bg-blue-500 text-white p-2 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
