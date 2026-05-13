

import { useState } from 'react'

export default function StudioAratniWorkspace() {
  const [activeProject, setActiveProject] = useState(0)
  const [showArchive, setShowArchive] = useState(false)
  const [showAbout, setShowAbout] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  const projectImages = [
    '/thanal-1.jpg',
    'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=90&w=1200',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=90&w=1200',
    'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&q=90&w=1200',
    'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=90&w=1200',
  ]

  const projectData = [
    {
      title: 'Thanal',
      images: [
      '/src/assets/thanal/EXTERIOR-1.jpeg',
      '/src/assets/thanal/EXTERIOR-2.jpeg',
      '/src/assets/thanal/EXTERIOR-3.jpeg',
      '/src/assets/thanal/INTERIOR-1.png',
      '/src/assets/thanal/INTERIOR-2.png',
      '/src/assets/thanal/INTERIOR-3.jpg',
      '/src/assets/thanal/INTERIOR-4.png',
      '/src/assets/thanal/INTERIOR-5.png'
      ],
    },
    {
      title: 'Amber Urban Pub',
      images: [
        'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=90&w=1600',
        'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=90&w=1600',
        'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&q=90&w=1600',
      ],
    },
    {
      title: 'Mureli House',
      images: [
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=90&w=1600',
        'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=90&w=1600',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=90&w=1600',
      ],
    },
    {
      title: 'Ridnyi House',
      images: [
        'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&q=90&w=1600',
        'https://images.unsplash.com/photo-1600047509358-9dc75507daeb?auto=format&fit=crop&q=90&w=1600',
        'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=90&w=1600',
      ],
    },
    {
      title: 'Apteka 92',
      images: [
        'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=90&w=1600',
        'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&q=90&w=1600',
        'https://images.unsplash.com/photo-1600607687126-8a3414349a51?auto=format&fit=crop&q=90&w=1600',
      ],
    },
  ]
  const breathingAnimation = {
    animation: 'breathe 14s ease-in-out infinite alternate'
  }

  if (selectedProject !== null) {
    const project = projectData[selectedProject]

    return (
      <div className="min-h-screen bg-[#f5f2ed] text-[#2d2d2a] px-16 py-24 font-sans">
        <button
          onClick={() => setSelectedProject(null)}
          className="text-[10px] uppercase tracking-[0.35em] text-black/40 mb-16 hover:text-black transition-colors duration-300"
        >
          ← Back to Projects
        </button>

        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.45em] text-black/35 mb-5">
            Residential Project
          </p>

          <h1 className="text-5xl uppercase tracking-[0.12em] font-extralight mb-20">
            {project.title}
          </h1>

          <div className="grid grid-cols-3 gap-8">
            {project.images.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-sm bg-black/6"
              >
                <img
                  src={image}
                  className="w-full h-[480px] object-cover hover:scale-[1.02] transition-all duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (showAbout) {
    return (
      <div className="min-h-screen bg-[#f8f5f1] text-[#2d2d2a] px-16 py-24 font-sans">
        <button
          onClick={() => setShowAbout(false)}
          className="text-[10px] uppercase tracking-[0.35em] text-black/40 mb-16 hover:text-black transition-colors duration-300"
        >
          ← Back to Main
        </button>

        <div className="max-w-7xl mx-auto grid grid-cols-[1fr_1.05fr] gap-24 items-center">
          <div>
            <p className="text-[10px] uppercase tracking-[0.45em] text-black/35 mb-6">
              About Studio Aratni
            </p>

            <h1 className="text-5xl font-extralight uppercase tracking-[0.08em] leading-[1.35] mb-12">
              Designing spaces that feel calm, timeless, and deeply human.
            </h1>

            <p className="text-[15px] leading-[2.1] text-black/60 font-light mb-8">
              Studio Aratni is an architecture and interior design practice focused on creating soulful environments rooted in simplicity, proportion, and material honesty.
            </p>

            <p className="text-[15px] leading-[2.1] text-black/60 font-light">
              Guided by a sensitivity to light, texture, climate, and context, the studio approaches each project as an experience rather than just a structure — crafting homes and spaces that feel enduring, quiet, and emotionally connected to the people who inhabit them.
            </p>
          </div>

          <div className="overflow-hidden rounded-sm aspect-[4/5] bg-black/5">
            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=1400"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    )
  }

  if (showArchive) {
    return (
      <div className="min-h-screen bg-[#f5f2ed] text-[#2d2d2a] px-16 py-24 font-sans">
        <button
          onClick={() => setShowArchive(false)}
          className="text-[10px] uppercase tracking-[0.35em] text-black/40 mb-16 hover:text-black transition-colors duration-300"
        >
          ← Back to Main
        </button>

        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.45em] text-black/35 mb-5">
            Portfolio Archive
          </p>

          <h1 className="text-5xl uppercase tracking-[0.14em] font-extralight mb-24">
            Other Works
          </h1>

          <div className="grid grid-cols-3 gap-10">
            {[
              {
                title: 'Courtyard Residence',
                image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1200',
              },
              {
                title: 'Casa Verde',
                image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=1200',
              },
              {
                title: 'The Pavilion House',
                image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=1200',
              },
            ].map((item) => (
              <div key={item.title} className="group cursor-pointer">
                <div className="overflow-hidden aspect-[4/3] bg-black/5 rounded-sm mb-5">
                  <img
                    src={item.image}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  />
                </div>

                <p className="text-[13px] uppercase tracking-[0.22em] text-black/70">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen w-full bg-[#ece7e1] overflow-y-auto font-sans">
      
      <div className="w-full overflow-y-auto bg-[#ece7e1]">
        <style>{`
          html {
            scroll-behavior: smooth;
          }

          @keyframes breathe {
            0% {
              transform: scale(1.04);
            }
            50% {
              transform: scale(1.09);
            }
            100% {
              transform: scale(1.05);
            }
          }
        `}</style>
        {/* NAV */}
        <div className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md border-b border-black/5 px-10 py-5 z-20 grid grid-cols-3 items-center">
          <div className="justify-self-start">
            <div className="text-[9px] tracking-[0.6em] font-bold text-black/50 uppercase">
              Studio
            </div>
            <div className="text-lg tracking-[0.25em] uppercase font-semibold text-[#2d2d2a]">
              Aratni
            </div>
          </div>

          <div className="flex gap-10 text-[10px] uppercase tracking-[0.35em] text-black/50 justify-self-center">
            <a href="#" className="hover:text-black transition-colors duration-300">
              Home
            </a>

            <button
              type="button"
              onClick={() => setShowAbout(true)}
              className="hover:text-black transition-colors duration-300"
            >
              ABOUT
            </button>

            <a href="#work" className="hover:text-black transition-colors duration-300">
              Work
            </a>

            <a href="#philosophy" className="hover:text-black transition-colors duration-300">
              Philosophy
            </a>

            <a href="#contact" className="hover:text-black transition-colors duration-300">
              Contact
            </a>
          </div>

          <div className="justify-self-end flex items-center gap-4 text-black/40">
            <a
              href="#"
              className="w-8 h-8 rounded-full border border-black/15 flex items-center justify-center text-[9px] tracking-wide hover:bg-black hover:text-white transition-all duration-300"
            >
              IG
            </a>

            <a
              href="#"
              className="w-8 h-8 rounded-full border border-black/15 flex items-center justify-center text-[9px] tracking-wide hover:bg-black hover:text-white transition-all duration-300"
            >
              FB
            </a>

            <a
              href="#"
              className="w-8 h-8 rounded-full border border-black/15 flex items-center justify-center text-[9px] tracking-wide hover:bg-black hover:text-white transition-all duration-300"
            >
              IN
            </a>
          </div>
        </div>

        {/* HERO */}
        <section className="relative h-screen overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2000"
            className="absolute inset-0 w-full h-full object-cover"
            style={breathingAnimation}
          />

          <div className="absolute inset-0 bg-black/45" />

          <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-12">
            <div className="max-w-5xl">
              <h1 className="text-6xl font-extralight uppercase tracking-[0.08em] leading-[1.3]">
                Architecture that breathes.
                <br />
                Interiors that resonate.
              </h1>

              <p className="mt-8 text-[11px] tracking-[0.35em] uppercase text-white/70">
                Rooted on proportion
              </p>

              <a
                href="#work"
                className="inline-block mt-12 border border-white/30 px-10 py-4 text-[10px] uppercase tracking-[0.35em] hover:bg-white hover:text-black transition-all duration-500"
              >
                Discover Studio
              </a>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="px-14 pt-28 pb-14 bg-[#f5f2ed]">
          <div className="grid grid-cols-4 gap-8">
            {[
              {
                title: 'Modular Solutions',
                description:
                  'Tailored modular kitchens and storage systems crafted for refined contemporary living.',
                image:
                  'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80&w=1200',
              },
              {
                title: 'Bespoke Interiors',
                description:
                  'Curated interior environments shaped through texture, light, and spatial harmony.',
                image:
                  'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=80&w=1200',
              },
              {
                title: 'Architecture',
                description:
                  'Contemporary residences rooted in climate, proportion, and timeless materiality.',
                image:
                  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
              },
              {
                title: 'Furniture Selection',
                description:
                  'Thoughtfully selected furniture pieces that complement each architectural narrative.',
                image:
                  'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=1200',
              },
            ].map((item) => (
              <div key={item.title}>
                <p className="text-[12px] uppercase tracking-[0.22em] mb-5 leading-relaxed text-[#2d2d2a]">
                  {item.title}
                </p>

                <div className="overflow-hidden bg-black/5 aspect-[4/3] rounded-sm mt-5">
                  <img
                    src={item.image}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-700"
                  />
                </div>

                <p className="text-[13px] leading-[2] text-black/50 mt-5 font-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* PORTFOLIO */}
        <section id="work" className="grid grid-cols-[1.1fr_0.9fr] items-center min-h-screen bg-[#f2efed] px-14 pt-10 pb-24 gap-20 overflow-hidden">
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-black/40 mb-6">
              Work Selection
            </p>

            <h2 className="text-4xl uppercase tracking-[0.15em] font-light mb-20 text-[#2d2d2a]">
              Projects
            </h2>

            {[
              'Thanal',
              'Amber Urban Pub',
              'Mureli House',
              'Ridnyi House',
              'Apteka 92',
            ].map((project, index) => (
              <div
                key={project}
                onMouseEnter={() => setActiveProject(index)}
                onClick={() => setSelectedProject(index)}
                className={`flex items-center justify-between border-b border-black/10 py-10 opacity-60 hover:opacity-100 transition-all duration-500 cursor-pointer ${activeProject === index ? 'pl-3 opacity-100' : ''}`}
              >
                <div className="flex items-center gap-8">
                  <span className="text-[11px] tracking-[0.2em] text-black/35">
                    0{index + 1}
                  </span>

                  <span className="uppercase tracking-[0.18em] text-[22px] font-light text-[#2d2d2a]">
                    {project}
                  </span>
                </div>

                <span className="opacity-0 hover:opacity-100 transition-all duration-300">
                  →
                </span>
              </div>
                        ))}

            <button
              onClick={() => setShowArchive(true)}
              className="mt-10 text-[11px] uppercase tracking-[0.35em] text-black/35 pl-1 hover:text-black transition-colors duration-300"
            >
              Other Works
            </button>
          </div>

          <div className="relative overflow-hidden aspect-[16/10] w-full max-w-[760px] rounded-sm bg-black/5 self-center mt-28">
            <img
              src={projectImages[activeProject]}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 scale-[1.02]"
            />
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section id="philosophy" className="bg-[#2d2d2a] text-[#f5f2ed] px-16 py-32 grid grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-[10px] uppercase tracking-[0.45em] text-[#a68a71] mb-6">
              Philosophy
            </p>

            <h2 className="text-5xl font-extralight tracking-[0.08em] uppercase leading-[1.3] mb-10">
              Spaces that breathe.
            </h2>

            <p className="text-sm leading-[2] text-white/60 max-w-md">
              Our design language is one of quietude. We believe in stripping away the unnecessary to reveal the inherent beauty of natural light and local materials.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000"
            className="w-full"
          />
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-[#f5f2ed] px-16 py-28">
          <div className="grid grid-cols-[0.9fr_1.1fr] gap-20 items-start max-w-7xl mx-auto">
            <div>
              <p className="text-[10px] uppercase tracking-[0.45em] text-black/35 mb-6">
                Contact
              </p>

              <h2 className="text-4xl uppercase tracking-[0.14em] font-light text-[#2d2d2a] mb-16 leading-[1.4]">
                Start a Conversation
              </h2>

              <div className="space-y-10 text-left">
                <div className="border-b border-black/10 pb-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full bg-transparent outline-none text-[11px] uppercase tracking-[0.25em] placeholder:text-black/25"
                  />
                </div>

                <div className="border-b border-black/10 pb-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-transparent outline-none text-[11px] uppercase tracking-[0.25em] placeholder:text-black/25"
                  />
                </div>

                <div className="border-b border-black/10 pb-4">
                  <textarea
                    placeholder="Tell us about your project"
                    rows={4}
                    className="w-full bg-transparent outline-none text-[11px] uppercase tracking-[0.2em] placeholder:text-black/25 resize-none"
                  />
                </div>

                <button className="mt-8 border border-black/20 px-10 py-4 text-[10px] uppercase tracking-[0.35em] hover:bg-black hover:text-white transition-all duration-500">
                  Send Inquiry
                </button>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-sm aspect-[16/11] bg-black/5 mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31435.23959683766!2d76.2960928!3d9.4980666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08854f7f1e0d8f%3A0xf4c9f5e4a7c2b1b7!2sAlappuzha%2C%20Kerala!5e0!3m2!1sen!2sin!4v1715583000000!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full border-0 grayscale"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-[#ebe6df] border-t border-black/5 px-16 py-12">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-black/35">
            <div>
              © 2026 Studio Aratni. All Rights Reserved.
            </div>

            <div className="flex items-center gap-8">
              <a href="#" className="hover:text-black transition-colors duration-300">
                Instagram
              </a>

              <a href="#" className="hover:text-black transition-colors duration-300">
                Facebook
              </a>

              <a href="#" className="hover:text-black transition-colors duration-300">
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
