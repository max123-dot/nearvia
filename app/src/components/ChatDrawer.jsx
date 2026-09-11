import React, { useState, useEffect, useRef } from 'react';
import { X, Send, User, MessageSquare, CheckCheck, Clock } from 'lucide-react';

export default function ChatDrawer({ item, messages, onSendMessage, onClose }) {
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    onSendMessage(item.id, inputText.trim());
    setInputText('');
  };

  const itemMessages = messages[item.id] || [
    {
      sender: 'host',
      text: `Hello there! I'm ${item.owner.name} from ${item.title}. How can I help you with our offerings or reservations today?`,
      time: 'Just now'
    }
  ];

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '520px', height: 'min(80vh, 100dvh)', display: 'flex', flexDirection: 'column' }}>
        
        {/* Chat Drawer Header */}
        <div style={{ padding: '1rem 1.25rem', borderBottom: '1px solid var(--border-subtle)', background: 'var(--bg-card)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <img src={item.owner.avatar} alt={item.owner.name} style={{ width: '42px', height: '42px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #F5B700' }} />
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                {item.owner.name}
                <span style={{ fontSize: '0.65rem', background: 'rgba(30, 148, 99, 0.15)', color: 'var(--accent-emerald)', padding: '0.1rem 0.4rem', borderRadius: '999px', fontWeight: 700 }}>
                  ● Online
                </span>
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{item.title} &bull; {item.owner.title}</div>
            </div>
          </div>

          <button className="modal-close-btn" style={{ position: 'static' }} onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {/* Chat Message Stream */}
        <div style={{ flex: 1, padding: '1.25rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.85rem', background: 'var(--bg-dark)' }}>
          <div style={{ textAlign: 'center', margin: '0.5rem 0' }}>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', background: 'var(--bg-card)', padding: '0.2rem 0.6rem', borderRadius: '999px', border: '1px solid var(--border-subtle)' }}>
              Encrypted Local Messenger &bull; Response Time ~ 2 mins
            </span>
          </div>

          {itemMessages.map((msg, idx) => {
            const isUser = msg.sender === 'user';
            return (
              <div
                key={idx}
                style={{
                  alignSelf: isUser ? 'flex-end' : 'flex-start',
                  maxWidth: '82%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: isUser ? 'flex-end' : 'flex-start'
                }}
              >
                <div
                  style={{
                    padding: '0.75rem 1rem',
                    borderRadius: isUser ? '16px 16px 2px 16px' : '16px 16px 16px 2px',
                    background: isUser ? '#F5B700' : 'var(--bg-card)',
                    color: isUser ? '#0E0E10' : 'var(--text-main)',
                    fontWeight: isUser ? 600 : 400,
                    fontSize: '0.9rem',
                    border: isUser ? 'none' : '1px solid var(--border-subtle)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                  }}
                >
                  {msg.text}
                </div>
                <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginTop: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                  {msg.time} {isUser && <CheckCheck size={12} color="var(--accent-emerald)" />}
                </span>
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </div>

        {/* Message Input Footer */}
        <form onSubmit={handleSend} style={{ padding: '0.65rem 0.75rem', paddingBottom: 'calc(0.65rem + env(safe-area-inset-bottom, 0px))', borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-card)', display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
          <input
            type="text"
            placeholder={`Message ${item.owner.name}...`}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            style={{ flex: 1, padding: '0.75rem 1rem', borderRadius: 'var(--radius-full)', background: 'var(--bg-dark)', border: '1px solid var(--border-subtle)', color: 'var(--text-main)', fontSize: '1rem', outline: 'none' }}
          />
          <button
            type="submit"
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: '#F5B700',
              border: 'none',
              color: '#0E0E10',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(245, 183, 0, 0.4)'
            }}
          >
            <Send size={18} />
          </button>
        </form>

      </div>
    </div>
  );
}
