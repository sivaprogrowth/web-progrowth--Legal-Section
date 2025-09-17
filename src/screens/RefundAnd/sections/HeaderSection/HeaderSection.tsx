import React, { useState } from "react";

export const HeaderSection = (): JSX.Element => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navigationItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    {
      label: "Services",
      href: "#services",
      hasDropdown: true,
      dropdownItems: [
        { label: "Web Development", href: "#web-dev" },
        { label: "Mobile Apps", href: "#mobile" },
        { label: "Consulting", href: "#consulting" },
      ],
    },
    { label: "Hire Assistants", href: "#hire-assistants" },
    { label: "Video Services", href: "#video-services" },
    { label: "Blog", href: "#blog" },
  ];

  return (
    <header className="flex w-[1440px] h-[78px] items-center justify-between px-[120px] py-6 relative bg-white border-b [border-bottom-style:solid] border">
      <img
        className="relative w-[182px] h-8 mt-[-1.00px] mb-[-1.00px] object-cover"
        alt="Progrowth Logo"
        src="https://c.animaapp.com/TRpfoBaJ/img/image-3-2@2x.png"
      />

      <nav
        className="inline-flex items-center gap-6 relative flex-[0_0_auto]"
        role="navigation"
        aria-label="Main navigation"
      >
        {navigationItems.map((item, index) => (
          <div
            key={index}
            className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]"
          >
            {item.hasDropdown ? (
              <div className="relative">
                <button
                  className="inline-flex items-center gap-1.5 relative flex-[0_0_auto] cursor-pointer"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setIsServicesOpen(!isServicesOpen);
                    }
                  }}
                  aria-expanded={isServicesOpen}
                  aria-haspopup="true"
                  aria-label="Services menu"
                >
                  <span className="relative w-fit [font-family:'Manrope',Helvetica] font-normal text-[#444a46] text-base text-center tracking-[0] leading-[22px] whitespace-nowrap">
                    {item.label}
                  </span>
                  <img
                    className={`relative w-[15px] h-[15px] transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                    alt="Dropdown arrow"
                    src="https://c.animaapp.com/TRpfoBaJ/img/line-rounded-chevron-down-2.svg"
                  />
                </button>
                {isServicesOpen && item.dropdownItems && (
                  <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg z-10 min-w-[160px]">
                    {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                      <a
                        key={dropdownIndex}
                        href={dropdownItem.href}
                        className="block px-4 py-2 text-sm text-[#444a46] hover:bg-gray-50 [font-family:'Manrope',Helvetica] font-normal"
                      >
                        {dropdownItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                href={item.href}
                className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-normal text-[#444a46] text-base text-center tracking-[0] leading-[22px] whitespace-nowrap hover:text-[#232825] transition-colors duration-200"
              >
                {item.label}
              </a>
            )}
          </div>
        ))}
      </nav>

      <button
        className="all-[unset] box-border inline-flex items-center gap-[30px] px-6 py-2.5 relative flex-[0_0_auto] mt-[-5.50px] mb-[-5.50px] bg-[#c5f34b] rounded-[50px] overflow-hidden hover:bg-[#b8e642] active:bg-[#a8d63a] transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#c5f34b] focus:ring-offset-2"
        aria-label="Contact us"
      >
        <div className="inline-flex flex-col items-center justify-center relative flex-[0_0_auto]">
          <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-[#232825] text-sm tracking-[0] leading-[20.8px] whitespace-nowrap">
                Contact us
              </div>
            </div>
          </div>
        </div>
      </button>
    </header>
  );
};
