"use client"
import Image from "next/image";
import React from "react";
import banner from "@/assets/images/CoverA.png";
import { Brandwrap } from "@/assets/svgs/Brandwrap";
import Logo from "@/assets/images/LogoBrandMealsC.png";
import bgDrop from "@/assets/images/Blackpage.png";
import UnAuthorized from "./UnAuthorized";
import { Grip } from "lucide-react";
import Pricing from "./PricingPackage";
import { plans } from "@/constants/utils/data";

interface TextContentProps {
  title: string;
  heading?: string;
  subHeading?: string;
  list?: string[];
  imageUrls?: string[];
  active?: boolean;
}

const TextContent: React.FC<TextContentProps> = ({
  title,
  heading,
  subHeading,
  list,
  imageUrls,
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
          <h3 className="block bg-gray-800 mt-4 py-3 text-2xl font-semibold text-white   rounded-md pl-4">
            Project Overview
          </h3>
          <p className="py-3 text-base">
            Brandmeals agrees to design and develop a website for the Evro
            lifestlye according to the specifications outlined in this contract.
          </p>
        </div>
        <div className="mt-6 lg:mt-0 lg:mx-6">
          <h3 className="font-semibold mb-2 py-3 mt-6 text-2xl bg-gray-800   text-white  rounded-md pl-4">
            Scope of Work
          </h3>
          <p className="flex items-center gap-3 text-xl mt-5 mb-3 font-medium text-gray-900">
            <Grip size={16} /> Deliverables
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Design and development of all necessary web pages</li>
            <li>
              Implementation of any selected package or service features and 
              functionalities
            </li>
            <li>Responsive design for desktop, tablet, and mobile devices.</li>
          </ul>
          <p className="flex items-center gap-3 text-xl mt-5 mb-3 font-medium text-gray-900">
            <Grip size={16} /> Timeline
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
          <p className="flex items-center gap-3 text-xl mt-5 mb-3 font-medium text-gray-900">
            <Grip size={16} /> Revisions
          </p>
          <p className="py-3 text-base">
            You are entitled to 3 rounds of revisions. Additional revisions
            might be billed depending on the complexity.
          </p>
          <h3 className="font-semibold mb-2 mt-6 text-2xl  bg-gray-800   text-white  rounded-md pl-4 py-3">
            Our Packages
          </h3>
          <Pricing plans={plans} />
          <h3 className="font-semibold mb-2 mt-6 text-2xl  bg-gray-800   text-white  rounded-md pl-4 py-3">
            Refund Policy
          </h3>
          <p className="flex items-center gap-3 text-xl mt-5 mb-3 font-medium text-gray-900">
            <Grip size={16} /> Initial Stage
          </p>
          <p className="py-3 text-base">
            If the Client requests a refund or cancels the Project at the
            beginning stage without any major work done, the Client is liable to
            a 95% refund of whatever has been paid.
          </p>
          <p className="flex items-center gap-3 text-xl mt-5 mb-3 font-medium text-gray-900">
            <Grip size={16} /> Post-Design Approval
          </p>
          <p className="py-3 text-base">
            If the Client decides to cancel or terminate the Project after the
            design has been submitted for approval, the Client is liable to a
            50% refund of whatever has been paid.
          </p>
          <p className="flex items-center gap-3 text-xl mt-5 mb-3 font-medium text-gray-900">
            <Grip size={16} /> Post-Development Phase
          </p>
          <p className="py-3 text-base">
            If the Project has reached Phase 2 (development phase) and has been
            submitted to the Client for review and testing, the Client must
            provide proof of breach of trust or agreement before requesting a
            refund. If the breach is valid, the Client can receive a 15% refund
            of whatever has been paid.
          </p>
          <p className="flex items-center gap-3 text-xl mt-5 mb-3 font-medium text-gray-900">
            <Grip size={16} /> Mediation
          </p>
          <p className="py-3 text-base">
            Both parties agree to attempt to resolve disputes through mediation
            before pursuing legal action.
          </p>
          <h3 className="font-semibold mb-2 mt-6 text-2xl  bg-gray-800   text-white  rounded-md pl-4 py-3">
            Responsibilities
          </h3>
          <p className="flex items-center gap-3 text-xl mt-5 mb-3 font-medium text-gray-900">
            <Grip size={16} /> Your Responsibilities
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Provide all necessary content (text, images, etc.) throughout the
              lifecycle of the project.
            </li>
            <li>
              Timely feedback and approvals to ensure the Project stays on
              schedule.
            </li>
          </ul>
          <p className="flex items-center gap-3 text-xl mt-5 mb-3 font-medium text-gray-900">
            <Grip size={16} /> Brandmeals Responsibilities
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Deliver high-quality design and standard web development
              architecture.
            </li>
            <li>Communicate progress and any potential delays promptly.</li>
            <li>
              Provide training on the content management system if applicable..
            </li>
          </ul>
          <h3 className="font-semibold mb-2 mt-6 text-2xl  bg-gray-800   text-white  rounded-md pl-4 py-3">
            Standard Pages
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Home page</li>
            <li>
              About page
              <ul className="list-disc pl-5 space-y-2">
                <li>Team</li>
              </ul>
            </li>
            <li>
              Services page
              <ul className="list-disc pl-5 space-y-2">
                <li>FAQ</li>
              </ul>
            </li>
            <li>Contact page</li>
            <li>Nenu page</li>
            <li>Reservation page</li>
            <li>Refund Policy</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>Check out</li>
          </ul>
          <p className="mt-4 text-gray-800 text-sm">
            This is the total number of pages included in your package. If you
            would like to add an additional page, it will cost an extra
            <span className="font-semibold text-blue-900">₦30,000</span>.
            However, you have the flexibility to switch or replace any of these
            standard pages with another page of your choice without any
            additional cost.
          </p>
          <h3 className="font-semibold mb-2 mt-6 text-2xl  bg-gray-800   text-white  rounded-md pl-4 py-3">
            Intellectual Property
          </h3>
          <p className="flex items-center gap-3 text-xl mt-5 mb-3 font-medium text-gray-900">
            <Grip size={16} /> Ownership
          </p>
          <p className="py-3 text-base">
            Upon full payment, the Client will own the final design, graphics,
            and website files. Brandmeals shall seek your consent to use the
            work for portfolio purposes.
          </p>
          <p className="flex items-center gap-3 text-xl mt-5 mb-3 font-medium text-gray-900">
            <Grip size={16} /> Licenses
          </p>
          <p className="py-3 text-base">
            Brandmeals will ensure all materials used in the Project are
            appropriately licensed or created.
          </p>
          <h3 className="font-semibold mb-2 mt-6 text-2xl  bg-gray-800   text-white  rounded-md pl-4 py-3">
            Confidentiality
          </h3>
          <p className="py-3 text-base">
            Both parties agree to maintain the confidentiality of any
            proprietary information and materials.
          </p>
          <h3 className="font-semibold mb-2 mt-6 text-2xl  bg-gray-800   text-white  rounded-md pl-4 py-3">
            Dispute Resolution
          </h3>
          <p className="flex items-center gap-3 text-xl mt-5 mb-3 font-medium text-gray-900">
            <Grip size={16} /> Mediation
          </p>
          <p className="py-3 text-base">
            In the event of a dispute, both parties agree to attempt to resolve
            it through mediation before pursuing legal action.
          </p>
          <p className="flex items-center gap-3 text-xl mt-5 mb-3 font-medium text-gray-900">
            <Grip size={16} /> Governing Law
          </p>
          <p className="py-3 text-base">
            This contract shall be governed by the laws of Nigeria.
          </p>
          <h3 className="font-semibold mb-2 mt-6 text-2xl  bg-gray-800   text-white  rounded-md pl-4 py-3">
            Acceptance
          </h3>
          <p className="py-3 text-base">
            This contract offers a comprehensive and professional overview of
            each service provided by BrandMeals, including pricing, to ensure
            you have a clear understanding of the value you&apos;re receiving. Please
            note that there will be an annual renewal fee of <span className="font-semibold text-blue-900">₦150,000</span> for domain
            and maintenance, which excludes any time-based services. <br /><br />
            By signing this contract, both parties agree to the terms and
            conditions of this contract.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TextContent;
