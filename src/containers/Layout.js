import React from "react";

import { EuiPage, EuiPageBody } from "@elastic/eui";

import Header from "./Header";
import Content from "./Content";

import "./layout.css";

export default function Layout() {
  return (
    <EuiPage style={{ marginTop: "3rem" }}>
      <Header />
      <EuiPageBody component="div">
        <Content />
      </EuiPageBody>
    </EuiPage>
  );
}
