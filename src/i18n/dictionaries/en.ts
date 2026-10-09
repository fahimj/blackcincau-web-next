import type { Facts, FactKey } from "@/content/facts";
import type { ProductSlug } from "@/content/products";

interface ProductCopy {
  name: string;
  shortName: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  selection: string;
}

const en = {
  nav: {
    home: "Home",
    products: "Products",
    about: "About Us",
    faq: "FAQ",
    contact: "Contact",
    menu: "Menu",
    language: "Language",
    breadcrumb: "Breadcrumb",
  },
  cta: {
    quote: "Request a Quote",
    sample: "Request a Sample",
    whatsapp: "Chat on WhatsApp",
    viewSpecs: "View specifications",
    contactUs: "Contact us",
    readMore: "More about us",
    allFaq: "Read all questions",
  },
  common: {
    alsoKnownAs:
      "Black cincau is also known as black grass jelly, xiancao (仙草), liangfencao (凉粉草), chin chow, cincau hitam, janggelan and mesona.",
    onRequest: "On request",
  },
  home: {
    metaTitle: "Black Cincau (Grass Jelly) Raw Material Exporter in Indonesia",
    metaDescription:
      "CV Ambar Sari produces and exports dried black cincau (grass jelly, chin chow, xiancao 仙草, Mesona chinensis) leaves, chopped leaves and stems from Central Java, Indonesia. Moisture below 10%.",
    heroTitle: "Black Cincau (Grass Jelly) Raw Materials",
    heroSubtitle:
      "Dried leaves and stems of Platostoma palustre (Mesona chinensis, xiancao 仙草), produced in Central Java and exported from Indonesia since 2012.",
    stats: [
      { value: "2012", label: "Producing since" },
      { value: "3", label: "Product grades" },
      { value: "< 10%", label: "Moisture content" },
      { value: "China", label: "Export destination since 2012" },
    ],
    aboutEyebrow: "About us",
    aboutTitle: "A producer of black cincau raw materials since 2012",
    aboutBody: [
      "CV Ambar Sari produces and distributes dried black cincau (grass jelly) raw materials under the Black Cincau brand. Since 2012 we have been one of the pioneers of Indonesia's black cincau raw material industry, supplying both domestic and international buyers.",
      "We work directly with experienced cincau farmers in Wonogiri, Central Java. Our dried leaves, chopped leaves and dried stems are used by food, beverage and processed-goods manufacturers who boil and process them into grass jelly.",
    ],
    productsTitle: "Products",
    productsIntro:
      "Three grades of dried black cincau, sorted by the ratio of leaves to stems. All grades have a moisture content below 10%.",
    featuresTitle: "Why buyers work with us",
    features: [
      {
        title: "Experienced supplier",
        body: "Since 2012, our products have been a primary supply for various exporters of black grass jelly raw materials.",
      },
      {
        title: "Proven in export markets",
        body: "Our natural products have been exported to China since 2012, and are produced to consistent specifications so they can be accepted in other international markets too.",
      },
      {
        title: "Farmer partnership",
        body: "We collaborate with local farmers and work in synergy to create a better life together.",
      },
    ],
    processTitle: "From farm to container",
    processIntro:
      "We control each step between the farm and the shipment, so the specification you agree is the one that is loaded.",
    process: [
      {
        title: "Sourcing",
        body: "Black cincau plants are bought directly from partner farmers in Wonogiri, Central Java.",
      },
      {
        title: "Drying",
        body: "The plants are dried at our open-air drying yard until the moisture content is below 10%.",
      },
      {
        title: "Sorting",
        body: "Dried material is sorted by leaf and stem ratio into dried leaves, chopped leaves and dried stems.",
      },
      {
        title: "Packing",
        body: "Each grade is pressed into bales, bagged, marked and stored on pallets in our warehouse.",
      },
      {
        title: "Shipment",
        body: "Bales are loaded for delivery, and export documents are prepared for each shipment.",
      },
    ],
    termsTitle: "Commercial terms",
    termsIntro:
      "The main terms buyers ask about. Prices depend on grade, quantity and destination, and are quoted on request.",
    proofTitle: "Documents and export record",
    documentsTitle: "Documents available on request",
    documents: [
      "Phytosanitary certificate, issued for each shipment",
      "Laboratory test results",
    ],
    destinationsTitle: "Export destinations",
    destinationsNote:
      "Our products have been shipped to the following destinations. Shipments to China have been made through other exporters.",
    destinationsInvite:
      "We also quote for buyers in Singapore and other countries.",
    ctaTitle: "Looking for a black cincau (grass jelly) supplier?",
    ctaBody:
      "Tell us the product, quantity and destination port. We reply with a quotation.",
    ctaCaption:
      "Photo: grass jelly made from black cincau raw material. We supply the dried raw material only, not finished jelly.",
    contactTitle: "Contact Black Cincau",
  },
  products: {
    eyebrow: "Product",
    specsTitle: "Specifications",
    termsTitle: "Packing and commercial terms",
    otherTitle: "Other grades",
    spec: {
      product: "Product",
      botanical: "Botanical name",
      otherNames: "Other names",
      otherNamesValue:
        "Black grass jelly, xiancao (仙草), liangfencao (凉粉草), chin chow, cincau hitam, janggelan, mesona",
      moisture: "Moisture content",
      leaves: "Dried leaves",
      stems: "Dried stems",
      origin: "Origin",
      originValue: "Wonogiri, Central Java, Indonesia",
      use: "Use",
      useValue: "Raw material for grass jelly and grass jelly drinks",
    },
    items: {
      "dried-leaves": {
        name: "Dried Black Cincau Leaves",
        shortName: "Dried leaves",
        summary:
          "Moisture content below 10%, with a composition of 95% dried leaves and 5% dried stems.",
        metaTitle: "Dried Black Cincau (Grass Jelly) Leaves — 95% Leaf",
        metaDescription:
          "Dried black cincau (grass jelly, xiancao 仙草) leaves from Indonesia: 95% leaves, 5% stems, moisture below 10%. Supplied in bulk by CV Ambar Sari. Request a quote.",
        intro:
          "Our dried leaves grade is the leaf-rich grade of black cincau (grass jelly) raw material. It contains 95% dried leaves and 5% dried stems, with a moisture content below 10%.",
        selection:
          "Choose this grade when your process or recipe calls for the highest share of leaf.",
      },
      "chopped-leaves": {
        name: "Chopped Black Cincau Leaves",
        shortName: "Chopped leaves",
        summary:
          "Moisture content below 10%, with a composition of 50% dried leaves and 50% dried stems.",
        metaTitle: "Chopped Black Cincau (Grass Jelly) Leaves — 50/50 Mix",
        metaDescription:
          "Chopped black cincau (grass jelly, xiancao 仙草) from Indonesia: 50% leaves, 50% stems, moisture below 10%. Supplied in bulk by CV Ambar Sari. Request a quote.",
        intro:
          "Our chopped leaves grade is an even mix of black cincau (grass jelly) leaves and stems, chopped for easier handling. It contains 50% dried leaves and 50% dried stems, with a moisture content below 10%.",
        selection:
          "Choose this grade when you want a balanced mix of leaf and stem in a single product.",
      },
      "dried-stems": {
        name: "Dried Black Cincau Stems",
        shortName: "Dried stems",
        summary:
          "Moisture content below 10%, with a composition of 5% dried leaves and 95% dried stems.",
        metaTitle: "Dried Black Cincau (Grass Jelly) Stems — 95% Stem",
        metaDescription:
          "Dried black cincau (grass jelly, xiancao 仙草) stems from Indonesia: 95% stems, 5% leaves, moisture below 10%. Supplied in bulk by CV Ambar Sari. Request a quote.",
        intro:
          "Our dried stems grade is the stem-rich grade of black cincau (grass jelly) raw material. It contains 95% dried stems and 5% dried leaves, with a moisture content below 10%.",
        selection:
          "Choose this grade when your process or recipe is built around stem material.",
      },
    } satisfies Record<ProductSlug, ProductCopy>,
  },
  facts: {
    labels: {
      moq: "Minimum order quantity",
      packaging: "Packaging",
      containerLoad: "Container loading",
      capacity: "Supply capacity",
      leadTime: "Lead time",
      incoterms: "Incoterms",
      port: "Loading port",
      payment: "Payment terms",
      hsCode: "HS code",
      shelfLife: "Shelf life and storage",
      samplePolicy: "Samples",
    } satisfies Record<FactKey, string>,
    price: "Price",
  },
  about: {
    metaTitle: "About CV Ambar Sari — Black Cincau Producer Since 2012",
    metaDescription:
      "CV Ambar Sari, trading as Black Cincau, has produced dried black cincau (grass jelly) raw materials in Wonogiri, Central Java, Indonesia since 2012, working directly with local farmers.",
    title: "About CV Ambar Sari",
    lead: "CV Ambar Sari is an Indonesian producer and exporter of black cincau (grass jelly) raw materials. Black Cincau is our export brand.",
    storyTitle: "Our story",
    story: [
      "Since our establishment in 2012, we have been one of the pioneers in Indonesia's black cincau raw material industry, committed to meeting both domestic and international demand with quality-assured products.",
      "For many years our products have been a primary supply for other exporters of black grass jelly raw materials. Today we also sell directly to manufacturers and trading companies.",
      "We offer three grades of dried black cincau raw material: dried leaves, chopped leaves and dried stems. They are used in the food, beverage and processed-goods industries.",
    ],
    farmersTitle: "Working with farmers",
    farmers:
      "By using local natural resources and working closely with experienced cincau farmers, we provide natural black cincau raw materials that reflect Indonesia's herbal traditions. We collaborate with farmers and work in synergy to create a better life together.",
    facilityTitle: "Our facility",
    gallery: [
      "Dried black cincau being handled at our open-air drying yard",
      "Baled black cincau on pallets in our warehouse",
      "Our warehouse in Kenteng, Purwantoro, Wonogiri",
    ],
    detailsTitle: "Company details",
    details: {
      legalName: "Legal entity",
      brand: "Brand",
      founded: "Established",
      business: "Business",
      businessValue:
        "Production and export of dried black cincau (grass jelly) raw materials",
      address: "Address",
      products: "Products",
    },
  },
  faq: {
    metaTitle: "Black Cincau (Grass Jelly) Raw Material — Buyer FAQ",
    metaDescription:
      "Answers for importers of black cincau (grass jelly, xiancao 仙草) raw material: product grades, minimum order, packaging, samples, payment, shipping and documents.",
    title: "Frequently asked questions",
    lead: "Answers to the questions importers ask us most often. If yours is not here, send us a message.",
    items: [
      {
        q: "What is black cincau?",
        a: () =>
          "Black cincau is the Indonesian name for black grass jelly, made from the plant Platostoma palustre (also called Mesona chinensis or Mesona palustris). In Chinese markets it is known as xiancao (仙草) or liangfencao (凉粉草), in Singapore and Malaysia as chin chow or cincau, and in Javanese as janggelan. The dried plant is boiled and processed to make grass jelly.",
      },
      {
        q: "Do you sell finished grass jelly?",
        a: () =>
          "No. We supply the dried raw material only: dried leaves, chopped leaves and dried stems. Our buyers process it into grass jelly and grass jelly drinks.",
      },
      {
        q: "What is the difference between your three products?",
        a: () =>
          "The difference is the ratio of leaves to stems. Dried leaves contain 95% leaves and 5% stems. Chopped leaves contain 50% leaves and 50% stems. Dried stems contain 5% leaves and 95% stems. All three have a moisture content below 10%.",
      },
      {
        q: "What is your minimum order quantity?",
        a: (f: Facts) => `Our minimum order quantity is ${f.moq}.`,
      },
      {
        q: "How is the product packed?",
        a: (f: Facts) => `${f.packaging}. ${f.containerLoad}.`,
      },
      {
        q: "Can I get a sample before ordering?",
        a: (f: Facts) =>
          `Yes. We send ${f.samplePolicy}. Use the "Request a Sample" button to tell us which product you need.`,
      },
      {
        q: "Which shipping terms and port do you use?",
        a: (f: Facts) =>
          `We quote ${f.incoterms}. The loading port is ${f.port}.`,
      },
      {
        q: "Do you ship to countries other than China?",
        a: () =>
          "Yes. Our products have been exported to China since 2012, and have also been shipped to Malaysia and Thailand. We quote for other destinations too, including Singapore. Tell us your destination country and port, and we will confirm the shipping terms and the documents we can provide.",
      },
      {
        q: "What are your payment terms?",
        a: (f: Facts) => `Our payment terms are ${f.payment}.`,
      },
      {
        q: "How long does an order take?",
        a: (f: Facts) =>
          `The lead time is ${f.leadTime}. Our supply capacity is ${f.capacity}.`,
      },
      {
        q: "Which documents can you provide?",
        a: () =>
          "On request we provide a phytosanitary certificate for each shipment, and laboratory test results.",
      },
      {
        q: "Do you have a halal certificate?",
        a: () =>
          "Not yet. We do not hold a halal certificate at this time. Our products are dried leaves and stems of the black cincau plant. On request we provide a phytosanitary certificate for each shipment and laboratory test results.",
      },
      {
        q: "How long can the product be stored?",
        a: (f: Facts) => `${f.shelfLife}.`,
      },
      {
        q: "Where are you located?",
        a: () =>
          "Our warehouse and drying yard are in Kenteng, Purwantoro, Wonogiri Regency, Central Java, Indonesia.",
      },
    ],
  },
  contact: {
    metaTitle: "Request a Quote or Sample — Black Cincau",
    metaDescription:
      "Request a quotation or a sample of dried black cincau (grass jelly) raw material from CV Ambar Sari, Indonesia. Contact us by WhatsApp or email.",
    title: "Request a quote or a sample",
    lead: "Fill in the form and send it by WhatsApp or email. You can also contact us directly.",
    directTitle: "Contact details",
    address: "Address",
    phone: "WhatsApp / phone",
    email: "Email",
    mapTitle: "Map showing the location of Black Cincau in Kenteng, Wonogiri",
  },
  form: {
    type: "I would like to",
    typeQuote: "Request a quote",
    typeSample: "Request a sample",
    product: "Product",
    productAll: "All products",
    quantity: "Quantity",
    quantityHint: "For example: 18 metric tons, or one 40 ft container",
    destination: "Destination country and port",
    company: "Company name",
    name: "Your name",
    contact: "Your email or WhatsApp number",
    message: "Message (optional)",
    sendWhatsapp: "Send by WhatsApp",
    sendEmail: "Send by email",
    note: "Sending opens WhatsApp or your email app with the message ready. Nothing is sent until you confirm there.",
  },
  footer: {
    tagline:
      "Producer and exporter of black cincau (grass jelly) raw materials from Central Java, Indonesia.",
    products: "Products",
    company: "Company",
    contact: "Contact",
    rights: "All rights reserved.",
  },
  chat: {
    open: "Open chat",
    close: "Close",
    greeting: "Hello 👋",
    prompt: "Can we help you?",
  },
  notFound: {
    title: "Page not found",
    body: "The page you are looking for does not exist or has moved.",
    home: "Back to home",
  },
};

export type Dictionary = typeof en;
export default en;
