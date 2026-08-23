'use client'

import React, { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { ArrowLeft, Play, X, Heart, MessageCircle, Phone, Globe } from 'lucide-react'

// Image arrays (shared with main page)
const firstEditionImages = [
  '/1ere-edition/4c2c4575-98a8-4cfe-983d-47759f26599e.JPG',
  '/1ere-edition/8c0549a9-e14d-4fcc-95ed-6e1a17a64b26.JPG',
  '/1ere-edition/a9322bd8-f043-44e5-982a-e3218f4c21fc.JPG',
  '/1ere-edition/b809c5ea-530b-4b8f-8579-2de22e827517.JPG'
]

const secondEditionImages = [
  '/2e-edition/54634140-05f0-432f-9165-229043da4425.JPG',
  '/2e-edition/68b20ab8-7c80-4f10-8eed-53ccf3e8fcf6.JPG',
  '/2e-edition/6b06caab-27f5-44e2-91ba-abf850ece36a.JPG',
  '/2e-edition/b14b21d3-624f-4bb6-bd03-f09cd55f3b84.JPG',
  '/2e-edition/e69125fd-ccb4-452d-9018-9f7a363c8c16.JPG',
  '/2e-edition/ed994477-ce33-4da2-aaf4-5f41e2e5cd12.JPG'
]

const thirdEditionImages = [
  '/3e-edition/161d4365-a5a8-42f2-9f96-b222cd6c0dec.JPG',
  '/3e-edition/189eb177-38a8-481c-8862-5e95f9bc48c9.JPG',
  '/3e-edition/18ede151-0f76-456a-90d6-dc4fde8414b4.JPG',
  '/3e-edition/32f76a8f-34a6-4c32-be70-a4d15403d7c8.JPG',
  '/3e-edition/3700a882-d7f4-4f14-98a3-1a147411b748.JPG',
  '/3e-edition/422dd75a-8540-4d46-bf9d-5685aa117a99.JPG',
  '/3e-edition/47db4e31-c2f4-4692-b419-2bbfb93f0101.JPG',
  '/3e-edition/4e14af8c-cf56-4dfd-aa60-362156f97724.JPG',
  '/3e-edition/6c32504d-55b9-467c-839d-81d82ee7a7eb.JPG',
  '/3e-edition/75456b11-5dcb-462c-9224-3b265a56ca8d.JPG',
  '/3e-edition/7e47cedb-6265-4b96-b7ef-c910f0db935d.JPG',
  '/3e-edition/8f7a94cd-5814-47a4-b326-c53f2b166e81.JPG',
  '/3e-edition/a858cd0f-da25-491d-b72e-b468b5e75846.JPG',
  '/3e-edition/a9e1609e-9edf-43b2-89db-31eb954f3286.JPG',
  '/3e-edition/c473fede-dc7f-4575-ad39-f030538a634d.JPG',
  '/3e-edition/c4bea624-8ab6-4125-bc02-82e20465ad74.JPG',
  '/3e-edition/c89dbfd0-22c3-4348-85f2-46550eb94d46.JPG',
  '/3e-edition/d3ebda1c-3097-486d-98a1-cf440347795b.JPG',
  '/3e-edition/d7bfaf76-2daa-4c50-9fcb-f2f9de3c12fe.JPG',
  '/3e-edition/e377b068-44cd-416f-a5fc-5776ac591469.JPG',
  '/3e-edition/e78062bf-daa6-45e3-b4a5-88e493fdadf6.JPG',
  '/3e-edition/ebeed230-5988-4c47-b621-e2c851224483.JPG',
  '/3e-edition/f17f9a30-8571-4e33-8115-0014a1ee8eae.JPG',
  '/3e-edition/f240036d-2624-4243-b56a-e5a2df829129.JPG'
]

const editionsData = {
  '1': {
    title: 'Première Édition',
    subtitle: 'Mars 2024 — Le commencement',
    desc: 'Première action sur le terrain menée par EPA Fondation pour soutenir les personnes en situation de précarité, poser les bases de notre engagement et redonner le sourire aux bénéficiaires.',
    images: firstEditionImages,
    video: '/1ere-edition/da1593f9-ad3a-41e6-ae20-e94909e5b182.MP4',
    cover: '/1ere-edition/8c0549a9-e14d-4fcc-95ed-6e1a17a64b26.JPG'
  },
  '2': {
    title: 'Deuxième Édition',
    subtitle: 'Ramadan 2024 — Plus loin ensemble',
    desc: 'Renforcement de nos actions avec une distribution de Ndogou élargie et des caravanes de solidarité actives pour accompagner davantage de familles sénégalaises.',
    images: secondEditionImages,
    video: '/2e-edition/d40af924-737a-4fa4-a976-1beb7d69a9db.MP4',
    cover: '/2e-edition/54634140-05f0-432f-9165-229043da4425.JPG'
  },
  '3': {
    title: 'Troisième Édition',
    subtitle: 'Nouveaux horizons de solidarité',
    desc: 'Une édition majeure axée sur la pérennisation des projets solidaires, l\'accompagnement continu des familles démunies et le développement d\'initiatives éducatives pour la jeunesse.',
    images: thirdEditionImages,
    video: '/3e-edition/75ea2f0a-2607-44b8-9864-b82e4130f0f0%202.MP4',
    cover: '/3e-edition/161d4365-a5a8-42f2-9f96-b222cd6c0dec.JPG'
  }
}

export default function EditionDetailPage() {
  const params = useParams()
  const router = useRouter()
  const id = params.id as string

  const edition = editionsData[id as keyof typeof editionsData]

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [playingVideo, setPlayingVideo] = useState(false)

  if (!edition) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-white text-[#0b0b0a]">
        <h1 className="text-2xl font-bold mb-4">Édition non trouvée</h1>
        <button onClick={() => router.push('/')} className="btn">
          Retour à l'accueil
        </button>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-white text-[#0b0b0a] pb-16">
      {/* Top Bar / Navigation */}
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '76px',
          padding: '0 clamp(24px, 6vw, 92px)',
          borderBottom: '1px solid rgba(179,134,27,0.15)',
          background: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(14px)',
          position: 'sticky',
          top: 0,
          zIndex: 10
        }}
      >
        <button
          onClick={() => router.push('/')}
          style={{
            background: 'none',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
            fontSize: '11px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            color: '#b3861b'
          }}
        >
          <ArrowLeft size={16} /> Accueil
        </button>
        <div style={{ width: '60px', height: '40px', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
          <img src="/epa-logo.jpeg" alt="EPA Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </div>
        <a
          href="/links"
          style={{
            padding: '8px 16px',
            background: '#b3861b',
            color: '#ffffff',
            borderRadius: '6px',
            fontSize: '10px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            textDecoration: 'none'
          }}
        >
          Rejoindre
        </a>
      </header>

      {/* Hero Banner */}
      <section
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('${edition.cover}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '380px',
          display: 'flex',
          alignItems: 'center',
          padding: '0 clamp(24px, 10vw, 150px)',
          color: '#ffffff'
        }}
      >
        <div style={{ maxWidth: '680px' }}>
          <span style={{ color: '#f1cb70', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            {edition.subtitle}
          </span>
          <h1 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontFamily: 'Georgia, serif', margin: '8px 0 16px', lineHeight: '1.1' }}>
            {edition.title}
          </h1>
          <p style={{ fontSize: '15px', color: '#e0deda', lineHeight: '1.6', margin: 0 }}>
            {edition.desc}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section style={{ padding: '60px clamp(24px, 6vw, 92px)' }}>
        {/* Video Player (if available) */}
        {edition.video && (
          <div style={{ marginBottom: '60px' }}>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '24px', marginBottom: '20px', color: '#0b0b0a' }}>
              Revivre cette édition en vidéo
            </h2>
            <div
              style={{
                position: 'relative',
                aspectRatio: '16/9',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid rgba(179,134,27,0.2)',
                background: '#000000',
                cursor: 'pointer'
              }}
              onClick={() => setPlayingVideo(true)}
            >
              {playingVideo ? (
                <video src={edition.video} controls autoPlay style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                <>
                  <img src={edition.cover} alt="Couverture Vidéo" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
                  <div
                    style={{
                      position: 'absolute',
                      inset: '50% auto auto 50%',
                      transform: 'translate(-50%, -50%)',
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      background: 'rgba(179,134,27,0.9)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
                    }}
                  >
                    <Play size={24} fill="currentColor" />
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* Gallery */}
        <div>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '24px', marginBottom: '24px', color: '#0b0b0a' }}>
            Toutes les photos ({edition.images.length})
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
              gap: '16px'
            }}
          >
            {edition.images.map((src, idx) => (
              <div
                key={idx}
                onClick={() => setLightboxIndex(idx)}
                style={{
                  aspectRatio: '1',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  border: '1px solid rgba(179,134,27,0.15)',
                  cursor: 'pointer',
                  transition: 'transform 0.2s'
                }}
                className="hover:scale-[1.02] hover:shadow-md"
              >
                <img src={src} alt={`Galerie ${edition.title}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Slider Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center p-4">
          <button onClick={() => setLightboxIndex(null)} className="absolute top-6 right-6 text-white/80 hover:text-[#f1cb70] p-2" style={{ cursor: 'pointer', background: 'none', border: 'none' }}>
            <X size={32} />
          </button>
          
          <div className="relative max-w-[90vw] max-h-[80vh] flex items-center justify-center">
            <button onClick={(e) => { e.stopPropagation(); setLightboxIndex((prev) => (prev !== null ? (prev - 1 + edition.images.length) % edition.images.length : null)) }} className="absolute left-[-20px] md:left-[-70px] text-white/80 hover:text-[#f1cb70] p-3" style={{ cursor: 'pointer', background: 'none', border: 'none' }}>
              <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            
            <img src={edition.images[lightboxIndex]} alt="Galerie EPA" className="max-w-[80vw] max-h-[75vh] object-contain rounded-lg" style={{ border: '1px solid rgba(255,255,255,0.15)', background: '#000' }} />
            
            <button onClick={(e) => { e.stopPropagation(); setLightboxIndex((prev) => (prev !== null ? (prev + 1) % edition.images.length : null)) }} className="absolute right-[-20px] md:right-[-70px] text-white/80 hover:text-[#f1cb70] p-3" style={{ cursor: 'pointer', background: 'none', border: 'none' }}>
              <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>
          
          <span className="text-white/60 text-sm mt-4 font-mono select-none">
            {lightboxIndex + 1} / {edition.images.length}
          </span>
        </div>
      )}

      {/* Footer */}
      <footer style={{ padding: '40px clamp(24px, 6vw, 92px) 0', borderTop: '1px solid rgba(179,134,27,0.15)', textAlign: 'center', marginTop: '60px' }}>
        <p style={{ fontSize: '13px', color: '#666', margin: 0 }}>
          © {new Date().getFullYear()} EPA Fondation — Tous droits réservés.<br />
          Réalisé par <a href="https://wockytech.xyz" target="_blank" rel="noreferrer" style={{ color: '#b3861b', textDecoration: 'underline' }}>WockyTech</a>
        </p>
      </footer>
    </main>
  )
}
