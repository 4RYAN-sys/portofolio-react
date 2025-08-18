import { motion } from "framer-motion";
import "../styles/About.css";

export default function About() {
  return (
    <div className="page">
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Tentang Saya
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Saya adalah seorang manusia biasa yang sekolah di SMKN 8 MALANG jurusan RPL.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          Beberapa hal tentang saya, sayab suka nonton fil, main game, dan dengar musik.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          Saya ada Quotes yang saya suka: "“Once you’re dead, that’s it. Nothing remains. All that’s left are memories.” – Dr. Tenma
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          Tujuan saya adalah menjadi seorang programmer handal, dan menjadi manusia yang bermanfaat.
        </motion.p>
      </motion.div>
    </div>
  );
}
