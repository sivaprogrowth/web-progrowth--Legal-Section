import React from "react";

export const FooterSection = (): JSX.Element => {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About us", href: "/about" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Refund & Cancellation Policy", href: "/refund" },
  ];

  const services = [
    { label: "Fractional CMO", href: "/fractional-cmo" },
    { label: "AI Assisted Services", href: "/ai-services" },
  ];

  const offices = [
    {
      title: "US Office",
      address: "1710 Keller Parkway, #9876, Keller, Tx76248 ,United States,",
      phone: "+1 (737) 208-1549",
    },
    {
      title: "Indian Office",
      address: "A-Block, AKR Tech Park,\nBengaluru, Karnataka 560068, India",
      phone: null,
    },
  ];

  return (
    <footer className="flex flex-col w-[1440px] items-start gap-2.5 pt-[60px] pb-10 px-20 relative flex-[0_0_auto] -mt-1 bg-[#131313]">
      <div className="flex flex-col items-center justify-center gap-[100px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex flex-col items-start gap-10 relative flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
              <img
                className="relative w-[203px] h-8 aspect-[6.33]"
                alt="Progrowth Logo"
                src="https://c.animaapp.com/TRpfoBaJ/img/vector-2.svg"
              />

              <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
                <p className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-normal text-white text-[15px] tracking-[0] leading-[normal]">
                  Progrowth Marketing Services Private Limited
                </p>
              </div>
            </div>

            <button
              className="all-[unset] box-border inline-flex items-center gap-[30px] pl-[26px] pr-3 pt-[9px] pb-[11px] relative flex-[0_0_auto] bg-[#ffffff1a] rounded-[50px] overflow-hidden hover:bg-[#ffffff26] transition-colors cursor-pointer"
              aria-label="Contact us"
            >
              <div className="inline-flex flex-col items-center justify-center relative flex-[0_0_auto] z-[1]">
                <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                  <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                    <div className="w-fit font-medium text-white text-base tracking-[0] leading-[20.8px] whitespace-nowrap relative mt-[-1.00px] [font-family:'Manrope',Helvetica]">
                      Contact us
                    </div>
                  </div>
                </div>
              </div>

              <img
                className="relative w-10 mb-[-1.00px] z-0"
                alt="Arrow"
                src="https://c.animaapp.com/TRpfoBaJ/img/arrow.svg"
              />
            </button>
          </div>

          <nav
            className="flex flex-col w-[158px] items-start gap-6 relative"
            aria-label="Quick links"
          >
            <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-white text-2xl tracking-[0] leading-[normal]">
              Quick links
            </h3>

            <ul className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className={`${index === 0 ? "self-stretch mt-[-1.00px]" : index === 2 ? "w-fit mr-[-4.00px]" : "self-stretch"} font-normal text-lg relative [font-family:'Manrope',Helvetica] text-white tracking-[0] leading-[normal] hover:text-gray-300 transition-colors`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav
            className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]"
            aria-label="Services"
          >
            <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-white text-2xl tracking-[0] leading-[normal]">
              Services
            </h3>

            <ul className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="w-fit font-normal text-lg relative [font-family:'Manrope',Helvetica] text-white tracking-[0] leading-[normal] hover:text-gray-300 transition-colors"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col w-[300px] items-start gap-6 relative">
            <h3 className="w-fit mt-[-1.00px] font-medium text-2xl relative [font-family:'Manrope',Helvetica] text-white tracking-[0] leading-[normal]">
              Our Presence
            </h3>

            <div className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto]">
              {offices.map((office, index) => (
                <address
                  key={index}
                  className="flex flex-col w-[300px] items-start gap-2 relative flex-[0_0_auto] not-italic"
                >
                  <h4 className="relative self-stretch mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-white text-lg tracking-[0] leading-[normal]">
                    {office.title}
                  </h4>

                  <div className="flex items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                    <img
                      className="relative w-5 h-5 aspect-[1] flex-shrink-0"
                      alt="Location"
                      src="https://c.animaapp.com/TRpfoBaJ/img/distance-1@2x.png"
                    />

                    <p className="relative w-[272px] mt-[-1.00px] [font-family:'Manrope',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal]">
                      {office.address.split("\n").map((line, lineIndex) => (
                        <React.Fragment key={lineIndex}>
                          {line}
                          {lineIndex <
                            office.address.split("\n").length - 1 && <br />}
                        </React.Fragment>
                      ))}
                      {office.phone && (
                        <>
                          <br />
                          <a
                            href={`tel:${office.phone}`}
                            className="hover:text-gray-300 transition-colors"
                          >
                            {office.phone}
                          </a>
                        </>
                      )}
                    </p>
                  </div>
                </address>
              ))}

              <a
                href="https://linkedin.com/company/progrowth"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our LinkedIn page"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  className="relative w-6 h-6"
                  alt="LinkedIn"
                  src="https://c.animaapp.com/TRpfoBaJ/img/linkedin-icon-1.svg"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="relative w-[1222px] h-[57px]">
          <hr
            className="absolute w-[1220px] h-px top-0 left-0 border-0 bg-gray-600"
            aria-hidden="true"
          />

          <p className="absolute top-8 left-[406px] [font-family:'Manrope',Helvetica] font-normal text-white text-lg text-center tracking-[0] leading-[normal]">
            Copyright © 2025 Progrowth | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
