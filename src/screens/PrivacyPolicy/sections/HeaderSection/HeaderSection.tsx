import React from "react";

export const HeaderSection = (): JSX.Element => {
  const navigationItems = [
    { label: "Home", hasDropdown: false },
    { label: "About", hasDropdown: false },
    { label: "Services", hasDropdown: true },
    { label: "Hire Assistants", hasDropdown: false },
    { label: "Video Services", hasDropdown: false },
    { label: "Blog", hasDropdown: false },
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
            <a
              href="#"
              className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-normal text-[#444a46] text-base text-center tracking-[0] leading-[22px] whitespace-nowrap hover:text-[#232825] transition-colors duration-200"
              aria-expanded={item.hasDropdown ? "false" : undefined}
              aria-haspopup={item.hasDropdown ? "true" : undefined}
            >
              {item.label}
            </a>
            {item.hasDropdown && (
              <img
                className="relative w-[15px] h-[15px]"
                alt="Dropdown arrow"
                src="https://c.animaapp.com/TRpfoBaJ/img/line-rounded-chevron-down-2.svg"
              />
            )}
          </div>
        ))}
      </nav>

      <button
        className="all-[unset] box-border inline-flex items-center gap-[30px] px-6 py-2.5 relative flex-[0_0_auto] mt-[-5.50px] mb-[-5.50px] bg-[#c5f34b] rounded-[50px] overflow-hidden hover:bg-[#b8e642] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#c5f34b] focus:ring-offset-2"
        type="button"
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
