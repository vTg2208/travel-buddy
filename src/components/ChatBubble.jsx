import React from 'react';
import { UserIcon } from '@heroicons/react/24/solid';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { formatMessage } from '../utils/messageFormatter';

const getMessageText = (content) => {
    if (!content) return "";

    if (typeof content === "string") return content;

    if (typeof content === "object") {
        try {
            // Extract text from Gemini API response format
            if (content.candidates && content.candidates.length > 0) {
                return content.candidates[0]?.content?.parts?.[0]?.text || "";
            }
            return JSON.stringify(content); // Debugging fallback
        } catch (error) {
            console.error("Error extracting message text:", error);
            return "";
        }
    }

    return "";
};

const ChatBubble = ({ message }) => {
  const isUser = message.role === 'user';
  
  return (
    <div className={`flex mb-4 ${isUser ? 'justify-end' : ''}`}>
      {!isUser && (
        <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center text-white flex-shrink-0">
          <GlobeAltIcon className="h-6 w-6" />
        </div>
      )}
      
      <div 
        className={`
          p-3 max-w-xs md:max-w-md
          ${isUser 
            ? 'bg-primary-600 text-white rounded-lg rounded-tr-none mr-3' 
            : 'ml-3 bg-primary-100 rounded-lg rounded-tl-none'
          }
        `}
        dangerouslySetInnerHTML={{ __html: formatMessage(getMessageText(message.content)) }}
      />
      
      {isUser && (
        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 flex-shrink-0">
          <UserIcon className="h-6 w-6" />
        </div>
      )}
    </div>
  );
};

export default ChatBubble;
