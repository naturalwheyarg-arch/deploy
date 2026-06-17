import { motion } from "framer-motion";

/**
 * Pricing Section - Nuvik Premium
 * 
 * Diseño:
 * - 3 ofertas de escala digital
 * - La oferta "Elite" destaca sutilmente
 * - Grid de 3 columnas en desktop, 1 en mobile
 * - Tarjetas minimalistas con jerarquía clara
 * - CTA directo a WhatsApp en cada tarjeta
 */

interface PricingPlan {
  name: string;
  subtitle: string;
  price: string;
  features: string[];
  cta: string;
  featured?: boolean;
}

const plans: PricingPlan[] = [
  {
    name: "Sistema de Escala Digital",
    subtitle: "Implementación Personal",
    price: "$59.000",
    features: [
      "Método completo Nuvik",
      "Sistema de contenido",
      "Sistema de anuncios",
      "Sistema de captación",
      "Sistema de seguimiento",
    ],
    cta: "Comenzar Ahora",
  },
  {
    name: "Sistema de Escala Digital Acelerado",
    subtitle: "Implementación Acompañada",
    price: "$220.000",
    features: [
      "Todo lo anterior +",
      "Auditoría inicial",
      "Acompañamiento durante un mes",
      "Corrección de campañas publicitarias",
      "Corrección de contenido",
      "Soporte privado",
    ],
    cta: "Acelerar Crecimiento",
    featured: true,
  },
  {
    name: "Sistema Escala Digital Elite",
    subtitle: "Acceso Directo a los Fundadores",
    price: "$749.000",
    features: [
      "Todo lo anterior +",
      "Chat privado",
      "Llamadas 1 a 1",
      "Revisión personalizada",
      "Seguimiento semanal",
      "Plan de crecimiento",
      "Acceso prioritario en todo",
    ],
    cta: "Acceso Elite",
  },
];

export default function PricingSection() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };

  const whatsappNumber = "+543435447945";

  const handleWhatsapp = (planName: string) => {
    const message = `Hola Nuvik! Quiero información sobre el plan: ${planName}`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
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
        <motion.div variants={itemVariants} className="text-center mb-24">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Elige tu Plan de Escala</h2>
          <p className="text-muted-foreground text-lg">
            Tres opciones diseñadas para diferentes etapas de tu crecimiento.
          </p>
        </motion.div>

        {/* Grid de Planes */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6"
          variants={containerVariants}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative p-10 rounded-lg transition-all duration-300 ${
                plan.featured
                  ? "border-2 border-foreground bg-secondary/40 shadow-xl"
                  : "border border-border hover:border-foreground/50 hover:shadow-lg"
              }`}
            >
              {/* Badge para plan destacado */}
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-foreground text-background px-4 py-1 text-xs font-semibold uppercase tracking-wider rounded-full">
                    Más Popular
                  </span>
                </div>
              )}

              {/* Nombre del Plan */}
              <h3 className="text-lg font-bold mb-2 uppercase tracking-wide">{plan.name}</h3>
              <p className="text-xs text-muted-foreground mb-8 uppercase tracking-widest">{plan.subtitle}</p>

              {/* Precio */}
              <div className="mb-10 pb-8 border-b border-border/50">
                <div className="text-5xl font-bold tracking-tight">{plan.price}</div>
                <p className="text-xs text-muted-foreground mt-3 uppercase tracking-widest">Pago único</p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start text-sm text-foreground"
                  >
                    <span className="mr-3 text-foreground font-bold">•</span>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={() => handleWhatsapp(plan.name)}
                className={`w-full py-3 px-4 border border-foreground text-foreground font-medium rounded transition-all duration-200 ${
                  plan.featured
                    ? "bg-foreground text-background hover:bg-foreground/90"
                    : "bg-background hover:bg-foreground hover:text-background"
                }`}
              >
                {plan.cta}
              </button>
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
