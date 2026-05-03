// components/Navbar.jsx
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "power3.out" }}
      className="sticky top-4 z-30 container mx-auto flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-white/10 bg-[#07111f]/90 px-5 py-4 text-white shadow-2xl backdrop-blur-xl"
    >
      {/* Logo */}
      <motion.h1
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-xl font-bold text-teal-400"
      >
        Shruti Sharma | Frontend Developer
      </motion.h1>

      {/* Links */}
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex flex-wrap gap-6 text-gray-300"
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

      <motion.button
        whileHover={{ scale: 1.04, boxShadow: "0 15px 30px rgba(16, 185, 129, 0.25)" }}
        whileTap={{ scale: 0.98 }}
        className="rounded-full bg-teal-500 px-6 py-2 text-sm font-semibold transition hover:bg-teal-400"
      >
        Hire Me
      </motion.button>
    </motion.nav>
  );
};

export default Navbar;