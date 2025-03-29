export const sendMessageToGemini = async (message) => {
    try {
        const response = await fetch("http://localhost:5000/gemini", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{ role: "user", parts: [{ text: message }] }],
            }),
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        return null;
    }
};
