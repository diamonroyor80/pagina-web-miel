export const nav = [
  { label: "Inicio", href: "#inicio" },
  { label: "Soluciones", href: "#soluciones" },
  { label: "Por qué MiEL", href: "#por-que-miel" },
  { label: "Proceso", href: "#proceso" },
  { label: "Mielina", href: "#mielina" },
  { label: "Contacto", href: "#contacto" },
];

export const services = [
  {
    id: "solar",
    title: "Energía solar",
    tagline: "Paneles que convierten sol en ahorro",
    description:
      "Diseñamos e instalamos sistemas fotovoltaicos a la medida de tu hogar, negocio o empresa. Analizamos tu consumo real para dimensionar un sistema que reduzca tu factura de energía sin sobredimensionar la inversión.",
    points: [
      "Diagnóstico de consumo y diseño a medida",
      "Instalación residencial, comercial e industrial",
      "Interconexión con la red y medición bidireccional",
      "Garantía extendida en paneles e inversores",
    ],
  },
  {
    id: "baterias",
    title: "Baterías de respaldo",
    tagline: "Que un apagón nunca te tome por sorpresa",
    description:
      "Sistemas de almacenamiento que guardan la energía que generas para usarla cuando más la necesitas: en la noche, en un corte del servicio o en zonas donde la red no es confiable.",
    points: [
      "Respaldo automático ante cortes de energía",
      "Sistemas híbridos solar + batería",
      "Soluciones off-grid para zonas no interconectadas",
      "Monitoreo remoto del estado de carga",
    ],
  },
];

export const benefits = [
  {
    title: "Ahorro real",
    description:
      "Diseños dimensionados con tu consumo real, no con promesas genéricas: la meta es que cada panel se pague solo.",
  },
  {
    title: "Respaldo cuando lo necesitas",
    description:
      "Con baterías MiEL, tu casa o negocio sigue funcionando aunque la red falle.",
  },
  {
    title: "Instalación certificada",
    description:
      "Equipos técnicos propios, materiales de calidad y cumplimiento de la normativa eléctrica colombiana (RETIE).",
  },
  {
    title: "Monitoreo inteligente",
    description:
      "Sigue la producción de tu sistema y el estado de tus baterías desde tu celular, todos los días del año.",
  },
  {
    title: "Acompañamiento humano",
    description:
      "Mielina y todo el equipo MiEL te guían desde la primera visita hasta años después de la instalación.",
  },
  {
    title: "Energía que se siente distinta",
    description:
      "Creemos que la transición energética también puede ser cercana, clara y hasta un poco dulce.",
  },
];

export const process = [
  {
    step: "01",
    title: "Diagnóstico",
    description:
      "Visitamos tu casa, negocio o planta y revisamos tus facturas para entender tu consumo real.",
  },
  {
    step: "02",
    title: "Diseño",
    description:
      "Proponemos el sistema solar y/o de baterías que mejor se ajusta a tu presupuesto y tus metas de ahorro.",
  },
  {
    step: "03",
    title: "Instalación",
    description:
      "Nuestro equipo instala y certifica el sistema, cumpliendo la normativa eléctrica vigente en Colombia.",
  },
  {
    step: "04",
    title: "Monitoreo",
    description:
      "Activamos el monitoreo remoto y te acompañamos en el tiempo para que tu inversión siga rindiendo.",
  },
];

export const marqueeItems = [
  "ENERGÍA SOLAR",
  "BATERÍAS DE RESPALDO",
  "AHORRO REAL",
  "MONITOREO INTELIGENTE",
  "ENERGÍA QUE ENDULZA TU FUTURO",
  "HECHO EN COLOMBIA",
];

export const mielinaMessages: { section: string; message: string }[] = [
  { section: "inicio", message: "¡Hola! Soy Mielina. Te acompaño en tu camino hacia una energía más dulce." },
  { section: "soluciones", message: "Solar, baterías o los dos: aquí armamos la combinación perfecta para ti." },
  { section: "por-que-miel", message: "No prometemos magia, prometemos energía bien dimensionada y honesta." },
  { section: "proceso", message: "Diagnóstico, diseño, instalación y monitoreo: yo te guío en cada paso." },
  { section: "mielina", message: "Mis alas de panel solar cargan mis antenas de batería. ¡Energía 100% MiEL!" },
  { section: "contacto", message: "¿Listo para tu proyecto? Cuéntame de tu consumo y te escribimos pronto." },
];
