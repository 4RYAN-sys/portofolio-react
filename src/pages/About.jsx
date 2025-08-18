import "../styles/About.css";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="page about">
      <motion.h1
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        Tentang Saya
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Nama saya <span className="highlight">Aryan Pratama Susanto</span>, seorang siswa di SMKN 8 Malang yang sedang belajar RPL.
        saya suka nonton film, dengar musik, dan gaming. terima kasih telah mengunjungi halaman ini!.
      </motion.p>

    </div>
  );
}
