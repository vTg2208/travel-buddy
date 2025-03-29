import React, { useRef, useEffect } from 'react';
import ChatBubble from './ChatBubble';
import LoadingIndicator from './LoadingIndicator';
import { useChat } from 'C:/Users/vvthe/travel-buddy-react/src/context/ChatContent.jsx';

const ChatContainer = () => {
  const { messages, isLoading } = useChat();
  const chatEndRef = useRef(null);
  
  // Auto-scroll to bottom on new messages
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);
  
  return (
    <div className="chat-container p-4 overflow-y-auto flex-grow">
      {messages.map((message) => (
        <ChatBubble key={message.id} message={message} />
      ))}
      
      {isLoading && <LoadingIndicator />}
      
      <div ref={chatEndRef} />
    </div>
  );
};

export default ChatContainer;