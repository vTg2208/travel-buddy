import React, { createContext, useContext, useState } from 'react';
import { sendMessageToGemini } from '../services/geminiService';

const ChatContext = createContext();

export const useChat = () => useContext(ChatContext);

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([
    {
      role: 'model',
      id: 'welcome',
      content: "Hi there! I'm Travel Buddy, your AI travel assistant. Tell me what kind of vacation you're looking for, and I'll suggest some great destinations. Consider mentioning:\n• Climate preferences (warm, cold, tropical)\n• Activities you enjoy (beaches, hiking, culture, food)\n• Budget constraints (luxury, moderate, budget)\n• Travel duration and season",
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  // Get chat history for Gemini API
  const getChatHistory = () => {
    return messages.map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }]
    }));
  };

  const addMessage = (role, content) => {
    const newMessage = {
      role,
      id: Date.now().toString(),
      content,
    };
    
    setMessages(prevMessages => [...prevMessages, newMessage]);
    return newMessage;
  };

  const sendMessage = async (content) => {
    if (!content.trim()) return;

    // Add user message
    addMessage('user', content);
    
    // Set loading state
    setIsLoading(true);
    
    try {
      // Get chat history and send to API
      const history = getChatHistory();
      const response = await sendMessageToGemini(content, history);
      
      // Add bot response
      if (response) {
        addMessage('model', response);
      } else {
        addMessage('model', "I'm sorry, I couldn't process your request. Please try again.");
      }
    } catch (error) {
      console.error('Error in chat:', error);
      addMessage('model', "Sorry, there was an error communicating with the travel assistant. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const value = {
    messages,
    isLoading,
    sendMessage,
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};