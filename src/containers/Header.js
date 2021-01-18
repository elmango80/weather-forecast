import React from "react";
import { Link } from "react-router-dom";
import logo from "logo.svg";

import {
  EuiHeader,
  EuiHeaderSection,
  EuiHeaderSectionItem,
  EuiHideFor,
  EuiIcon,
} from "@elastic/eui";

import MenuUser from "components/MenuUser";

export default function Header() {
  return (
    <EuiHeader position="fixed" theme="dark">
      <EuiHeaderSection grow={false}>
        <EuiHeaderSectionItem border="right">
          <Link to="/" className="euiHeaderLogo">
            <EuiIcon type={logo} size="xl" className="euiHeaderLogo__icon" />
            <span className="euiHeaderLogo__text">
              Weather App
              <EuiHideFor sizes={["xs"]}>
                <span style={{ marginLeft: ".5rem" }}>
                  with <code>Elastic UI framework</code>
                </span>
              </EuiHideFor>
            </span>
          </Link>
        </EuiHeaderSectionItem>
      </EuiHeaderSection>
      <EuiHeaderSection side="right">
        <EuiHeaderSectionItem>
          <MenuUser />
        </EuiHeaderSectionItem>
      </EuiHeaderSection>
    </EuiHeader>
  );
}
