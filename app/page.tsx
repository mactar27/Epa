'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, ChevronDown, Grid3X3, Heart, Menu, Play, Shield, Users, X } from 'lucide-react'
import Chatbot from '../components/chatbot'

// Real Event Images from public/
const heroImage = '/c885787d-c5b2-4bb1-b590-323d30aa374c%202.JPG'
const collage = '/0b0f2851-9eb1-4ff2-b253-fb1110ef96d2%202.JPG'
const mobileReference = '/1446323d-a9d4-46c4-bf1d-1c2728fa5921.JPG'
const joinBackground = '/328e4581-c264-47db-bff8-8bc1b6cbff56.JPG'
const videoSource = '/8f4e66e4-9a44-4dad-a773-83da81133836.MP4'

const nav = [['Accueil', 'accueil'], ['Notre histoire', 'histoire'], ['Nos éditions', 'editions'], ['Nos actions', 'actions'], ['Nous rejoindre', 'rejoindre']]

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

const editions = [
  { number: '01', title: 'Première édition', desc: 'Là où tout a commencé.', img: '/1ere-edition/8c0549a9-e14d-4fcc-95ed-6e1a17a64b26.JPG' },
  { number: '02', title: 'Deuxième édition', desc: "Plus de partage. Plus d'impact. Plus loin ensemble.", img: '/2e-edition/54634140-05f0-432f-9165-229043da4425.JPG' },
  { number: '03', title: 'Troisième édition', desc: "Caravanes de solidarité, distribution élargie et projets d'avenir.", img: '/3e-edition/161d4365-a5a8-42f2-9f96-b222cd6c0dec.JPG' }
]

const allEventImages = [...firstEditionImages, ...secondEditionImages, ...thirdEditionImages]

function Logo() { return <div className="logo" aria-label="EPA Fondation"><img src="/epa-logo.jpeg" alt="EPA Fondation" /></div> }
function Button({ children, outline = false, href = "#rejoindre" }: { children: React.ReactNode; outline?: boolean; href?: string }) { return <a className={`btn ${outline ? 'btn-outline' : ''}`} href={href}>{children}<ArrowRight size={15} /></a> }
function PlayButton() { return <button className="play" aria-label="Lire la vidéo"><Play size={20} fill="currentColor" /></button> }

