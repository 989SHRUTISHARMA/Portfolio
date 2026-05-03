// components/Skills.jsx
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "HTML", img: "/Skills/html-5.png" },
  { name: "CSS", img: "/Skills/css-3.png" },
  { name: "JavaScript", img: "/Skills/java-script.png" },
  { name: "React JS", img: "/Skills/library.png" },
  { name: "Bootstrap", img: "/Skills/bootstrap.png" },
  { name: "Tailwind CSS", img: "/Skills/tailwind-css.png" },
];

const Skills = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-card", {
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 40,
        opacity: 0,
        scale: 0.95,
        stagger: 0.14,
        duration: 0.7,
        ease: "power3.out",
      });
    }, skillsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={skillsRef} id="skills" className="px-6 md:px-16 py-16 md:py-20 bg-[#0f172a] text-white">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center text-teal-400 mb-2 md:mb-4"
        >
          My Skills
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center max-w-2xl mx-auto mb-8 md:mb-14 text-sm md:text-base text-gray-300"
        >
          Technologies and tools I use to bring ideas to life
        </motion.p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{
              scale: 1.1,
              rotate: 5,
              boxShadow: "0 20px 40px rgba(20, 184, 166, 0.3)"
            }}
            className="skill-card bg-[#1e293b] p-3 md:p-6 rounded-2xl flex flex-col items-center shadow-lg hover:shadow-teal-400/40 transition duration-300 border border-white/5 hover:border-teal-400/30"
          >
            <motion.div
              className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-white/5 flex items-center justify-center mb-2 md:mb-3"
              whileHover={{ rotate: 10, scale: 1.1 }}
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-8 h-8 md:w-12 md:h-12 object-contain"
              />
            </motion.div>
            <p className="text-xs md:text-sm font-medium text-gray-300">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;