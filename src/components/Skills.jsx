import { motion } from 'framer-motion';

const skills = [
    {
        category: "Machine Learning & Data Science",
        items: ["Python", "Scikit-learn", "Model Training", "Model Evaluation", "Predictive Modeling"]
    },
    {
        category: "Data Analysis & EDA",
        items: ["Data Cleaning", "Exploratory Data Analysis", "Data Wrangling","Dataset Preparation", "Pipelining", "Pattern Identification"]
    },
    {
        category: "Data Visualization",
        items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Data Interpretation"]
    },
    {
        category: "Frontend & UI Design",
        items: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Figma", "Canva", "Photoshop"]
    },
    {
        category: "Backend & Databases",
        items: ["PHP", "MongoDB", "MySQL", "Firebase", "Supabase","REST APIs","XAMPP"]
    },
    {
        category: "AI & Prompt Engineering",
        items: ["Prompt Engineering", "GenAI", "AI-assisted Development","NLP", "LLM Workflows", "AI Productivity Tools"]
    }
];
const Skills = () => {
    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-light-text dark:text-dark-text">Skills Workspace</h2>
                    <p className="text-light-textMuted dark:text-dark-textMuted">My technical toolkit</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-light-surface dark:bg-dark-surface p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 hover:border-light-accent dark:hover:border-dark-accent transition-colors"
                        >
                            <h3 className="text-xl font-bold mb-6 text-light-accent dark:text-dark-accent">{skillGroup.category}</h3>
                            <div className="flex flex-wrap gap-3">
                                {skillGroup.items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 text-sm rounded-full bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text border border-gray-200 dark:border-gray-700"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
