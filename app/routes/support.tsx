import { useState } from "react";
import PublicNavbar from "../layout/public-navbar";

export default function AiSupport() {
  const [messages, setMessages] = useState([
    { id: 1, text: "I can't access my learning dashboard." },
    { id: 2, text: "My Ehub account is active but courses are locked." },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { id: Date.now(), text: input }]);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Header */}
      <div className="w-full bg-purple-700 text-yellow-300 text-center py-6">
        <h1 className="text-2xl font-bold">Infinity Support Centre</h1>
        <p className="text-white mt-2">We Are Here to Support Your Learning Journey</p>
        <p className="text-white text-sm">
          Chat with our AI learning support assistant or contact support.
        </p>
      </div>

      {/* Chat Box */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md mt-6 flex flex-col">
        <h2 className="text-xl font-bold mb-2">Infinity Dream Support</h2>
        <p className="text-gray-600 mb-4">Ask AI Support</p>

        <div className="flex-1 space-y-3 mb-4 max-h-64 overflow-y-auto">
          {messages.map((msg) => (
            <div key={msg.id} className="bg-gray-100 p-3 rounded">
              {msg.text}
            </div>
          ))}
        </div>

        <button className="text-blue-600 text-sm mb-4">See more</button>

        {/* Input */}
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Send a message"
            className="flex-1 border rounded px-3 py-2"
          />
          <button
            onClick={handleSend}
            className="bg-purple-600 text-white px-4 py-2 rounded"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}