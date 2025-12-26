'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

// داینامیک ایمپورت Map — فقط در کلاینت لود می‌شه
const Map = dynamic(() => import('@/app/components/MapComponent'), {
  ssr: false, // مهم: SSR رو خاموش می‌کنه
  loading: () => (
    <div className="h-96 rounded-2xl bg-gray-800/50 border border-purple-500/30 flex items-center justify-center">
      <p className="text-gray-400">Loading map...</p>
    </div>
  ),
});




export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (formRef.current) {
      toast.promise(
        emailjs.sendForm(
          'service_jf1lyil',
          'template_bxmagjz',
          formRef.current,
          'CNJoctEhmoCrbf-Cr'
        ),
        {
          loading: 'Sending your message... ⏳',
          success: 'Message sent successfully! 🚀',
          error: 'Failed to send message. Please try again later.',
        }
      );

      emailjs
        .sendForm(
          'service_jf1lyil',
          'template_bxmagjz',
          formRef.current,
          'CNJoctEhmoCrbf-Cr'
        )
        .then(() => {
          formRef.current?.reset();
        });
    }
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* اطلاعات تماس */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-5">
                <div className="p-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600">
                  <Mail size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Email</h3>
                  <p className="text-gray-300">mohsenkia70@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="p-4 rounded-full bg-gradient-to-r from-pink-600 to-cyan-600">
                  <Phone size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Phone</h3>
                  <p className="text-gray-300">+98 912 345 6789</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="p-4 rounded-full bg-gradient-to-r from-cyan-600 to-purple-600">
                  <MapPin size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Location</h3>
                  <p className="text-gray-300">Tehran, Iran</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-96 rounded-2xl overflow-hidden shadow-2xl border border-purple-500/30"
            >
              <Map />
            </motion.div>
          </div>

          {/* فرم تماس */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-10 border border-purple-500/30 shadow-2xl"
          >
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Send Me a Message
            </h2>

            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full px-6 py-4 rounded-xl bg-gray-900/70 border border-gray-700 focus:border-cyan-400 focus:outline-none transition text-white placeholder-gray-500"
              />

              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full px-6 py-4 rounded-xl bg-gray-900/70 border border-gray-700 focus:border-cyan-400 focus:outline-none transition text-white placeholder-gray-500"
              />

              <textarea
                name="message"
                rows={6}
                placeholder="Your Message"
                required
                className="w-full px-6 py-4 rounded-xl bg-gray-900/70 border border-gray-700 focus:border-cyan-400 focus:outline-none transition resize-none text-white placeholder-gray-500"
              />

              <button
                type="submit"
                className="w-full cursor-pointer py-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 font-semibold text-lg shadow-lg transform hover:scale-105 transition flex items-center justify-center gap-3"
              >
                Send Message
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}