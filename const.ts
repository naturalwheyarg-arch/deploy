import { motion } from "framer-motion";

/**
 * Hero Section - Nuvik Premium
 * 
 * Diseño:
 * - Título grande y centrado con tipografía Playfair Display
 * - Subtítulo descriptivo
 * - Foto de fundadores a la derecha (asimétrico)
 * - CTA a WhatsApp con estilo premium
 * - Mucho espacio en blanco
 */

export default function Hero() {
  const whatsappNumber = "+543435447945";
  const whatsappMessage = "Hola Nuvik! Quiero conocer más sobre vuestro método de escala digital.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
        transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      } as any,
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="min-h-screen bg-background text-foreground flex items-center py-24 md:py-40 px-4 md:px-8">
      <motion.div
        className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Contenido Izquierdo */}
        <motion.div className="space-y-10" variants={itemVariants}>
          {/* Logo/Marca */}
          <motion.div variants={itemVariants} className="inline-block">
            <h3 className="text-xs font-semibold tracking-widest text-muted-foreground uppercase letter-spacing-wider">
              Nuvik Sistemas
            </h3>
          </motion.div>

          {/* Título Principal */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Te enseñamos nuestro <span className="font-bold">método completo</span> para convertir las redes sociales en un captador de clientes a tu negocio
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            variants={itemVariants}
            className="text-base text-muted-foreground leading-relaxed max-w-xl"
          >
            Todos los días, nuevos clientes llegan a través de tu estrategia digital. Sin publicidad cara, sin intermediarios. Solo resultados reales.
          </motion.p>

          {/* CTA Principal */}
          <motion.div variants={itemVariants}>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-foreground text-foreground bg-background hover:bg-foreground hover:text-background transition-all duration-150 font-medium inline-block"
            >
              Conocer el Método
            </a>
          </motion.div>

          {/* Proof Point */}
          <motion.div
            variants={itemVariants}
            className="pt-8 border-t border-border"
          >
            <p className="text-sm text-muted-foreground">
              ✓ Método probado con +50 clientes reales
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              ✓ Resultados en 30-60 días
            </p>
          </motion.div>
        </motion.div>

        {/* Contenido Derecho - Foto de Fundadores */}
        <motion.div
          variants={itemVariants}
          className="block"
        >
          <div className="relative">
            {/* Sombra sutil */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent rounded-lg" />
            
            <img
              src="/manus-storage/nubik-founders_d13e1fd0.png"
              alt="Fundadores de Nuvik"
              className="w-full h-auto rounded-lg object-cover shadow-lg"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
