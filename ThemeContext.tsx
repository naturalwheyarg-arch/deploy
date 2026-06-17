import { motion } from "framer-motion";

/**
 * Video Section - Nuvik Premium
 * 
 * Diseño:
 * - Embed de YouTube con descripción
 * - Subtítulos explicativos
 * - Mucho espacio en blanco alrededor
 */

export default function VideoSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };

  return (
    <section className="py-40 bg-background text-foreground px-4 md:px-8">
      <motion.div
        className="container mx-auto max-w-3xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Título */}
        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6"
        >
          En este vídeo te explicamos qué hacemos
        </motion.h2>

        {/* Descripción */}
        <motion.p
          variants={itemVariants}
          className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-base"
        >
          Cómo trabajamos, cómo te podemos ayudar y te mostramos testimonios de clientes reales que ya han trabajado con nosotros.
        </motion.p>

        {/* Video Embed */}
        <motion.div
          variants={itemVariants}
          className="relative w-full bg-secondary rounded-lg overflow-hidden shadow-lg"
          style={{ aspectRatio: "16 / 9" }}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/jFoXnCPKLRw"
            title="Nuvik - Método de Escala Digital"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0"
          />
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="mt-32 pt-32 border-t border-border"
        />
      </motion.div>
    </section>
  );
}
