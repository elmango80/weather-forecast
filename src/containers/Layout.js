import React from "react";
import { useSelector } from "react-redux";

import { EuiPage, EuiPageBody } from "@elastic/eui";
import Header from "./Header";
import Content from "./Content";
import LoadingOverlay from "components/LoadingOverlay";

import "./layout.css";

export default function Layout() {
  const { loading } = useSelector((state) => state.ui);

  return (
    <>
      <Header />
      <EuiPage className="page page--with-header" restrictWidth>
        <EuiPageBody>
          <Content />
          {loading && <LoadingOverlay />}
        </EuiPageBody>
      </EuiPage>
    </>
  );
}
