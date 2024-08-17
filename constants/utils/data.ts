import { Plan } from "@/components/PricingCard";

  // Example plans data
  export const plans: Plan[] = [
    {
      name: "Economy",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: 600000,
      features: [
        { name: "Professional Website Design and Development", included: true },
        { name: "Online Ordering System", included: true },
        { name: "Online Reservation", included: true },
        { name: "QR Menu", included: true },
        { name: "Basic Search Engine Optimization", included: true },
      ],
    },
    {
      name: "Premium",
      description: "More features and benefits for your growing business.",
      price: 900000,
      features: [
        { name: "Everything in the Economy Package", included: true },
        { name: "QR Menu with Payment Integration", included: true },
        { name: "Email Marketing Campaigns", included: true },
        { name: "Advanced Search Engine Optimization", included: true },
      ],
    },
    {
      name: "Enterprise",
      description: "The complete package for your enterprise-level needs.",
      price: 2350000,
      features: [
        { name: "Everything in the Business Package", included: true },
        { name: "Monthly Sales Analytics Report", included: true },
        { name: "Live Chat support", included: true },
        { name: "Content Management System (CMS)", included: true },
        { name: "Mobile app", included: true },
      ],
    },
  ];

  
