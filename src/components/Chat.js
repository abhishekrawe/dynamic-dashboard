import React, { useEffect, useState, useRef } from "react";
import PieSocket from "piesocket-js";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState("");
  const [isConnected, setIsConnected] = useState(false);

  const username = `user_${Math.floor(Math.random() * 1000)}`;
  const clusterId = process.env.REACT_APP_CLUSTER_ID;
  const apiKey = process.env.REACT_APP_API_KEY;

  const channelRef = useRef(null);

  useEffect(() => {
    const piesocket = new PieSocket({
      clusterId,
      apiKey,
      notifySelf: true,
      presence: true,
      userId: username,
    });

    piesocket.subscribe("chat-room").then((ch) => {
      channelRef.current = ch;
      setIsConnected(true);

      channelRef.current.listen("new_message", function (data) {
        setMessages((prevMessages) => [
          ...prevMessages,
          `${data.sender}: ${data.text}`,
        ]);
      });
    });

    return () => {
      piesocket.unsubscribe("chat-room");
      channelRef.current = null;
    };
  }, [username, apiKey, clusterId]);

  const sendMessage = (e) => {
    e.preventDefault();

    if (!isConnected) {
      alert("Channel is not connected yet, please wait.");
      return;
    }

    if (messageText.trim() === "") {
      return;
    }

    channelRef.current.publish("new_message", {
      sender: username,
      text: messageText,
    });

    setMessageText("");
  };

 return (
   <div>
     <form
       onSubmit={sendMessage}
       className="mt-5 mb-2 flex justify-center items-center">
       <input
         type="text"
         value={messageText}
         onChange={(e) => setMessageText(e.target.value)}
         placeholder="Type a message and press enter..."
         className="w-2/3 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-blue-400"
         disabled={!isConnected}
       />
     </form>
     <div>
       {messages.map((message, index) => (
         <div key={index}>{message}</div>
       ))}
     </div>
   </div>
 );
};

export default Chat;
