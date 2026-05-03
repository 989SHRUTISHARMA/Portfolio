import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-card", {
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.14,
        ease: "power3.out",
      });

      gsap.from(buttonRef.current, {
        scale: 0.85,
        opacity: 0,
        duration: 0.7,
        delay: 0.3,
        ease: "back.out(1.7)",
      });
    }, contactRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={contactRef} id="contact" className="px-6 md:px-16 py-20 bg-[#0b1220] text-white">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center text-teal-400"
      >
        Let's Connect
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center max-w-2xl mx-auto mt-4 text-gray-300"
      >
        I'm always open to discussing new opportunities, creative projects, or just having a chat about frontend development.
      </motion.p>

      <div className="mx-auto mt-12 max-w-4xl">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <motion.a
            href="https://github.com/989SHRUTISHARMA"
            target="_blank"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            className="contact-card group rounded-2xl bg-[#111827]/90 p-6 text-center shadow-lg border border-white/10 hover:border-teal-400/50 transition-all"
          >
            <div className="flex justify-center mb-4">
              <svg className="w-8 h-8 text-gray-400 group-hover:text-teal-400 transition-colors">
                <use href="/icons.svg#github-icon" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">GitHub</h3>
            <p className="text-sm text-gray-400">@989SHRUTISHARMA</p>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/shruti-sharma-989shruti/"
            target="_blank"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="contact-card group rounded-2xl bg-[#111827]/90 p-6 text-center shadow-lg border border-white/10 hover:border-teal-400/50 transition-all"
          >
            <div className="flex justify-center mb-4">
              <svg className="w-8 h-8 text-gray-400 group-hover:text-teal-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">LinkedIn</h3>
            <p className="text-sm text-gray-400">Shruti Sharma</p>
          </motion.a>

          <motion.a
            href="mailto:shshruti400@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="contact-card group rounded-2xl bg-[#111827]/90 p-6 text-center shadow-lg border border-white/10 hover:border-teal-400/50 transition-all"
          >
            <div className="flex justify-center mb-4">
              <svg className="w-8 h-8 text-gray-400 group-hover:text-teal-400 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
            <p className="text-sm text-gray-400">shshruti400@gmail.com</p>
          </motion.a>

          <motion.a
            href="https://www.google.com/maps/search/?api=1&query=125+G+Kalandi+Gold+Indore+MP"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ delay: 0.3 }}
            className="contact-card group rounded-2xl bg-[#111827]/90 p-6 text-center shadow-lg border border-white/10 hover:border-teal-400/50 hover:bg-white/5 transition-all duration-300 cursor-pointer"
          >
            <div className="flex justify-center mb-4">
              <svg className="w-8 h-8 text-gray-400 group-hover:text-teal-400 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
            <p className="text-sm text-gray-400">125 G Kalandi Gold, Indore, MP, India</p>
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-300 mb-6">
            Ready to bring your ideas to life? Let's create something amazing together!
          </p>
          <a
            href="mailto:shshruti400@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-teal-500 to-cyan-500 px-8 py-3 text-sm font-semibold text-white transition hover:from-teal-400 hover:to-cyan-400 shadow-lg"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
