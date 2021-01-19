import React from "react";

import {
  EuiHeader,
  EuiHeaderLogo,
  EuiHeaderSection,
  EuiHeaderSectionItem,
} from "@elastic/eui";

import HeaderUserMenu from "components/HeaderUserMenu";

export default function Header() {
  const renderLogo = () => (
    <EuiHeaderLogo
      iconType="logoElastic"
      href="#"
      onClick={(e) => e.preventDefault()}
      aria-label="Go to homepage"
    />
  );

  return (
    <EuiHeader position="fixed" theme="dark" style={{ position: "sticky" }}>
      <EuiHeaderSection grow={false}>
        <EuiHeaderSectionItem border="right">
          {renderLogo()}
        </EuiHeaderSectionItem>
      </EuiHeaderSection>

      <EuiHeaderSection side="right">
        <EuiHeaderSectionItem>
          <HeaderUserMenu />
        </EuiHeaderSectionItem>
      </EuiHeaderSection>
    </EuiHeader>
  );
}