export default function Page() {
  const [menu, setMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [playingVideo, setPlayingVideo] = useState(false)
  const [qrCodeUrl, setQrCodeUrl] = useState('')
  const [showSplash, setShowSplash] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const timerFade = setTimeout(() => setFadeOut(true), 2400)
    const timerRemove = setTimeout(() => setShowSplash(false), 3000)
    return () => {
      clearTimeout(timerFade)
      clearTimeout(timerRemove)
    }
  }, [])

  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 30); window.addEventListener('scroll', onScroll); return () => window.removeEventListener('scroll', onScroll) }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setQrCodeUrl(window.location.origin + '/links')
    }
  }, [])

  return <main>
    {showSplash && (
      <div className={`splash-screen ${fadeOut ? 'fade-out' : ''}`}>
        <img src="/epa-logo.jpeg" alt="EPA Logo" className="splash-logo" />
      </div>
    )}
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}><Logo /><nav>{nav.map(([label, id]) => <a key={id} href={id === 'accueil' ? '/' : `/#${id}`}>{label}</a>)}</nav><Button>Faire un don <Heart size={13} /></Button><button className="menu-toggle" onClick={() => setMenu(!menu)} aria-label={menu ? 'Fermer le menu' : 'Ouvrir le menu'}>{menu ? <X /> : <Menu />}</button></header>
    {menu && <div className="mobile-menu">{nav.map(([label, id]) => <a key={id} href={id === 'accueil' ? '/' : `/#${id}`} onClick={() => setMenu(false)}>{label}</a>)}<Button>Faire un don</Button></div>}

    <section id="accueil" className="hero" style={{ backgroundImage: `linear-gradient(90deg,rgba(5,5,4,.92) 0%,rgba(5,5,4,.5) 48%,rgba(5,5,4,.35)), url('${heroImage}')` }}><div className="hero-shade" /><div className="hero-content"><p className="eyebrow">EPA — ENSEMBLE POUR L'AVENIR</p><h1>Ensemble<br /><em>pour l'avenir.</em></h1><p className="hero-copy">Unis pour l'espoir, la solidarité<br />et le changement.<br /><span style={{ color: 'var(--gold-soft)', fontSize: '15px', display: 'block', marginTop: '10px', fontStyle: 'italic' }}>« Le don de soi pour un avenir meilleur »</span></p><div className="hero-actions"><Button href="#actions">Découvrir nos actions</Button><Button outline href="#editions">Voir nos éditions <Play size={12} fill="currentColor" /></Button></div></div><a href="#histoire" className="scroll-cue">Découvrir EPA <ChevronDown size={18} /></a></section>

    <section id="histoire" className="section story reveal"><div className="story-image"><img src={collage} alt="Les bénévoles EPA auprès des communautés" /><div className="image-tag"><Users size={20} /><span>Des jeunes engagés<br /><b>pour un impact réel</b></span></div></div><div className="story-copy"><p className="eyebrow">Qui sommes-nous ?</p><h2>Plus qu'une association.<br /><em>Un mouvement.</em></h2><p>EPA — Ensemble Pour l'Avenir est une organisation humanitaire et apolitique créée en Mars 2024 par un ensemble de jeunes déterminés. Nous agissons concrètement sur le terrain à travers l'organisation de conférences de sensibilisation, de distributions de Ndogou lors du Ramadan, de caravanes solidaires et d'actions d'aide d'urgence pour bâtir un avenir meilleur.</p><div className="values"><div><Heart /><b>Solidarité</b><span>Soutenir les plus démunis et les personnes en grande précarité.</span></div><div><Shield /><b>Dignité</b><span>Aider chacun à retrouver sa vie, sa vie autonome et sa place.</span></div><div><Users /><b>Avenir</b><span>Accompagner et valoriser la jeunesse pour qu'elle croie en son avenir.</span></div></div><Button href="#histoire">Découvrir notre histoire</Button></div></section>

    <section id="editions" className="section editions"><div className="section-heading"><p className="eyebrow">Nos éditions</p><h2>Trois éditions. <em>Une même vision.</em></h2></div><div className="edition-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>{editions.map((edition) => <article className="edition-card" key={edition.number}><img src={edition.img} alt={edition.title} /><div className="card-shade" /><div className="edition-info"><span className="edition-number">{edition.number}</span><h3>{edition.title}</h3><p>{edition.desc}</p><a href={`/editions/${edition.number.replace(/^0/, '')}`}>Voir l'édition <ArrowRight size={15} /></a></div></article>)}</div></section>



    <section id="actions" className="video-feature"><div><p className="eyebrow">EPA en action</p><h2>Revivez l'énergie EPA.</h2><p>Chaque sourire. Chaque rencontre.<br />Chaque action raconte une histoire.</p><button className="btn" onClick={() => setPlayingVideo(true)}>Regarder la vidéo <Play size={13} fill="currentColor" /></button></div><div className="video-card" style={{ cursor: 'pointer' }} onClick={() => setPlayingVideo(true)}>{playingVideo ? <video src={videoSource} controls autoPlay className="w-full h-full object-cover" style={{ width: '100%', height: '100%', display: 'block' }} /> : <><img src={mobileReference} alt="L'équipe EPA réunie" /><PlayButton /><div className="video-bar"><span /><small>Cliquez pour lire</small></div></>}</div></section>

    <section className="commitments"><div className="section-heading"><p className="eyebrow">Nos engagements</p><h2>Notre engagement, <em>en action.</em></h2></div><div className="commitment-grid">{[['01', 'Soutenir', 'Soutenir les plus démunis et les personnes en grande précarité en leur offrant de quoi se nourrir et en répondant à leurs besoins essentiels.'], ['02', 'Reconstruire', 'Aider chacun à reconstruire sa vie, en lui donnant les moyens de retrouver dignité, autonomie et une place active dans la société.'], ['03', 'Accompagner', 'Accompagner et valoriser la jeunesse, surtout celle issue de milieux défavorisés, afin de lui offrir des opportunités.']].map(([n, title, text]) => <div className="commitment" key={n}><strong>{n}</strong><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></section>

    <section className="journey"><div><p className="eyebrow">Notre parcours</p><h2>Un chemin construit ensemble.</h2><div className="timeline">{[['Mars 2024', "Création d’EPA Fondation", 'Naissance d’une idée portée par un ensemble de jeunes déterminés.'], ['Édition 01', 'Premiers pas.', 'Première édition, premières actions, premiers sourires.'], ['Édition 02', 'On grandit.', "Plus d’actions, plus de bénéficiaires, plus d’impact sur le terrain."], ['Demain', 'Encore plus loin.', 'De nouveaux projets, plus d’espoir et un avenir à construire ensemble.']].map(([date, title, text]) => <div className="timeline-item" key={date}><span className="timeline-dot" /><small>{date}</small><b>{title}</b><p>{text}</p></div>)}</div></div><div className="stats">{[['+ 500', 'Bénéficiaires accompagnés'], ['+ 2', 'Éditions réalisées'], ['+ 50', 'Bénévoles engagés'], ['1', 'Seule mission : l’espoir']].map(([n, l]) => <div key={l}><strong>{n}</strong><span>{l}</span></div>)}</div></section>

    <section id="rejoindre" className="join" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('${joinBackground}')` }}><div className="join-shade" /><div><p className="eyebrow">Rejoignez le mouvement</p><h2>L'avenir ne se construit pas seul.</h2><p>Rejoignez EPA Fondation et devenez acteur du changement.</p><div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}><Button href="/links">Nous rejoindre</Button><div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}><div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}><img src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(qrCodeUrl || 'https://epa-fondation-website.vercel.app/links')}`} alt="QR Code EPA Links" style={{ width: '100px', height: '100px', borderRadius: '6px', border: '1.5px solid var(--gold)', background: '#fff', padding: '4px' }} /><span style={{ fontSize: '9px', color: '#ddd', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Nos Réseaux & Contacts</span></div></div></div></div></section>
    <footer><Logo /><p>EPA — Ensemble Pour l’Avenir est une organisation humanitaire et apolitique créée en Mars 2024 par un ensemble de jeunes déterminés.<br /><span style={{ color: 'var(--gold)', display: 'block', marginTop: '8px', fontStyle: 'italic' }}>« Le don de soi pour un avenir meilleur »</span></p><div><b>Liens rapides</b>{nav.slice(0, 4).map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</div><div><b>Suivez-nous</b><span className="socials" aria-label="Réseaux sociaux"><a href="https://instagram.com/ensemble_pour_l_avenir?igsi=MW1mdmltZjM2dTA4ZQ%3D%3D" target="_blank" rel="noreferrer" aria-label="EPA Fondation sur Instagram" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', borderRadius: '50%', border: '1px solid var(--line)', color: 'var(--gold)', transition: 'all 0.3s' }} className="hover:bg-[rgba(231,183,68,0.15)] hover:scale-110"><svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a><a href="https://snapchat.com/t/SWqV3eGj" target="_blank" rel="noreferrer" aria-label="EPA Fondation sur Snapchat" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', borderRadius: '50%', border: '1px solid var(--line)', color: 'var(--gold)', transition: 'all 0.3s' }} className="hover:bg-[rgba(231,183,68,0.15)] hover:scale-110"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 .75c-3.15 0-5.7 2.1-5.7 5.25 0 2.22.95 3.32.95 4.35 0 .22-.24.58-.72 1.05-.62.6-1.57 1.48-1.57 2.6 0 1.25.9 2.05 2.15 2.05.58 0 1.34-.2 1.95-.5.7.53 1.76.95 2.94.95 1.18 0 2.24-.42 2.94-.95.6.3 1.37.5 1.95.5 1.25 0 2.15-.8 2.15-2.05 0-1.12-.95-2-1.57-2.6-.48-.47-.72-.83-.72-1.05 0-1.03.95-2.13.95-4.35C17.7 2.85 15.15.75 12 .75zm0 1.5c2.4 0 4.2 1.55 4.2 3.75 0 1.8-.75 2.85-.75 3.75 0 .52.34 1 .84 1.5.6.6 1.41 1.35 1.41 2.1 0 .6-.41.8-1.15.8-.72 0-1.58-.28-2.22-.64-.52-.3-.87-.41-1.33-.41s-.81.11-1.33.41c-.64.36-1.5.64-2.22.64-.74 0-1.15-.2-1.15-.8 0-.75.81-1.5 1.41-2.1.5-.5.84-.98.84-1.5 0-.9-.75-1.95-.75-3.75C7.8 3.8 9.6 2.25 12 2.25z"/></svg></a><a href="https://chat.whatsapp.com/EGCBEVlYRgeEzMeTIxgkwD?mode=ems_copy_t&utm_source=ig&utm_medium=social&utm_content=link_in_bio" target="_blank" rel="noreferrer" aria-label="Rejoindre EPA Fondation sur WhatsApp" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', borderRadius: '50%', border: '1px solid var(--line)', color: 'var(--gold)', transition: 'all 0.3s' }} className="hover:bg-[rgba(231,183,68,0.15)] hover:scale-110"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.324 5.328 0 11.859 0c3.166.001 6.141 1.233 8.377 3.469 2.235 2.237 3.465 5.212 3.462 8.378-.005 6.525-5.33 11.849-11.86 11.849-.2.001-.4.001-.6 0-2.004-.002-3.992-.519-5.752-1.503L0 24zm6.59-4.846c1.785 1.059 3.528 1.621 5.267 1.623 5.432-.001 9.853-4.42 9.856-9.854.002-2.631-1.02-5.105-2.879-6.965C17.032 2.1 14.562.997 11.932 1.002c-5.435 0-9.855 4.42-9.858 9.855-.001 1.83.483 3.619 1.401 5.219l-1.057 3.86 3.968-1.042c1.55.938 3.125 1.442 4.7 1.445l.502-.005zm10.748-7.39c-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.668.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/></svg></a></span><small>© 2024 EPA Fondation — Tous droits réservés.<br />Réalisé par <a href="https://wockytech.xyz" target="_blank" rel="noreferrer" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>WockyTech</a></small></div></footer>
    <Chatbot />
  </main>
}
