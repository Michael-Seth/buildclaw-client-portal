import Image from "next/image";
import React from "react";
import { Brandwrap } from "@/assets/svgs/Brandwrap";
import Logo from "@/assets/images/LogoBrandMealsC.png";
import bgDrop from "@/assets/images/Blackpage.png";
import UnAuthorized from "./UnAuthorized";

interface TextContentProps {
  title: string;
  heading?: string;
  subHeading?: string;
  list?: string[];
  imageUrls?: string[];
  active?: boolean;
}

const BrandStoryContent: React.FC<TextContentProps> = ({ title, active }) => {
  if (!active) {
    return <UnAuthorized />;
  }

  return (
    <section className="bg-gray-50 lg:rounded-xl">
      <div className="container px-2 pt-6 pb-16 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl ml-3">
          {title}
        </h1>
        <div className="mt-8 mb-14 mx-3">
          <header
            className=""
            style={{
              backgroundImage: `url(${bgDrop.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "200px",
              borderRadius: "13px", // Adjust as needed
            }}
          >
            <div className="relative">
              <Brandwrap className="absolute inset-0 h-64 rounded-[13px]" />
              <div
                className="relative z-10 mx-auto"
                style={{ top: "45px", left: "30px" }}
              >
                <Image src={Logo} alt="Logo" width={150} height={200} />
              </div>
            </div>
          </header>
        </div>
        <div className="bg-gray-100 p-6">
          <section className="mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 bg-gray-800 text-white p-4 rounded-md">
                Brand Story
              </h3>
              <p className="py-3 text-base text-gray-700">
                At Evro Lifestyle, dining is an immersive experience where
                sophistication meets comfort. Located in the vibrant heart of
                Lagos, Evro Lifestyle isn’t just a place to eat—it’s a
                destination where every visit feels special. With a dedication
                to excellence, we offer a refined ambiance, delectable cuisine,
                and a space that adapts effortlessly to both intimate dinners
                and lively gatherings.
              </p>
              <p className="py-3 text-base text-gray-700">
                Our story begins with a commitment to craft. Every dish on our
                menu is a testament to the art of fine dining, meticulously
                prepared with fresh ingredients to delight the palate. The
                lounge, designed with a blend of modern elegance and classic
                charm, provides the perfect backdrop for unwinding and
                socializing.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Vision and Mission Statements
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 bg-gray-800 text-white p-4 rounded-md">
                Vision Statement
              </h3>
              <p className="py-3 text-base text-gray-700">
                “To be the premier destination for luxurious dining and vibrant
                nightlife, where every detail is crafted to perfection and every
                guest feels celebrated.”
              </p>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 bg-gray-800 text-white p-4 rounded-md">
                Mission Statement
              </h3>
              <p className="py-3 text-base text-gray-700">
                “Evro Lifestyle is committed to delivering exceptional culinary
                and social experiences that captivate the senses and create
                lasting memories. We aim to provide an inviting atmosphere,
                innovative cuisine, and superior service that exceeds
                expectations.”
              </p>
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 bg-gray-800 text-white p-4 rounded-md">
                User Experience Story
              </h3>
              <ol className="list-disc pl-6 space-y-4 text-gray-700">
                <li>
                  <strong className="text-gray-900">Discovery Phase:</strong>{" "}
                  Potential guests encounter Evro Lifestyle through a compelling
                  Instagram presence or glowing reviews online. The website
                  serves as an elegant digital gateway, showcasing high-quality
                  visuals of the restaurant's chic interiors and gourmet
                  offerings. Users are immediately engaged by the sophisticated
                  design and enticing content.
                </li>
                <li>
                  <strong className="text-gray-900">
                    Browsing and Reservation:
                  </strong>{" "}
                  The website’s user-friendly design makes navigation
                  effortless. Visitors can explore the menu, view detailed
                  descriptions of dishes, and make reservations with ease. The
                  integrated booking system is intuitive, allowing users to
                  select dates and times seamlessly. Special promotions and
                  upcoming events are highlighted, inviting further exploration.
                </li>
                <li>
                  <strong className="text-gray-900">
                    Arrival and Ambiance:
                  </strong>{" "}
                  Guests are welcomed into a warm, stylish environment where the
                  digital promise is fulfilled. The ambiance and service reflect
                  the high standards set by the online experience, ensuring a
                  consistent and memorable visit.
                </li>
                <li>
                  <strong className="text-gray-900">Dining Experience:</strong>{" "}
                  The menu is presented with clarity and visual appeal, and the
                  service is attentive and personalized. Digital feedback
                  options enable guests to share their experiences, contributing
                  to continuous improvement.
                </li>
                <li>
                  <strong className="text-gray-900">
                    Post-Visit Engagement:
                  </strong>{" "}
                  Post-visit communication includes personalized thank you
                  emails and invitations to share feedback on social media.
                  Guests are encouraged to stay connected through updates on new
                  offerings, events, and exclusive promotions. (Email marketing
                  campaign service)
                </li>
                <li>
                  <strong className="text-gray-900">
                    Continuous Improvement:
                  </strong>{" "}
                  Customer feedback is actively reviewed and used to enhance the
                  dining experience. The commitment to evolution ensures that
                  every visit builds on the last, maintaining a high level of
                  satisfaction and engagement.
                </li>
              </ol>
            </div>
          </section>

          

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              How Brandmeals Enhances Evro Lifestyle
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-base text-gray-700 mb-4">
                At Brandmeals, we're thrilled to collaborate with Evro Lifestyle
                to elevate their brand through our specialized services. Our
                approach focuses on delivering a comprehensive digital solution
                designed to enhance customer engagement and drive revenue
                growth. Here’s how we plan to achieve this:
              </p>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 bg-gray-800 text-white p-4 rounded-md">
                Website Design and Development
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  Online Ordering and Reservations: Streamlined systems to
                  facilitate easy customer interactions and efficient management
                  of orders and bookings.
                </li>
                <li>
                  Integration with Food Delivery Services: Seamless connections
                  with platforms like Chowdeck to expand your reach and enhance
                  convenience for your customers. (Optional)
                </li>
                <li>
                  Additional SEO Services: Strategic enhancements to improve
                  search engine rankings and attract more diners. (Optional)
                </li>
              </ul>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 mt-6 bg-gray-800 text-white p-4 rounded-md">
                Financial Projections
              </h3>
              <div className="text-gray-700 mb-4">
                <h4 className="text-xl font-semibold mb-2">Assumptions:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Average Order Value: ₦10,000</li>
                  <li>Average Reservation Spend: ₦20,000</li>
                  <li>Average Monthly Reach: 1,000 potential customers</li>
                </ul>
                <h4 className="text-xl font-semibold mt-6 mb-2">
                  Revenue Projections:
                </h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Online Orders:</strong>
                  </li>
                  <ul className="list-inside list-disc pl-6 space-y-1">
                    <li>Estimated Conversion Rate: 10%</li>
                    <li>Monthly Orders: 1,000 reach * 10% = 100 orders</li>
                    <li>Average Orders per Day: 4 orders</li>
                    <li>Monthly Revenue: 100 orders * ₦10,000 = ₦1,000,000</li>
                  </ul>
                  <li>
                    <strong>Reservations:</strong>
                  </li>
                  <ul className="list-inside list-disc pl-6 space-y-1">
                    <li>Estimated Conversion Rate: 3%</li>
                    <li>
                      Monthly Reservations: 1,000 reach * 3% = 30 reservations
                    </li>
                    <li>
                      Monthly Revenue: 30 reservations * ₦20,000 = ₦600,000
                    </li>
                  </ul>
                  <li>
                    <strong>Total Monthly Revenue:</strong> ₦1,600,000
                  </li>
                  <li>
                    <strong>Total Revenue for 6 Months:</strong> ₦1,600,000 * 6
                    = ₦9,600,000
                  </li>
                  <li>
                    <strong>Total Revenue for 12 Months:</strong> ₦1,600,000 *
                    12 = ₦19,200,000
                  </li>
                </ul>
                <p className="text-base text-gray-700 mt-4">
                  <strong>Maximum Cost of Services:</strong> ₦1,500,000
                </p>
                <p className="text-base text-gray-700">
                  These projections exclude revenue from walk-in customers and
                  transactions outside the online system.
                </p>
              </div>
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Social Media Presence Projection
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2 bg-gray-800 text-white p-4 rounded-md">
                Current Metrics
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Instagram Followers: 3,898</li>
                <li>Average Engagement Rate: 3%</li>
              </ul>
              <h3 className="text-2xl font-semibold mb-2 bg-gray-800 text-white mt-6 p-4 rounded-md">
                Projected Metrics with Brandmeals’ Services
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Increased Followers: 5,000</li>
                <li>Improved Engagement Rate: 5%</li>
              </ul>
              <h3 className="text-2xl font-semibold mb-2 bg-gray-800 text-white mt-6 p-4 rounded-md">
                Engagement Increase
              </h3>
              <p className="text-base text-gray-700">
                <strong>Current Average Engagement:</strong> 3,898 followers *
                3% = 117 interactions per post
              </p>
              <p className="text-base text-gray-700">
                <strong>Projected Engagement:</strong> 5,000 followers * 5% =
                250 interactions per post
              </p>
              <h3 className="text-2xl font-semibold mb-2 bg-gray-800 text-white mt-6 p-4 rounded-md">
                Potential Reach Increase
              </h3>
              <p className="text-base text-gray-700">
                <strong>Current Average Reach:</strong> 3,898 followers
              </p>
              <p className="text-base text-gray-700">
                <strong>
                  Projected Reach with Improved Engagement and Advanced SEO:
                </strong>{" "}
                10,000 followers
              </p>
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-base text-gray-700">
                By leveraging Brandmeals’ expertise, Evro Lifestyle can
                significantly enhance its digital presence, attract more
                customers, and achieve substantial revenue growth, all while
                building a stronger connection with her audience.
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default BrandStoryContent;
