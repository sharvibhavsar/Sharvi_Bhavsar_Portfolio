import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 bg-light-surface dark:bg-dark-surface/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-light-text dark:text-dark-text">
                        About Me
                    </h2>
                    <div className="bg-light-bg dark:bg-dark-bg p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800">
                        <p className="text-lg text-light-textMuted dark:text-dark-textMuted leading-relaxed mb-6">
                           Growing interest in Data Science, Machine Learning, and Data Driven problem 				   solving. Working with python to analyze datasets, uncover patterns, and building intelligent systems turning data to meaningful insights. Creativity finds it's way through technology, designing intutive interfaces for effectiveness.                       </p>
                        <p className="text-lg text-light-textMuted dark:text-dark-textMuted leading-relaxed">
                            Super curious about aviation systems and technology. Particularly interested about how Artificial Intelligence can efficiency and avaiation safety in Air Traffic Control                      </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
