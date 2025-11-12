import React, { useState, useRef, useEffect } from 'react';
import { NavbarComponent } from '../../components/navbar/navbar';
import { DailyTipCard } from '../../components/DailyTipCard/DailyTipCard';
import './ChatBoxAIPage.css';

interface Message {
  from: 'user' | 'ai';
  text: string;
  timestamp: string;
}

const initialMessages: Message[] = [
  { from: 'ai', text: 'Hello! I’m Synapz AI. I can guide you through your learning modules.', timestamp: 'Nov 12, 09:00' }
];

export function ChatBoxAIPage(): React.ReactElement {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const handleSend = () => {
    if (newMessage.trim() === '') return;

    const userMsg: Message = {
      from: 'user',
      text: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setNewMessage('');

    // Simulate AI response
    setTimeout(() => {
      const aiMsg: Message = {
        from: 'ai',
        text: generateAIResponse(newMessage),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiMsg]);
    }, 800); // delay for realism
  };

  const generateAIResponse = (input: string) => {
    // Simple mock logic, can replace with API
    if (input.toLowerCase().includes('module')) return 'I see you are working on a module. Keep up the progress!';
    if (input.toLowerCase().includes('quiz')) return 'Remember to complete the quiz to unlock the next module.';
    if (input.toLowerCase().includes('time')) return 'Try to spend at least 2 hours per day learning. Consistency is key!';
    return 'Got it! Keep learning and I’ll guide you.';
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chat-page-container">
      {/* Stânga */}
      <div className="chat-navbar">
        <NavbarComponent />
      </div>

      {/* Mijloc */}
      <div className="chat-main">
        <h2 className="chat-title">Synapz AI</h2>

        <div className="chat-messages">
          {messages.map((msg, idx) => (
            <div key={idx} className={`chat-message ${msg.from}`}>
              <div className="chat-bubble">{msg.text}</div>
              <span className="chat-timestamp">{msg.timestamp}</span>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="chat-input-container">
          <input
            type="text"
            placeholder="Ask something..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
}
