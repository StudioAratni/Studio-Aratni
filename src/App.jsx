import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ArrowLeft, Send } from 'lucide-react';

const InstagramIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const WhatsAppIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const projectData = [
  {
    title: 'Thanal',
    type: 'Residential Project',
    mainImage: 'src/assets/thanal/EXTERIOR-1.jpeg',
    hoverImage: 'src/assets/thanal/EXTERIOR-2.jpeg',
    images: [
      'src/assets/thanal/EXTERIOR-1.jpeg',
      'src/assets/thanal/EXTERIOR-2.jpeg',
      'src/assets/thanal/EXTERIOR-3.jpeg',
      'src/assets/thanal/INTERIOR-1.png',
      'src/assets/thanal/INTERIOR-2.png',
      'src/assets/thanal/INTERIOR-3.jpg',
      'src/assets/thanal/INTERIOR-4.png',
      'src/assets/thanal/INTERIOR-5.png',
    ],
  },
  {
    title: 'Amber Urban Pub',
    type: 'Commercial Project',
    mainImage: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=90&w=1200',
    images: [
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=90&w=1600',
      'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&q=90&w=1600',
    ],
  },
  {
    title: 'Mureli House',
    type: 'Residential Project',
    mainImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=90&w=1200',
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=90&w=1600',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=90&w=1600',
    ],
  },
  {
    title: 'Ridnyi House',
    type: 'Residential Project',
    mainImage: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&q=90&w=1200',
    images: [
      'https://images.unsplash.com/photo-1600047509358-9dc75507daeb?auto=format&fit=crop&q=90&w=1600',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=90&w=1600',
    ],
  },
  {
    title: 'Apteka 92',
    type: 'Retail Project',
    mainImage: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=90&w=1200',
    images: [
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&q=90&w=1600',
      'https://images.unsplash.com/photo-1600607687126-8a3414349a51?auto=format&fit=crop&q=90&w=1600',
    ],
  },
];

