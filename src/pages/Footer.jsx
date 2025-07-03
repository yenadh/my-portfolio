// Footer.jsx
import { Linkedin, Github, Twitter, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-center sm:text-left text-sm">
          &copy; {new Date().getFullYear()} Yenadh Weerasooriya. All rights
          reserved.
        </p>
        <div className="flex space-x-6 mt-4 sm:mt-0">
          <a
            href="https://github.com/yenadh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#7AE2CF] transition"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/yenath-weerasooriya-0b93a8351/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#7AE2CF] transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
