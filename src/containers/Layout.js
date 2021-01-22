import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getMunicipalities } from "redux/actions/municipality";

import { EuiPage, EuiPageBody } from "@elastic/eui";
import Header from "./Header";
import Content from "./Content";
import LoadingOverlay from "components/LoadingOverlay";

import "./layout.css";

export default function Layout() {
  const dispatch = useDispatch();
  const { uid } = useSelector((state) => state.auth);
  const { municipalities } = useSelector((state) => state.municipality);
  const { loading } = useSelector((state) => state.ui);

  useEffect(() => {
    if (!municipalities) {
      dispatch(getMunicipalities());
    }
  }, [dispatch, municipalities, uid]);

  // return () => {
  //   cleanup
  // }

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
