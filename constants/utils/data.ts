import { Plan } from "@/components/PricingCard";

// Example plans data
export const plans: Plan[] = [
  {
    name: "Economy",
    description: "Ideal for starting your digital presence and automating orders with essential features.",
    price: 600000,
    features: [
      { name: "Professional Website Design and Development", included: true },
      { name: "Online Ordering System", included: true },
      { name: "Online Reservation", included: true },
      { name: "Basic Search Engine Optimization", included: true },
    ],
  },
  {
    name: "Premium",
    description: "More features and benefits for your growing business.",
    price: 900000,
    features: [
      { name: "Everything in the Economy Package", included: true },
      { name: "QR Menu", included: true },
      { name: "Integration with Food Delivery Companies", included: true },
      { name: "Weekly Email Marketing Campaigns", included: true },
      { name: "Advanced Search Engine Optimization", included: true },
    ],
  },
  {
    name: "Enterprise",
    description: "The complete package for your enterprise-level needs.",
    price: 1600000,
    features: [
      { name: "Everything in the Business Package", included: true },
      { name: "Loyalty System", included: true },
      { name: "Monthly Sales Analytics Report", included: true },
      { name: "Live Chat support", included: true },
      { name: "QR Menu with Payment Integration", included: true },
      { name: "Content Management System (CMS)", included: true },
    ],
  },
];

export const contractData = [
  {
    id: "1",
    serviceName: "Professional Website Design and Development",
    price: 400000,
    status:
      "Comprehensive website design, development and basic SEO optimization tailored to your brand’s identity and business goals.",
  },
  {
    id: "2",
    serviceName: "QR Menu (Without Payment Integration) ",
    price: 50000,
    status:
      "A digital menu accessible via QR codes, offering a contactless and modern dining experience.",
  },
  {
    id: "3",
    serviceName: "Weekly Email Marketing Campaigns",
    price: 50000,
    status:
      "Targeted email marketing campaigns designed to engage customers and increase loyalty.",
  },
  {
    id: "4",
    serviceName: "Monthly Sales Analytics Report",
    price: 50000,
    status:
      "Detailed monthly reports with insights and recommendations to drive business improvement",
  },
  {
    id: "5",
    serviceName: "Integration With Food Delivery Company",
    price: 50000,
    status: "Integration with food delivery companies (Glovo, Chowdeck).",
  },
  {
    id: "6",
    serviceName: "Online Reservation",
    price: 100000,
    status:
      "Allow customers to book tables or services online, reducing workload and providing a seamless booking experience.",
  },
  {
    id: "7",
    serviceName: "Customer Live Chat",
    price: 100000,
    status:
      "Provide instant assistance with a live chat feature, enhancing customer engagement and satisfaction.",
  },
  {
    id: "8",
    serviceName: "Online Ordering System",
    price: 150000,
    status:
      "Implement a robust online ordering platform on your website, enabling easy browsing and ordering for customers.",
  },

  {
    id: "9",
    serviceName: "QR Menu with Payment Integration",
    price: 150000,
    status:
      "Secure payment options integrated with the QR menu for a seamless ordering and payment process. ",
  },
  {
    id: "10",
    serviceName: "Advanced Search Engine Optimization (SEO) ",
    price: 150000,
    status:
      "Improve search engine rankings with advanced SEO strategies, driving more organic traffic to your site.",
  },
  {
    id: "11",
    serviceName: "Staff Management Tools",
    price: 150000,
    status:
      "Efficiently manage staff schedules, tasks, and communications to streamline operations.",
  },
  {
    id: "12",
    serviceName: "Custom Content Management System (CMS)",
    price: 200000,
    status:
      "Manage your website content easily with a custom CMS tailored to your business needs.",
  },
  {
    id: "13",
    serviceName: "Loyalty Program with Member Sign-Up",
    price: 200000,
    status:
      "Boost repeat business with a loyalty program, featuring easy customer enrollment and rewards tracking.",
  },
  {
    id: "14",
    serviceName: "Custom AI Chatbots",
    price: 0,
    status: "Unavailable",
  },
  {
    id: "15",
    serviceName: "Progressive Web Apps (PWA) (Coming Soon)",
    price: 0,
    status: "Unavailable",
  },
  {
    id: "16",
    serviceName: "Geo-locator Services",
    price: 0,
    status: "Unavailable",
  },
];
