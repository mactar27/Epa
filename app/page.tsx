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

const nav = [['Accueil', 'accueil'], ['Notre histoire', 'histoire'], ['Nos éditions', 'editions'], ['Nos actions', 'actions'], ['Galerie', 'galerie'], ['Nous rejoindre', 'rejoindre']]

const editions = [
  { number: '01', title: 'Première édition', desc: 'Là où tout a commencé.', img: '/7bda3c41-7287-4d2a-ac1e-2ab4477c6d9e.JPG' },
  { number: '02', title: 'Deuxième édition', desc: "Plus de partage. Plus d'impact. Plus loin ensemble.", img: '/89bbb2b2-f76a-44e5-a8aa-431c6aace63d.JPG' }
]

const gallery = [
  '/0e8386b7-4b92-493b-9836-eb664e3afbf7.JPG',
  '/6b55e4d8-2b6f-4010-b822-3e93a93b10c7.JPG',
  '/6c740b82-df62-4be1-99ad-bc2cabd3d891.JPG',
  '/bf7f3c65-8096-455a-89d5-c599eb1c313a.JPG',
  '/fd0a367d-16ce-463b-a055-9bd140de386b.JPG',
  '/f0141fec-8e76-41f4-b4ce-9cd516db2994.JPG'
]

// All 52 event images from public/
const allEventImages = [
  '/095c1f9a-2beb-428a-8ca6-853cd298bfd4%202.JPG',
  '/0ad088f5-1be0-41d7-942c-5221088e3196.JPG',
  '/0b0f2851-9eb1-4ff2-b253-fb1110ef96d2%202.JPG',
  '/0e8386b7-4b92-493b-9836-eb664e3afbf7.JPG',
  '/105a7b40-8e43-48ec-b4ae-cfee8fdbbdea.JPG',
  '/11119b44-7642-483b-9c70-33b9282fb199.JPG',
  '/1446323d-a9d4-46c4-bf1d-1c2728fa5921.JPG',
  '/17bd350a-37ba-4d06-8494-9abedbb3135a%202.JPG',
  '/18e45b65-fddb-4100-9766-95cdccae0e58.JPG',
  '/1a29f1af-2069-4fd3-8e95-c8d714c48a34.JPG',
  '/1ab4dab2-9494-4b4d-ae17-e13df19f43a8.JPG',
  '/296351a2-b836-4ca5-a621-36c27b2e91a7%202.JPG',
  '/29f0c4c3-4754-42b2-88ea-df6646f95215%202.JPG',
  '/328e4581-c264-47db-bff8-8bc1b6cbff56.JPG',
  '/3579b4e9-cc43-428c-8d1e-f3b13193aa53.JPG',
  '/3fc61b31-71a9-47a3-b522-95b3fce38c23%202.JPG',
  '/434a601a-4068-4f10-8058-c7421ca177d8%202.JPG',
  '/4b67d476-8bfc-4152-899d-d07e92edcaf2.JPG',
  '/4d8ae60a-6236-4343-92db-e1fd80913e6b.JPG',
  '/6450d2c1-8b92-441f-8797-369b45a32a39.JPG',
  '/6b55e4d8-2b6f-4010-b822-3e93a93b10c7.JPG',
  '/6c740b82-df62-4be1-99ad-bc2cabd3d891.JPG',
  '/7131385a-9aaa-4bd0-894e-c7881c924710.JPG',
  '/74dab822-f4cc-4a17-ae23-437ecd0d111a.JPG',
  '/77016bc5-e0ab-465d-a2c5-8f6084d16694%202.JPG',
  '/7bda3c41-7287-4d2a-ac1e-2ab4477c6d9e.JPG',
  '/80900005-8987-441c-9ac7-9656455481aa.JPG',
  '/8104d95e-56f3-4632-9235-bd328228438c.JPG',
  '/87150aa9-b5c5-4a17-b887-6036b90a1f46%202.JPG',
  '/89bbb2b2-f76a-44e5-a8aa-431c6aace63d.JPG',
  '/964d608f-37d8-4e66-a42e-b7560010a326%202.JPG',
  '/96f51a96-482f-43e1-8791-bbf2488abdc6.JPG',
  '/9a5df270-556c-41ad-bac4-4898314b9779.JPG',
  '/9fa74156-7b02-4822-a934-f111aca0da21.JPG',
  '/a638f069-3e81-49c4-9217-bffbfe6f0e47.JPG',
  '/a7041992-442f-46a8-974e-ced109461d48.JPG',
  '/ad3d2484-b577-41ea-a9df-6cdbe58edc74.JPG',
  '/b8bfd3c2-4e97-4deb-85cb-df90a62a7902%202.JPG',
  '/bc8d7185-c647-4733-815b-57264cd2314f.JPG',
  '/be11bedf-9297-425a-a9f0-0b9069dcea48%202.JPG',
  '/bf7f3c65-8096-455a-89d5-c599eb1c313a.JPG',
  '/c5132e60-406f-4a93-9247-d009147bb520%202.JPG',
  '/c885787d-c5b2-4bb1-b590-323d30aa374c%202.JPG',
  '/defabd9e-d277-4a85-b7a8-ec281e073f85.JPG',
  '/e628ec73-c696-474d-840f-4922c805f309.JPG',
  '/e7f7c737-8736-4468-952b-9ca561705a2a.JPG',
  '/ea3035ba-8fc5-4705-8840-e976f16fdf1b.JPG',
  '/edb8da60-942e-496d-ba9f-a9a9a89a6499.JPG',
  '/f0141fec-8e76-41f4-b4ce-9cd516db2994.JPG',
  '/f4b65753-759c-4354-a47b-4650de3ed61a%202.JPG',
  '/f9a10d85-9f31-4d3f-99ee-495c9d5c23d8.JPG',
  '/fd0a367d-16ce-463b-a055-9bd140de386b.JPG'
]

