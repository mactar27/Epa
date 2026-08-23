'use client'

import { useState } from 'react'
import { ArrowRight, Copy, Globe, MessageCircle, Phone } from 'lucide-react'

export default function LinksPage() {
  const [copied, setCopied] = useState(false)

  const copyNumber = () => {
    navigator.clipboard.writeText('778406655')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const links = [
    {
      title: 'Rejoindre sur WhatsApp',
      url: 'https://chat.whatsapp.com/EGCBEVlYRgeEzMeTIxgkwD',
      icon: <MessageCircle size={20} />,
      bg: '#25D366',
      color: '#fff',
    },
    {
      title: 'Nous suivre sur Instagram',
      url: 'https://instagram.com/ensemble_pour_l_avenir?igsi=MW1mdmltZjM2dTA4ZQ%3D%3D',
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
      bg: '#E1306C',
      color: '#fff',
    },
    {
      title: 'Nous suivre sur Snapchat',
      url: 'https://snapchat.com/t/SWqV3eGj',
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M12 .75c-3.15 0-5.7 2.1-5.7 5.25 0 2.22.95 3.32.95 4.35 0 .22-.24.58-.72 1.05-.62.6-1.57 1.48-1.57 2.6 0 1.25.9 2.05 2.15 2.05.58 0 1.34-.2 1.95-.5.7.53 1.76.95 2.94.95 1.18 0 2.24-.42 2.94-.95.6.3 1.37.5 1.95.5 1.25 0 2.15-.8 2.15-2.05 0-1.12-.95-2-1.57-2.6-.48-.47-.72-.83-.72-1.05 0-1.03.95-2.13.95-4.35C17.7 2.85 15.15.75 12 .75zm0 1.5c2.4 0 4.2 1.55 4.2 3.75 0 1.8-.75 2.85-.75 3.75 0 .52.34 1 .84 1.5.6.6 1.41 1.35 1.41 2.1 0 .6-.41.8-1.15.8-.72 0-1.58-.28-2.22-.64-.52-.3-.87-.41-1.33-.41s-.81.11-1.33.41c-.64.36-1.5.64-2.22.64-.74 0-1.15-.2-1.15-.8 0-.75.81-1.5 1.41-2.1.5-.5.84-.98.84-1.5 0-.9-.75-1.95-.75-3.75C7.8 3.8 9.6 2.25 12 2.25z"/>
        </svg>
      ),
      bg: '#FFFC00',
      color: '#000',
    },
    {
      title: 'Nous appeler (77 840 66 55)',
      url: 'tel:+221778406655',
      icon: <Phone size={20} />,
      bg: '#b3861b',
      color: '#fff',
    },
    {
      title: 'Visiter notre site web',
      url: '/',
      icon: <Globe size={20} />,
      bg: 'rgba(0,0,0,0.04)',
      color: '#0b0b0a',
      border: '1px solid rgba(179,134,27,0.25)',
    },
  ]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-white text-[#0b0b0a]" style={{ background: '#ffffff' }}>
      <div className="w-full max-w-md flex flex-col items-center text-center">
        {/* Logo */}
        <div style={{ width: '96px', height: '96px', borderRadius: '50%', overflow: 'hidden', border: '2px solid #b3861b', background: '#faf8f5', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
          <img src="/epa-logo.jpeg" alt="EPA Fondation Logo" style={{ width: '85%', height: '85%', objectFit: 'contain' }} />
        </div>

        {/* Title */}
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: '0 0 4px', fontFamily: 'Georgia, serif', color: '#0b0b0a' }}>EPA Fondation</h1>
        <p style={{ color: '#b3861b', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 32px', fontWeight: 'bold' }}>
          Ensemble pour l'avenir
        </p>

        {/* Links Grid */}
        <div className="w-full flex flex-col gap-4" style={{ width: '100%' }}>
          {/* Custom Wave / OM Donation Button */}
          <button
            onClick={copyNumber}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px 20px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #00a4e4 0%, #FF6600 100%)',
              color: '#ffffff',
              border: 'none',
              fontWeight: 'bold',
              fontSize: '14px',
              transition: 'transform 0.2s, box-shadow 0.2s',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              width: '100%',
              textAlign: 'left'
            }}
            className="hover:scale-[1.02] hover:shadow-lg"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <Copy size={20} />
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '14px' }}>Dons Wave / Orange Money</span>
                <span style={{ fontSize: '11px', fontWeight: 'normal', opacity: 0.9 }}>Copier le numéro : 77 840 66 55</span>
              </div>
            </div>
            <span style={{ fontSize: '11px', background: 'rgba(255,255,255,0.2)', padding: '4px 8px', borderRadius: '6px' }}>
              {copied ? 'Copié !' : 'Copier'}
            </span>
          </button>

          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target={link.url.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 20px',
                borderRadius: '12px',
                background: link.bg,
                color: link.color,
                border: link.border || 'none',
                fontWeight: 'bold',
                fontSize: '14px',
                transition: 'transform 0.2s, box-shadow 0.2s',
                textDecoration: 'none',
                boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
              }}
              className="hover:scale-[1.02] hover:shadow-lg"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                {link.icon}
                <span>{link.title}</span>
              </div>
              <ArrowRight size={16} />
            </a>
          ))}
        </div>

        {/* Footer info */}
        <p style={{ fontSize: '10px', color: '#888', marginTop: '48px', lineHeight: '1.6' }}>
          © {new Date().getFullYear()} EPA Fondation — Tous droits réservés.<br />
          Réalisé par <a href="https://wockytech.xyz" target="_blank" rel="noreferrer" style={{ color: '#b3861b', textDecoration: 'underline' }}>WockyTech</a>
        </p>
      </div>
    </div>
  )
}
