import "../styles/Home.css";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="page home">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Haloo Semua 👋
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Welcome to my portofolio website.
          <p>Ini adalah halaman Home saya.</p>
      <p>Di sini Anda bisa menemukan informasi tentang saya.</p>
      <p>Silakan jelajahi halaman lain untuk mengetahui lebih banyak tentang saya.</p>
      <p>Semoga Anda menikmati kunjungan Anda!</p>
      </motion.p>

    </div>
  );
}
