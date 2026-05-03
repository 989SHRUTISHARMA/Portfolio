// components/Projects.jsx
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Cartsy",
    subtitle: "E-commerce Store",
    desc: "Built a dynamic online shopping experience with cart, wishlist, and API-powered product feeds.",
    tech: "React, Redux, API",
    github: "https://github.com/989SHRUTISHARMA/Cartsy-",
    live: "https://cartsy-psi.vercel.app/",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=350&fit=crop&crop=center",
    label: "E-commerce",
    accent: "from-teal-500/20 to-slate-900/40",
  },
  {
    title: "Grostore",
    subtitle: "Grocery Platform",
    desc: "Developed a responsive grocery marketplace with category filters and smooth checkout flow.",
    tech: "React, Bootstrap, React Router",
    github: "https://github.com/989SHRUTISHARMA/Grostore/tree/main/Grostore",
    live: "https://freshmart-jade.vercel.app/",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&h=350&fit=crop&crop=center",
    label: "Retail",
    accent: "from-cyan-500/20 to-slate-900/40",
  },
  {
    title: "Weather App",
    subtitle: "Real-time Forecast",
    desc: "Created an interactive weather dashboard using live API data and elegant mobile-first visuals.",
    tech: "React, Redux, Tailwind CSS",
    github: "https://github.com/989SHRUTISHARMA/weather-app",
    live: "https://weather-app-eta-six-66.vercel.app/",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop",
    label: "Utility",
    accent: "from-blue-500/20 to-slate-900/40",
  },
  {
    title: "HOSTC",
    subtitle: "Brand Website",
    desc: "Designed a polished responsive website with modern animations and structured content layout.",
    tech: "HTML, CSS, Bootstrap, AOS",
    github: "https://github.com/989SHRUTISHARMA/HOSTC-webpage",
    live: "https://hostc1.netlify.app/",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    label: "Branding",
    accent: "from-orange-500/20 to-slate-900/40",
  },
  {
    title: "Auth System",
    subtitle: "Login Platform",
    desc: "Built a secure authentication workflow with signup, login, and session validation.",
    tech: "React, Node.js",
    github: "https://github.com/989SHRUTISHARMA/loginapp",
    live: "https://loginapp-jade.vercel.app/",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop",
    label: "Security",
    accent: "from-violet-500/20 to-slate-900/40",
  },
];

const Projects = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate project cards on scroll
      gsap.fromTo(cardsRef.current,
        {
          y: 60,
          opacity: 0,
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Add hover animations to each card
      cardsRef.current.forEach((card) => {
        if (card) {
          const image = card.querySelector('.project-image');
          const overlay = card.querySelector('.project-overlay');
          const floats = card.querySelectorAll('.project-float');

          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              boxShadow: "0 25px 90px rgba(20, 184, 166, 0.18)",
              y: -4,
              duration: 0.4,
              ease: "power2.out"
            });
            gsap.to(image, {
              scale: 1.1,
              duration: 0.6,
              ease: "power2.out"
            });
            gsap.to(overlay, {
              opacity: 0.65,
              duration: 0.3
            });
            gsap.to(floats, {
              y: -6,
              opacity: 1,
              duration: 0.5,
              stagger: 0.08,
              ease: "power1.out"
            });
          });

          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              boxShadow: "0 20px 80px rgba(0, 0, 0, 0.18)",
              y: 0,
              duration: 0.4,
              ease: "power2.inOut"
            });
            gsap.to(image, {
              scale: 1,
              duration: 0.6,
              ease: "power2.out"
            });
            gsap.to(overlay, {
              opacity: 0.4,
              duration: 0.3
            });
            gsap.to(floats, {
              y: 0,
              opacity: 0.4,
              duration: 0.5,
              stagger: 0.08,
              ease: "power1.inOut"
            });
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className="px-6 md:px-16 py-16 md:py-20 bg-[#0b1220] text-white overflow-hidden">
      <div ref={containerRef} className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm uppercase tracking-[0.3em] text-teal-300"
          >
            Featured Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-3 text-3xl md:text-4xl font-bold text-teal-400"
          >
            My Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mx-auto mt-4 max-w-2xl text-sm md:text-base text-gray-300"
          >
            A selection of projects showcasing responsive UI, modern development workflows, and polished web experiences.
          </motion.p>
        </motion.div>

        <div className="mt-8 md:mt-12 grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.article
              key={i}
              ref={el => cardsRef.current[i] = el}
              initial={{ opacity: 0, y: 50, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                delay: i * 0.1,
                duration: 0.6,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{
                y: -8,
                rotateX: -5,
                transition: { duration: 0.3 }
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#111827]/90 shadow-2xl shadow-black/20 transition-all duration-500 hover:shadow-3xl hover:shadow-teal-500/10"
            >
              <div className="relative h-56 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="project-image w-full h-full object-cover transition-transform duration-700"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="project-overlay absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className="absolute inset-0 flex items-end p-6"
                >
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="rounded-full bg-black/60 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm border border-white/20"
                  >
                    {project.label}
                  </motion.span>
                </motion.div>

                {/* Floating accent elements */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="project-float absolute top-4 right-4 w-3 h-3 bg-teal-400 rounded-full opacity-60"
                />
                <motion.div
                  animate={{
                    y: [0, 10, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="project-float absolute bottom-4 left-4 w-2 h-2 bg-cyan-400 rounded-full opacity-40"
                />
              </div>

              <motion.div
                className="p-4 md:p-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.1 + 0.5 }}
              >
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 + 0.6 }}
                >
                  <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-teal-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs md:text-sm text-gray-400">{project.subtitle}</p>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 + 0.7 }}
                  className="mt-4 text-sm md:text-base text-gray-300 leading-relaxed"
                >
                  {project.desc}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 + 0.8 }}
                  className="mt-4 text-xs md:text-sm text-gray-400"
                >
                  <span className="text-teal-300 font-medium">Tech:</span> {project.tech}
                </motion.p>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 + 0.9 }}
                  className="mt-6 flex flex-col sm:flex-row gap-3"
                >
                  <motion.a
                    href={project.github}
                    target="_blank"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 20px rgba(20, 184, 166, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="rounded-full border-2 border-teal-400 px-4 md:px-5 py-2 text-xs md:text-sm text-teal-300 transition-all duration-300 hover:bg-teal-500 hover:text-black hover:border-teal-300 shadow-lg hover:shadow-teal-400/25"
                  >
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </span>
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 25px rgba(20, 184, 166, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="rounded-full bg-linear-to-r from-teal-500 to-cyan-500 px-4 md:px-5 py-2 text-xs md:text-sm font-semibold text-black transition-all duration-300 hover:from-teal-400 hover:to-cyan-400 shadow-lg hover:shadow-teal-400/30"
                  >
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                      </svg>
                      Live Demo
                    </span>
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;