import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef(null);
  const buttonRef = useRef(null);
  const formRef = useRef(null);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // EmailJS configuration - Vite environment variables
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // Log environment variables on component mount (for debugging)
  useEffect(() => {
    console.log('🔍 EmailJS Configuration Check:');
    console.log('SERVICE_ID:', SERVICE_ID ? '✅ Loaded' : '❌ Missing');
    console.log('TEMPLATE_ID:', TEMPLATE_ID ? '✅ Loaded' : '❌ Missing');
    console.log('PUBLIC_KEY:', PUBLIC_KEY ? '✅ Loaded' : '❌ Missing');
    
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.warn('⚠️  EmailJS not fully configured. Please check your .env file.');
      console.warn('📝 Required variables: VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY');
    }
  }, [SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY]);

  // Initialize EmailJS
  useEffect(() => {
    if (PUBLIC_KEY) {
      try {
        emailjs.init(PUBLIC_KEY);
        console.log('✅ EmailJS initialized successfully');
      } catch (error) {
        console.error('❌ EmailJS initialization failed:', error);
      }
    }
  }, [PUBLIC_KEY]);

  // Validation function
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    // Clear success state when user starts typing
    if (isSuccess) {
      setIsSuccess(false);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
      return;
    }

    setIsLoading(true);
    setIsSuccess(false);

    // Check if EmailJS is configured
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error('❌ EmailJS Configuration Error:');
      console.error('Missing:', {
        SERVICE_ID: !SERVICE_ID ? '❌ SERVICE_ID missing' : '✅ OK',
        TEMPLATE_ID: !TEMPLATE_ID ? '❌ TEMPLATE_ID missing' : '✅ OK',
        PUBLIC_KEY: !PUBLIC_KEY ? '❌ PUBLIC_KEY missing' : '✅ OK'
      });
      toast.error('Email service not configured. Please contact me directly at shshruti400@gmail.com');
      setIsLoading(false);
      return;
    }

    try {
      console.log('📤 Sending email...');
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'shshruti400@gmail.com', // Your email address
          reply_to: formData.email
        },
        PUBLIC_KEY
      );

      console.log('✅ Email sent successfully:', result);
      toast.success('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
      setIsSuccess(true);
    } catch (error) {
      console.error('❌ EmailJS error:', error);

      // Provide specific error messages
      if (error.status === 400) {
        toast.error('Invalid email configuration. Please try again later.');
      } else if (error.status === 429) {
        toast.error('Too many requests. Please try again in a few minutes.');
      } else if (error.text?.includes('Invalid service id')) {
        toast.error('Email service configuration error. Please contact support.');
      } else if (error.text?.includes('Invalid template id')) {
        toast.error('Email template error. Please contact support.');
      } else {
        toast.error('Failed to send message. Please try again or email me directly.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  // GSAP Animation Setup with Fixed ScrollTrigger
  useEffect(() => {
    let ctx;
    let scrollTriggers = [];

    const initAnimations = () => {
      // Kill any existing ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === contactRef.current) {
          trigger.kill();
        }
      });

      ctx = gsap.context(() => {
        // 🔧 FIX 1: Set initial state - ensure cards are ALWAYS visible
        gsap.set(".contact-card", {
          opacity: 1,
          y: 0,
          scale: 1
        });

        // 🔧 FIX 2: Use fromTo() instead of from() to guarantee end state
        const tl = gsap.fromTo(".contact-card",
          {
            y: 40,
            opacity: 0,
            scale: 0.95
          },
          {
            scrollTrigger: {
              trigger: contactRef.current,
              start: "top 80%",
              once: true, // 🔧 FIX 3: Only animate once, never reverse
            },
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            stagger: 0.08,
            ease: "power3.out",
          }
        );

        // Store trigger for cleanup
        if (tl.scrollTrigger) {
          scrollTriggers.push(tl.scrollTrigger);
        }

        // Animate submit button
        const buttonTl = gsap.fromTo(buttonRef.current,
          {
            scale: 0.85,
            opacity: 0
          },
          {
            scrollTrigger: {
              trigger: contactRef.current,
              start: "top 80%",
              once: true, // 🔧 Only animate once
            },
            scale: 1,
            opacity: 1,
            duration: 1.1,
            delay: 0.4,
            ease: "back.out(1.7)",
          }
        );

        if (buttonTl.scrollTrigger) {
          scrollTriggers.push(buttonTl.scrollTrigger);
        }
      }, contactRef);

      // 🔧 FIX 4: Refresh ScrollTrigger after delay to ensure proper initialization
      const refreshTimer = setTimeout(() => {
        ScrollTrigger.refresh();
        console.log('✅ ScrollTrigger refreshed');
      }, 200);

      return refreshTimer;
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(initAnimations, 100);

    return () => {
      clearTimeout(timer);
      if (ctx) {
        ctx.revert();
      }
      // Kill all ScrollTrigger instances for this component
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === contactRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section ref={contactRef} id="contact" className="px-6 md:px-16 py-16 md:py-20 bg-[#0b1220] text-white">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center text-teal-400"
      >
        Let's Connect
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-center max-w-2xl mx-auto mt-4 text-sm md:text-base text-gray-300"
      >
        I'm always open to discussing new opportunities, creative projects, or just having a chat about frontend development.
      </motion.p>

      <div className="mx-auto mt-12 max-w-6xl">
        <div className="grid gap-8 md:gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="contact-card">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 md:mb-6">Send a Message</h3>
            {isSuccess && (
              <div className="mb-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                <p className="text-green-400 text-sm">✓ Message sent successfully! I'll get back to you soon.</p>
              </div>
            )}
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-[#1e293b] border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors text-sm md:text-base ${
                    errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-teal-400 focus:ring-teal-400'
                  }`}
                  placeholder="Your name"
                  disabled={isLoading}
                />
                {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-[#1e293b] border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors text-sm md:text-base ${
                    errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-teal-400 focus:ring-teal-400'
                  }`}
                  placeholder="your.email@example.com"
                  disabled={isLoading}
                />
                {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-[#1e293b] border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors resize-none text-sm md:text-base ${
                    errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-teal-400 focus:ring-teal-400'
                  }`}
                  placeholder="Tell me about your project..."
                  disabled={isLoading}
                />
                {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
              </div>
              <motion.button
                ref={buttonRef}
                whileHover={{ scale: isLoading ? 1 : 1.02 }}
                whileTap={{ scale: isLoading ? 1 : 0.98 }}
                type="submit"
                disabled={isLoading}
                className={`w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-teal-400/30 text-sm md:text-base flex items-center justify-center gap-2 ${
                  isLoading ? 'opacity-75 cursor-not-allowed' : 'hover:from-teal-400 hover:to-cyan-400'
                }`}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </form>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 md:mb-6">Connect With Me</h3>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
              <a
                href="https://github.com/989SHRUTISHARMA"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card group rounded-2xl bg-[#111827]/90 p-4 md:p-6 text-center shadow-lg border border-white/10 hover:border-teal-400/50 hover:scale-105 transition-all duration-300 transform will-change-transform"
              >
                <div className="flex justify-center mb-4">
                  <svg className="w-8 h-8 text-gray-400 group-hover:text-teal-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <h4 className="text-base md:text-lg font-semibold text-white mb-2">GitHub</h4>
                <p className="text-xs md:text-sm text-gray-400">@989SHRUTISHARMA</p>
              </a>

              <a
                href="https://www.linkedin.com/in/shruti-sharma-989shruti/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card group rounded-2xl bg-[#111827]/90 p-4 md:p-6 text-center shadow-lg border border-white/10 hover:border-teal-400/50 hover:scale-105 transition-all duration-300 transform will-change-transform"
              >
                <div className="flex justify-center mb-4">
                  <svg className="w-8 h-8 text-gray-400 group-hover:text-teal-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <h4 className="text-base md:text-lg font-semibold text-white mb-2">LinkedIn</h4>
                <p className="text-xs md:text-sm text-gray-400">Shruti Sharma</p>
              </a>

              <a
                href="mailto:shshruti400@gmail.com"
                className="contact-card group rounded-2xl bg-[#111827]/90 p-4 md:p-6 text-center shadow-lg border border-white/10 hover:border-teal-400/50 hover:scale-105 transition-all duration-300 transform will-change-transform"
              >
                <div className="flex justify-center mb-4">
                  <svg className="w-8 h-8 text-gray-400 group-hover:text-teal-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <h4 className="text-base md:text-lg font-semibold text-white mb-2">Email</h4>
                <p className="text-xs md:text-sm text-gray-400">shshruti400@gmail.com</p>
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=125+G+Kalandi+Gold+Indore+MP"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card group rounded-2xl bg-[#111827]/90 p-4 md:p-6 text-center shadow-lg border border-white/10 hover:border-teal-400/50 hover:bg-white/5 hover:scale-105 transition-all duration-300 cursor-pointer transform will-change-transform"
              >
                <div className="flex justify-center mb-4">
                  <svg className="w-8 h-8 text-gray-400 group-hover:text-teal-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <h4 className="text-base md:text-lg font-semibold text-white mb-2">Location</h4>
                <p className="text-xs md:text-sm text-gray-400">Indore, MP, India</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#1e293b',
            color: '#fff',
            border: '1px solid #374151',
          },
          success: {
            iconTheme: {
              primary: '#14b8a6',
              secondary: '#000',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />
    </section>
  );
};

export default Contact;
