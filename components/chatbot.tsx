'use client'

import React, { useState, useRef, useEffect } from 'react'
import { MessageSquare, X, Send, Heart, Copy, MessageCircle, Phone, HelpCircle } from 'lucide-react'

interface Message {
  sender: 'bot' | 'user'
  text: string
  actionType?: 'whatsapp' | 'donation' | 'contact' | 'none'
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: 'Bonjour ! Je suis l\'assistant virtuel d\'EPA Fondation. 🤝 Comment puis-je vous aider aujourd\'hui ?',
    },
  ])
  const [isTyping, setIsTyping] = useState(false)
  const [copied, setCopied] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (isOpen) {
      scrollToBottom()
    }
  }, [messages, isTyping, isOpen])

  const copyDonationNumber = () => {
    navigator.clipboard.writeText('778406665')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleOptionClick = (option: string) => {
    // Add user message
    setMessages((prev) => [...prev, { sender: 'user', text: option }])
    setIsTyping(true)

    // Simulate bot typing response
    setTimeout(() => {
      let botResponse: Message = { sender: 'bot', text: '' }

      switch (option) {
        case 'Qui sommes-nous ?':
          botResponse = {
            sender: 'bot',
            text: 'EPA (Ensemble Pour l\'Avenir) est une organisation humanitaire et apolitique créée en Mars 2024 au Sénégal. Portée par des jeunes engagés, nous agissons concrètement à travers l\'organisation de conférences éducatives, de caravanes solidaires et d\'actions fortes comme les distributions de Ndogou pendant le Ramadan pour soutenir les personnes en situation de précarité.',
          }
          break
        case 'Devenir bénévole':
          botResponse = {
            sender: 'bot',
            text: 'C\'est génial ! Notre force réside dans l\'engagement de nos bénévoles. Pour participer à nos actions sur le terrain, vous pouvez rejoindre directement notre communauté de bénévoles sur WhatsApp.',
            actionType: 'whatsapp',
          }
          break
        case 'Faire un don (Wave/OM)':
          botResponse = {
            sender: 'bot',
            text: 'Merci pour votre générosité ! ❤️ Chaque don aide à financer nos actions. Vous pouvez effectuer votre transfert (Wave ou Orange Money) directement vers le numéro 77 840 66 65.',
            actionType: 'donation',
          }
          break
        case 'Contacter l\'équipe':
          botResponse = {
            sender: 'bot',
            text: 'Besoin d\'échanger directement avec nous ? Vous pouvez nous téléphoner ou nous envoyer un message sur nos réseaux sociaux officiels.',
            actionType: 'contact',
          }
          break
        default:
          botResponse = {
            sender: 'bot',
            text: 'Je ne suis pas sûr de comprendre. Pourriez-vous choisir l\'une des options proposées ?',
          }
      }

      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 800)
  }

  const resetChat = () => {
    setMessages([
      {
        sender: 'bot',
        text: 'Bonjour ! Je suis à nouveau à votre écoute. Quel sujet vous intéresse ?',
      },
    ])
  }

  return (
    <>
      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'var(--gold)',
          color: 'var(--ink)',
          border: 'none',
          boxShadow: '0 4px 16px rgba(179,134,27,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 100,
          transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        }}
        className="hover:scale-110 active:scale-95"
        aria-label="Ouvrir l'assistant virtuel"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '92px',
            right: '24px',
            width: '360px',
            height: '500px',
            maxHeight: 'calc(100vh - 120px)',
            borderRadius: '16px',
            background: '#ffffff',
            border: '1px solid var(--line)',
            boxShadow: '0 12px 36px rgba(0,0,0,0.12)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            zIndex: 100,
            animation: 'fadeInUp 0.3s ease-out',
          }}
          className="chatbot-window-responsive"
        >
          {/* Header */}
          <div
            style={{
              padding: '16px 20px',
              background: 'var(--gold)',
              color: 'var(--ink)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                }}
              >
                <img src="/epa-logo.jpeg" alt="EPA Avatar" style={{ width: '85%', height: '85%', objectFit: 'contain' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontWeight: 'bold', fontSize: '13px', lineHeight: '1.2' }}>Assistant EPA</span>
                <span style={{ fontSize: '10px', opacity: 0.9, display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#25D366', display: 'inline-block' }} /> En ligne
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: '4px' }}
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages Area */}
          <div
            style={{
              flex: 1,
              padding: '20px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              background: '#faf8f5',
            }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                }}
              >
                <div
                  style={{
                    maxWidth: '85%',
                    padding: '12px 16px',
                    borderRadius: msg.sender === 'user' ? '14px 14px 2px 14px' : '14px 14px 14px 2px',
                    background: msg.sender === 'user' ? 'var(--gold)' : '#ffffff',
                    color: msg.sender === 'user' ? 'var(--ink)' : 'var(--foreground)',
                    fontSize: '13px',
                    lineHeight: '1.45',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                    border: msg.sender === 'user' ? 'none' : '1px solid var(--line)',
                  }}
                >
                  <div>{msg.text}</div>

                  {/* Actions inside chat bubbles */}
                  {msg.actionType === 'whatsapp' && (
                    <a
                      href="https://chat.whatsapp.com/EGCBEVlYRgeEzMeTIxgkwD"
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        background: '#25D366',
                        color: '#ffffff',
                        padding: '10px 14px',
                        borderRadius: '8px',
                        fontWeight: 'bold',
                        marginTop: '12px',
                        fontSize: '12px',
                        textAlign: 'center',
                        textDecoration: 'none',
                        boxShadow: '0 2px 6px rgba(37,211,102,0.2)',
                      }}
                    >
                      <MessageCircle size={16} /> Rejoindre le groupe WhatsApp
                    </a>
                  )}

                  {msg.actionType === 'donation' && (
                    <button
                      onClick={copyDonationNumber}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        background: 'linear-gradient(135deg, #00a4e4 0%, #FF6600 100%)',
                        color: '#ffffff',
                        padding: '10px 14px',
                        borderRadius: '8px',
                        fontWeight: 'bold',
                        marginTop: '12px',
                        fontSize: '12px',
                        width: '100%',
                        cursor: 'pointer',
                        border: 'none',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                      }}
                    >
                      <Copy size={14} /> {copied ? 'Numéro copié !' : 'Copier le numéro'}
                    </button>
                  )}

                  {msg.actionType === 'contact' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '12px' }}>
                      <a
                        href="tel:+221778406665"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px',
                          background: 'var(--gold)',
                          color: 'var(--ink)',
                          padding: '8px 12px',
                          borderRadius: '8px',
                          fontSize: '11px',
                          fontWeight: 'bold',
                          textAlign: 'center',
                          textDecoration: 'none',
                        }}
                      >
                        <Phone size={14} /> Nous appeler (77 840 66 65)
                      </a>
                      <a
                        href="https://instagram.com/ensemble_pour_l_avenir?igsi=MW1mdmltZjM2dTA4ZQ%3D%3D"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px',
                          background: '#E1306C',
                          color: '#ffffff',
                          padding: '8px 12px',
                          borderRadius: '8px',
                          fontSize: '11px',
                          fontWeight: 'bold',
                          textAlign: 'center',
                          textDecoration: 'none',
                        }}
                      >
                        <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg> Nous suivre sur Instagram
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div
                  style={{
                    padding: '12px 16px',
                    borderRadius: '14px 14px 14px 2px',
                    background: '#ffffff',
                    border: '1px solid var(--line)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <span className="dot-typing" style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold)' }} />
                  <span className="dot-typing" style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold)', animationDelay: '0.2s' }} />
                  <span className="dot-typing" style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold)', animationDelay: '0.4s' }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Options Selection Area */}
          <div
            style={{
              padding: '16px 20px',
              borderTop: '1px solid var(--line)',
              background: '#ffffff',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '4px', scrollbarWidth: 'none' }}>
              {['Qui sommes-nous ?', 'Devenir bénévole', 'Faire un don (Wave/OM)', 'Contacter l\'équipe'].map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleOptionClick(opt)}
                  disabled={isTyping}
                  style={{
                    padding: '8px 12px',
                    borderRadius: '20px',
                    border: '1px solid var(--line)',
                    background: '#ffffff',
                    color: 'var(--foreground)',
                    fontSize: '11px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.2s',
                  }}
                  className="hover:bg-[rgba(179,134,27,0.08)] hover:border-var(--gold)"
                >
                  {opt}
                </button>
              ))}
            </div>

            <button
              onClick={resetChat}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--gold)',
                fontSize: '10px',
                fontWeight: 'bold',
                cursor: 'pointer',
                textAlign: 'center',
                padding: '4px 0 0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4px',
              }}
            >
              <HelpCircle size={10} /> Revenir au début
            </button>
          </div>
        </div>
      )}
    </>
  )
}
