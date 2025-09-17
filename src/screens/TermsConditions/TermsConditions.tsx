import React from "react";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { TermsAndConditionsSection } from "./sections/TermsAndConditionsSection/TermsAndConditionsSection";

export const TermsConditions = (): JSX.Element => {
  return (
    <div
      className="flex flex-col items-start relative"
      data-model-id="2404:819"
    >
      <HeaderSection />
      <TermsAndConditionsSection />
      <FooterSection />
    </div>
  );
};
