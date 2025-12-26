'use client';

import { motion } from 'framer-motion';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaReact, FaGitAlt, FaFigma } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si';
import Link from 'next/link';

export default function Home() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <main className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Particles Background */}
      {init && (
        <Particles
          id="tsparticles"
          options={{
            background: { color: { value: "#111827" } },
            fpsLimit: 120,
            interactivity: {
              events: {
                onHover: { enable: true, mode: "repulse" },
                resize: { enable: true },
              },
              modes: {
                repulse: { distance: 100, duration: 0.4 },
              },
            },
            particles: {
              color: { value: "#8b5cf6" },
              links: {
                color: "#8b5cf6",
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
              },
              move: { enable: true, speed: 2 },
              number: { density: { enable: true, area: 800 }, value: 80 },
              opacity: { value: 0.5 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 4 } },
            },
            detectRetina: true,
          }}
        />
      )}

      <div className="relative z-10">
        {/* HERO SECTION */}
        <section className="min-h-screen flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center max-w-4xl"
          >
            <h1 className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              Frontend Developer
            </h1>

            <div className="mt-8 text-2xl md:text-4xl font-light inline-block">
              <span>I </span>
              <TypeAnimation
                sequence={[
                  'build modern websites',
                  1500,
                  'craft experiences with React & Next.js',
                  1500,
                  'write clean, performant code',
                  1500,
                ]}
                speed={50}
                repeat={Infinity}
                cursor={true}
                style={{ display: 'inline-block' }}
              />
            </div>

            <p className="mt-10 text-lg text-gray-300 max-w-2xl mx-auto">
              Passionate about creating fast, responsive, and user-centered web applications using modern technologies like React, Next.js, TypeScript, and Tailwind CSS.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/projects"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg font-semibold shadow-lg transform hover:scale-105 transition"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full border-2 border-cyan-400 hover:bg-cyan-400 hover:text-gray-900 text-lg font-semibold shadow-lg transform hover:scale-105 transition"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </section>

        {/* SKILLS SECTION */}
        <section className="py-32 px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Skills
            </h2>

            <div className="grid grid-cols-3 md:grid-cols-6 gap-10">
              {[
                { icon: FaReact, label: "React", color: "text-cyan-400" },
                { icon: SiNextdotjs, label: "Next.js", color: "text-white" },
                { icon: SiTypescript, label: "TypeScript", color: "text-blue-400" },
                { icon: SiTailwindcss, label: "Tailwind", color: "text-cyan-500" },
                { icon: FaGitAlt, label: "Git", color: "text-orange-500" },
                { icon: FaFigma, label: "Figma", color: "text-pink-500" },
              ].map((skill, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="flex flex-col items-center"
                >
                  <skill.icon className={`text-6xl ${skill.color} mb-4`} />
                  <span className="text-lg">{skill.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="py-32 px-6 bg-gray-800/50">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                { title: "Personal Portfolio", desc: "Modern portfolio with particle animations and smooth transitions" },
                { title: "Admin Dashboard", desc: "Responsive dashboard with interactive charts and dark mode support" },
                { title: "E-commerce Store", desc: "Full-stack online shop with payment integration and cart system" },
                { title: "Modern Blog", desc: "Content platform with MDX support, search, and comments" },
                { title: "SaaS Landing Page", desc: "High-converting product page with animations and signup forms" },
                { title: "Advanced Todo App", desc: "Feature-rich task manager with drag & drop and local persistence" },
              ].map((proj, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -15 }}
                  className="bg-gray-800/80 rounded-2xl p-8 border border-purple-500/30 shadow-2xl backdrop-blur-sm"
                >
                  <div className="bg-gradient-to-br from-purple-600 to-cyan-600 h-48 rounded-xl mb-6" />
                  <h3 className="text-2xl font-bold mb-3">{proj.title}</h3>
                  <p className="text-gray-400 mb-6">{proj.desc}</p>
                  <Link href="#" className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-2">
                    View Project →
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA SECTION */}
        <section className="py-32 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Have a project in mind? I'm always open to discussing new opportunities and ideas.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-5 rounded-full text-xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 shadow-2xl transform hover:scale-110 transition"
            >
              Get in Touch
            </Link>
          </motion.div>
        </section>
      </div>
    </main>
  );
}