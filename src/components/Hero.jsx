import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import profile from "../assets/hero.png";
const Hero = () => {
  const [image, setImage] = useState(() => {
    if (typeof window === "undefined") return profile;
    return window.localStorage.getItem("heroImage") || profile;
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
    <section ref={heroRef} id="home" className="flex flex-col gap-8 items-center justify-between px-4 py-16 text-white sm:gap-10 sm:px-6 sm:py-20 md:flex-row md:gap-12 md:px-10 md:py-24 lg:px-12 lg:py-28">

      {/* LEFT SIDE */}
      <div className="w-full max-w-2xl">
        <motion.div className="inline-flex items-center gap-2 rounded-full border border-teal-400/20 bg-white/5 px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm text-teal-300 shadow-sm hero-fade" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-teal-400" />
          <span className="hidden sm:inline">Frontend Developer • React & Tailwind Specialist</span>
          <span className="sm:hidden">Frontend Developer</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "power3.out" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-teal-400 via-cyan-400 to-blue-400 mt-4 sm:mt-6 hero-fade leading-tight"
        >
          Building modern digital experiences for ambitious brands.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.75, ease: "power3.out" }}
          className="text-gray-300 mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed max-w-2xl hero-fade"
        >
          I craft polished, responsive web interfaces with a strong focus on usability, performance, and visual excellence. Let's translate your product vision into a beautiful frontend experience.
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
            Contact Me
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
      </div>

      {/* RIGHT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "power3.out" }}
        className="relative flex flex-col items-center justify-center w-full sm:w-auto"
      >
        <div className="hidden sm:block absolute -left-8 top-10 h-32 sm:h-44 w-32 sm:w-44 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="hidden sm:block absolute right-0 bottom-12 h-20 sm:h-28 w-20 sm:w-28 rounded-full bg-cyan-500/10 blur-3xl" />

        <div
          ref={imgRef}
          className="relative p-3 sm:p-4 rounded-3xl sm:rounded-4xl bg-[#111827] shadow-[0_25px_120px_rgba(20,184,166,0.18)]"
        >
          <img
            src={image}
            alt="profile"
            className="w-48 h-64 sm:w-56 sm:h-72 md:w-60 md:h-80 rounded-3xl sm:rounded-4xl object-cover shadow-2xl"
          />
        </div>

      </motion.div>
    </section>
  );
};

export default Hero;