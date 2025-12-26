'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaReact, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiRedux } from 'react-icons/si';
import Link from 'next/link';

export default function About() {
  const skills = [
    { name: 'React.js', level: 95, icon: FaReact, color: 'text-cyan-400' },
    { name: 'Next.js', level: 90, icon: SiNextdotjs, color: 'text-white' },
    { name: 'TypeScript', level: 85, icon: SiTypescript, color: 'text-blue-500' },
    { name: 'Redux', level: 88, icon: SiRedux, color: 'text-purple-400' },
    { name: 'Tailwind CSS', level: 92, icon: SiTailwindcss, color: 'text-cyan-500' },
  ];

  const achievements = [
    '40% improvement in page load times using code splitting & lazy loading',
    'Led migration of legacy apps to React + TypeScript, reducing bugs by 60%',
    'Built high-traffic platforms with SSR, SEO optimization, and responsive design',
    'Implemented clean architecture & state management for better maintainability',
  ];

  return (
    <main className="min-h-screen bg-gray-900 text-white py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-8">
            About Me
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mid-Level Frontend Developer with 4+ years of experience building modern, scalable web applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Profile Image + Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* عکس پروفایل — روش درست */}
            <div className="relative mx-auto w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-purple-500/50 shadow-2xl">
              <Image
                src="/mohsen.jpg"    
                alt="Mohsen - Frontend Developer"
                fill
                className="object-cover"
                priority                 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
            </div>

            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/mohsenkia70/" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-gray-800 hover:bg-gray-700 transition transform hover:scale-110"
              >
                <FaGithub size={28} className="text-gray-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/mohsenkia"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-gray-800 hover:bg-gray-700 transition transform hover:scale-110"
              >
                <FaLinkedin size={28} className="text-blue-500" />
              </a>
              <a
                href="mailto:mohsenkia70@gmail.com"
                className="p-4 rounded-full bg-gray-800 hover:bg-gray-700 transition transform hover:scale-110"
              >
                <FaEnvelope size={28} className="text-gray-300" />
              </a>
            </div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div className="prose prose-invert max-w-none text-lg leading-relaxed">
              <p className="text-gray-300">
                I specialize in <span className="text-cyan-400 font-semibold">React.js</span>,{' '}
                <span className="text-white font-semibold">Next.js</span>,{' '}
                <span className="text-blue-400 font-semibold">TypeScript</span>, Redux Toolkit, and Tailwind CSS. 
                My focus is on server-side rendering (SSR), performance optimization, responsive design, and seamless REST API integration.
              </p>

              <p className="text-gray-300 mt-6">
                At <strong>SAIPA</strong> and previous roles, I've led development of high-traffic platforms and delivered measurable results:
              </p>

              <ul className="mt-6 space-y-4 text-gray-300">
                {achievements.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-cyan-400 mt-1.5">▹</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              <p className="text-gray-300 mt-8">
                I'm passionate about clean, testable code and staying current with modern tools like Vite, TanStack Query, and more. 
                I thrive in agile teams and love turning complex requirements into intuitive, performant interfaces.
              </p>

              <p className="text-gray-300 mt-6">
                Currently based in <strong>Tehran, Iran</strong>, I'm actively seeking{' '}
                <span className="text-cyan-400 font-semibold">remote frontend opportunities</span> with international teams 
                or roles with relocation support.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Core Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="flex items-center gap-4 mb-3">
                  <skill.icon className={`text-4xl ${skill.color}`} />
                  <span className="text-xl font-semibold">{skill.name}</span>
                  <span className="ml-auto text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: i * 0.1 }}
                    className={`h-full bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-32"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Let's Build Something Great Together
          </h3>
          <p className="text-xl text-gray-300 mb-10">
            Open to Frontend / React roles — Remote preferred, relocation possible.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-lg font-semibold shadow-2xl transform hover:scale-105 transition"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </main>
  );
}