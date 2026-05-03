// components/About.jsx
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="px-6 md:px-16 py-16 md:py-20 bg-[#0b1220] text-white">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-bold text-center text-teal-400 mb-6 md:mb-8"
      >
        About Me
      </motion.h2>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8 md:mb-12"
        >
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-4 md:mb-6">
            I'm a passionate Frontend Developer with a keen eye for design and a love for creating
            exceptional user experiences. With expertise in modern web technologies, I transform
            ideas into beautiful, functional, and responsive web applications.
          </p>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            My journey in web development has equipped me with strong skills in React, JavaScript,
            and CSS frameworks like Tailwind CSS. I believe in writing clean, maintainable code
            and staying up-to-date with the latest industry trends and best practices.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-2 gap-6 md:gap-8"
        >
          <div className="bg-[#1e293b] p-4 md:p-6 rounded-2xl border border-white/5">
            <h3 className="text-lg md:text-xl font-semibold text-teal-400 mb-2 md:mb-3">What I Do</h3>
            <ul className="text-sm md:text-base text-gray-300 space-y-2">
              <li>• Build responsive web applications</li>
              <li>• Create intuitive user interfaces</li>
              <li>• Optimize for performance</li>
              <li>• Collaborate with cross-functional teams</li>
            </ul>
          </div>

          <div className="bg-[#1e293b] p-4 md:p-6 rounded-2xl border border-white/5">
            <h3 className="text-lg md:text-xl font-semibold text-teal-400 mb-2 md:mb-3">My Approach</h3>
            <ul className="text-sm md:text-base text-gray-300 space-y-2">
              <li>• User-centered design</li>
              <li>• Clean and maintainable code</li>
              <li>• Continuous learning</li>
              <li>• Attention to detail</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;