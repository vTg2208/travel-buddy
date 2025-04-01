export const sendMessageToGemini = async (message) => {
    try {
        const response = await fetch("https://travel-buddy-backend-haw2.onrender.com/gemini", {
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
