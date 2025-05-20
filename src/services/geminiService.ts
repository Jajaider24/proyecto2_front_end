// src/services/geminiService.ts
import axios from "axios";

// Configura tu clave de API aquí
const API_KEY = "TU_CLAVE_DE_API_DE_GEMINI";

// Configura la URL de la API de Google Gemini (Bard)
const GEMINI_API_URL =
  "https://api.generativeai.googleapis.com/v1beta2/text:generate";

export const askGemini = async (question: string): Promise<string> => {
  try {
    const response = await axios.post(
      GEMINI_API_URL,
      {
        prompt: question,
        model: "gemini", // Modelo de Google Gemini (Bard)
        max_tokens: 100, // Puedes ajustar este valor según tu necesidad
        temperature: 0.7, // Controla la creatividad de las respuestas
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    // Retorna la respuesta generada por la IA
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error("Error al consultar la API de Gemini:", error);
    return "Hubo un problema al consultar el asistente virtual.";
  }
};
