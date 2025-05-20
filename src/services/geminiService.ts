const API_KEY = "AIzaSyDCb4t20UUKOGtaFIPTE9FJ9RSrioxpHfc"; // ⚠️ Solo para pruebas
const URL =
  "https://generativelanguage.googleapis.com/v1beta/models/text-bison-001:generateText";

export const askGemini = async (prompt: string): Promise<string> => {
  try {
    const response = await fetch(`${URL}?key=${API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: { text: prompt },
        temperature: 0.7,
        candidateCount: 1,
      }),
    });

    const data = await response.json();
    return data.candidates?.[0]?.output ?? "No se pudo obtener una respuesta.";
  } catch (error) {
    console.error("Error consultando Gemini:", error);
    return "Ocurrió un error al contactar al asistente.";
  }
};