export default function App() {
  const [activeProject, setActiveProject] = useState(0);
  const [hoveredProjectIdx, setHoveredProjectIdx] = useState(null);
  const [showAbout, setShowAbout] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const INSTAGRAM_URL = "https://www.instagram.com/studio_aratni/";
  const LINKEDIN_URL = "https://www.linkedin.com/in/ar-gokul-murali-3065591a5/";
  const WHATSAPP_URL = "https://wa.me/919113546232";
  const CONTACT_EMAIL = "gokul.m.1798@gmail.com";

  const scrollToWork = () => {
    setSelectedProject(null);
    setShowAbout(false);
    setIsMenuOpen(false);
    setTimeout(() => {
      const workSection = document.getElementById('work');
      if (workSection) {
        workSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const closeModals = () => {
    setShowAbout(false);
    setSelectedProject(null);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (selectedProject !== null) {
    const project = projectData[selectedProject];
    return (
      <div className="min-h-screen bg-[#f5f2ed] text-[#2d2d2a] px-6 md:px-16 py-12 md:py-24 font-sans animate-in fade-in duration-500">
        <button
          onClick={scrollToWork}
          className="flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-black/40 mb-12 hover:text-black transition-colors duration-300"
        >
          <ArrowLeft size={14} /> Back to Projects
        </button>

        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.45em] text-black/35 mb-4">{project.type}</p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl uppercase tracking-[0.12em] font-extralight mb-12 md:mb-20">{project.title}</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {project.images.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-sm bg-black/5 aspect-[4/5] md:aspect-auto">
                <img
                  src={image}
                  alt={`${project.title} ${index}`}
                  className="w-full h-full md:h-[480px] object-cover hover:scale-[1.02] transition-all duration-700"
                  onError={(e) => { e.target.src = `https://placehold.co/600x800/EAEAEA/999999?text=${project.title}`; }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (showAbout) {
    return (
      <div className="min-h-screen bg-[#f8f5f1] text-[#2d2d2a] px-6 md:px-16 py-12 md:py-24 font-sans animate-in fade-in duration-500">
        <button
          onClick={() => setShowAbout(false)}
          className="flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-black/40 mb-12 md:mb-16 hover:text-black transition-colors duration-300"
        >
          <ArrowLeft size={14} /> Back to Home
        </button>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-12 lg:gap-24 mb-20 items-center">
            <div>
              <p className="text-[10px] uppercase tracking-[0.5em] text-[#a68a71] mb-6 font-semibold">Gokul Murali</p>
              <h1 className="text-4xl md:text-6xl font-extralight uppercase tracking-[0.05em] leading-[1.1] mb-8">
                Architectural Vision. <br />
                <span className="italic font-normal text-[#a68a71]">Interior Precision.</span>
              </h1>
              <p className="text-[16px] md:text-[18px] leading-[1.8] text-black/70 font-light max-w-2xl">
                A dedicated Design Professional with over four years of specialized experience, bridging the gap between technical drafting and soulful execution.
              </p>
            </div>
            <div className="aspect-[4/5] bg-black/5 overflow-hidden rounded-sm relative group">
                <img 
                  src="src/assets/Gokul.png" 
                  alt="Gokul Murali" 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  onError={(e) => { e.target.src = "https://placehold.co/600x800/EAEAEA/999999?text=Gokul+Murali"; }}
                />
                <div className="absolute bottom-6 left-6 text-white text-[10px] tracking-[0.3em] uppercase bg-black/40 backdrop-blur-md px-4 py-2 font-medium">Founder & Lead Designer</div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 mb-20 border-t border-black/5 pt-16">
            <div className="space-y-6">
              <h3 className="text-[11px] uppercase tracking-[0.4em] text-black/40">The Journey</h3>
              <p className="text-[15px] leading-[2.2] text-black/60 font-light">
                With a portfolio spanning over <strong className="text-black font-normal">200+ projects</strong>, I combine the structured efficiency of industry giants with the personalized care of a boutique practice.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-[11px] uppercase tracking-[0.4em] text-black/40">Philosophy</h3>
              <p className="text-[15px] leading-[2.2] text-black/60 font-light">
                Our design language is one of quietude. We believe in stripping away the unnecessary to reveal the inherent beauty of light and local materials.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-[#ece7e1] font-sans selection:bg-[#2d2d2a] selection:text-white overflow-x-hidden">
      <style>{`
        html { scroll-behavior: smooth; }
        @keyframes breathe {
          0% { transform: scale(1.02); }
          100% { transform: scale(1.06); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(.8); opacity: 0.5; }
          100% { transform: scale(1.3); opacity: 0; }
        }
        .whatsapp-float {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 1000;
          transition: all 0.3s ease;
        }
        .whatsapp-float:hover { transform: translateY(-5px); }
        .pulse-effect {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: #25D366;
          animation: pulse-ring 2s infinite;
        }
      `}</style>

      {}
      <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md border-b border-black/5 px-6 md:px-10 py-4 md:py-6 z-[100]">
        <div className="max-w-[1800px] mx-auto flex justify-between items-center">
          <div className="cursor-pointer group" onClick={closeModals}>
            <div className="text-[9px] tracking-[0.6em] font-bold text-black/50 uppercase group-hover:text-black transition-colors">Studio</div>
            <div className="text-base md:text-lg tracking-[0.25em] uppercase font-semibold text-[#2d2d2a]">Aratni</div>
          </div>

          <div className="hidden lg:flex gap-10 text-[10px] uppercase tracking-[0.35em] text-black/50">
            <a href="#" className="hover:text-black transition-colors">Home</a>
            <button onClick={() => setShowAbout(true)} className="hover:text-black transition-colors uppercase">About</button>
            <a href="#work" className="hover:text-black transition-colors">Work</a>
            <a href="#services" className="hover:text-black transition-colors">Services</a>
            <a href="#contact" className="hover:text-black transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-3 text-black/40">
               <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                 <InstagramIcon size={16} className="hover:text-black cursor-pointer transition-colors" />
               </a>
               <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                 <LinkedinIcon size={16} className="hover:text-black cursor-pointer transition-colors" />
               </a>
            </div>
            <button className="lg:hidden text-[#2d2d2a] p-2 relative z-[1000]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-0 bg-white z-[999] transition-all duration-500 ease-in-out ${
            isMenuOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
        >
          <div className="h-full flex flex-col px-8 pt-24 pb-12">

            {/* Close Button */}
            <div className="flex justify-end mb-16">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-black"
              >
                <X size={38} strokeWidth={1.5} />
              </button>
            </div>

            {/* Navigation */}
            <div className="flex flex-col gap-10">
              <a
                href="#"
                onClick={() => setIsMenuOpen(false)}
                className="text-[20px] tracking-[0.08em] font-light text-black"
              >
                Home
              </a>

              <a
                href="#work"
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToWork();
                }}
                className="text-[20px] tracking-[0.08em] font-light text-black"
              >
                Portfolio
              </a>

              <button
                onClick={() => {
                  setShowAbout(true);
                  setIsMenuOpen(false);
                }}
                className="text-left text-[20px] tracking-[0.08em] font-light text-black"
              >
                About
              </button>

              <a
                href="#services"
                onClick={() => setIsMenuOpen(false)}
                className="text-[20px] tracking-[0.08em] font-light text-black"
              >
                Services
              </a>

              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-[20px] tracking-[0.08em] font-light text-black"
              >
                Contact
              </a>
            </div>

            {/* Socials */}
            <div className="mt-auto flex items-center gap-6 pt-16">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/60 hover:text-black transition"
              >
                <InstagramIcon size={22} />
              </a>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/60 hover:text-black transition"
              >
                <LinkedinIcon size={22} />
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/60 hover:text-black transition"
              >
                <WhatsAppIcon size={22} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* WhatsApp Float */}
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="whatsapp-float group">
        <div className="pulse-effect"></div>
        <div className="relative bg-[#25D366] text-white p-4 rounded-full shadow-lg flex items-center justify-center">
          <WhatsAppIcon size={28} />
          <span className="absolute right-full mr-4 bg-white text-black text-[10px] tracking-widest uppercase py-2 px-4 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">Message Us</span>
        </div>
      </a>

      {/* Hero Section */}
      <section className="relative h-screen w-full">
        <img
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2000"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ animation: 'breathe 14s ease-in-out infinite alternate' }}
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-8">
          <div className="max-w-5xl">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight uppercase tracking-[0.06em] leading-[1.25] md:leading-[1.3] max-w-[95vw] mx-auto">
              Architecture <span className="italic">that</span> breathes.
              <br className="hidden sm:block" />
              Interiors <span className="italic">that</span> resonate.
            </h1>
            <p className="mt-8 text-[9px] md:text-[11px] tracking-[0.45em] uppercase text-white/70">
              Rooted in Proportion & Light
            </p>
            <a href="#work" className="inline-block mt-12 border border-white/40 px-8 md:px-12 py-4 text-[10px] uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all duration-500 backdrop-blur-sm">
              Explore Works
            </a>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="bg-[#f2efed] px-6 md:px-14 py-20 lg:py-32 overflow-hidden border-b border-black/5">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] items-center gap-12 lg:gap-24">
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-black/40 mb-4">Work Selection</p>
            <h2 className="text-3xl md:text-4xl uppercase tracking-[0.15em] font-light mb-10 text-[#2d2d2a]">Featured Projects</h2>

            <div className="space-y-0">
              {projectData.map((project, index) => (
                <div
                  key={project.title}
                  onMouseEnter={() => { setActiveProject(index); setHoveredProjectIdx(index); }}
                  onMouseLeave={() => setHoveredProjectIdx(null)}
                  onClick={() => setSelectedProject(index)}
                  className={`group flex items-center justify-between border-b border-black/10 py-8 md:py-10 transition-all duration-500 cursor-pointer ${activeProject === index ? 'lg:pl-4 opacity-100' : 'opacity-60 hover:opacity-100'}`}
                >
                  <div className="flex items-center gap-6 md:gap-8">
                    <span className="text-[11px] tracking-[0.2em] text-black/35 font-mono">0{index + 1}</span>
                    <span className="uppercase tracking-[0.18em] text-lg md:text-[22px] font-light text-[#2d2d2a]">{project.title}</span>
                  </div>
                  <ArrowRight size={18} className={`transition-all duration-300 ${activeProject === index ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`} />
                </div>
              ))}
            </div>

            <button onClick={() => { window.location.href = LINKEDIN_URL; }} className="mt-12 text-[11px] uppercase tracking-[0.4em] text-black/40 hover:text-black transition-colors underline underline-offset-8 decoration-black/10">
              [ View Full Portfolio Archive ]
            </button>
          </div>

          <div className="relative overflow-hidden aspect-[4/3] lg:aspect-[4/5] w-full max-w-lg mx-auto rounded-sm bg-black/5 self-center shadow-xl">
             {projectData.map((p, idx) => (
               <img
                  key={idx}
                  src={(hoveredProjectIdx === idx && p.hoverImage) ? p.hoverImage : p.mainImage}
                  alt={p.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${activeProject === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'}`}
                  onError={(e) => { e.target.src = `https://placehold.co/800x1000/EAEAEA/999999?text=${p.title}`; }}
                />
             ))}
          </div>
        </div>
      </section>

      {}
      <section id="services" className="px-6 md:px-14 py-20 md:py-32 bg-[#f5f2ed]">
        <div className="max-w-7xl mx-auto mb-20 text-center lg:text-left">
           <p className="text-[10px] uppercase tracking-[0.45em] text-black/40 mb-4">Core Disciplines</p>
           <h2 className="text-3xl md:text-4xl uppercase tracking-[0.15em] font-light text-[#2d2d2a]">Services</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {[
            { title: 'Modular Solutions', desc: 'Tailored kitchens and storage systems for contemporary living.', img: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80&w=800' },
            { title: 'Bespoke Interiors', desc: 'Curated environments shaped through texture and spatial harmony.', img: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=80&w=800' },
            { title: 'Architecture', desc: 'Contemporary residences rooted in climate and timeless materiality.', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800' },
            { title: 'Furniture Selection', desc: 'Thoughtfully selected pieces that complement the narrative.', img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800' },
          ].map((item) => (
            <div key={item.title} className="group">
              <div className="overflow-hidden bg-black/5 aspect-[4/3] rounded-sm mb-6">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
              </div>
              <h3 className="text-[12px] uppercase tracking-[0.25em] mb-3 text-[#2d2d2a] font-medium">{item.title}</h3>
              <p className="text-[13px] leading-[1.8] text-black/50 font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {}
      <section id="contact" className="bg-[#f5f2ed] px-6 md:px-16 py-20 md:py-32">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="flex-1">
            <p className="text-[10px] uppercase tracking-[0.45em] text-black/35 mb-6">Inquiry</p>
            <h2 className="text-3xl md:text-5xl uppercase tracking-[0.1em] font-light text-[#2d2d2a] mb-12 leading-tight">Let's build <br /> something <span className="italic">timeless</span>.</h2>
            
            <div className="mb-12 space-y-2">
               <p className="text-[10px] uppercase tracking-widest text-black/40">Direct Contact</p>
               <a href={`mailto:${CONTACT_EMAIL}`} className="text-lg font-light hover:text-[#a68a71] transition-colors">{CONTACT_EMAIL}</a>
            </div>

            <form className="space-y-12" action={`mailto:${CONTACT_EMAIL}`} method="GET">
              <input type="text" name="subject" placeholder="Project Name" className="w-full bg-transparent border-b border-black/10 pb-4 outline-none text-[11px] uppercase tracking-[0.2em] placeholder:text-black/30 focus:border-black/40 transition-all" />
              <textarea name="body" placeholder="Tell us about your vision..." rows={3} className="w-full bg-transparent border-b border-black/10 pb-4 outline-none text-[11px] uppercase tracking-[0.2em] placeholder:text-black/30 focus:border-black/40 transition-all resize-none" />
              <button type="submit" className="group flex items-center gap-4 px-12 py-5 bg-[#2d2d2a] text-white text-[10px] uppercase tracking-[0.4em] hover:bg-black transition-all">
                Send Message <Send size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
          
          <div className="flex-1 bg-black/5 min-h-[400px] rounded-sm relative grayscale overflow-hidden opacity-70 border border-black/5 shadow-inner">
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31435.23959683766!2d76.2960928!3d9.4980666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08854f7f1e0d8f%3A0xf4c9f5e4a7c2b1b7!2sAlappuzha%2C%20Kerala!5e0!3m2!1sen!2sin!4v1715583000000!5m2!1sen!2sin" className="absolute inset-0 w-full h-full border-0" loading="lazy" />
          </div>
        </div>
      </section>

      {}
      <footer className="bg-[#ebe6df] border-t border-black/5 px-6 md:px-16 py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-[9px] uppercase tracking-[0.35em] text-black/40">
          <div>© 2026 Studio Aratni — Kerala, India</div>
          <div className="flex gap-10">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Instagram</a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">LinkedIn</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">WhatsApp</a>
          </div>
        </div>
      </footer>
    </div>
  );
}