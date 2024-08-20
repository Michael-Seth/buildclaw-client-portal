import React from "react";
import { User2, Mail, MapPin, Locate } from "lucide-react";
import { Brandwrap } from "@/assets/svgs/Brandwrap";
import Logo from "@/assets/images/LogoBrandMealsC.png";
import bgDrop from "../../assets/images/Blackpage.png";
import bgDropBrown from "../../assets/images/brBrown.png";
import Image from "next/image";

const Example = () => {
  return (
    <>
      <div className="max-w-full overflow-hidden">
        <header
          className="text-white"
          style={{
            backgroundImage: `url(${bgDrop.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "30%", // Adjust as needed
          }}
        >
          <div className="relative">
            <Brandwrap className="absolute inset-0" />
            <div
              className="relative z-10 mx-auto"
              style={{ top: "45px", left: "30px" }}
            >
              <Image src={Logo} alt="Logo" width={150} height={200} />
            </div>
          </div>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
              <div className="">&nbsp;</div>
              <div className="flex flex-col items-end gap-4">
                <div className="flex items-center gap-4 ">
                  <p>Brandmeals</p>
                  <User2 size={24} color="white" />
                </div>
                <div className="flex items-center gap-4 ">
                  <p>38 Damunde estate, Lifecamp, Abuja, 900108</p>
                  <MapPin size={24} color="white" />
                </div>
                <div className="flex items-center gap-4 ">
                  <a href="mailto:sales@brandmeals.com">sales@brandmeals.com</a>
                  <Mail size={24} color="white" />
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white antialiased">
          <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
            <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
              <header className="mb-4 lg:mb-6 not-format">
                <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl">
                  Contract Agreement
                </h1>
                <address className="flex items-center mb-6 not-italic">
                  <div className="inline-flex items-center mr-3 text-sm text-gray-900">
                    <div>
                      <p className="text-xl font-bold text-gray-900">
                        Client Name
                      </p>
                      <p className="text-base text-gray-500 dark:text-gray-400">
                        Client email address
                      </p>
                    </div>
                  </div>
                </address>
              </header>
              <h3 className="font-semibold text-2xl">Project Overview</h3>
              <p className="py-3 text-base">
                Brandmeals agrees to design and develop a website for the
               according to the specifications outlined in this
                contract. The website will be referred to as the &ldquo;Project&ldquo; in
                this document.
              </p>
              <h3 className="font-semibold mb-2 mt-6 text-2xl">
                Scope of Work
              </h3>
              <p className="text-xl mt-5 mb-3 font-medium text-gray-900">
                1. Deliverables
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Design and development of all necessary web pages</li>
                <li>
                  Implementation of features and Implementation
                  of
                </li>
                <li>
                  Responsive design for desktop, tablet, and mobile devices.
                </li>
              </ul>
              <p className="text-xl mt-5 mb-3 font-medium text-gray-900">
                2. Timeline
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong> Project Start Date:</strong> Immediately after
                  payment
                </li>
                <li>
                  <strong> Initial Design Presentation:</strong> 2 weeks
                </li>
                <li>
                  <strong> Design review and corrections (if any):</strong> 1
                  week
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
              <p>
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
              <h3 className="font-semibold mb-2 mt-6 text-2xl">
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
                    What&apos;s included:
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

              <h3 className="font-semibold mb-2 mt-6 text-2xl">
                Refund Policy
              </h3>
              <p className="text-xl mt-5 mb-3 font-medium text-gray-900">
                1. Initial Stage
              </p>
              <p className="py-3 text-base">
                If the Client requests a refund or cancels the Project at the
                beginning stage without any major work done, the Client is
                liable to a 95% refund of whatever has been paid.
              </p>
              <p className="text-xl mt-5 mb-3 font-medium text-gray-900">
                2. Post-Design Approval
              </p>
              <p className="py-3 text-base">
                If the Client decides to cancel or terminate the Project after
                the design has been submitted for approval, the Client is liable
                to a 50% refund of whatever has been paid.
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
              <h3 className="font-semibold mb-2 mt-6 text-2xl">
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
              <h3 className="font-semibold mb-2 mt-6 text-2xl">
                Intellectual Property
              </h3>
              <p className="text-xl mt-5 mb-3 font-medium text-gray-900">
                1. Ownership
              </p>
              <p className="py-3 text-base">
                Upon full payment, the Client will own the final design,
                graphics, and website files. Brandmeals shall seek your consent
                to use the work for portfolio purposes.
              </p>
              <p className="text-xl mt-5 mb-3 font-medium text-gray-900">
                2. Licenses
              </p>
              <p className="py-3 text-base">
                Brandmeals will ensure all materials used in the Project are
                appropriately licensed or created.
              </p>
              <h3 className="font-semibold mb-2 mt-6 text-2xl">
                Confidentiality
              </h3>
              <p className="py-3 text-base">
                Both parties agree to maintain the confidentiality of any
                proprietary information and materials.
              </p>
              <h3 className="font-semibold mb-2 mt-6 text-2xl">
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
              <h3 className="font-semibold mb-2 mt-6 text-2xl">Acceptance</h3>
              <p className="py-3 text-base">
                By signing this contract, both parties agree to the terms and
                conditions of this contract.
              </p>
              <h4 className="font-medium mb-2 mt-6 text-lg">
                Additional Services
              </h4>
              <table className="w-full min-w-full bg-white border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                      Service
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      United States
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <strong>N200,000</strong>
                    </td>
                  </tr>
                  <tr className="bg-gray-50 border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Canada
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <strong>N300,000</strong>
                    </td>
                  </tr>
                </tbody>
              </table>

              <h3 className="my-8 font-semibold text-lg">
                Total: <span>N600,000</span>
              </h3>
            </article>
          </div>
        </div>
        <footer
          className="text-white"
          style={{
            backgroundImage: `url(${bgDropBrown.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "30%", // Adjust as needed
          }}
        >
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="flex justify-center  items-start gap-4">
              <div className="flex items-center text-center text-xs gap-4 ">
                <p>© Brandmeals 2024 • All rights reserved</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Example;
