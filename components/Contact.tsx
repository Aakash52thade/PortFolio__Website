"use client";

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await emailjs.sendForm(
        'service_zm095zd', // Your service ID
        'template_w31t3qt', // Your template ID
        form.current!,
        'OzGEtU7kO67nSSM6I' // Your public key
      );
      setOpen(true);
      form.current?.reset();
      setTimeout(() => setOpen(false), 6000);
    } catch (error) {
      console.log('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20" id="contact">
      <div className="flex flex-col items-center justify-center relative z-10">
        <div className="relative flex flex-col items-center justify-between w-full max-w-6xl px-0 pb-20 gap-3">
          
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-semibold text-center mt-5 text-white">
            Contact
          </h2>
          
          {/* Description */}
          <p className="text-lg text-center max-w-2xl text-white-200 mt-3">
            Feel free to reach out to me for any questions or opportunities!
          </p>

          {/* Contact Form */}
          <form 
            ref={form} 
            onSubmit={handleSubmit}
            className="w-[95%] max-w-2xl flex flex-col bg-black-200 p-8 rounded-2xl shadow-lg mt-7 gap-3 border border-white/[0.1]"
          >
            <h3 className="text-2xl font-semibold mb-1.5 text-white">
              Email Me 🚀
            </h3>
            
            <input
              type="email"
              placeholder="Your Email"
              name="from_email"
              required
              className="flex-1 bg-transparent border border-white/[0.2] outline-none text-lg text-white rounded-xl p-3 focus:border-purple transition-colors"
            />
            
            <input
              type="text"
              placeholder="Your Name"
              name="from_name"
              required
              className="flex-1 bg-transparent border border-white/[0.2] outline-none text-lg text-white rounded-xl p-3 focus:border-purple transition-colors"
            />
            
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              required
              className="flex-1 bg-transparent border border-white/[0.2] outline-none text-lg text-white rounded-xl p-3 focus:border-purple transition-colors"
            />
            
            <textarea
              placeholder="Message"
              rows={4}
              name="message"
              required
              className="flex-1 bg-transparent border border-white/[0.2] outline-none text-lg text-white rounded-xl p-3 focus:border-purple transition-colors resize-none"
            />
            
            <button
              type="submit"
              disabled={isLoading}
              className="w-full text-center bg-gradient-to-r from-purple to-pink-500 p-3.5 mt-0.5 rounded-xl border-none text-white text-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Sending...' : 'Send'}
            </button>
          </form>

          {/* Success Message */}
          {open && (
            <div className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg z-50 animate-fade-in">
              <p className="font-medium">Email sent successfully!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;