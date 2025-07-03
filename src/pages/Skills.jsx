import React, { useEffect, useRef } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiDjango,
  SiMysql,
  SiMongodb,
  SiSqlite,
  SiPostman,
} from "react-icons/si";

const skillData = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-300" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "PHP", icon: <FaPhp className="text-indigo-400" /> },
  { name: "Django", icon: <SiDjango className="text-green-700" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "SQLite", icon: <SiSqlite className="text-gray-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
  { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
];

export default function Skills() {
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let scrollPos = 0;
    const speed = 0.5;

    function step() {
      if (!container) return;

      scrollPos += speed;
      if (scrollPos >= container.scrollWidth / 2) {
        scrollPos = 0;
      }
      container.scrollLeft = scrollPos;
      animationRef.current = requestAnimationFrame(step);
    }

    animationRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  return (
    <div className="min-h-screen relative px-6 py-20 text-center flex flex-col items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-black/30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1619410283995-43d9134e7656?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(10px)",
          zIndex: 0,
          position: "absolute",
        }}
      />

      {/* Overlay to darken behind content */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div></div>
      <h2 className="text-5xl font-bold mb-12 text-center text-white relative z-20">
        Technical Skills
      </h2>

      <div
        ref={containerRef}
        style={{
          display: "flex",
          overflowX: "hidden",
          whiteSpace: "nowrap",
          width: "100%",
        }}
      >
        <section id="skills">
          <div
            className="flex items-center space-x-16 overflow-x-hidden whitespace-nowrap mask-fade"
            style={{ scrollBehavior: "smooth" }}
          >
            {[...skillData, ...skillData].map(({ name, icon }, index) => (
              <div
                key={`${name}-${index}`}
                className="flex flex-col items-center justify-center flex-shrink-0 w-28 select-none"
              >
                <div className="text-8xl mb-4 drop-shadow-lg">{icon}</div>
                <span className="text-lg font-semibold text-white relative z-20">
                  {name}
                </span>
              </div>
            ))}
          </div>

          <style>{`
        .mask-fade {
          -webkit-mask-image: linear-gradient(to right, transparent 0px, black 100px, black calc(100% - 100px), transparent 100%);
          mask-image: linear-gradient(to right, transparent 0px, black 100px, black calc(100% - 100px), transparent 100%);
        }
      `}</style>
        </section>
      </div>
    </div>
  );
}
