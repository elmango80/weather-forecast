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
  EuiTitle,
} from "@elastic/eui";

import logo from "logo.png";

import HeaderUserMenu from "components/HeaderUserMenu";

export default function Header() {
  const { displayName } = useSelector((state) => state.auth);

  return (
    <EuiHeader position="fixed" className="header">
      <EuiHeaderSection>
        <EuiHeaderSectionItem border="none">
          <Link to="/">
            <EuiIcon type={logo} size="xxl" className="euiHeaderLogo__icon" />
          </Link>
        </EuiHeaderSectionItem>
        <EuiHideFor sizes={["xs", "s"]}>
          <EuiHeaderSectionItem border="none" style={{ marginLeft: ".5rem" }}>
            <EuiTitle>
              <span>Pronostico meteorológico en España</span>
            </EuiTitle>
          </EuiHeaderSectionItem>
        </EuiHideFor>
      </EuiHeaderSection>

      <EuiHeaderSection side="right">
        <EuiHideFor sizes={["xs", "s"]}>
          <EuiHeaderSectionItem border="none" style={{ marginRight: ".5rem" }}>
            <EuiText size="s">{`Hola, ${displayName}`}</EuiText>
          </EuiHeaderSectionItem>
        </EuiHideFor>
        <EuiHeaderSectionItem border="none">
          <HeaderUserMenu />
        </EuiHeaderSectionItem>
      </EuiHeaderSection>
    </EuiHeader>
  );
}
