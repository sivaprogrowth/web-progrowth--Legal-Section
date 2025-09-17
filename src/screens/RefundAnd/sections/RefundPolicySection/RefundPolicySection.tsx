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
    href: "/privacy-policy",
    isActive: false,
  },
  {
    label: "Refund and Cancellation Policy",
    href: "#",
    isActive: true,
  },
];

const policyContent = {
  title: "Refund and Cancellation Policy",
  sections: [
    {
      heading: "Refunds",
      content: [
        {
          type: "text",
          text: "We offer a 7-day money-back guarantee on all our services. If you are not satisfied with our services for any reason, you can request a full refund within 7 days of your purchase. To request a refund, please contact our support team at ",
        },
        {
          type: "link",
          text: "contact@progrowth.services",
          href: "mailto:contact@progrowth.services",
        },
        {
          type: "text",
          text: " with your order details and reason for the refund request.",
        },
        {
          type: "break",
        },
        {
          type: "break",
        },
        {
          type: "text",
          text: "Once your refund request is approved, we will initiate the refund process, and the amount will be credited back to your original payment method within 5-7 business days.Please note that the refund processing time may vary depending on the payment method used and the involvement of third-party financial institutions.",
        },
        {
          type: "break",
        },
        {
          type: "break",
        },
        {
          type: "text",
          text: "However, we strive to process all valid refund requests as quickly as possible, and you can expect the funds to reflect in your account within the stated timeframe.If you have any further questions or concerns, please feel free to reach out to our support team, and we'll be happy to assist you.",
        },
      ],
    },
    {
      heading: "Cancellations",
      content: [
        {
          type: "text",
          text: "You may cancel your subscription or service at any time. If you cancel, you will have access to the service until the end of your current billing cycle, after which your subscription will not be renewed. We do not provide partial refunds for cancelled subscriptions or services.",
        },
        {
          type: "break",
        },
        {
          type: "break",
        },
        {
          type: "text",
          text: "To cancel your subscription or service, please log into your account on our Website and follow the cancellation instructions, or contact our support team at ",
        },
        {
          type: "link",
          text: "contact@progrowth.services",
          href: "mailto:contact@progrowth.services",
        },
        {
          type: "text",
          text: ". ",
        },
        {
          type: "break",
        },
        {
          type: "break",
        },
        {
          type: "text",
          text: "Refunds and cancellations are subject to our sole discretion and may be denied in cases of suspected abuse or violation of our Terms of Service.By using our Website and services, you agree to these Terms of Service, including our Refund and Cancellation Policy.",
        },
      ],
    },
  ],
};

export const RefundPolicySection = (): JSX.Element => {
  const renderContent = (content: any[]) => {
    return content.map((item, index) => {
      switch (item.type) {
        case "text":
          return (
            <span key={index} className="text-[#69727c] tracking-[-0.03px]">
              {item.text}
            </span>
          );
        case "link":
          return (
            <a
              key={index}
              href={item.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="text-[#232825] tracking-[-0.03px] underline">
                {item.text}
              </span>
            </a>
          );
        case "break":
          return <br key={index} />;
        default:
          return null;
      }
    });
  };

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

          <ul className="flex flex-col items-end gap-2 relative self-stretch w-full flex-[0_0_auto]">
            {navigationItems.map((item, index) => (
              <li key={index} className="relative self-stretch w-full">
                {item.isActive ? (
                  <span className="font-medium text-lg tracking-[-0.16px] leading-6 relative w-fit [font-family:'Manrope',Helvetica] text-[#232825] whitespace-nowrap block">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    className={`relative self-stretch ${index === 0 ? "mt-[-1.00px]" : ""} [font-family:'Manrope',Helvetica] font-normal text-[#69727c] text-lg tracking-[-0.16px] leading-6 block`}
                    to={item.href}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <main className="flex flex-col w-[800px] items-start gap-6 relative">
          <header className="inline-flex flex-col items-center gap-3 relative flex-[0_0_auto]">
            <h1 className="mt-[-1.00px] [text-shadow:0px_2px_4px_#de2a4a0d] font-semibold text-[54px] tracking-[-0.90px] leading-[60px] relative w-fit [font-family:'Manrope',Helvetica] text-[#232825] whitespace-nowrap">
              {policyContent.title}
            </h1>
          </header>

          {policyContent.sections.map((section, sectionIndex) => (
            <section
              key={sectionIndex}
              className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]"
            >
              <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-[#232825] text-[22px] tracking-[-0.16px] leading-[normal]">
                {section.heading}
              </h2>

              <p className="relative self-stretch [font-family:'Manrope',Helvetica] font-normal text-transparent text-lg tracking-[-0.16px] leading-[normal]">
                {renderContent(section.content)}
              </p>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
};
