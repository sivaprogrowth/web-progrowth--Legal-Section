import React from "react";
import { Link } from "react-router-dom";

const navigationItems = [
  {
    label: "Terms & Conditions",
    href: "/terms-u38-conditions",
    isActive: false,
  },
  {
    label: "Privacy Policy",
    href: "#",
    isActive: true,
  },
  {
    label: "Refund and Cancellation Policy",
    href: "/refund-and-cancellation-policy",
    isActive: false,
  },
];

const privacySections = [
  {
    title: "Information We Collect",
    content:
      "We may collect personal information such as your name, email address, mailing address, phone number, and payment information when you register for our services, make a purchase, or contact us. We may also collect non-personal information, such as your IP address, browser type, and operating system, for analytical purposes.",
  },
  {
    title: "Use of Information",
    content:
      "We use the information we collect to provide and improve our services, process transactions, communicate with you about your account, and send you promotional materials or updates about our services. We may also use the information for statistical purposes to analyze website usage and trends.",
  },
  {
    title: "Data Sharing",
    content:
      "We do not sell, trade, or rent your personal information to third parties. However, we may share your information with trusted third-party service providers who assist us in operating our website, conducting business, or servicing you, as long as those parties agree to keep this information confidential.",
  },
  {
    title: "Data Security",
    content:
      "We implement reasonable security measures to protect your personal information from unauthorized access, use, or disclosure. However, no data transmission over the Internet or data storage system can be guaranteed to be 100% secure.",
  },
  {
    title: "Cookies and Tracking Technologies",
    content:
      "We may use cookies and similar tracking technologies to enhance your experience on our website and to gather information about how visitors interact with our site. You can control the use of cookies through your browser settings",
  },
  {
    title: "Third Party Links",
    content:
      "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites.",
  },
  {
    title: "Children's Privacy",
    content:
      "Our website and services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13.",
  },
  {
    title: "Changes to this Privacy Policy",
    content:
      "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We encourage you to review this policy periodically for any updates.",
  },
];

export const MainContentSection = (): JSX.Element => {
  return (
    <main className="flex flex-col w-[1440px] items-center justify-center gap-2 p-20 relative flex-[0_0_auto] -mt-1 bg-white">
      <div className="flex items-start justify-center gap-20 relative self-stretch w-full flex-[0_0_auto]">
        <nav
          className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]"
          role="navigation"
          aria-label="Legal navigation"
        >
          <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-[#232825] text-[22px] tracking-[-0.16px] leading-[normal]">
            Legal
          </h2>

          <ul className="flex flex-col items-end gap-2 relative self-stretch w-full flex-[0_0_auto]">
            {navigationItems.map((item, index) => (
              <li key={index} className="relative self-stretch w-full">
                {item.isActive ? (
                  <span
                    className="self-stretch font-medium text-lg tracking-[-0.16px] leading-6 relative [font-family:'Manrope',Helvetica] text-[#232825] block"
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    className="relative self-stretch mt-[-1.00px] [font-family:'Manrope',Helvetica] font-normal text-[#69727c] text-lg tracking-[-0.16px] leading-6 block hover:text-[#232825] transition-colors"
                    to={item.href}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <article className="flex flex-col w-[800px] items-start gap-6 relative">
          <header className="inline-flex flex-col items-center gap-3 relative flex-[0_0_auto]">
            <h1 className="w-fit mt-[-1.00px] [text-shadow:0px_2px_4px_#de2a4a0d] font-semibold text-[54px] tracking-[-0.90px] leading-[60px] whitespace-nowrap relative [font-family:'Manrope',Helvetica] text-[#232825]">
              Privacy Policy
            </h1>
          </header>

          <p className="relative self-stretch [font-family:'Manrope',Helvetica] font-normal text-[#444a46] text-[22px] tracking-[-0.30px] leading-[normal]">
            At ProGrowth Services, we are committed to protecting the privacy of
            our website visitors and customers. This Privacy Policy outlines how
            we collect, use, and safeguard the information you provide to us
            through our website and services.
          </p>

          {privacySections.map((section, index) => (
            <section
              key={index}
              className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]"
            >
              <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-[#232825] text-[22px] tracking-[-0.16px] leading-[normal]">
                {section.title}
              </h2>

              <p className="relative self-stretch [font-family:'Manrope',Helvetica] font-normal text-[#69727c] text-lg tracking-[-0.16px] leading-6">
                {section.content}
              </p>
            </section>
          ))}

          <section className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
            <h2 className="self-stretch font-semibold text-[#232825] text-[22px] tracking-[-0.16px] leading-[normal] relative mt-[-1.00px] [font-family:'Manrope',Helvetica]">
              Contact Us
            </h2>

            <p className="relative self-stretch [font-family:'Manrope',Helvetica] font-normal text-transparent text-lg tracking-[-0.16px] leading-6">
              <span className="text-[#69727c] tracking-[-0.03px]">
                If you have any questions or concerns about this Privacy Policy
                or our data handling practices, please contact us at{" "}
              </span>

              <a
                href="mailto:contact@progrowth.services"
                rel="noopener noreferrer"
                target="_blank"
                className="text-[#232825] tracking-[-0.03px] underline hover:no-underline transition-all focus:outline-2 focus:outline-[#232825] focus:outline-offset-2"
              >
                contact@progrowth.services
              </a>

              <span className="text-[#69727c] tracking-[-0.03px]">
                {" "}
                by using our website and services, you consent to the
                collection, use, and disclosure of your information as described
                in this Privacy Policy.
              </span>
            </p>
          </section>
        </article>
      </div>
    </main>
  );
};
