import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built using React and Tailwind CSS.",
    github: "https://github.com/yourusername/portfolio",
  },
  {
    title: "Admin Dashboard with Filament",
    description: "A modern admin dashboard built using Laravel Filament.",
    github: "https://github.com/yenadh/filement-project",
  },
  {
    title: "Push Notification with Laravel",
    description:
      "A Laravel-based system that integrates push notification services to deliver real-time alerts. .",
    github: "https://github.com/yenadh/laravel-pwa-pushNotification",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen bg-[#7AE2CF] px-6 py-20 text-center flex items-center justify-center"
    >
      <div>
        <motion.h2
          className="text-4xl font-bold mb-12 text-[#06202B]"
          variants={fadeIn}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          Projects
        </motion.h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.a
              href={project.github}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col justify-center bg-[#06202B] rounded-2xl shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2 p-6 border border-[#7AE2CF] text-left"
              variants={fadeIn}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-[#7AE2CF] mb-2">
                {project.title}
              </h3>
              <p className="text-[#F5EEDD] flex-grow">{project.description}</p>
              <span className="mt-4 inline-block text-sm text-[#077A7D] hover:underline">
                View on GitHub →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
