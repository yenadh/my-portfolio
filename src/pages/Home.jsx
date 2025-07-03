import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import profileImage from "../assets/Profile.jpg";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-[#06202B] text-[#F5EEDD] px-4 text-center relative"
    >
      <motion.img
        src={profileImage}
        alt="Profile"
        className="w-40 h-40 rounded-full shadow-lg mb-6 border-4 border-[#7AE2CF] object-cover"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
      />

      <motion.h1
        className="text-4xl md:text-6xl font-bold"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Hi, I'm <span className="text-[#7AE2CF]">Yenadh Weerasooriya</span>
      </motion.h1>

      <motion.p
        className="mt-4 max-w-xl text-lg md:text-xl text-[#F5EEDD]/90"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        A passionate{" "}
        <span className="font-semibold text-[#077A7D]">Software Engineer</span>{" "}
        creating beautiful, responsive, and functional web experiences.
      </motion.p>

      <motion.a
        href="#contact"
        className="mt-8 inline-block bg-[#7AE2CF] hover:bg-[#077A7D] text-[#06202B] font-medium py-3 px-6 rounded-full shadow-lg transition duration-300"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Contact Me
      </motion.a>

      {/* Scroll Down Icon */}
      <motion.a
        href="#skills"
        className="absolute bottom-6 text-[#7AE2CF] text-2xl"
        initial={{ y: 0 }}
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <FaChevronDown />
      </motion.a>
    </section>
  );
};

export default Home;
