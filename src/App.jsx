import React, { useState, useEffect } from 'react';
import { 
  X, 
  ArrowRight, 
  ArrowLeft, 
  Send, 
  MoreHorizontal, 
  Instagram, 
  Linkedin, 
  Mail,
  ChevronRight
} from 'lucide-react';

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
    location: 'Bangalore, India',
    mainImage: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1200',
    images: [
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&q=80&w=1200',
    ],
  },
  {
    title: 'Mureli House',
    type: 'Residential Project',
    location: 'Cochin, India',
    mainImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200',
    ],
  },
  {
    title: 'Ridnyi House',
    type: 'Residential Project',
    location: 'Kyiv, Ukraine',
    mainImage: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&q=80&w=1200',
    images: [
      'https://images.unsplash.com/photo-1600047509358-9dc75507daeb?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=1200',
    ],
  },
  {
    title: 'Apteka 92',
    type: 'Retail Project',
    location: 'International',
    mainImage: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80&w=1200',
    images: [
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600607687126-8a3414349a51?auto=format&fit=crop&q=80&w=1200',
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
      <div className="min-h-screen bg-white text-[#2d2d2a] px-6 md:px-16 py-12 md:py-24 font-sans animate-in fade-in duration-700">
        <button
          onClick={scrollToWork}
          className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-black/40 mb-12 hover:text-black transition-all duration-300 group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Projects
        </button>

        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.5em] text-[#a68a71] mb-4 font-semibold">{project.type}</p>
          <h1 className="text-4xl md:text-6xl lg:text-8xl uppercase tracking-[0.05em] font-extralight mb-12 md:mb-20 leading-tight">
            {project.title.split(' ').map((word, i) => (
              <span key={i} className={i % 2 !== 0 ? "italic block md:inline" : ""}>{word} </span>
            ))}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
            {project.images.map((image, index) => (
              <div key={index} className={`overflow-hidden rounded-sm bg-black/5 ${index % 3 === 0 ? 'md:col-span-2 aspect-[16/9]' : 'aspect-[4/5]'}`}>
                <img
                  src={image}
                  alt={`${project.title} ${index}`}
                  className="w-full h-full object-cover hover:scale-[1.03] transition-all duration-1000 ease-out"
                />
              </div>
            ))}
          </div>
          
          <div className="mt-24 border-t border-black/5 pt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-black/40 mb-4">Location</h4>
              <p className="text-sm tracking-widest uppercase">{project.location}</p>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-black/40 mb-4">Status</h4>
              <p className="text-sm tracking-widest uppercase">Completed 2024</p>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-black/40 mb-4">Share</h4>
              <div className="flex gap-4 text-black/40">
                <Instagram size={16} className="hover:text-black cursor-pointer" />
                <Linkedin size={16} className="hover:text-black cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showAbout) {
    return (
      <div className="min-h-screen bg-white text-[#2d2d2a] px-6 md:px-16 py-12 md:py-24 font-sans animate-in fade-in duration-700">
        <button
          onClick={() => setShowAbout(false)}
          className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-black/40 mb-12 hover:text-black transition-all duration-300"
        >
          <ArrowLeft size={14} /> Home
        </button>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-32 mb-32 items-start">
            <div>
              <p className="text-[10px] uppercase tracking-[0.5em] text-[#a68a71] mb-8 font-bold">The Studio</p>
              <h1 className="text-5xl md:text-8xl font-extralight uppercase tracking-[0.02em] leading-[0.95] mb-12">
                Sculpting <span className="italic font-normal">Light</span> & Space.
              </h1>
              <div className="space-y-8 text-[17px] md:text-[20px] leading-[1.8] text-black/80 font-light max-w-2xl">
                <p>
                  Studio Aratni is an interdisciplinary architectural practice based in Kerala, focusing on the intersection of modern minimalism and regional soul.
                </p>
                <p className="text-black/50">
                  Founded by Gokul Murali, we approach every project as a unique narrative—balancing the rigid demands of structure with the fluid beauty of human experience.
                </p>
              </div>
            </div>
            <div className="aspect-[3/4] bg-black/5 overflow-hidden rounded-sm relative group shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                  alt="Gokul Murali" 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute bottom-8 left-8 text-white text-[10px] tracking-[0.4em] uppercase bg-black/40 backdrop-blur-xl px-6 py-3 font-medium">Lead Designer</div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-black/5 pt-16">
             {[
               { label: 'Philosophy', text: 'We believe that architecture should be felt, not just seen. Our designs prioritize the sensory experience of a space.' },
               { label: 'Sustainability', text: 'Integrating local materials and passive cooling techniques is at the core of our constructive ethos.' },
               { label: 'Excellence', text: 'With 200+ projects completed, our attention to detail from drafting to execution remains unrivaled.' }
             ].map((item, i) => (
               <div key={i}>
                 <h3 className="text-[11px] uppercase tracking-[0.4em] text-[#a68a71] mb-6 font-bold">{item.label}</h3>
                 <p className="text-[15px] leading-relaxed text-black/60 font-light">{item.text}</p>
               </div>
             ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-white font-sans selection:bg-[#2d2d2a] selection:text-white overflow-x-hidden">
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
        /* Sophisticated Full-Screen Menu Styles */
        .menu-overlay {
          clip-path: circle(0% at 95% 5%);
          transition: clip-path 0.8s cubic-bezier(0.77, 0, 0.175, 1);
          visibility: hidden;
        }
        .menu-overlay.active {
          clip-path: circle(150% at 95% 5%);
          visibility: visible;
        }
        .nav-link-item {
          transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
        }
      `}</style>

      <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md border-b border-black/5 px-6 md:px-10 py-4 md:py-6 z-[200]">
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
            {/* Three Dots Menu Trigger */}
            <button 
              className="text-[#2d2d2a] p-2 hover:bg-black/5 rounded-full transition-all z-[210]" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <div className="flex gap-1"><div className="w-1 h-1 bg-current rounded-full"/><div className="w-1 h-1 bg-current rounded-full"/><div className="w-1 h-1 bg-current rounded-full"/></div>}
            </button>
          </div>
        </div>

        {/* Sophisticated Full-Screen Menu Overlay (The "Right Image" Style) */}
        <div className={`fixed inset-0 bg-white z-[150] menu-overlay ${isMenuOpen ? 'active' : ''}`}>
          <div className="h-full flex flex-col md:flex-row">
            {/* Left Section: Navigation Links with Large Typography */}
            <div className="flex-1 flex flex-col justify-center px-8 md:px-24 py-20 space-y-6 md:space-y-10">
              <p className="text-[10px] uppercase tracking-[0.6em] text-black/30 font-bold mb-4">Navigate</p>
              {[
                { label: 'Index', action: closeModals },
                { label: 'Portfolio', action: () => { setIsMenuOpen(false); scrollToWork(); } },
                { label: 'Studio', action: () => { setShowAbout(true); setIsMenuOpen(false); } },
                { label: 'Services', action: () => { setIsMenuOpen(false); document.getElementById('services').scrollIntoView(); } },
                { label: 'Connect', action: () => { setIsMenuOpen(false); document.getElementById('contact').scrollIntoView(); } }
              ].map((item, idx) => (
                <button 
                  key={idx}
                  onClick={item.action}
                  className="text-left text-4xl md:text-7xl lg:text-8xl font-extralight uppercase tracking-tight text-[#2d2d2a] hover:italic hover:pl-8 transition-all duration-500 group flex items-center gap-6"
                >
                  <span className="text-xs font-mono text-black/20 group-hover:text-[#a68a71]">0{idx+1}</span>
                  {item.label}
                </button>
              ))}
            </div>

            {/* Right Section: Visual/Contact Details (Desktop Only) */}
            <div className="hidden lg:flex flex-col justify-between w-1/3 bg-[#f8f6f4] p-20 border-l border-black/5">
              <div className="aspect-[3/4] bg-black/5 overflow-hidden rounded-sm grayscale">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" 
                  className="w-full h-full object-cover opacity-60 hover:scale-105 transition-transform duration-1000"
                  alt="Menu Visual"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.5em] text-black/30 font-bold mb-2">Location</p>
                  <p className="text-sm tracking-widest text-black/60">Alappuzha, Kerala, India</p>
                </div>
                <div className="flex gap-6 text-black/30">
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"><InstagramIcon size={20} className="hover:text-black transition-colors" /></a>
                  <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer"><LinkedinIcon size={20} className="hover:text-black transition-colors" /></a>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={20} className="hover:text-black transition-colors" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {}
      <section className="relative h-screen w-full overflow-hidden bg-black">
        <img
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=90&w=2400"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          style={{ animation: 'breathe 20s ease-in-out infinite alternate' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-24 pb-20 md:pb-32">
          <div className="max-w-6xl">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-extralight uppercase tracking-tighter leading-[0.85] text-white">
              Space <span className="italic font-normal">as</span> <br /> Emotion.
            </h1>
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between mt-12 gap-8">
              <p className="text-[10px] md:text-[11px] tracking-[0.5em] uppercase text-white/50 max-w-sm leading-loose">
                Kerala based architectural laboratory defining the future of regional minimalism.
              </p>
              <a href="#work" className="group flex items-center gap-6 text-white text-[10px] uppercase tracking-[0.5em] font-bold">
                View Projects <div className="w-12 h-[1px] bg-white group-hover:w-20 transition-all duration-500" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {}
      <section id="work" className="bg-white px-6 md:px-24 py-32 lg:py-48 overflow-hidden">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-24 gap-12">
          <div>
            <p className="text-[10px] uppercase tracking-[0.6em] text-[#a68a71] mb-6 font-bold">Selected Projects</p>
            <h2 className="text-4xl md:text-7xl uppercase tracking-tight font-extralight text-[#2d2d2a] leading-none">The <span className="italic">Portfolio</span> Archive</h2>
          </div>
          <p className="text-black/40 text-[14px] leading-relaxed max-w-xs font-light italic">
            "We build not just structures, but vessels for light and silence."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-24 items-start">
          <div className="space-y-0 border-t border-black/10">
            {projectData.map((project, index) => (
              <div
                key={project.title}
                onMouseEnter={() => { setActiveProject(index); setHoveredProjectIdx(index); }}
                onMouseLeave={() => setHoveredProjectIdx(null)}
                onClick={() => setSelectedProject(index)}
                className={`group flex items-center justify-between border-b border-black/10 py-10 md:py-16 transition-all duration-700 cursor-pointer ${activeProject === index ? 'opacity-100' : 'opacity-20 hover:opacity-50'}`}
              >
                <div className="flex items-center gap-12 md:gap-24">
                  <span className="text-[11px] font-mono text-black/30">0{index + 1}</span>
                  <div className="space-y-2">
                    <span className="uppercase tracking-tighter text-3xl md:text-6xl font-extralight text-[#2d2d2a] block">{project.title}</span>
                    <span className="text-[10px] uppercase tracking-[0.4em] text-black/40 block">{project.type}</span>
                  </div>
                </div>
                <ChevronRight size={32} strokeWidth={1} className={`transition-all duration-500 ${activeProject === index ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`} />
              </div>
            ))}
          </div>

          <div className="sticky top-48 aspect-[3/4] w-full rounded-sm bg-black/5 overflow-hidden shadow-2xl">
             {projectData.map((p, idx) => (
               <img
                  key={idx}
                  src={p.mainImage}
                  alt={p.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${activeProject === idx ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-110 rotate-2 pointer-events-none'}`}
                />
             ))}
             <div className="absolute inset-0 bg-black/5 mix-blend-overlay" />
          </div>
        </div>
      </section>

      {}
      <section id="services" className="px-6 md:px-24 py-32 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
           <div className="max-w-2xl">
              <p className="text-[10px] uppercase tracking-[0.6em] text-black/40 mb-6 font-bold">Expertise</p>
              <h2 className="text-4xl md:text-7xl uppercase tracking-tighter font-extralight text-[#2d2d2a] leading-none">Curated <span className="italic">Solutions</span></h2>
           </div>
           <button className="text-[11px] uppercase tracking-[0.4em] font-bold border-b border-black pb-2 hover:text-[#a68a71] hover:border-[#a68a71] transition-all">Download Services PDF</button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-12">
          {[
            { title: 'Modular Design', desc: 'Surgical precision in kitchen and storage architecture.', num: '01' },
            { title: 'Interior Styling', desc: 'Crafting atmospheres through materiality and light.', num: '02' },
            { title: 'Architectural Design', num: '03', desc: 'End-to-end residential and commercial planning.' },
            { title: 'Furniture Design', num: '04', desc: 'Custom pieces designed for specific spatial contexts.' },
          ].map((item) => (
            <div key={item.title} className="group bg-white p-12 border border-black/5 hover:bg-black hover:text-white transition-all duration-700 aspect-square flex flex-col justify-between">
              <span className="text-xs font-mono opacity-40 group-hover:opacity-100">{item.num}</span>
              <div>
                <h3 className="text-lg uppercase tracking-widest mb-4 font-bold">{item.title}</h3>
                <p className="text-[13px] leading-relaxed opacity-50 group-hover:opacity-80 font-light">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {}
      <section id="contact" className="bg-white px-6 md:px-24 py-32 md:py-48">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32">
          <div className="space-y-16">
            <div>
              <p className="text-[10px] uppercase tracking-[0.6em] text-[#a68a71] mb-8 font-bold">Collaborate</p>
              <h2 className="text-5xl md:text-8xl uppercase tracking-tighter font-extralight text-[#2d2d2a] mb-8 leading-[0.9]">Start <br /> the <span className="italic">Dialogue</span>.</h2>
            </div>
            
            <div className="space-y-12">
              <div className="group cursor-pointer">
                <p className="text-[10px] uppercase tracking-widest text-black/30 mb-2">Email</p>
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-2xl md:text-4xl font-light tracking-tight group-hover:text-[#a68a71] transition-colors">{CONTACT_EMAIL}</a>
              </div>
              <div className="group cursor-pointer">
                <p className="text-[10px] uppercase tracking-widest text-black/30 mb-2">WhatsApp</p>
                <a href={WHATSAPP_URL} className="text-2xl md:text-4xl font-light tracking-tight group-hover:text-[#a68a71] transition-colors">+91 911 354 6232</a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <form className="space-y-16">
              <div className="relative group">
                <input type="text" placeholder="Your Name" className="w-full bg-transparent border-b border-black/10 py-6 outline-none text-xl font-light placeholder:text-black/20 focus:border-black transition-all" />
              </div>
              <div className="relative group">
                <input type="email" placeholder="Your Email" className="w-full bg-transparent border-b border-black/10 py-6 outline-none text-xl font-light placeholder:text-black/20 focus:border-black transition-all" />
              </div>
              <div className="relative group">
                <textarea placeholder="The Vision" rows={2} className="w-full bg-transparent border-b border-black/10 py-6 outline-none text-xl font-light placeholder:text-black/20 focus:border-black transition-all resize-none" />
              </div>
              <button className="w-full py-8 bg-black text-white text-[11px] uppercase tracking-[0.5em] font-bold hover:bg-[#a68a71] transition-all flex items-center justify-center gap-4">
                Submit Inquiry <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {}
      <footer className="bg-[#111] text-white/30 px-6 md:px-24 py-24">
        <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12 text-[10px] uppercase tracking-[0.5em] font-bold">
          <div className="flex items-center gap-8">
            <span className="text-white">Studio Aratni</span>
            <span>© 2026</span>
            <span>Kerala, India</span>
          </div>
          <div className="flex gap-12 text-white/50">
            <a href={INSTAGRAM_URL} className="hover:text-white transition-colors">Instagram</a>
            <a href={LINKEDIN_URL} className="hover:text-white transition-colors">LinkedIn</a>
            <a href={WHATSAPP_URL} className="hover:text-white transition-colors">WhatsApp</a>
          </div>
        </div>
      </footer>
    </div>
  );
}