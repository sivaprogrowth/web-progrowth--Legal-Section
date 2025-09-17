import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TermsConditions } from "./screens/TermsConditions";
import { PrivacyPolicy } from "./screens/PrivacyPolicy";
import { RefundAnd } from "./screens/RefundAnd";

export const App = (): JSX.Element => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<TermsConditions />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/terms-u38-conditions" element={<TermsConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund-and-cancellation-policy" element={<RefundAnd />} />
        </Routes>
      </div>
    </Router>
  );
};
