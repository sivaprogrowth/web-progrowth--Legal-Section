import React from "react";
import { Link } from "react-router-dom";

const termsData = [
  {
    title: "Eligibility",
    content:
      "Our Services are intended solely for use by businesses. By using our Services, you represent that you are 18 years or older and have the authority to bind your company to these Terms.",
  },
  {
    title: "Account Registration",
    content:
      "To access certain Services, you may be required to create an account. You are responsible for all activities that occur under your account and must keep your account credentials confidential. You agree to provide accurate and up-to-date registration information.",
  },
  {
    title: "Use of Services",
    content:
      "You agree to use our Services only for lawful purposes and in accordance with these Terms. You may not:\n•Engage in any illegal, abusive, or unauthorized activities\n•Transmit viruses, malware, or other malicious code\n•Interfere with or disrupt our Services\n•Attempt to gain unauthorized access to our systems or networks.",
  },
  {
    title: "Intellectual Property",
    content:
      "All content and materials on our Website and Services, including but not limited to text, graphics, logos, images, and software, are the property of ProGrowth Services and are protected by intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our express written consent.",
  },
  {
    title: "Third Party Services",
    content:
      "Our Services may integrate or link to third-party websites, services, or products. We are not responsible for the availability, content, or practices of such third parties.",
  },
  {
    title: "Fees and Payment",
    content:
      "Certain Services may be subject to fees, which will be clearly disclosed prior to your purchase. You agree to pay all applicable fees in a timely manner. We reserve the right to modify our pricing at any time.",
  },
  {
    title: "Refund and Cancellation Policy",
    content:
      "We offer a 7-day money-back guarantee on all our Services. If you are not satisfied, you can request a full refund within 7 days of your purchase by contacting contact@progrowth.services.You may cancel your subscription or Service at any time. If you cancel, you will have access until the end of your current billing cycle, after which your subscription will not be renewed. We do not provide partial refunds for cancelled subscriptions or Services.Refunds and cancellations are subject to our sole discretion and may be denied in cases of suspected abuse or violation of these Terms.",
  },
  {
    title: "Disclaimer of Warranties",
    content:
      'Our Services are provided "as is" and "as available" without any representations or warranties, express or implied. We do not warrant that our Services will be constantly available, error-free, or meet your requirements.',
  },
  {
    title: "Limitation of Liability",
    content:
      "We shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of our Services or any third-party services.",
  },
  {
    title: "Governing Law and Jurisdiction",
    content:
      "These Terms and your use of our Services shall be governed by the laws of India. Any dispute shall be subject to the exclusive jurisdiction of the courts in Bangalore, India.",
  },
  {
    title: "Changes to These Terms",
    content:
      "We reserve the right to modify these Terms at any time. Your continued use of our Services following any changes constitutes your acceptance of those changes.",
  },
];

const navigationLinks = [
  { text: "Terms & Conditions", to: "#", active: true },
  { text: "Privacy Policy", to: "/privacy-policy", active: false },
  {
    text: "Refund and Cancellation Policy",
    to: "/refund-and-cancellation-policy",
    active: false,
  },
];

export const TermsAndConditionsSection = (): JSX.Element => {
  return (
    <div className="flex flex-col w-[1440px] items-center justify-center gap-2 p-20 relative flex-[0_0_auto] -mt-1 bg-white">
      <div className="flex items-start justify-center gap-20 relative self-stretch w-full flex-[0_0_auto]">
        <nav
          className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]"
          role="navigation"
          aria-label="Legal navigation"
        >
          <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-[#232825] text-[22px] tracking-[-0.16px] leading-[normal]">
            Legal
          </h2>

          <div className="flex flex-col items-end gap-2 relative self-stretch w-full flex-[0_0_auto]">
            {navigationLinks.map((link, index) => (
              <div key={index} className="relative self-stretch">
                {link.active ? (
                  <span className="relative self-stretch mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-[#232825] text-lg tracking-[-0.16px] leading-6 block">
                    {link.text}
                  </span>
                ) : (
                  <Link
                    className={`relative ${index === 2 ? "w-fit whitespace-nowrap" : "self-stretch"} [font-family:'Manrope',Helvetica] font-normal text-[#69727c] text-lg tracking-[-0.16px] leading-6 block hover:text-[#232825] transition-colors`}
                    to={link.to}
                  >
                    {link.text}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </nav>

        <main className="flex flex-col w-[800px] items-start gap-6 relative">
          <header className="inline-flex flex-col items-center gap-3 relative flex-[0_0_auto]">
            <h1 className="relative w-fit mt-[-1.00px] [text-shadow:0px_2px_4px_#de2a4a0d] [font-family:'Manrope',Helvetica] font-semibold text-[#232825] text-[54px] tracking-[-0.90px] leading-[60px] whitespace-nowrap">
              Terms and Conditions
            </h1>
          </header>

          <p className="relative self-stretch [font-family:'Manrope',Helvetica] font-normal text-[#444a46] text-[22px] tracking-[-0.30px] leading-[normal]">
            <span className="tracking-[-0.07px]">
              Welcome to ProGrowth Services! We are a B2B marketing agency
              specializing in lead generation, content marketing, and digital
              advertising for technology companies. These Terms of Service
              ("Terms") govern your access to and use of our website (
            </span>

            <a
              href="https://www.progrowth.services/"
              rel="noopener noreferrer"
              target="_blank"
              className="hover:text-[#232825] transition-colors"
            >
              <span className="tracking-[-0.07px] underline">
                www.progrowth.services
              </span>
            </a>

            <span className="tracking-[-0.07px]">
              ), products, and services ("Services").
            </span>
          </p>

          {termsData.map((section, index) => (
            <section
              key={index}
              className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]"
            >
              <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-[#232825] text-[22px] tracking-[-0.16px] leading-[normal]">
                {section.title}
              </h3>

              <p className="relative self-stretch [font-family:'Manrope',Helvetica] font-normal text-[#69727c] text-lg tracking-[-0.16px] leading-6 whitespace-pre-line">
                {section.content}
              </p>
            </section>
          ))}

          <section className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
            <h3 className="self-stretch font-semibold text-[#232825] text-[22px] tracking-[-0.16px] leading-[normal] relative mt-[-1.00px] [font-family:'Manrope',Helvetica]">
              Contact Us
            </h3>

            <p className="relative self-stretch [font-family:'Manrope',Helvetica] font-normal text-transparent text-lg tracking-[-0.16px] leading-6">
              <span className="text-[#69727c] tracking-[-0.03px]">
                If you have any questions about these Terms or our Services,
                please contact us at{" "}
              </span>

              <a
                href="mailto:contact@progrowth.services"
                rel="noopener noreferrer"
                target="_blank"
                className="hover:text-[#444a46] transition-colors"
              >
                <span className="text-[#232825] tracking-[-0.03px] underline">
                  contact@progrowth.services
                </span>
              </a>

              <span className="text-[#69727c] tracking-[-0.03px]">.</span>
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};
