import React from "react";
import { CancellationPolicySection } from "./sections/CancellationPolicySection/CancellationPolicySection";
import { HeaderSection } from "./sections/HeaderSection";
import { RefundPolicySection } from "./sections/RefundPolicySection";

export const RefundAnd = (): JSX.Element => {
  return (
    <main
      className="flex flex-col items-start relative"
      data-model-id="2405:1626"
    >
      <HeaderSection />
      <RefundPolicySection />
      <CancellationPolicySection />
    </main>
  );
};
