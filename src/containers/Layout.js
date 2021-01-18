import React from "react";

import { EuiPage, EuiPageBody } from "@elastic/eui";

import Header from "./Header";
import Content from "./Content";

import "./layout.css";

export default function Layout() {
  return (
    <EuiPage className="layout__page">
      <Header />
      <EuiPageBody component="div">
        <Content />
      </EuiPageBody>
    </EuiPage>
  );
}