function Logo() { return <div className="logo" aria-label="EPA Fondation"><img src="/epa-logo.jpeg" alt="EPA Fondation" /></div> }
function Button({ children, outline = false, href = "#rejoindre" }: { children: React.ReactNode; outline?: boolean; href?: string }) { return <a className={`btn ${outline ? 'btn-outline' : ''}`} href={href}>{children}<ArrowRight size={15} /></a> }
function PlayButton() { return <button className="play" aria-label="Lire la vidéo"><Play size={20} fill="currentColor" /></button> }

export default function Page() {
  const [menu, setMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [playingVideo, setPlayingVideo] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [qrCodeUrl, setQrCodeUrl] = useState('')

  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 30); window.addEventListener('scroll', onScroll); return () => window.removeEventListener('scroll', onScroll) }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setQrCodeUrl(window.location.origin + '/links')
    }
  }, [])

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') setLightboxIndex((prev) => (prev !== null ? (prev + 1) % allEventImages.length : null))
      else if (e.key === 'ArrowLeft') setLightboxIndex((prev) => (prev !== null ? (prev - 1 + allEventImages.length) % allEventImages.length : null))
      else if (e.key === 'Escape') setLightboxIndex(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxIndex])

  const handleImageClick = (src: string) => {
    const idx = allEventImages.indexOf(src)
    if (idx !== -1) setLightboxIndex(idx)
  }

  return <main>
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}><Logo /><nav>{nav.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav><Button>Faire un don <Heart size={13} /></Button><button className="menu-toggle" onClick={() => setMenu(!menu)} aria-label={menu ? 'Fermer le menu' : 'Ouvrir le menu'}>{menu ? <X /> : <Menu />}</button></header>
    {menu && <div className="mobile-menu">{nav.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>{label}</a>)}<Button>Faire un don</Button></div>}

    <section id="accueil" className="hero" style={{ backgroundImage: `linear-gradient(90deg,rgba(5,5,4,.92) 0%,rgba(5,5,4,.5) 48%,rgba(5,5,4,.35)), url('${heroImage}')` }}><div className="hero-shade" /><div className="hero-content"><p className="eyebrow">EPA — ENSEMBLE POUR L'AVENIR</p><h1>Ensemble<br /><em>pour l'avenir.</em></h1><p className="hero-copy">Unis pour l'espoir, la solidarité<br />et le changement.</p><div className="hero-actions"><Button href="#actions">Découvrir nos actions</Button><Button outline href="#editions">Voir nos éditions <Play size={12} fill="currentColor" /></Button></div></div><a href="#histoire" className="scroll-cue">Découvrir EPA <ChevronDown size={18} /></a></section>

    <section id="histoire" className="section story reveal"><div className="story-image"><img src={collage} alt="Les bénévoles EPA auprès des communautés" /><div className="image-tag"><Users size={20} /><span>Des jeunes engagés<br /><b>pour un impact réel</b></span></div></div><div className="story-copy"><p className="eyebrow">Qui sommes-nous ?</p><h2>Plus qu'une association.<br /><em>Un mouvement.</em></h2><p>EPA — Ensemble Pour l'Avenir est une organisation humanitaire et apolitique créée en Mars 2024 par un ensemble de jeunes déterminés. Nous agissons concrètement sur le terrain à travers l'organisation de conférences de sensibilisation, de distributions de Ndogou lors du Ramadan, de caravanes solidaires et d'actions d'aide d'urgence pour bâtir un avenir meilleur.</p><div className="values"><div><Heart /><b>Solidarité</b><span>Soutenir les plus démunis et les personnes en grande précarité.</span></div><div><Shield /><b>Dignité</b><span>Aider chacun à retrouver sa vie, sa vie autonome et sa place.</span></div><div><Users /><b>Avenir</b><span>Accompagner et valoriser la jeunesse pour qu'elle croie en son avenir.</span></div></div><Button href="#histoire">Découvrir notre histoire</Button></div></section>

    <section id="editions" className="section editions"><div className="section-heading"><p className="eyebrow">Nos éditions</p><h2>Deux éditions. <em>Une même vision.</em></h2></div><div className="edition-grid">{editions.map((edition) => <article className="edition-card" key={edition.number}><img src={edition.img} alt={edition.title} /><div className="card-shade" /><div className="edition-info"><span className="edition-number">{edition.number}</span><h3>{edition.title}</h3><p>{edition.desc}</p><a href="#galerie">Voir l'édition <ArrowRight size={15} /></a></div></article>)}</div></section>

    <section id="galerie" className="section gallery"><div className="section-heading"><p className="eyebrow">Galerie</p><h2>Des moments qui racontent <em>notre histoire.</em></h2></div>
      <div className="gallery-grid" style={{ cursor: 'pointer' }}>
        {gallery.map((src, i) => (
          <div className={`gallery-item item-${i}`} key={`${src}-${i}`} onClick={() => handleImageClick(src)}>
            <img src={src} alt="Moment de vie EPA" />
            {i === 2 && <span className="gallery-label">ÉDITION 01</span>}
          </div>
        ))}
      </div>
      <div className="center">
        <button className="btn" onClick={() => setLightboxIndex(0)}>
          Voir toute la galerie ({allEventImages.length} photos) <Grid3X3 size={14} />
        </button>
      </div>

      {/* Lightbox Slider Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center p-4 transition-opacity duration-300">
          {/* Close Button */}
          <button onClick={() => setLightboxIndex(null)} className="absolute top-6 right-6 text-white/80 hover:text-gold transition-colors p-2" aria-label="Fermer" style={{ cursor: 'pointer', background: 'none', border: 'none' }}>
            <X size={32} />
          </button>
          
          {/* Slider Frame */}
          <div className="relative max-w-[90vw] max-h-[80vh] flex items-center justify-center">
            {/* Left Control */}
            <button onClick={(e) => { e.stopPropagation(); setLightboxIndex((prev) => (prev !== null ? (prev - 1 + allEventImages.length) % allEventImages.length : null)) }} className="absolute left-[-20px] md:left-[-70px] text-white/80 hover:text-gold transition-colors p-3" aria-label="Précédent" style={{ cursor: 'pointer', background: 'none', border: 'none' }}>
              <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            
            <img src={allEventImages[lightboxIndex]} alt="Galerie EPA" className="max-w-[80vw] max-h-[75vh] object-contain rounded-lg shadow-2xl transition-all duration-300" style={{ border: '1px solid var(--line)', background: '#000' }} />
            
            {/* Right Control */}
            <button onClick={(e) => { e.stopPropagation(); setLightboxIndex((prev) => (prev !== null ? (prev + 1) % allEventImages.length : null)) }} className="absolute right-[-20px] md:right-[-70px] text-white/80 hover:text-gold transition-colors p-3" aria-label="Suivant" style={{ cursor: 'pointer', background: 'none', border: 'none' }}>
              <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>
          
          {/* Counters */}
          <span className="text-white/60 text-sm mt-4 font-mono select-none">
            {lightboxIndex + 1} / {allEventImages.length}
          </span>
        </div>
      )}
    </section>

    <section id="actions" className="video-feature"><div><p className="eyebrow">EPA en action</p><h2>Revivez l'énergie EPA.</h2><p>Chaque sourire. Chaque rencontre.<br />Chaque action raconte une histoire.</p><button className="btn" onClick={() => setPlayingVideo(true)}>Regarder la vidéo <Play size={13} fill="currentColor" /></button></div><div className="video-card" style={{ cursor: 'pointer' }} onClick={() => setPlayingVideo(true)}>{playingVideo ? <video src={videoSource} controls autoPlay className="w-full h-full object-cover" style={{ width: '100%', height: '100%', display: 'block' }} /> : <><img src={mobileReference} alt="L'équipe EPA réunie" /><PlayButton /><div className="video-bar"><span /><small>Cliquez pour lire</small></div></>}</div></section>

    <section className="commitments"><div className="section-heading"><p className="eyebrow">Nos engagements</p><h2>Notre engagement, <em>en action.</em></h2></div><div className="commitment-grid">{[['01', 'Soutenir', 'Soutenir les plus démunis et les personnes en grande précarité en leur offrant de quoi se nourrir et en répondant à leurs besoins essentiels.'], ['02', 'Reconstruire', 'Aider chacun à reconstruire sa vie, en lui donnant les moyens de retrouver dignité, autonomie et une place active dans la société.'], ['03', 'Accompagner', 'Accompagner et valoriser la jeunesse, surtout celle issue de milieux défavorisés, afin de lui offrir des opportunités.']].map(([n, title, text]) => <div className="commitment" key={n}><strong>{n}</strong><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></section>

    <section className="journey"><div><p className="eyebrow">Notre parcours</p><h2>Un chemin construit ensemble.</h2><div className="timeline">{[['Mars 2024', "Création d’EPA Fondation", 'Naissance d’une idée portée par un ensemble de jeunes déterminés.'], ['Édition 01', 'Premiers pas.', 'Première édition, premières actions, premiers sourires.'], ['Édition 02', 'On grandit.', "Plus d’actions, plus de bénéficiaires, plus d’impact sur le terrain."], ['Demain', 'Encore plus loin.', 'De nouveaux projets, plus d’espoir et un avenir à construire ensemble.']].map(([date, title, text]) => <div className="timeline-item" key={date}><span className="timeline-dot" /><small>{date}</small><b>{title}</b><p>{text}</p></div>)}</div></div><div className="stats">{[['+ 500', 'Bénéficiaires accompagnés'], ['+ 2', 'Éditions réalisées'], ['+ 50', 'Bénévoles engagés'], ['1', 'Seule mission : l’espoir']].map(([n, l]) => <div key={l}><strong>{n}</strong><span>{l}</span></div>)}</div></section>

    <section id="rejoindre" className="join" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('${joinBackground}')` }}><div className="join-shade" /><div><p className="eyebrow">Rejoignez le mouvement</p><h2>L'avenir ne se construit pas seul.</h2><p>Rejoignez EPA Fondation et devenez acteur du changement.</p><div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}><Button href="/links">Nous rejoindre</Button><div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}><div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}><img src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(qrCodeUrl || 'https://epa-fondation-website.vercel.app/links')}`} alt="QR Code EPA Links" style={{ width: '100px', height: '100px', borderRadius: '6px', border: '1.5px solid var(--gold)', background: '#fff', padding: '4px' }} /><span style={{ fontSize: '9px', color: '#ddd', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Nos Réseaux & Contacts</span></div></div></div></div></section>
    <footer><Logo /><p>EPA — Ensemble Pour l’Avenir est une organisation humanitaire et apolitique créée en Mars 2024 par un ensemble de jeunes déterminés.</p><div><b>Liens rapides</b>{nav.slice(0, 4).map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</div><div><b>Suivez-nous</b><span className="socials" aria-label="Réseaux sociaux"><a href="https://instagram.com/ensemble_pour_l_avenir?igsi=MW1mdmltZjM2dTA4ZQ%3D%3D" target="_blank" rel="noreferrer" aria-label="EPA Fondation sur Instagram" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', borderRadius: '50%', border: '1px solid var(--line)', color: 'var(--gold)', transition: 'all 0.3s' }} className="hover:bg-[rgba(231,183,68,0.15)] hover:scale-110"><svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a><a href="https://snapchat.com/t/SWqV3eGj" target="_blank" rel="noreferrer" aria-label="EPA Fondation sur Snapchat" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', borderRadius: '50%', border: '1px solid var(--line)', color: 'var(--gold)', transition: 'all 0.3s' }} className="hover:bg-[rgba(231,183,68,0.15)] hover:scale-110"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 .75c-3.15 0-5.7 2.1-5.7 5.25 0 2.22.95 3.32.95 4.35 0 .22-.24.58-.72 1.05-.62.6-1.57 1.48-1.57 2.6 0 1.25.9 2.05 2.15 2.05.58 0 1.34-.2 1.95-.5.7.53 1.76.95 2.94.95 1.18 0 2.24-.42 2.94-.95.6.3 1.37.5 1.95.5 1.25 0 2.15-.8 2.15-2.05 0-1.12-.95-2-1.57-2.6-.48-.47-.72-.83-.72-1.05 0-1.03.95-2.13.95-4.35C17.7 2.85 15.15.75 12 .75zm0 1.5c2.4 0 4.2 1.55 4.2 3.75 0 1.8-.75 2.85-.75 3.75 0 .52.34 1 .84 1.5.6.6 1.41 1.35 1.41 2.1 0 .6-.41.8-1.15.8-.72 0-1.58-.28-2.22-.64-.52-.3-.87-.41-1.33-.41s-.81.11-1.33.41c-.64.36-1.5.64-2.22.64-.74 0-1.15-.2-1.15-.8 0-.75.81-1.5 1.41-2.1.5-.5.84-.98.84-1.5 0-.9-.75-1.95-.75-3.75C7.8 3.8 9.6 2.25 12 2.25z"/></svg></a><a href="https://chat.whatsapp.com/EGCBEVlYRgeEzMeTIxgkwD?mode=ems_copy_t&utm_source=ig&utm_medium=social&utm_content=link_in_bio" target="_blank" rel="noreferrer" aria-label="Rejoindre EPA Fondation sur WhatsApp" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', borderRadius: '50%', border: '1px solid var(--line)', color: 'var(--gold)', transition: 'all 0.3s' }} className="hover:bg-[rgba(231,183,68,0.15)] hover:scale-110"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.324 5.328 0 11.859 0c3.166.001 6.141 1.233 8.377 3.469 2.235 2.237 3.465 5.212 3.462 8.378-.005 6.525-5.33 11.849-11.86 11.849-.2.001-.4.001-.6 0-2.004-.002-3.992-.519-5.752-1.503L0 24zm6.59-4.846c1.785 1.059 3.528 1.621 5.267 1.623 5.432-.001 9.853-4.42 9.856-9.854.002-2.631-1.02-5.105-2.879-6.965C17.032 2.1 14.562.997 11.932 1.002c-5.435 0-9.855 4.42-9.858 9.855-.001 1.83.483 3.619 1.401 5.219l-1.057 3.86 3.968-1.042c1.55.938 3.125 1.442 4.7 1.445l.502-.005zm10.748-7.39c-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.668.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/></svg></a></span><small>© 2024 EPA Fondation — Tous droits réservés.<br />Réalisé par <a href="https://wockytech.xyz" target="_blank" rel="noreferrer" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>WockyTech</a></small></div></footer>
    <Chatbot />
  </main>
}
