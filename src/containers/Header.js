import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  EuiHeader,
  EuiHeaderSection,
  EuiHeaderSectionItem,
  EuiHideFor,
  EuiIcon,
  EuiText,
} from "@elastic/eui";

import logo from "logo.svg";

import HeaderUserMenu from "components/HeaderUserMenu";

export default function Header() {
  const { displayName } = useSelector((state) => state.auth);

  return (
    <EuiHeader position="fixed" className="header">
      <EuiHeaderSection>
        <EuiHeaderSectionItem border="none">
          <Link to="/">
            <EuiIcon type={logo} size="xl" className="euiHeaderLogo__icon" />
          </Link>
        </EuiHeaderSectionItem>
      </EuiHeaderSection>

      <EuiHeaderSection side="right">
        <EuiHideFor sizes={["xs", "s"]}>
          <EuiHeaderSectionItem border="none">
            <EuiText size="s">Hola, {displayName}</EuiText>
          </EuiHeaderSectionItem>
        </EuiHideFor>
        <EuiHeaderSectionItem border="none">
          <HeaderUserMenu />
        </EuiHeaderSectionItem>
      </EuiHeaderSection>
    </EuiHeader>
  );
}
