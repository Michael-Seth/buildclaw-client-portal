"use client";
import Image from "next/image";
import React from "react";
import { Brandwrap } from "@/assets/svgs/Brandwrap";
import Logo from "@/assets/images/LogoBrandMealsC.png";
import bgDrop from "@/assets/images/Blackpage.png";
import UnAuthorized from "./UnAuthorized";
import { usePathname } from "next/navigation";
import { extractCustomerName } from "@/constants/utils/helpers";
import useMyContext from "@/constants/context/useMyContext";

interface TextContentProps {
  title: string;
  heading?: string;
  subHeading?: string;
  list?: string[];
  imageUrls?: string[];
  active?: boolean;
}

const BrandStoryContent: React.FC<TextContentProps> = ({ title, active }) => {
  const pathName = usePathname();
  const customerName = extractCustomerName(pathName);
  const {customerData} = useMyContext();

  if (!active) {
    return <UnAuthorized />;
  }

  return (
    <section className="bg-gray-50 lg:rounded-xl">
      <div className="container px-2 pt-6 pb-16 mx-auto">
        <h1 className="text-lg md:text-2xl font-medium md:font-semibold text-gray-800 capitalize lg:text-3xl ml-3">
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
        <div className="bg-gray-100">
          <section className="mb-12">
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <h3 className="text-lg md:text-2xl font-medium md:font-semibold text-gray-200 mb-2 bg-gray-800 p-4 rounded-md">
                Brand Story
              </h3>
              <p className="py-3 text-base text-gray-700">
                {customerData?.brandStoryA}
              </p>
              <p className="py-3 text-base text-gray-700">
              {customerData?.brandStoryB}

              </p>
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <h3 className="text-lg md:text-2xl font-medium md:font-semibold  mb-2 bg-gray-800 text-white p-4 rounded-md">
                Vision Statement
              </h3>
              <p className="py-3 text-base text-gray-700">
              {customerData?.visionStatement}

              </p>
              <h3 className="text-lg md:text-2xl font-medium md:font-semibold  mb-2 bg-gray-800 text-white p-4 rounded-md">
                Mission Statement
              </h3>
              <p className="py-3 text-base text-gray-700">
              {customerData?.missionStatement}

              </p>
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <h3 className="text-lg md:text-2xl font-medium md:font-semibold  mb-2 bg-gray-800 text-white p-4 rounded-md">
                User Experience Story
              </h3>
              <ol className="list-disc pl-6 space-y-4 text-gray-700">
                <li>
                  <strong className="mr-2">Discovery Phase: </strong>
                  {customerData?.uxStoryDiscoveryPhase}

                </li>
                <li>
                  <strong className="mr-2">Browsing and Reservation:</strong>                {customerData?.uxStoryBrowsingAndReservation}

                </li>
                <li>
                  <strong className="mr-2">Arrival and Ambiance:</strong>
                  {customerData?.uxStoryArrivalAndAmbiance}
                </li>
                <li>
                  <strong className="mr-2">Dining Experience:</strong>
                  {customerData?.uxStoryDiningExperience}
                </li>
                <li>
                  <strong className="mr-2">Post-Visit Engagement:</strong>
                  {customerData?.uxStoryPostVisitEngagement}
                </li>
                <li>
                  <strong className="mr-2">Continuous Improvement:</strong>
                  {customerData?.uxStoryContinuousImprovement}
                </li>
              </ol>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              How Brandmeals Enhances {customerName}
            </h2>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <p className="text-base text-gray-700 mb-4">
                At Brandmeals, we&apos;re thrilled to collaborate with
                {customerName}
                to elevate their brand through our specialized services. Our
                approach focuses on delivering a comprehensive digital solution
                designed to enhance customer engagement and drive revenue
                growth. Here’s how we plan to achieve this:
              </p>
              <h3 className="text-lg md:text-2xl font-medium md:font-semibold  mb-2 bg-gray-800 text-white p-4 rounded-md">
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
              <h3 className="text-lg md:text-2xl font-medium md:font-semibold  mb-2 mt-6 bg-gray-800 text-white p-4 rounded-md">
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
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <h3 className="text-lg md:text-2xl font-medium md:font-semibold mb-2 bg-gray-800 text-white p-4 rounded-md">
                Current Metrics
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Instagram Followers: {customerData?.currentInstagramFollowers}</li>
                <li>Average Engagement Rate: {customerData?.currentEngagementRate}%</li>
              </ul>
              <h3 className="text-lg md:text-2xl font-medium md:font-semibold mb-2 bg-gray-800 text-white mt-6 p-4 rounded-md">
                Projected Metrics with Brandmeals’ Services
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Increased Followers: {customerData?.projectedInstagramFollowers}</li>
                <li>Improved Engagement Rate: {customerData?.projectedEngagementRate}%</li>
              </ul>
              <h3 className="text-lg md:text-2xl font-medium md:font-semibold mb-2 bg-gray-800 text-white mt-6 p-4 rounded-md">
                Engagement Increase
              </h3>
              <p className="text-base text-gray-700">
                <strong>Current Average Engagement:</strong> 3,874 followers *
                6.25% = 242 interactions per post
              </p>
              <p className="text-base text-gray-700">
                <strong>Projected Engagement:</strong> 8,000 followers * 12.9% =
                1,032 interactions per post
              </p>
              <h3 className="text-lg md:text-2xl font-medium md:font-semibold mb-2 bg-gray-800 text-white mt-6 p-4 rounded-md">
                Potential Reach Increase
              </h3>
              <p className="text-base text-gray-700">
                <strong>Current Average Reach:</strong> 5,811 followers
              </p>
              <p className="text-base text-gray-700">
                <strong>
                  Projected Reach with Improved Engagement and Advanced SEO:
                </strong>
                15,000 followers
              </p>
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <p className="text-base text-gray-700">
                By leveraging Brandmeals’ expertise, {customerData?.businessName} can
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
