import { motion } from 'framer-motion';

const softSkills = [
    "Interpersonal Skills",
    "Active Listening",
    "Time Management",
    "Adaptability",
    "Quick Learning Ability",
    "Strong Memory",
    "Soft-spoken",
    "Professionalism",
    "Goal-oriented",
    "Presentation",
    "Relationship Building",
    "Consistent with Deadlines"
];

const SoftSkills = () => {
    return (
        <section id="soft-skills" className="py-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-light-text dark:text-dark-text">Soft Skills</h2>
                    <p className="text-light-textMuted dark:text-dark-textMuted">My interpersonal & professional strengths</p>
                </motion.div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {softSkills.map((skill, index) => (
                        <motion.div
                            key={skill}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ y: -5 }}
                            className="group bg-light-surface dark:bg-dark-surface p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 hover:border-light-accent dark:hover:border-dark-accent hover:shadow-xl transition-all duration-300 text-center flex items-center justify-center min-h-[90px] cursor-default"
                        >
                            <h3 className="text-lg font-normal text-light-text dark:text-dark-text group-hover:text-light-accent dark:group-hover:text-dark-accent transition-colors duration-300">
                                {skill}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SoftSkills;
