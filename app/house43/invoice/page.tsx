"use client";
import ContractSign, {
  ContractSignHandles,
} from "@/components/ContractSignature";
import styles from "./styles.module.css";
import dynamic from "next/dynamic";
import dashboard from "@/assets/images/LogoBrandMealsC.png";
import Arrows from "@/assets/svgs/Arrow";
import { useRef, useState } from "react";
import Image from "next/image";
import { formatPrice } from "@/constants/utils/helpers";
import useMyContext from "@/constants/context/useMyContext";

const PaymentButton = dynamic(
  () => import("../../../components/PaymentButton"),
  { ssr: false }
);

export default function Invoice() {
    const {  setPendingBalance, setComputedTotal } = useMyContext();

  const formRef = useRef<ContractSignHandles>(null);
  const computedTotal = 400000;
  const payStackTotal = computedTotal * 100;
  const payStackHalfTotal = (computedTotal / 2) * 100;
  setComputedTotal(computedTotal)
  setPendingBalance(payStackHalfTotal);

  const [isPaymentButtonEnabled, setIsPaymentButtonEnabled] = useState(false);
  const [downloadButton, setDownloadButton] = useState(false);
  const [formData, setFormData] = useState<{
    fullName: string;
    email: string;
    signature: string | null;
  } | null>(null);
  const [showAdditionalComponents, setShowAdditionalComponents] =
    useState(false);

  const handleUpdateFormData = (isFormValid: boolean) => {
    const data = formRef.current?.getFormData();
    if (isFormValid && data) {
      setFormData(data);
      setIsPaymentButtonEnabled(true);
    } else {
      setIsPaymentButtonEnabled(false);
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
                fill="#FFEEEA"
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
                fill="#FFEEEA"
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
                    src={dashboard}
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
                <p>
                  House 43 <br />
                  No 43 Gana street, Maitama. <br />
                  Abuja, Nigeria
                </p>
              </div>
              <div
                className={`${styles.tm_invoice_right} ${styles.tm_text_right}`}
              >
                <p className={styles.tm_mb2}>
                  <b className={styles.tm_primary_color}>Pay To:</b>
                </p>
                <p>
                  Brandmeals Ltd <br />
                  38 Damunde Estate, Lifecamp
                  <br />
                  info@brandmeals.com
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
                        Item
                      </th>
                      <th
                        className={`${styles.tm_width_4} ${styles.tm_semi_bold} ${styles.tm_primary_color} ${styles.tm_accent_bg_10}`}
                      >
                        Description
                      </th>
                      <th
                        className={`${styles.tm_width_2} ${styles.tm_semi_bold} ${styles.tm_primary_color} ${styles.tm_accent_bg_10} ${styles.tm_text_right}`}
                      >
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className={styles.tm_width_3}>1. Website Design</td>
                      <td className={styles.tm_width_4}>
                        Six web page designs and three times revision
                      </td>
                      <td
                        className={`${styles.tm_width_2} ${styles.tm_text_right}`}
                      >
                        $245
                      </td>
                    </tr>
                    <tr>
                      <td className={styles.tm_width_3}>2. Domian Name</td>
                      <td className={styles.tm_width_4}>
                        Billed annually, free for 1st year
                      </td>
                      <td
                        className={`${styles.tm_width_2} ${styles.tm_text_right}`}
                      >
                        $0.00
                      </td>
                    </tr>
                    <tr>
                      <td className={styles.tm_width_3}>3. Web Host</td>
                      <td className={styles.tm_width_4}>
                        Billed annually, free for 1st year
                      </td>
                      <td
                        className={`${styles.tm_width_2} ${styles.tm_text_right}`}
                      >
                        $0.00
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
                      backgroundColor: "#f94912",
                      borderRadius: "3px",
                      color: "white",
                      display: "inline",
                    }}
                  >
                    Credit card
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
                          $245.00
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
                          +6%
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
                          {`$${245.0} or ${formatPrice(computedTotal)}`}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* <div
              className={styles.tm_pay_now}
              style={{
                padding: "15px 10px",
                backgroundColor: "#9b4431",
                borderRadius: "7px",
                color: "white",
                display: "block",
                cursor: "pointer",
                textAlign: "center",
              }}
            >
              Pay Now
            </div>
             */}
            <ContractSign
              ref={formRef}
              onFormDataChange={handleUpdateFormData}
            />
            <br />
            <div className="w-full flex flex-col md:flex-row my-8 items-center gap-4">
              <PaymentButton
                disabled={!isPaymentButtonEnabled}
                amount={payStackHalfTotal}
                text={"Pay 50%"}
                className={`py-3 w-full flex-grow px-8 rounded-md items-center text-sm tracking-wide transition-colors duration-200 ${
                  !isPaymentButtonEnabled
                    ? "bg-[#FFEEEA] cursor-not-allowed text-gray-800"
                    : "bg-[#9b4431] text-white"
                }`}
                onPaymentSuccess={() => setDownloadButton(true)}
              />
              <PaymentButton
                disabled={!isPaymentButtonEnabled}
                amount={payStackTotal}
                text={"Pay Full"}
                className={`py-3 w-full flex-grow px-8 rounded-md border-2 border-[#f9481256] items-center text-sm tracking-wide transition-colors duration-200 ${
                  !isPaymentButtonEnabled
                    ? "bg-[#fff] cursor-not-allowed text-gray-800"
                    : "bg-[#9b4431] border-4 border-[#eabbaf] text-white"
                }`}
                onPaymentSuccess={() => setDownloadButton(true)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /*  */
}
