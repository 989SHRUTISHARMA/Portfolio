// components/Navbar.jsx
import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "power3.out" }}
      className="sticky top-4 z-30 container mx-auto flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-white/10 bg-[#07111f]/90 px-4 py-4 text-white shadow-2xl backdrop-blur-xl md:px-5"
    >
      {/* Logo */}
      <motion.h1
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-lg font-bold text-teal-400 md:text-xl"
      >
        Shruti Sharma | Frontend Developer
      </motion.h1>

      {/* Desktop Links */}
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="hidden md:flex flex-wrap gap-6 text-gray-300"
      >
        {[
          ["Home", "#home"],
          ["About", "#about"],
          ["Skills", "#skills"],
          ["Projects", "#projects"],
          ["Internship", "#internship"],
          ["Contact", "#contact"],
        ].map(([label, href]) => (
          <motion.li key={label} whileHover={{ y: -2 }} className="relative">
            <a href={href} className="transition hover:text-teal-400">
              {label}
            </a>
            <motion.div
              className="absolute -bottom-1 left-0 h-0.5 bg-teal-400"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.li>
        ))}
      </motion.ul>

      {/* Desktop Hire Me Button */}
      <motion.button
        whileHover={{ scale: 1.04, boxShadow: "0 15px 30px rgba(16, 185, 129, 0.25)" }}
        whileTap={{ scale: 0.98 }}
        className="hidden md:inline-flex rounded-full bg-teal-500 px-6 py-2 text-sm font-semibold transition hover:bg-teal-400"
      >
        Hire Me
      </motion.button>

      {/* Mobile Menu Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleMenu}
        className="md:hidden flex flex-col gap-1 p-2"
        aria-label="Toggle menu"
      >
        <span className={`w-6 h-0.5 bg-teal-400 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-teal-400 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-teal-400 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </motion.button>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
        className={`md:hidden absolute top-full left-0 right-0 mt-2 rounded-2xl border border-white/10 bg-[#07111f]/95 backdrop-blur-xl overflow-hidden ${isOpen ? 'block' : 'hidden'}`}
      >
        <div className="px-4 py-6 space-y-4">
          {[
            ["Home", "#home"],
            ["About", "#about"],
            ["Skills", "#skills"],
            ["Projects", "#projects"],
            ["Internship", "#internship"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-gray-300 hover:text-teal-400 transition-colors"
            >
              {label}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="inline-flex w-full items-center justify-center rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold transition hover:bg-teal-400"
            >
              Hire Me
            </a>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;