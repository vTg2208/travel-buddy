import React from 'react';
import Header from './components/Header';
import ChatContainer from './components/ChatContainer';
import ChatInput from './components/ChatInput';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <div className="flex flex-col h-screen">
        <Header />
        
        <div className="bg-white rounded-b-lg shadow-lg mb-4 flex-grow flex flex-col">
          <ChatContainer />
          <ChatInput />
        </div>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;