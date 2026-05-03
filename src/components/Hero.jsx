import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
const Hero = () => {
  const [image, setImage] = useState(() => {
    if (typeof window === "undefined") return "/pimg.png";
    return window.localStorage.getItem("heroImage") || "/pimg.png";
  });
  const [cv, setCv] = useState(() => {
    if (typeof window === "undefined") return null;
    return window.localStorage.getItem("heroCv");
  });
  const imgRef = useRef();
  const heroRef = useRef();

  // GSAP floating animation and hero entrance
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { duration: 0.75, ease: "power3.out" } });
      tl.from(heroRef.current.querySelectorAll(".hero-fade"), {
        y: 30,
        opacity: 0,
        stagger: 0.12,
      });
      tl.from(
        imgRef.current,
        {
          scale: 0.95,
          opacity: 0,
        },
        "<"
      );
      gsap.to(imgRef.current, {
        y: 20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const saveImage = (dataUrl) => {
    setImage(dataUrl);
    window.localStorage.setItem("heroImage", dataUrl);
  };

  const saveCv = (dataUrl) => {
    setCv(dataUrl);
    window.localStorage.setItem("heroCv", dataUrl);
  };

  // Upload CV
  const handleCV = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      saveCv(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <section ref={heroRef} id="home" className="flex flex-col gap-8 items-center justify-between px-6 py-16 text-white sm:gap-10 sm:px-6 sm:py-20 md:flex-row md:gap-12 md:px-10 md:py-24 lg:px-12 lg:py-28">

      {/* LEFT SIDE */}
      <div className="w-full max-w-2xl order-2 md:order-1">
        <motion.div className="inline-flex items-center gap-2 rounded-full border border-teal-400/20 bg-white/5 px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm text-teal-300 shadow-sm hero-fade" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-teal-400" />
          <span className="hidden sm:inline">Frontend Developer • React & Tailwind Specialist</span>
          <span className="sm:hidden">Frontend Developer</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "power3.out" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 sm:mt-6 hero-fade leading-tight"
        >
          Hi, I'm <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-400 via-cyan-400 to-blue-400">Shruti Sharma</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.75, ease: "power3.out" }}
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-teal-400 mt-2 sm:mt-3 hero-fade"
        >
          Frontend Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.75, ease: "power3.out" }}
          className="text-gray-300 mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed max-w-2xl hero-fade"
        >
          Building modern, responsive web applications with clean code and exceptional user experiences. Passionate about creating digital solutions that make a difference.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.75, ease: "power3.out" }}
          className="mt-6 sm:mt-8 flex flex-col gap-3 sm:gap-4 sm:flex-row sm:items-center"
        >
          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center rounded-full bg-teal-500 px-6 sm:px-7 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-black transition hover:bg-teal-400 sm:w-auto"
          >
            Hire Me
          </a>
          {cv ? (
            <a
              href={cv}
              download
              className="inline-flex w-full items-center justify-center rounded-full border border-teal-400 bg-white/5 px-6 sm:px-7 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-teal-300 transition hover:bg-teal-500 hover:text-black sm:w-auto"
            >
              Download CV
            </a>
          ) : (
            <label className="inline-flex w-full cursor-pointer items-center justify-center rounded-full border border-teal-400 bg-white/5 px-6 sm:px-7 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-teal-300 transition hover:bg-teal-500 hover:text-black sm:w-auto">
              Upload CV
              <input type="file" hidden onChange={handleCV} />
            </label>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.75, ease: "power3.out" }}
          className="mt-6 sm:mt-8 grid gap-2 sm:gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
        >
          {[
            "React Development",
            "Tailwind UIs",
            "Performance-focused",
          ].map((item, index) => (
            <div key={index} className="rounded-2xl border border-white/10 bg-[#111827]/80 px-3 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm text-gray-300 shadow-sm">
              {item}
            </div>
          ))}
        </motion.div>

        {/* Social Icons - Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.75, ease: "power3.out" }}
          className="mt-6 flex gap-4 md:hidden"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-300 transition hover:bg-teal-500 hover:text-black hover:border-teal-400"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-300 transition hover:bg-teal-500 hover:text-black hover:border-teal-400"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </motion.div>
      </div>

      {/* RIGHT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "power3.out" }}
        className="relative flex flex-col items-center justify-center w-full sm:w-auto order-1 md:order-2"
      >
        <div className="hidden sm:block absolute -left-8 top-10 h-32 sm:h-44 w-32 sm:w-44 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="hidden sm:block absolute right-0 bottom-12 h-20 sm:h-28 w-20 sm:w-28 rounded-full bg-cyan-500/10 blur-3xl" />

        <div
          ref={imgRef}
          className="relative p-3 sm:p-4 rounded-3xl sm:rounded-4xl bg-[#111827] shadow-[0_25px_120px_rgba(20,184,166,0.18)] max-w-xs sm:max-w-sm md:max-w-md"
        >
          <img
            src={image}
            alt="profile"
            className="w-full h-auto max-h-64 sm:max-h-72 md:max-h-80 rounded-3xl sm:rounded-4xl object-cover shadow-2xl"
          />
        </div>

        {/* Social Icons - Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.75, ease: "power3.out" }}
          className="hidden md:flex gap-4 mt-6"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-300 transition hover:bg-teal-500 hover:text-black hover:border-teal-400"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-300 transition hover:bg-teal-500 hover:text-black hover:border-teal-400"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Hero;