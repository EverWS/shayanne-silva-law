import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const phone = "5500000000000";
  const msg = encodeURIComponent("Olá, gostaria de agendar uma consulta.");
  return (
    <motion.a
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      href={`https://wa.me/${phone}?text=${msg}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      className="fixed bottom-6 right-6 z-40 group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <span className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] text-white shadow-elegant hover:scale-110 transition-transform duration-300">
        <MessageCircle size={26} strokeWidth={1.8} />
      </span>
    </motion.a>
  );
};
