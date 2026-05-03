// components/About.jsx
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

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-card", {
        scrollTrigger: {
          trigger: aboutRef.current,
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
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={aboutRef} id="about" className="px-6 md:px-16 py-20 bg-[#0b1220] text-white">

      {/* About */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center text-teal-400"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-center max-w-2xl mx-auto mt-6 text-gray-300"
      >
        I am a passionate Frontend Developer specializing in building modern,
        responsive, and user-friendly web applications using React.js,
        JavaScript, and Tailwind CSS. I enjoy creating smooth UI experiences
        and continuously improving my development skills.
      </motion.p>

      {/* Skills Title */}
      <h3 className="text-2xl text-center mt-14 text-teal-300 font-semibold">
        My Skills
      </h3>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-10 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.15, rotate: 2 }}
            className="skill-card bg-[#111827] p-6 rounded-2xl flex flex-col items-center shadow-lg hover:shadow-teal-400/40 transition duration-300"
          >
            <motion.img
              src={skill.img}
              alt={skill.name}
              className="w-16 h-16"
              whileHover={{ rotate: 10 }}
            />
            <p className="mt-3 text-sm">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;