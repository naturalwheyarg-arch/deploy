import { motion } from "framer-motion";

/**
 * Final CTA Section - Nuvik Premium
 * 
 * Diseño:
 * - Llamada a la acción final
 * - Información de contacto
 * - Botón CTA a WhatsApp
 * - Minimalista y directo
 */

export default function FinalCTA() {
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
      },
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
    <section className="py-40 bg-background text-foreground px-4 md:px-8 border-t border-border">
      <motion.div
        className="container mx-auto text-center max-w-2xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Título */}
        <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          ¿Listo para Escalar tu Negocio?
        </motion.h2>

        {/* Descripción */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-muted-foreground mb-12"
        >
          Hablá con nosotros sin compromiso. Te vamos a contar exactamente cómo funciona nuestro método y si es para vos.
        </motion.p>

        {/* CTA Principal */}
        <motion.div variants={itemVariants} className="mb-12">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-foreground text-foreground bg-background hover:bg-foreground hover:text-background transition-all duration-150 font-medium inline-block text-lg"
            >
              Hablar por WhatsApp
            </a>
        </motion.div>

        {/* Contacto */}
        <motion.div
          variants={itemVariants}
          className="pt-12 border-t border-border space-y-4"
        >
          <p className="text-sm text-muted-foreground">
            O escribinos directamente a:
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-foreground font-semibold hover:text-muted-foreground transition-colors"
          >
            +54 9 3435 44-7945
          </a>
          <p className="text-xs text-muted-foreground mt-4">
            Respondemos en menos de 1 hora
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
