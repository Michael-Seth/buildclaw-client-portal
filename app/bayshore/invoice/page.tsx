"use client";
import ContractSign, {
    ContractSignHandles,
} from "@/components/ContractSignature";
import styles from "./styles.module.css";
import dynamic from "next/dynamic";
import logo from "@/assets/images/Buildclaw.png";
import Arrows from "@/assets/svgs/Arrow";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { formatPrice } from "@/constants/utils/helpers";
import useMyContext from "@/constants/context/useMyContext";

const PaymentButton = dynamic(
    () => import("../../../components/PaymentButton"),
    { ssr: false }
);

export default function Invoice() {
    const { setPendingBalance, setComputedTotal } = useMyContext();

    const formRef = useRef<ContractSignHandles>(null);
    const computedTotal = 2000000;
    const payStackTotal = computedTotal;
    const payStackHalfTotal = (computedTotal / 2);

    useEffect(() => {
        setComputedTotal(computedTotal);
    }, [setComputedTotal]); // Dependencies are passed here to avoid warnings

    const [isPaymentButtonEnabled, setIsPaymentButtonEnabled] = useState(false);
    const [downloadButton, setDownloadButton] = useState(false);
    const [formData, setFormData] = useState<{
        fullName: string;
        email: string;
        signature: string | null;
    } | null>(null);
    const [showAdditionalComponents, setShowAdditionalComponents] =
        useState(false);
    const [uploadedReceipt, setUploadedReceipt] = useState<File | null>(null);

    const handleUpdateFormData = (isFormValid: boolean) => {
        const data = formRef.current?.getFormData();
        if (isFormValid && data) {
            setFormData(data);
            setIsPaymentButtonEnabled(true);
        } else {
            setIsPaymentButtonEnabled(false);
        }
    };

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setUploadedReceipt(file);
            // Here you can add logic to upload the file to your server
            console.log("File selected:", file.name);
        }
    };

    return (
        <div className={styles.tm_container}>
            <div className={styles.tm_invoice_wrap}>
                <div
                    className={`${styles.tm_invoice} ${styles.tm_style1} ${styles.tm_type3} ${styles.invoice_component}`} // Add the class here
                    id="tm_download_section"
                >
                    <div className={styles.tm_shape_1}>
                        <svg
                            width="850"
                            height="151"
                            viewBox="0 0 850 151"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M850 0.889398H0V150.889H184.505C216.239 150.889 246.673 141.531 269.113 124.872L359.112 58.0565C381.553 41.3977 411.987 32.0391 443.721 32.0391H850V0.889398Z"
                                fill="#C9ECFF"
                                fillOpacity=".8"
                            />
                        </svg>
                    </div>
                    <div className={styles.tm_shape_2}>
                        <svg
                            width="850"
                            height="151"
                            viewBox="0 0 850 151"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0 150.889H850V0.889408H665.496C633.762 0.889408 603.327 10.2481 580.887 26.9081L490.888 93.7224C468.447 110.381 438.014 119.74 406.279 119.74H0V150.889Z"
                                fill="#C9ECFF"
                                fillOpacity=".8"
                            />
                        </svg>
                    </div>
                    <div className={styles.tm_invoice_in}>
                        <div
                            className={`${styles.tm_invoice_head} ${styles.tm_align_center} ${styles.tm_mb20}`}
                        >
                            <div className={styles.tm_invoice_left}>
                                <div className={styles.tm_logo}>
                                    <Image
                                        src={logo}
                                        className="w-40 lg:w-4/5"
                                        alt="Brandmeals Logo"
                                    />
                                </div>
                            </div>
                            <div
                                className={`${styles.tm_invoice_right} ${styles.tm_text_right}`}
                            >
                                <div className={`${styles.tm_primary_color} ${styles.tm_f50}`}>
                                    Invoice
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.tm_invoice_info} ${styles.tm_mb20}`}>
                            <div className={styles.tm_invoice_seperator}>
                                <Arrows />
                                {/* <Image src={Arrows}                    className="w-40 lg:w-4/5"
                    alt="Brandmeals Arrows" /> */}
                            </div>
                            <div className={styles.tm_invoice_info_list}>
                                <p className={`${styles.tm_invoice_number} ${styles.tm_m0}`}>
                                    Invoice No:
                                    <b className={styles.tm_primary_color}>#LL93784</b>
                                </p>
                                <p className={`${styles.tm_invoice_date} ${styles.tm_m0}`}>
                                    Date: <b className={styles.tm_primary_color}>01.07.2022</b>
                                </p>
                                <div
                                    className={`${styles.tm_invoice_info_list_bg} ${styles.tm_accent_bg_10}`}
                                ></div>
                            </div>
                        </div>
                        <div className={`${styles.tm_invoice_head} ${styles.tm_mb10}`}>
                            <div className={styles.tm_invoice_left}>
                                <p className={styles.tm_mb2}>
                                    <b className={styles.tm_primary_color}>Invoice To:</b>
                                </p>
                                <p>27a Ajose Adeogun St, <br />
                                    Victoria Island 106104, <br />
                                    Lagos, Nigeria
                                </p>
                            </div>
                            <div
                                className={`${styles.tm_invoice_right} ${styles.tm_text_right}`}
                            >
                                <p className={styles.tm_mb2}>
                                    <b className={styles.tm_primary_color}>Pay To:</b>
                                </p>
                                <p>
                                    Buildclaw <br />
                                    38 Damunde Estate, Lifecamp <br />
                                    info@buildclaw.com
                                </p>
                            </div>
                        </div>
                        <div
                            className={`${styles.tm_table} ${styles.tm_style1} ${styles.tm_mb30}`}
                        >
                            <div className={styles.tm_table_responsive}>
                                <table className={styles.tm_border_bottom}>
                                    <thead>
                                        <tr className={styles.tm_border_top}>
                                            <th
                                                className={`${styles.tm_width_3} ${styles.tm_semi_bold} ${styles.tm_primary_color} ${styles.tm_accent_bg_10}`}
                                            >
                                                Category
                                            </th>
                                            <th
                                                className={`${styles.tm_width_4} ${styles.tm_semi_bold} ${styles.tm_primary_color} ${styles.tm_accent_bg_10}`}
                                            >
                                                Description
                                            </th>
                                            <th
                                                className={`${styles.tm_width_2} ${styles.tm_semi_bold} ${styles.tm_primary_color} ${styles.tm_accent_bg_10} ${styles.tm_text_right}`}
                                            >
                                                Cost (₦)
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className={styles.tm_width_3}>UI/UX Design & Branding Alignment</td>
                                            <td className={styles.tm_width_4}>
                                                Homepage concepts, full mockups, responsive layouts, typography system, brand alignment
                                            </td>
                                            <td
                                                className={`${styles.tm_width_2} ${styles.tm_text_right}`}
                                            >
                                                ₦450,000
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={styles.tm_width_3}>Frontend Development</td>
                                            <td className={styles.tm_width_4}>
                                                HTML5, CSS3, JS, animations, responsive development
                                            </td>
                                            <td
                                                className={`${styles.tm_width_2} ${styles.tm_text_right}`}
                                            >
                                                ₦500,000
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={styles.tm_width_3}>Backend Development & CMS Setup</td>
                                            <td className={styles.tm_width_4}>
                                                WordPress CMS, template system, admin setup
                                            </td>
                                            <td
                                                className={`${styles.tm_width_2} ${styles.tm_text_right}`}
                                            >
                                                ₦450,000
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={styles.tm_width_3}>SEO Setup & Optimization</td>
                                            <td className={styles.tm_width_4}>
                                                Metadata, alt tags, structured data, sitemap, indexing
                                            </td>
                                            <td
                                                className={`${styles.tm_width_2} ${styles.tm_text_right}`}
                                            >
                                                ₦150,000
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={styles.tm_width_3}>Content Integration</td>
                                            <td className={styles.tm_width_4}>
                                                Uploading text, media, service pages, projects, PDFs
                                            </td>
                                            <td
                                                className={`${styles.tm_width_2} ${styles.tm_text_right}`}
                                            >
                                                ₦200,000
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={styles.tm_width_3}>Testing & Quality Assurance</td>
                                            <td className={styles.tm_width_4}>
                                                Cross-browser tests, device checks, performance optimization
                                            </td>
                                            <td
                                                className={`${styles.tm_width_2} ${styles.tm_text_right}`}
                                            >
                                                ₦150,000
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={styles.tm_width_3}>Deployment & Launch</td>
                                            <td className={styles.tm_width_4}>
                                                SSL setup, analytics, final migration
                                            </td>
                                            <td
                                                className={`${styles.tm_width_2} ${styles.tm_text_right}`}
                                            >
                                                ₦100,000
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={styles.tm_width_3}>3-Month Maintenance</td>
                                            <td className={styles.tm_width_4}>
                                                Updates, bug fixes, monthly performance checks
                                            </td>
                                            <td
                                                className={`${styles.tm_width_2} ${styles.tm_text_right}`}
                                            >
                                                Free
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <br />
                            </div>
                            <div className={styles.tm_invoice_footer}>
                                <div className={styles.tm_left_footer}>
                                    <p className={styles.tm_mb2}>
                                        <b className={styles.tm_primary_color}>Payment type:</b>
                                    </p>
                                    <p
                                        className={styles.tm_payment_type}
                                        style={{
                                            padding: "10px 15px",
                                            backgroundColor: "#0d7ebb",
                                            borderRadius: "3px",
                                            color: "white",
                                            display: "inline",
                                        }}
                                    >
                                        Bank Transfer
                                    </p>
                                </div>
                                <div className={styles.tm_right_footer}>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td
                                                    className={`${styles.tm_width_3} ${styles.tm_primary_color} ${styles.tm_border_none} ${styles.tm_bold}`}
                                                >
                                                    Subtotal
                                                </td>
                                                <td
                                                    className={`${styles.tm_width_3} ${styles.tm_primary_color} ${styles.tm_text_right} ${styles.tm_border_none} ${styles.tm_bold}`}
                                                >
                                                    ₦2,000,000
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className={`${styles.tm_width_3} ${styles.tm_primary_color} ${styles.tm_border_none} ${styles.tm_pt0}`}
                                                >
                                                    Tax
                                                </td>
                                                <td
                                                    className={`${styles.tm_width_3} ${styles.tm_primary_color} ${styles.tm_text_right} ${styles.tm_border_none} ${styles.tm_pt0}`}
                                                    style={{
                                                        textDecoration: "line-through",
                                                        color: "#444",
                                                    }}
                                                >
                                                    Included
                                                </td>
                                            </tr>
                                            <tr
                                                className={`${styles.tm_border_top} ${styles.tm_border_bottom} text-gray-950 text-3xl`}
                                            >
                                                <td
                                                    className={`${styles.tm_width_3} ${styles.tm_border_top_0} ${styles.tm_bold} ${styles.tm_f19} ${styles.tm_primary_color}`}
                                                >
                                                    Total
                                                </td>
                                                <td
                                                    className={`${styles.tm_width_3} ${styles.tm_border_top_0} ${styles.tm_bold} ${styles.tm_f19} ${styles.tm_primary_color} ${styles.tm_text_right}`}
                                                >
                                                    {formatPrice(computedTotal)}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Bank Account Details Section */}
                        <div className={`${styles.tm_mb30}`} style={{ marginTop: "30px" }}>
                            <div
                                style={{
                                    backgroundColor: "#C9ECFF40",
                                    borderRadius: "8px",
                                    padding: "25px 30px",
                                    border: "1px solid #C9ECFF"
                                }}
                            >
                                <div className={`${styles.tm_primary_color} ${styles.tm_f18} ${styles.tm_semi_bold}`} style={{ marginBottom: "20px", textAlign: "center" }}>
                                    Bank Account Details
                                </div>

                                <div style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                                    gap: "20px",
                                    maxWidth: "800px",
                                    margin: "0 auto"
                                }}>
                                    {/* Account Name */}
                                    <div style={{
                                        backgroundColor: "white",
                                        padding: "15px 20px",
                                        borderRadius: "6px",
                                        border: "1px solid #C9ECFF"
                                    }}>
                                        <div className={styles.tm_secondary_color} style={{ fontSize: "12px", marginBottom: "5px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                                            Account Name
                                        </div>
                                        <div className={`${styles.tm_primary_color} ${styles.tm_semi_bold}`} style={{ fontSize: "16px" }}>
                                            Brandmeals Enterprise
                                        </div>
                                    </div>

                                    {/* Account Number */}
                                    <div style={{
                                        backgroundColor: "white",
                                        padding: "15px 20px",
                                        borderRadius: "6px",
                                        border: "1px solid #C9ECFF"
                                    }}>
                                        <div className={styles.tm_secondary_color} style={{ fontSize: "12px", marginBottom: "5px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                                            Account Number
                                        </div>
                                        <div className={`${styles.tm_primary_color} ${styles.tm_semi_bold}`} style={{ fontSize: "16px", letterSpacing: "1px" }}>
                                            12345678910
                                        </div>
                                    </div>

                                    {/* Bank Name */}
                                    <div style={{
                                        backgroundColor: "white",
                                        padding: "15px 20px",
                                        borderRadius: "6px",
                                        border: "1px solid #C9ECFF"
                                    }}>
                                        <div className={styles.tm_secondary_color} style={{ fontSize: "12px", marginBottom: "5px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                                            Bank Name
                                        </div>
                                        <div className={`${styles.tm_primary_color} ${styles.tm_semi_bold}`} style={{ fontSize: "16px" }}>
                                            Access Bank
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Payment Receipt Upload Section */}
                        <div className={`${styles.tm_mb40}`} style={{ marginTop: "30px" }}>
                            <div
                                className={styles.tm_border}
                                style={{
                                    borderRadius: "8px",
                                    padding: "25px",
                                    backgroundColor: "#C9ECFF20",
                                    borderColor: "#C9ECFF",
                                    borderWidth: "2px",
                                    borderStyle: "dashed"
                                }}
                            >
                                <div style={{ textAlign: "center" }}>
                                    <div className={`${styles.tm_primary_color} ${styles.tm_f18} ${styles.tm_semi_bold}`} style={{ marginBottom: "10px" }}>
                                        Upload Payment Receipt
                                    </div>
                                    <p className={styles.tm_secondary_color} style={{ marginBottom: "20px", fontSize: "14px" }}>
                                        After making your payment, please upload a copy of your transaction receipt.<br />
                                        You will receive an email confirmation once payment has been verified.
                                    </p>

                                    <div style={{ position: "relative", display: "inline-block" }}>
                                        <input
                                            type="file"
                                            id="receipt-upload"
                                            accept="image/*,.pdf"
                                            onChange={handleFileUpload}
                                            style={{
                                                position: "absolute",
                                                opacity: 0,
                                                width: "100%",
                                                height: "100%",
                                                cursor: "pointer",
                                                zIndex: 1
                                            }}
                                        />
                                        <label
                                            htmlFor="receipt-upload"
                                            style={{
                                                display: "inline-flex",
                                                alignItems: "center",
                                                gap: "10px",
                                                padding: "12px 30px",
                                                backgroundColor: "#0d7ebb",
                                                color: "white",
                                                borderRadius: "5px",
                                                cursor: "pointer",
                                                fontSize: "15px",
                                                fontWeight: "500",
                                                transition: "all 0.3s ease",
                                                border: "none"
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.backgroundColor = "#d63e0e";
                                                e.currentTarget.style.transform = "translateY(-2px)";
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.backgroundColor = "#0d7ebb";
                                                e.currentTarget.style.transform = "translateY(0)";
                                            }}
                                        >
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                                <polyline points="17 8 12 3 7 8"></polyline>
                                                <line x1="12" y1="3" x2="12" y2="15"></line>
                                            </svg>
                                            {uploadedReceipt ? "Change Receipt" : "Attach Receipt"}
                                        </label>
                                    </div>

                                    {uploadedReceipt && (
                                        <div
                                            style={{
                                                marginTop: "15px",
                                                padding: "12px 20px",
                                                backgroundColor: "#34c75915",
                                                borderRadius: "5px",
                                                display: "inline-flex",
                                                alignItems: "center",
                                                gap: "10px"
                                            }}
                                        >
                                            <svg
                                                width="18"
                                                height="18"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#34c759"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                            <span className={styles.tm_primary_color} style={{ fontSize: "14px", fontWeight: "500" }}>
                                                {uploadedReceipt.name}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <ContractSign
                            ref={formRef}
                            onFormDataChange={handleUpdateFormData}
                        />
                        <br />
                        <div className="w-full flex flex-col md:flex-row my-8 items-center gap-4">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}