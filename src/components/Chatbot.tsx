import React, { useState } from "react";
import { askGemini } from "../services/geminiService";

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<{ user: string; bot: string }[]>([]);
  const [userInput, setUserInput] = useState("");

  const handleSendMessage = async () => {
    if (userInput.trim() === "") return;

    const userMessage = userInput;
    setMessages([...messages, { user: userMessage, bot: "Cargando..." }]);
    setUserInput("");

    const botResponse = await askGemini(userMessage);
    setMessages((prevMessages) => [
      ...prevMessages.slice(0, -1),
      { user: userMessage, bot: botResponse },
    ]);
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Asistente Virtual</h2>
      <div className="h-60 overflow-y-auto mb-4">
        {messages.map((message, index) => (
          <div key={index} className="mb-2">
            <p>
              <strong>Usuario:</strong> {message.user}
            </p>
            <p>
              <strong>Asistente:</strong> {message.bot}
            </p>
          </div>
        ))}
      </div>
      <div className="flex items-center">
        <input
          type="text"
          className="border p-2 rounded w-full"
          placeholder="Haz tu pregunta..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 bg-blue-500 text-white p-2 rounded"
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
