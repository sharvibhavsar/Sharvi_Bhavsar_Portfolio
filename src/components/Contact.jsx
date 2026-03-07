import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 relative z-10">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-light-text dark:text-dark-text">Get In Touch</h2>
                    <p className="text-light-textMuted dark:text-dark-textMuted">Let's work together</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-light-surface dark:bg-dark-surface p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 text-center"
                >
                    <h3 className="text-2xl font-bold mb-6 text-light-text dark:text-dark-text">Have a project in mind?</h3>
                    <p className="mb-8 text-light-textMuted dark:text-dark-textMuted">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                    </p>
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=sharvibhavsar12@gmail.com&su=Hello%20Sharvi&body=Hi%20Sharvi,"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-3 rounded-full bg-light-accent dark:bg-dark-accent text-white font-medium shadow-lg hover:shadow-xl transition-all mb-12 hover:brightness-90"
                    >
                        Say Hello
                    </a>






                    <div className="flex justify-center gap-8">
                        <a href="https://github.com/sharvibhavsar" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-light-bg dark:bg-dark-bg hover:text-black dark:hover:text-gray-200 transition-colors text-gray-600 dark:text-gray-400">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/sharvi-bhavsar-914344344/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-light-bg dark:bg-dark-bg hover:text-black dark:hover:text-gray-200 transition-colors text-gray-600 dark:text-gray-400">
                            <Linkedin size={24} />
                        </a>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sharvibhavsar12@gmail.com&su=Hello%20Sharvi&body=Hi%20Sharvi," target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-light-bg dark:bg-dark-bg hover:text-black dark:hover:text-gray-200 transition-colors text-gray-600 dark:text-gray-400">
                            <Mail size={24} />
                        </a>
                    </div>
                </motion.div>

                <footer className="mt-20 text-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Sharvi Bhavsar. All rights reserved.</p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
