import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = ({ theme, toggleTheme }) => {
    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2 rounded-full bg-light-surface dark:bg-dark-surface shadow-lg border border-light-accent/20 dark:border-dark-accent/20"
            aria-label="Toggle Theme"
        >
            {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-dark-accent" />
            ) : (
                <Moon className="w-5 h-5 text-light-accent" />
            )}
        </motion.button>
    );
};

export default ThemeToggle;
