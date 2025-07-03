// Contact.jsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen bg-[#06202B] flex items-center justify-center px-6 py-20"
    >
      <motion.div
        className="flex flex-col gap-8 max-w-md w-full"
        variants={fadeIn}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
          Contact Me
        </h2>

        {/* Contact Cards */}
        <a
          href="tel:+971501234567"
          className="flex items-center gap-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 cursor-pointer hover:shadow-2xl transition"
        >
          <Phone size={28} className="text-[#7AE2CF]" />
          <span className="text-lg text-gray-800 dark:text-white">
            +971 56 736 4131
          </span>
        </a>

        <a
          href="mailto:yenathweerasooriya@gmail.com"
          className="flex items-center gap-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 cursor-pointer hover:shadow-2xl transition"
        >
          <Mail size={28} className="text-[#7AE2CF]" />
          <span className="text-lg text-gray-800 dark:text-white">
            yenathweerasooriya@gmail.com
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/yenath-weerasooriya-0b93a8351/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 cursor-pointer hover:shadow-2xl transition"
        >
          <Linkedin size={28} className="text-[#7AE2CF]" />
          <span className="text-lg text-gray-800 dark:text-white">
            LinkedIn
          </span>
        </a>

        <a
          href="https://github.com/yenadh"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 cursor-pointer hover:shadow-2xl transition"
        >
          <Github size={28} className="text-[#7AE2CF]" />
          <span className="text-lg text-gray-800 dark:text-white">GitHub</span>
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
