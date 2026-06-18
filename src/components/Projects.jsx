import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "Machine Learning Dataset Analysis & Classification Model",
        description: "A machine learning project focused on cleaning datasets, exploring patterns through analysis, and building a classification model to generate predictive insights.",
        tags: ["Python", "Scikit-learn", "Matplotlib", "Seaborn"],
        github: "https://github.com/sharvibhavsar/ML-logistic-regression",
        image: "/projects/ml-project.png"
    },
    {
        title: "MindSpace",
        description: "Mental State Detection Chatbot that evaluates user responses through a quiz and conversation flow to understand emotional state and encourage better mental well-being.",
        tags: ["Python", "HTML", "CSS", "JavaScript", "NLP"],
        github: "https://github.com/sharvibhavsar/MindSpace",
        image: "/projects/mindspace.png"
    },
    {
        title: "PlanMyTrip",
        description: "Travel Planning full-stack web application that allows users to organize travel plans, manage trip details, and store itineraries through an interactive interface.",
        tags: ["HTML", "CSS", "JavaScript", "PHP", "MongoDB"],
        link: "https://planmytrip-steel.vercel.app/",
        github: "https://github.com/sharvibhavsar/PlanMyTrip",
        image: "/projects/planmytrip.png"
    },
    {
        title: "Sharosa Atelier",
        description: "An art showcase and gallery created for digital-display of artwork along with feeback and review management. ",
        tags: ["React", "Vite", "Supabase", "Tailwind CSS", "Framer Motion"],
        github: "https://github.com/sharvibhavsar/sharosa-atelier",
        link: "https://sharosa-atelier-awmp-nu.vercel.app/",
        image: "/projects/sharosa-atelier.png"
    },
    {
        title: "Virtual Keyboard",
        description: "A computer-vision-based virtual keyboard that utilizes real-time hand tracking and gesture recognition to enable touchless typing with primary inputs and storing data.",
        tags: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI"],
        github: "https://github.com/sharvibhavsar/Virtual_keyboard",
        image: "/projects/virtual-keyboard.png"
    },
    {
        title: "Stressbar",
        description: "A web-based mental wellbeing and stress tracking platform that includes automated mood evaluation and interactive form-based evaluation indicating stress-level.",
        tags: ["HTML", "CSS", "PHP", "MySQL", "XAMPP"],
        github: "https://github.com/sharvibhavsar/Stressbar",
        image: "/projects/stressbar.png"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-light-surface dark:bg-dark-surface/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-light-text dark:text-dark-text">Featured Projects</h2>
                    <p className="text-light-textMuted dark:text-dark-textMuted">A selection of my recent work</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-light-bg dark:bg-dark-bg rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800"
                        >
                            <div className="w-full aspect-video overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-light-text dark:text-dark-text">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs px-2 py-1 rounded bg-light-surface dark:bg-dark-surface text-light-accent dark:text-dark-accent">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            className="flex items-center gap-1 text-sm font-medium hover:text-light-accent dark:hover:text-dark-accent transition-colors text-light-text dark:text-dark-text"
                                        >
                                            <Github size={16} /> Code
                                        </a>
                                    )}

                                    {project.link && (
                                        <a
                                            href={project.link}
                                            className="flex items-center gap-1 text-sm font-medium hover:text-light-accent dark:hover:text-dark-accent transition-colors text-light-text dark:text-dark-text"
                                        >
                                            <ExternalLink size={16} /> Live Demo
                                        </a>
                                    )}
                                </div>                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
