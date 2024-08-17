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

const BrandStoryContent: React.FC<TextContentProps> = ({
  title,
  active,
}) => {
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
        <div className="mt-6 lg:mt-0 lg:mx-6">
          <h3 className="block bg-gray-800 mt-4 text-2xl font-semibold text-white   rounded-md pl-4">
          Brand Story
          </h3>
          <p className="mt-3 text-sm text-gray-500 md:text-sm">
          At Evro Lifestyle, dining is an immersive experience where sophistication meets comfort. Located in the vibrant heart of Lagos, Evro Lifestyle isn’t just a place to eat—it’s a destination where every visit feels special. With a dedication to excellence, we offer a refined ambiance, delectable cuisine, and a space that adapts effortlessly to both intimate dinners and lively gatherings.
          </p>
          <p className="mt-3 text-sm text-gray-500 md:text-sm">
          Our story begins with a commitment to craft. Every dish on our menu is a testament to the art of fine dining, meticulously prepared with fresh ingredients to delight the palate. The lounge, designed with a blend of modern elegance and classic charm, provides the perfect backdrop for unwinding and socializing.
          </p>
        </div>
        <div className="mt-6 lg:mt-0 lg:mx-6">
          <h3 className="block bg-gray-800 mt-4 text-2xl font-semibold text-white   rounded-md pl-4">
          Vision Statement
          </h3>
          <p className="mt-3 text-sm text-gray-500 md:text-sm">“To be the premier destination for luxurious dining and vibrant nightlife, where every detail is crafted to perfection and every guest feels celebrated.”
          </p>
        </div>
        <div className="mt-6 lg:mt-0 lg:mx-6">
          <h3 className="block bg-gray-800 mt-4 text-2xl font-semibold text-white   rounded-md pl-4">
          Vision Statement
          </h3>
          <p className="mt-3 text-sm text-gray-500 md:text-sm">“To be the premier destination for luxurious dining and vibrant nightlife, where every detail is crafted to perfection and every guest feels celebrated.”
          </p>
        </div>
        <div className="mt-6 lg:mt-0 lg:mx-6">
          <h3 className="font-semibold mb-2 mt-6 text-2xl bg-gray-800   text-white  rounded-md pl-4">Scope of Work</h3>
          <p className="text-xl mt-5 mb-3 font-medium text-gray-900">
            1. Deliverables
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Design and development of all necessary web pages</li>
            <li>
              Implementation of [ package name] features and Implementation of [
              functionalities]
            </li>
            <li>Responsive design for desktop, tablet, and mobile devices.</li>
          </ul>
          <p className="text-xl mt-5 mb-3 font-medium text-gray-900">
            2. Timeline
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong> Project Start Date:</strong> Immediately after payment
            </li>
            <li>
              <strong> Initial Design Presentation:</strong> 2 weeks
            </li>
            <li>
              <strong> Design review and corrections (if any):</strong> 1 week
            </li>
            <li>
              <strong> Development timeframe:</strong> 4 weeks
            </li>
            <li>
              <strong> Testing and debugging:</strong> 1 week
            </li>
            <li>
              <strong> Website / Webapp presentation:</strong> 1 week
            </li>
            <li>
              <strong> Deployment to Live:</strong> 1 week
            </li>
          </ul>
          <p className="py-3">
            <strong> Total Timeline:</strong> 9 weeks, plus 1 extra week for
            testing and deployment.
          </p>
          <p className="text-xl mt-5 mb-3 font-medium text-gray-900">
            3. Revisions
          </p>
          <p className="py-3 text-base">
            You are entitled to 3 rounds of revisions. Additional revisions
            might be billed depending on the complexity.
          </p>
          <h3 className="font-semibold mb-2 mt-6 text-2xl  bg-gray-800   text-white  rounded-md pl-4">
              Package Selected
            </h3>
            <div className="divide-y mb-8 mt-4 divide-gray-400 w-full sm:w-1/2 rounded border border-gray-200 shadow-sm">
              <div className="p-6 sm:px-8">
                <h2 className="text-lg font-medium text-gray-900">
                  Economy
                  <span className="sr-only">Plan</span>
                </h2>

                <p className="mt-2 sm:mt-4">
                  <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                    600,000
                  </strong>
                </p>
                <div className="mt-4 block rounded border border-gray-400 bg-gray-400 px-12 py-3 text-center text-sm font-medium text-white sm:mt-6">
                  Selected
                </div>
              </div>

              <div className="p-6 sm:px-8">
                <p className="text-lg font-medium text-gray-900 sm:text-xl">
                  What's included:
                </p>

                <ul className="mt-2 space-y-2 sm:mt-4">
                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-indigo-700"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-gray-700"> 10 users </span>
                  </li>

                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-indigo-700"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-gray-700"> 2GB of storage </span>
                  </li>

                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-indigo-700"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-gray-700"> Email support </span>
                  </li>

                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-red-700"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>

                    <span className="text-gray-700">Help center access</span>
                  </li>

                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-red-700"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>

                    <span className="text-gray-700"> Phone support </span>
                  </li>

                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-red-700"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>

                    <span className="text-gray-700">Community access</span>
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="font-semibold mb-2 mt-6 text-2xl  bg-gray-800   text-white  rounded-md pl-4">Refund Policy</h3>
            <p className="text-xl mt-5 mb-3 font-medium text-gray-900">
              1. Initial Stage
            </p>
            <p className="py-3 text-base">
              If the Client requests a refund or cancels the Project at the
              beginning stage without any major work done, the Client is liable
              to a 95% refund of whatever has been paid.
            </p>
            <p className="text-xl mt-5 mb-3 font-medium text-gray-900">
              2. Post-Design Approval
            </p>
            <p className="py-3 text-base">
              If the Client decides to cancel or terminate the Project after the
              design has been submitted for approval, the Client is liable to a
              50% refund of whatever has been paid.
            </p>
            <p className="text-xl mt-5 mb-3 font-medium text-gray-900">
              3. Post-Development Phase
            </p>
            <p className="py-3 text-base">
              If the Project has reached Phase 2 (development phase) and has
              been submitted to the Client for review and testing, the Client
              must provide proof of breach of trust or agreement before
              requesting a refund. If the breach is valid, the Client can
              receive a 15% refund of whatever has been paid.
            </p>
            <p className="text-xl mt-5 mb-3 font-medium text-gray-900">
              4. Mediation
            </p>
            <p className="py-3 text-base">
              Both parties agree to attempt to resolve disputes through
              mediation before pursuing legal action.
            </p>
            <h3 className="font-semibold mb-2 mt-6 text-2xl  bg-gray-800   text-white  rounded-md pl-4">
              Responsibilities
            </h3>
            <p className="text-xl mt-5 mb-3 font-medium text-gray-900">
              1. Your Responsibilities
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Provide all necessary content (text, images, etc.) throughout
                the lifecycle of the project.
              </li>
              <li>
                Timely feedback and approvals to ensure the Project stays on
                schedule.
              </li>
            </ul>
            <p className="text-xl mt-5 mb-3 font-medium text-gray-900">
              2. Brandmeals Responsibilities
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Deliver high-quality design and standard web development
                architecture.
              </li>
              <li>Communicate progress and any potential delays promptly.</li>
              <li>
                Provide training on the content management system if
                applicable..
              </li>
            </ul>
            <h3 className="font-semibold mb-2 mt-6 text-2xl  bg-gray-800   text-white  rounded-md pl-4">
              Intellectual Property
            </h3>
            <p className="text-xl mt-5 mb-3 font-medium text-gray-900">
              1. Ownership
            </p>
            <p className="py-3 text-base">
              Upon full payment, the Client will own the final design, graphics,
              and website files. Brandmeals shall seek your consent to use the
              work for portfolio purposes.
            </p>
            <p className="text-xl mt-5 mb-3 font-medium text-gray-900">
              2. Licenses
            </p>
            <p className="py-3 text-base">
              Brandmeals will ensure all materials used in the Project are
              appropriately licensed or created.
            </p>
            <h3 className="font-semibold mb-2 mt-6 text-2xl  bg-gray-800   text-white  rounded-md pl-4">
              Confidentiality
            </h3>
            <p className="py-3 text-base">
              Both parties agree to maintain the confidentiality of any
              proprietary information and materials.
            </p>
            <h3 className="font-semibold mb-2 mt-6 text-2xl  bg-gray-800   text-white  rounded-md pl-4">
              Dispute Resolution
            </h3>
            <p className="text-xl mt-5 mb-3 font-medium text-gray-900">
              1. Mediation
            </p>
            <p className="py-3 text-base">
              In the event of a dispute, both parties agree to attempt to
              resolve it through mediation before pursuing legal action.
            </p>
            <p className="text-xl mt-5 mb-3 font-medium text-gray-900">
              2. Governing Law
            </p>
            <p className="py-3 text-base">
              This contract shall be governed by the laws of Nigeria.
            </p>
            <h3 className="font-semibold mb-2 mt-6 text-2xl  bg-gray-800   text-white  rounded-md pl-4">Acceptance</h3>
            <p className="py-3 text-base">
              By signing this contract, both parties agree to the terms and
              conditions of this contract.
            </p>

        </div>
      </div>
    </section>
  );
};

export default BrandStoryContent;
