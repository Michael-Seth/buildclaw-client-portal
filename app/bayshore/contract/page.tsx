"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/Buildclaw.png";
import { useRef } from "react";

export default function Contract() {
    const contractRef = useRef<HTMLDivElement>(null);

    // const handleDownloadPDF = async () => {
    //     if (typeof window === 'undefined' || !contractRef.current) return;

    //     try {
    //         const html2canvas = (await import('html2canvas')).default;
    //         const jsPDF = (await import('jspdf')).default;

    //         const element = contractRef.current;

    //         const canvas = await html2canvas(element, {
    //             scale: 2,
    //             useCORS: true,
    //             logging: false,
    //             backgroundColor: '#ffffff'
    //         });

    //         const imgData = canvas.toDataURL('image/png');
    //         const pdf = new jsPDF({
    //             orientation: 'portrait',
    //             unit: 'mm',
    //             format: 'a4'
    //         });

    //         const imgWidth = 210;
    //         const pageHeight = 297;
    //         const imgHeight = (canvas.height * imgWidth) / canvas.width;
    //         let heightLeft = imgHeight;
    //         let position = 0;

    //         pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    //         heightLeft -= pageHeight;

    //         while (heightLeft >= 0) {
    //             position = heightLeft - imgHeight;
    //             pdf.addPage();
    //             pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    //             heightLeft -= pageHeight;
    //         }

    //         pdf.save('Bayshore_Contract.pdf');
    //     } catch (error) {
    //         console.error('Error generating PDF:', error);
    //         alert('Failed to generate PDF. Please try again.');
    //     }
    // };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                {/* <div className="mb-6 flex justify-end">
                    <button
                        onClick={handleDownloadPDF}
                        className="flex items-center gap-2 bg-[#0d7ebb] hover:bg-[#d63e0e] text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-105"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download as PDF
                    </button>
                </div> */}

                <div ref={contractRef} className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200">
                    <div className="bg-gradient-to-r from-[#0d7ebb] to-[#006094] px-8 py-10 text-white">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <Image src={logo} alt="Buildclaw Logo" className="w-32 h-auto" />
                            </div>
                            <div className="text-center md:text-right">
                                <h1 className="text-3xl md:text-4xl font-bold mb-2">WEBSITE DESIGN & DEVELOPMENT</h1>
                                <h2 className="text-xl md:text-2xl font-semibold opacity-90">SERVICE AGREEMENT</h2>
                            </div>
                        </div>
                    </div>

                    <div className="px-8 py-8 bg-gradient-to-r from-[#C9ECFF] to-white border-b-2 border-[#0d7ebb]/20">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-xl border">
                                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Developer</h3>
                                <p className="text-2xl font-bold text-gray-900">Buildclaw</p>
                                <p className="text-sm text-gray-600 mt-2">38 Damunde Estate, Lifecamp<br />info@buildclaw.com</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl border">
                                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Client</h3>
                                <p className="text-2xl font-bold text-gray-900">Bayshore Technologies Ltd.</p>
                                <p className="text-sm text-gray-600 mt-2">27a Ajose Adeogun St<br />Victoria Island 106104, Lagos</p>
                            </div>
                        </div>
                    </div>

                    <div className="px-8 py-10 space-y-10">
                        <section>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-[#0d7ebb] text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
                                <h2 className="text-2xl font-bold text-gray-900">PROJECT OVERVIEW</h2>
                            </div>
                            <div className="ml-13 pl-6 border-l-4 border-[#C9ECFF]">
                                <p className="text-gray-700 leading-relaxed">
                                    Buildclaw will design and develop a modern, responsive, and conversion-focused corporate website for Bayshore Technologies Ltd. The project includes UI/UX design, development, optimization, content structure, admin access configuration, and all deliverables outlined in the official project proposal.
                                </p>
                            </div>
                        </section>

                        <section>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-[#0d7ebb] text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
                                <h2 className="text-2xl font-bold text-gray-900">SCOPE OF WORK</h2>
                            </div>
                            <div className="ml-13 pl-6 border-l-4 border-[#C9ECFF] space-y-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">2.1 Website Pages (Estimated 15–20 Pages)</h3>
                                    <p className="text-gray-700 mb-4">The final website will include (but is not limited to) the following:</p>
                                    <div className="grid md:grid-cols-2 gap-3">
                                        {["Home", "About Us", "Our Team", "Services (Main Page)", "Projects (Main Page)", "Industries We Serve", "Partners / OEMs", "Careers", "Blog (List + Post Page)", "Contact Us", "Request a Quote / Consultation", "Privacy Policy / Terms (Optional)"].map((page, index) => (
                                            <div key={index} className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg">
                                                <svg className="w-5 h-5 text-[#0d7ebb] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-gray-700 text-sm">{page}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-4 bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                                        <p className="text-sm text-blue-800"><strong>Note:</strong> Final page count may increase or reduce slightly depending on content organization. Any major scope changes outside the listed structure will require a new estimate.</p>
                                    </div>
                                </div>
                                <div className="bg-gradient-to-r from-[#C9ECFF] to-white p-6 rounded-xl">
                                    <h4 className="font-semibold text-gray-900 mb-3">Service Sub-Pages Include:</h4>
                                    <ul className="space-y-2">
                                        {["Electrical Services", "Power Generation", "Engineering Consulting", "Procurement & Supply"].map((service, index) => (
                                            <li key={index} className="flex items-center gap-2 text-gray-700">
                                                <span className="w-2 h-2 bg-[#0d7ebb] rounded-full"></span>{service}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-gradient-to-r from-[#C9ECFF] to-white p-6 rounded-xl">
                                    <h4 className="font-semibold text-gray-900 mb-3">Project Pages Include:</h4>
                                    <ul className="space-y-2">
                                        {["Project Category Pages", "Project Detail Pages"].map((project, index) => (
                                            <li key={index} className="flex items-center gap-2 text-gray-700">
                                                <span className="w-2 h-2 bg-[#0d7ebb] rounded-full"></span>{project}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-[#0d7ebb] text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
                                <h2 className="text-2xl font-bold text-gray-900">PROJECT TIMELINE</h2>
                            </div>
                            <div className="ml-13 pl-6 border-l-4 border-[#C9ECFF]">
                                <div className="bg-gradient-to-r from-[#0d7ebb] to-[#006094] text-white p-6 rounded-xl mb-6">
                                    <p className="text-3xl font-bold">Total Duration: 6 Weeks</p>
                                </div>
                                <div className="space-y-4">
                                    {[
                                        { week: "Week 1", task: "Final concept selection, content collection, wireframes" },
                                        { week: "Week 2–3", task: "UI/UX design development" },
                                        { week: "Week 4–5", task: "Frontend and backend development" },
                                        { week: "Week 6", task: "Testing, revisions, optimization & launch preparation" }
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start gap-4 bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                                            <div className="bg-[#C9ECFF] text-[#0d7ebb] font-bold px-4 py-2 rounded-lg whitespace-nowrap">{item.week}</div>
                                            <p className="text-gray-700 flex-1">{item.task}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                                    <p className="text-sm font-semibold text-yellow-800 mb-2">Timeline may extend if:</p>
                                    <ul className="space-y-1 text-sm text-yellow-700">
                                        <li>• Content is delayed by Client</li>
                                        <li>• Payment milestone is delayed</li>
                                        <li>• Additional features are requested</li>
                                    </ul>
                                </div>
                            </div>
                        </section>


                        <section>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-[#0d7ebb] text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
                                <h2 className="text-2xl font-bold text-gray-900">PAYMENT TERMS</h2>
                            </div>
                            <div className="ml-13 pl-6 border-l-4 border-[#C9ECFF] space-y-6">
                                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-200">
                                    <p className="text-lg text-gray-700 mb-2">Total Project Cost:</p>
                                    <p className="text-4xl font-bold text-green-700">₦2,000,000</p>
                                    <p className="text-sm text-gray-600 mt-1">(Two Million Naira Only)</p>
                                    <p className="text-sm text-gray-600 mt-4 italic">* Hosting billed separately at $187/year</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Payment Options</h3>
                                    <div className="mb-6 bg-white border-2 border-[#0d7ebb] rounded-xl overflow-hidden">
                                        <div className="bg-[#0d7ebb] text-white px-6 py-3 flex items-center justify-between">
                                            <h4 className="font-bold text-lg">Option 1: Full Payment</h4>
                                            <span className="bg-white text-[#0d7ebb] px-3 py-1 rounded-full text-xs font-bold">RECOMMENDED</span>
                                        </div>
                                        <div className="p-6">
                                            <p className="text-gray-700">Client may pay the full <strong className="text-[#0d7ebb]">₦2,000,000</strong> upfront.</p>
                                        </div>
                                    </div>
                                    <div className="bg-white border-2 border-gray-300 rounded-xl overflow-hidden">
                                        <div className="bg-gray-100 px-6 py-3">
                                            <h4 className="font-bold text-lg text-gray-900">Option 2: Milestone Payment Plan</h4>
                                        </div>
                                        <div className="p-6 space-y-4">
                                            {[
                                                { percentage: "20%", amount: "₦400,000", title: "Before Project Starts", description: "Project officially begins after this payment." },
                                                { percentage: "40%", amount: "₦800,000", title: "After Completion of Phase 1", description: "Phase 1 = Design approval + initial development setup." },
                                                { percentage: "40%", amount: "₦800,000", title: "Final Payment Before Handover", description: "Paid before final deployment, admin handover, and security configuration." }
                                            ].map((milestone, index) => (
                                                <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                                                    <div className="bg-[#0d7ebb] text-white font-bold px-4 py-2 rounded-lg text-center min-w-[80px]">
                                                        <div className="text-2xl">{milestone.percentage}</div>
                                                        <div className="text-xs opacity-90">{milestone.amount}</div>
                                                    </div>
                                                    <div className="flex-1">
                                                        <h5 className="font-semibold text-gray-900 mb-1">{milestone.title}</h5>
                                                        <p className="text-sm text-gray-600">{milestone.description}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="mt-6 bg-red-50 border-l-4 border-red-400 p-4 rounded">
                                        <p className="text-sm font-semibold text-red-800">⚠️ No deliverables will be transferred until the final payment is made.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-[#0d7ebb] text-white rounded-full flex items-center justify-center font-bold text-lg">5</div>
                                <h2 className="text-2xl font-bold text-gray-900">CLIENT RESPONSIBILITIES</h2>
                            </div>
                            <div className="ml-13 pl-6 border-l-4 border-[#C9ECFF]">
                                <p className="text-gray-700 mb-4">Client agrees to provide:</p>
                                <div className="space-y-3">
                                    {["Logo files, brand assets, and corporate identity materials", "Written content (unless content development is included separately)", "Access to technical credentials (if required)", "Timely feedback within 48–72 hours for faster execution"].map((item, index) => (
                                        <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg border border-gray-200">
                                            <svg className="w-6 h-6 text-[#0d7ebb] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-700">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-4 bg-orange-50 border-l-4 border-orange-400 p-4 rounded">
                                    <p className="text-sm text-orange-800"><strong>Important:</strong> Delays in communication extend delivery timelines.</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-[#0d7ebb] text-white rounded-full flex items-center justify-center font-bold text-lg">6</div>
                                <h2 className="text-2xl font-bold text-gray-900">REVISIONS</h2>
                            </div>
                            <div className="ml-13 pl-6 border-l-4 border-[#C9ECFF]">
                                <p className="text-gray-700 mb-4">Client is entitled to:</p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-green-50 p-5 rounded-xl border-2 border-green-200">
                                        <div className="flex items-center gap-2 mb-2">
                                            <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <h4 className="font-bold text-green-800">Design Phase</h4>
                                        </div>
                                        <p className="text-green-700">3 rounds of revisions</p>
                                    </div>
                                    <div className="bg-blue-50 p-5 rounded-xl border-2 border-blue-200">
                                        <div className="flex items-center gap-2 mb-2">
                                            <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <h4 className="font-bold text-blue-800">Development Phase</h4>
                                        </div>
                                        <p className="text-blue-700">Minor edits included</p>
                                    </div>
                                </div>
                                <div className="mt-4 bg-purple-50 border-l-4 border-purple-400 p-4 rounded">
                                    <p className="text-sm text-purple-800"><strong>Note:</strong> Major structural changes or new functionality will incur additional costs.</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-[#0d7ebb] text-white rounded-full flex items-center justify-center font-bold text-lg">7</div>
                                <h2 className="text-2xl font-bold text-gray-900">OWNERSHIP & RIGHTS</h2>
                            </div>
                            <div className="ml-13 pl-6 border-l-4 border-[#C9ECFF] space-y-4">
                                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-200">
                                    <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        Upon Full Payment:
                                    </h4>
                                    <ul className="space-y-2 text-green-700">
                                        <li className="flex items-start gap-2"><span className="text-green-600 font-bold">•</span>Client owns the website, design, code, and content</li>
                                        <li className="flex items-start gap-2"><span className="text-green-600 font-bold">•</span>Buildclaw retains the right to display the project in its portfolio</li>
                                    </ul>
                                </div>
                                <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
                                    <p className="text-sm font-semibold text-red-800">⚠️ Before final payment, all materials remain the property of Buildclaw.</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-[#0d7ebb] text-white rounded-full flex items-center justify-center font-bold text-lg">8</div>
                                <h2 className="text-2xl font-bold text-gray-900">LAUNCH & HANDOVER</h2>
                            </div>
                            <div className="ml-13 pl-6 border-l-4 border-[#C9ECFF]">
                                <p className="text-gray-700 mb-4">Upon project completion, Buildclaw will deliver:</p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        { icon: "", title: "Live deployed website" },
                                        { icon: "", title: "Admin credentials" },
                                        { icon: "", title: "Backup files" },
                                        { icon: "", title: "Optional training session" }
                                    ].map((item, index) => (
                                        <div key={index} className="bg-gray-50 p-5 rounded-xl border border-gray-200 flex items-center gap-3">
                                            <span className="text-3xl">{item.icon}</span>
                                            <span className="text-gray-800 font-semibold">{item.title}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-[#0d7ebb] text-white rounded-full flex items-center justify-center font-bold text-lg">9</div>
                                <h2 className="text-2xl font-bold text-gray-900">POST-LAUNCH SUPPORT</h2>
                            </div>
                            <div className="ml-13 pl-6 border-l-4 border-[#C9ECFF]">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-300">
                                        <div className="flex items-center gap-3 mb-2">
                                            <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <h4 className="font-bold text-green-800 text-lg">Included Free</h4>
                                        </div>
                                        <p className="text-green-700 font-semibold">30 days of technical support after launch</p>
                                    </div>
                                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border-2 border-blue-300">
                                        <div className="flex items-center gap-3 mb-2">
                                            <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                                            </svg>
                                            <h4 className="font-bold text-blue-800 text-lg">Optional</h4>
                                        </div>
                                        <p className="text-blue-700 font-semibold">Maintenance package available upon request</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>

                    {/* Call to Action - Sign Contract */}
                    <div className="bg-gradient-to-r from-[#C9ECFF] to-white px-8 py-10 border-t-2 border-[#0d7ebb]/20">
                        <div className="max-w-3xl mx-auto text-center">
                            <Link
                                href="/bayshore/invoice"
                                className="inline-flex items-center gap-3 bg-[#0d7ebb] hover:bg-[#0d7ebb]/80 text-white font-medium px-8 py-4 rounded-xl shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-105"
                            >
                                <span className="text-base">Proceed to Invoice & Sign Contract</span>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
