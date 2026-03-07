import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import resumeTxt from '../assets/resume.pdf';
import profileImg from '../assets/profile.png';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 overflow-hidden relative">
            {/* Background Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-light-accent/20 dark:bg-dark-accent/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl delay-700" />

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl font-medium text-light-accent dark:text-dark-accent mb-4"
                    >
                        Hello, I'm
                    </motion.h2>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                        Sharvi Bhavsar
                    </h1>
                    <p className="text-xl text-light-textMuted dark:text-dark-textMuted mb-8 max-w-lg leading-relaxed">
                        A tech-savvy enthusiast crafting beautiful, human-friendly digital experiences.
                        Blending creativity with code.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <motion.a
                            href={resumeTxt}
                            download="Sharvi_Bhavsar_Resume.pdf"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 rounded-full bg-light-accent dark:bg-dark-accent text-white font-medium flex items-center gap-2 shadow-lg shadow-light-accent/25 dark:shadow-dark-accent/25 transition-all text-black"
                        >
                            <Download size={20} />
                            Download Resume (PDF)
                        </motion.a>

                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 rounded-full border-2 border-light-text dark:border-white text-light-text dark:text-white font-medium flex items-center gap-2 hover:bg-light-surface dark:hover:bg-white/10 transition-all"
                        >
                            View Work
                            <ArrowRight size={20} />
                        </motion.a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative flex justify-center"
                >
                    <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-light-accent dark:border-dark-accent shadow-2xl relative z-20 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                        <img src={profileImg} alt="Sharvi Bhavsar" className="w-full h-full object-cover" />
                    </div>

                    {/* Decorative Circle */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 z-10 border border-dashed border-gray-400 dark:border-gray-600 rounded-full w-full h-full scale-110"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
