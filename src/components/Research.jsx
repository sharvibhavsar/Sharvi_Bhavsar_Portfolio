import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, Calendar } from 'lucide-react';

const publication = {
    title: "A detailed review of AI-based flight path optimization techniques for air traffic control systems",
    authors: "Sharvi Bhavsar, Raxit Jani",
    journal: "International Journal of Engineering Development and Research (IJEDR)",
    date: "March 2026",
    volume: "Vol. 14, Issue 1",
    pages: "pp. 175-183",
    issn: "2321-9939",
    description: "A comprehensive review of artificial intelligence techniques—including Genetic Algorithms, Reinforcement Learning, Neural Networks, and Ant Colony Optimization—evaluated as decision support tools for flight path optimization and safety in simulated air traffic control scenarios.",
    tags: ["AI", "Flight Path Optimization", "Air Traffic Control", "Decision Support Systems"],
    link: "https://doi.org/10.56975/ijedr.v14i1.304777"
};

const Research = () => {
    return (
        <section id="research" className="py-20 bg-light-surface dark:bg-dark-surface/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-light-text dark:text-dark-text">Research & Publication</h2>
                    <p className="text-light-textMuted dark:text-dark-textMuted">My published academic research</p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className="bg-light-bg dark:bg-dark-bg p-8 md:p-10 rounded-2xl shadow-xl border border-gray-150 dark:border-gray-800 transition-all duration-300"
                    >
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
                            <div className="flex-1">
                                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-light-accent dark:text-dark-accent mb-4">
                                    <BookOpen size={14} />
                                    <span>Journal Publication</span>
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold mb-4 text-light-text dark:text-dark-text leading-tight">
                                    {publication.title}
                                </h3>
                                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                                    Authored by: <span className="font-semibold text-light-text dark:text-dark-text">{publication.authors}</span>
                                </p>
                                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500 dark:text-gray-400 mb-6">
                                    <span className="font-semibold">{publication.journal}</span>
                                    <span>•</span>
                                    <span>{publication.volume}</span>
                                    <span>•</span>
                                    <span className="flex items-center gap-1"><Calendar size={12} /> {publication.date}</span>
                                    <span>•</span>
                                    <span>ISSN: {publication.issn}</span>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm md:text-base leading-relaxed">
                                    {publication.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {publication.tags.map(tag => (
                                        <span key={tag} className="text-xs px-2.5 py-1 rounded bg-light-surface dark:bg-dark-surface text-light-accent dark:text-dark-accent font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="flex md:flex-col justify-end md:self-stretch pt-2">
                                <a
                                    href={publication.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full bg-light-accent dark:bg-dark-accent text-white font-medium shadow-md hover:shadow-lg transition-all text-sm hover:brightness-90 whitespace-nowrap self-start md:self-end"
                                >
                                    <ExternalLink size={16} /> View Paper
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Research;
