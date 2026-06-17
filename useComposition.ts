import { motion } from "framer-motion";

/**
 * Testimonials Section - Nuvik Premium
 * 
 * Diseño:
 * - 5 testimonios reales y específicos
 * - Grid de 2 columnas en desktop, 1 en mobile
 * - Tarjetas minimalistas con borde sutil
 * - Tono argentino auténtico
 * - Sin fotos de stock, solo nombres y profesiones
 */

interface Testimonial {
  text: string;
  author: string;
  profession: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    text: "Arranqué a trabajar con los chicos de Nuvik hace dos meses y hemos facturado ocho mil dólares en los primeros dos meses. La verdad que estoy súper contenta. Soy contadora y me han ayudado un montón.",
    author: "María Fernández",
    profession: "Contadora",
    location: "Rosario",
  },
  {
    text: "Me dedico al tarot y ellos los chicos de Nuvik me han ayudado un montón a crecer. Hemos podido cerrar un montón de clientes todo con contenido de redes sociales y publicidad. Yo no tenía idea que este mundo era tan importante para crecer.",
    author: "Lucía Gómez",
    profession: "Tarotista",
    location: "Buenos Aires",
  },
  {
    text: "Lo que más me sorprendió fue la velocidad de los resultados. En tres meses triplicamos nuestros ingresos. El método de Nuvik es simple pero efectivo, nada de boludeces.",
    author: "Carlos Mendoza",
    profession: "Asesor Financiero",
    location: "La Plata",
  },
  {
    text: "Tenía miedo de invertir en publicidad digital, pero con la guía de Nuvik entendí exactamente dónde poner la guita. Ahora mis clientes llegan solos. Es increíble.",
    author: "Sofía Rodríguez",
    profession: "Coach de Vida",
    location: "Mendoza",
  },
  {
    text: "El acompañamiento personalizado que nos dieron fue clave. No es solo un curso, es un sistema completo. Recomiendo a todo el mundo que quiera crecer en serio.",
    author: "Juan Pérez",
    profession: "Emprendedor Digital",
    location: "Córdoba",
  },
];

export default function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section className="py-40 bg-background text-foreground px-4 md:px-8">
      <motion.div
        className="container mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Título */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Testimonios de Clientes Reales</h2>
          <p className="text-muted-foreground text-lg">
            Estos son resultados reales de personas como vos que ya trabajaron con nosotros.
          </p>
        </motion.div>

        {/* Grid de Testimonios */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          variants={containerVariants}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-10 border border-border rounded-lg hover:border-foreground/40 transition-all duration-300 hover:shadow-lg"
            >
              {/* Comillas decorativas */}
              <div className="mb-6 text-4xl text-foreground opacity-20">
                "
              </div>

              {/* Texto del testimonial */}
              <p className="text-base leading-relaxed mb-8 text-foreground">
                {testimonial.text}
              </p>

              {/* Autor */}
              <div className="border-t border-border pt-6">
                <p className="font-bold text-foreground text-sm uppercase tracking-wide">
                  {testimonial.author}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {testimonial.profession} • {testimonial.location}
                </p>
              </div>
            </motion.div>
          ))}
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
