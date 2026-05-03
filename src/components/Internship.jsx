// components/Internship.jsx
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const internships = [
  {
    company: "Universal Informatics",
    role: "Intern (C/C++, DSA, SQL)",
    duration: "Jul 2025 – Aug 2025",
    type: "Training Internship",
    logo: "/Skills/universal.jpg",
    desc: "Gained strong problem-solving skills and learned DSA, SQL, and programming fundamentals.",
  },
  {
    company: "Alphawizz Technologies",
    role: "Frontend Intern",
    duration: "Jan 2026 – Apr 2026",
    type: "Software Development Internship",
    logo: "/Skills/alphawizz.jpg",
    desc: "Worked on real-world projects using React.js and improved UI/UX and responsiveness.",
  },
];

const Internship = () => {
  const internshipRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".intern-card", {
        scrollTrigger: {
          trigger: internshipRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 40,
        opacity: 0,
        duration: 0.75,
        stagger: 0.18,
        ease: "power3.out",
      });
    }, internshipRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={internshipRef} id="internship" className="px-6 md:px-16 py-20 bg-[#0f172a] text-white">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center text-teal-400"
      >
        Internship Experience
      </motion.h2>

      <div className="mt-12 grid md:grid-cols-2 gap-8">
        {internships.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            className="intern-card bg-[#111827] p-6 rounded-2xl shadow-lg flex gap-4 hover:shadow-teal-400/30 transition"
          >
            {/* Logo */}
            <img
              src={item.logo}
              className="w-16 h-16 object-contain"
            />

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-xl font-bold text-teal-400">
                {item.company}
              </h3>

              <p className="text-sm text-gray-400">
                {item.role}
              </p>

              <p className="text-sm text-gray-500">
                {item.duration} • {item.type}
              </p>

              <p className="mt-2 text-gray-300 text-sm">
                {item.desc}
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 px-4 py-2 bg-teal-500 text-black text-sm font-semibold rounded-lg hover:bg-teal-400 transition"
              >
                View Certificate
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Internship;